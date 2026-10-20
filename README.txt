Mystery Tracker PWA v3

Deploy: unzip and upload the CONTENTS of this folder to a static HTTPS host (Netlify Drop, Cloudflare Pages, GitHub Pages). Keep all files together.

On mobile: the default view maintains a 1050px-wide board for comfortable taps. Swipe horizontally or use the Locations/Symbols/Objects shortcuts. Fit whole board shows everything but makes targets smaller.

Clue positions: tiles.js, measured against board.jpg at 1536 x 1090.
Progress: browser localStorage; same origin as previous version retains saved marks. Reset asks for confirmation when marks exist.
Offline: service-worker.js caches files after first successful online load. HTTPS required for install and offline service worker.
Test: click tiles in all three sections, resize, test on phone portrait and landscape, reload, go offline, reset.
