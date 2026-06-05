/**
 * ============================================================
 *  OLIVERSE — Customization Configuration
 * ============================================================
 *  Edit everything below to personalize the experience.
 *  - Change login credentials
 *  - Rename planets
 *  - Edit story / memory / message / finale text
 *  - Drop your MP3s into /public/music and update musicLibrary
 *  - Drop cover art into /public/music/covers
 * ============================================================
 */

// 🔐 LOGIN CREDENTIALS — change these to whatever you want
export const CREDENTIALS = {
  username: "oliver",
  password: "stardust",
};

// 💌 The hidden final message revealed by the distant star
export const HIDDEN_MESSAGE = {
  title: "One Last Secret",
  body:
    "Across every galaxy I could imagine, in every universe I could dream of, " +
    "I would still find my way back to you. Happy Birthday, my love. " +
    "You are my favorite constellation. — Forever yours.",
  signature: "✦ Always ✦",
};

// 🎵 Music library — add as many tracks as you like.
// Put MP3s in /public/music/ and covers in /public/music/covers/
export type Track = {
  title: string;
  artist: string;
  cover: string; // path or URL
  audio: string; // path or URL
};

export const musicLibrary: Track[] = [
  // Replace these placeholders with your own files.
  { title: "Drifting Home", artist: "Aurora Skies", cover: "/music/covers/track1.jpg", audio: "/music/track1.mp3" },
  { title: "Cosmic Letter", artist: "Stellar Hearts", cover: "/music/covers/track2.jpg", audio: "/music/track2.mp3" },
  { title: "Stardust Lullaby", artist: "Nebula Choir", cover: "/music/covers/track3.jpg", audio: "/music/track3.mp3" },
  { title: "Gravity of You", artist: "Orbit", cover: "/music/covers/track4.jpg", audio: "/music/track4.mp3" },
];

// 🪐 Planets — edit names, colors, and per-planet content
export type Planet = {
  id: string;
  name: string;          // Visible planet name (editable)
  subtitle: string;      // Section subtitle
  color: string;         // Main color (oklch / hex)
  glow: string;          // Glow color
  ring?: boolean;        // Has rings?
  title: string;         // Page heading
  paragraphs: string[];  // Long-form content (supports multiple paragraphs)
  images?: { src: string; alt: string; caption?: string }[];
  // Which tracks (indexes into musicLibrary) make up this planet's playlist
  playlist: number[];
};

export const planets: Planet[] = [
  {
    id: "lumina",
    name: "Lumina",
    subtitle: "Our Story",
    color: "oklch(0.78 0.18 60)",
    glow: "oklch(0.85 0.2 75)",
    ring: false,
    title: "Where It All Began",
    paragraphs: [
      "Once, on an ordinary day that turned out to be anything but, our orbits crossed for the very first time. I didn't know then that a small, quiet moment would grow into the brightest chapter of my life.",
      "You arrived like sunrise — slow, warm, impossible to ignore. Everything in me leaned toward you, the way planets lean toward their sun. From that day on, every direction I traveled somehow led back to you.",
      "This is the story of us. Of the laughter, the late-night talks, the rainy afternoons, the unrepeatable little inside jokes. Every word here is a love letter folded inside a constellation.",
    ],
    images: [],
    playlist: [0],
  },
  {
    id: "memora",
    name: "Memora",
    subtitle: "Our Memories",
    color: "oklch(0.7 0.18 200)",
    glow: "oklch(0.78 0.18 220)",
    ring: true,
    title: "Moments I Keep Like Stars",
    paragraphs: [
      "The first time you laughed at something silly I said, and I realized I would spend the rest of my life trying to make that sound happen again.",
      "The walks. The songs we played on repeat. The way you held my hand when no words were needed. The small triumphs we celebrated like world events, because to us they were.",
      "I keep these memories like collectible stars — each one warm, each one ours, each one quietly lighting the way forward.",
    ],
    images: [],
    playlist: [1],
  },
  {
    id: "cordia",
    name: "Cordia",
    subtitle: "What I Feel",
    color: "oklch(0.7 0.22 350)",
    glow: "oklch(0.78 0.2 10)",
    ring: false,
    title: "Letters From My Heart",
    paragraphs: [
      "If I could bottle the feeling of you walking into a room, I would carry it through every long day and every dark night. You are my softer place to land.",
      "Loving you taught me that gravity isn't only a force between bodies — it's a feeling. It's the certainty that no matter how far we drift, we always come back to each other.",
      "Thank you for being kind to me, especially on the days I forgot to be kind to myself. Thank you for being patient. Thank you for being you.",
    ],
    images: [],
    playlist: [2],
  },
  {
    id: "finis",
    name: "Finis",
    subtitle: "Happy Birthday",
    color: "oklch(0.72 0.2 300)",
    glow: "oklch(0.82 0.2 320)",
    ring: true,
    title: "Happy Birthday, My Universe",
    paragraphs: [
      "Today the stars rearrange themselves a little — just to spell your name. The whole sky knows: someone wonderful is one orbit older, and the universe is luckier for it.",
      "I hope this year is gentle with you. I hope it's loud where you want it loud, and quiet where you want it quiet. I hope it brings you mornings that taste like coffee and afternoons that feel like sunlight.",
      "And wherever you go, whichever galaxy you wander into next — know that I'm right here. Your home, your co-pilot, your forever.",
      "Now look up. Somewhere out in the distance, a tiny star is waiting for you to find it…",
    ],
    images: [],
    playlist: [3],
  },
];