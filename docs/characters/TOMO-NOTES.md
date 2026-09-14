# TOMO / 海老塚 智

Sixth entry in the archive. Open /#tomo. Portrait 01 follows the first standing reference and its black dress. Keys 02 follows the seated second reference and its white blouse. The red electronic keyboard is an independent image: no fabric warp or deformation is applied to it. Pose transition uses the existing 1.9-second row warp and crossfade, not a 3D skeletal animation.

Japanese profile is paraphrased from https://girls-band-cry.com/character/tomo/ (official character profile). The requested Pixiv dictionary URL could not be retrieved; no inaccessible wiki content was assumed. Decorative headings are original editorial copy, not character quotations.

Built-in image generation produced the two geometric faceless masters, two same-canvas opaque clothed reconstruction bases, and one standalone keyboard. The poses preserve their own clothing variants. Skirts are isolated from the exact master coordinates, and only their covered pixels are replaced with reconstruction pixels; unchanged master regions remain intact. Chroma backgrounds are removed, and all delivered WebP layers have actual transparency. Each master/base pair is resized with identical aspect-preserving padding to 1024×1536. Keyboard is 1536×1024. No external image dependency or remote font is required.

Final assets: public/characters/tomo/assets/{a,b}-{master,base,skirt}.webp and keyboard.webp. Exact generation prompts are in TOMO-PROMPTS.md. Run `node check-tomo.cjs` to check both poses, the intermediate transition, switching while paused, and reduced-motion behavior.
