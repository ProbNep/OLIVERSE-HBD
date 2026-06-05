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
    title: "3/2/26",
    paragraphs: [
      "\n",
      `Back then, my feelings were a complete mess.

You knew.

I knew you knew.

And somehow, despite both of us knowing, we just never talked about it.




Looking back now, it's honestly funny.

I remember getting jealous over the smallest things. At the time I didn't even fully understand why I felt the way I did. I just knew that whenever you were around, my attention somehow ended up on you.

The way you laughed.

The way you talked.

The way you somehow made every day more interesting without even trying.


I remember admiring you long before I properly understood my own feelings.


Then there was the part where you practically rejected me before you even knew I had feelings.

I'm not going to lie.

That hurt back then.

A lot more than I'd ever admit.

But in the end, I proved you wrong.

And honestly, I'm really glad I did.


What I remember most isn't when we got together.

It's the first time you said "I love you."

We were just goofing around, taking screenshots, doing what we always did.

Nothing special.

Nothing dramatic.

Just us.

Then I said it.

"I love you."

And when you said it back, I don't think I can properly explain how it felt.

People say butterflies.

For me, it wasn't butterflies.

It felt like a train hit my stomach at full speed.

Everything just stopped for a moment.

I reread it.

Then reread it again.

And then probably a few more times just to make sure it was actually real.

It's one of those moments that stays with you forever.

You'd think that after hearing it so many times it would eventually lose that feeling.

But somehow it never has.

Even now, every single time you say it, it still makes me smile.

No matter how bad my day is.

No matter how stressed I am.

No matter what's going on.

Hearing those three words from you somehow makes everything feel lighter.


A few days later, on 3/9/26, we officially got together.

And honestly?

It doesn't even feel real sometimes.

We've spent practically every day together since then.

Even before we started dating, we were always around each other.

But after that day, it became us.

Us talking.

Us laughing.

Us staying up too late.

Us sharing our days with each other.

Us building memories together.

As I'm writing this, we've spent approximately 1,456 hours together since getting together.

And that's only counting the time we can actually track.

If we counted every vc we've been in, the number would be much, much higher.

And after all of that, after every conversation, every memory, every laugh, every screenshot, every game, every call, and every moment we've shared...

If I had the chance to go back and do it all over again from the beginning

\n

\n

\n

Without changing a single thing.
I would do it again ten billion times over.

I would do it again ten billion times over.
and i would 10 billion percent fall for you every single time. 

\n

\n

\n

\n

\n`,
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