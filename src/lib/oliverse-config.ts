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
      `It's insane how it's been a year since we met, and whats more crazy is that you sent me a msg exactly a year ago on your birthday.




Back then, neither of us knew what that random Minecraft server would end up meaning to us.




 i was chilling alone, bored so i decided i wanted to play some minecraft, hopped on the minecraft discord and got invited to Synthuism, not expecting much more than another server to play on, owner seemed chill, the community is small but awsome builds, i remember my first base being in a village on a desert, struggled a lot honestly, until we moved into new spawn, got my own area workd my way up into the police force. Then I met you.



Our first encounter wasn't one of those disney romantic moment where we bump into each other with you ''accidently'' dropping your stuff on the ground an allat. It was a horse.


I bought a horse from you and, because I was spending dylan's money and not my own, I paid you more diamonds than I probably should have.

That was it.



A simple trade between two players.

Looking back now, it's funny how something so small ended up becoming the start of everything, the start of my everything.

As time went on, we started hanging out more. I remember helping you with the fight pit , and I remember looking at your gear and wondering how you had managed to survive for so long using an Efficiency III pickaxe and some of the most random armor enchantments I'd ever seen.\n\nSo naturally, I fixed your armor, upgraded your tools, and probably acted like I knew everything.\n\nThen came one of my favorite memories, the casino.\n\nI had this idea and somehow convinced myself it was brilliant. I got the permit, built the machines, and got everything working.\nI knew it. Everyone knew it.\n\nSo I came to you for help.\n\nAnd without hesitation, you said yes.\n\nWhat started as a building project became something much bigger.\n\nI still remember the opening day. The excitement. The people. The laughs. The bar on the top floor. Watching everyone gather together in a place that didn't exist before.\n\nThen I went on vacation.\nbut still you kept me updated, i was at my worst, but seeing how everyone loved something that i built, we built, it actually made me smile and when I came back, I saw all the changes, all the improvements, and all the love the community had poured into the server. well it was kinda the end of the casino, but.\n\nIt brought people together.\n\nAnd in a way, it brought us together too.\n\n\nWhat I love about these memories is that none of them felt important at the time.\n\nIt was just a horse.\n\nJust a fight pit.\n\nJust a pickaxe.\n\nJust a casino.\n\n\nbut somehow, all those little moments added up to something neither of us could have predicted.\n\nA year later, when I look back at Synthuism, I think about you.\n\nBecause out of everything that happened on that server, meeting you was easily the best thing that came from it.`,
      "\n",
      "\n",
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