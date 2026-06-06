// Lightweight Web Audio SFX engine for Oliverse.
// Synthesizes simple UI sounds so no extra audio files are needed.

let ctx: AudioContext | null = null;
function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function tone(opts: {
  freq: number;
  endFreq?: number;
  duration: number;
  type?: OscillatorType;
  gain?: number;
  delay?: number;
}) {
  const c = getCtx();
  if (!c) return;
  const t0 = c.currentTime + (opts.delay ?? 0);
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = opts.type ?? "sine";
  osc.frequency.setValueAtTime(opts.freq, t0);
  if (opts.endFreq) osc.frequency.exponentialRampToValueAtTime(opts.endFreq, t0 + opts.duration);
  const peak = (opts.gain ?? 0.15);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(peak, t0 + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + opts.duration);
  osc.connect(g).connect(c.destination);
  osc.start(t0);
  osc.stop(t0 + opts.duration + 0.05);
}

function noise(duration: number, gain = 0.08) {
  const c = getCtx();
  if (!c) return;
  const buffer = c.createBuffer(1, Math.floor(c.sampleRate * duration), c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  const src = c.createBufferSource();
  src.buffer = buffer;
  const g = c.createGain();
  g.gain.value = gain;
  const filter = c.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 1200;
  src.connect(filter).connect(g).connect(c.destination);
  src.start();
}

export const sfx = {
  click: () => tone({ freq: 600, endFreq: 900, duration: 0.08, type: "triangle", gain: 0.08 }),
  hover: () => tone({ freq: 1200, duration: 0.05, type: "sine", gain: 0.04 }),
  open: () => {
    tone({ freq: 220, endFreq: 660, duration: 0.6, type: "sawtooth", gain: 0.06 });
    tone({ freq: 880, endFreq: 1760, duration: 0.5, type: "sine", gain: 0.05, delay: 0.05 });
  },
  close: () => tone({ freq: 660, endFreq: 220, duration: 0.35, type: "sine", gain: 0.06 }),
  error: () => {
    tone({ freq: 220, duration: 0.12, type: "square", gain: 0.08 });
    tone({ freq: 160, duration: 0.18, type: "square", gain: 0.08, delay: 0.13 });
  },
  launch: () => {
    noise(2.5, 0.12);
    tone({ freq: 80, endFreq: 40, duration: 2.5, type: "sawtooth", gain: 0.1 });
    tone({ freq: 200, endFreq: 60, duration: 1.8, type: "triangle", gain: 0.08, delay: 0.1 });
  },
  chime: () => {
    tone({ freq: 880, duration: 0.6, type: "sine", gain: 0.06 });
    tone({ freq: 1320, duration: 0.6, type: "sine", gain: 0.05, delay: 0.08 });
  },
};