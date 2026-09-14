# Tomo asset prompts

Built-in imagegen used. Pose A master has real alpha. Other files have green chromakey RGB approximately (20,240,25), not exact #00FF00. Same canvas dimensions in each master/base pair, but generative edits can subtly change pixels, so parent should composite unaffected original regions back for exact registration.

## Standing geometric master

Use case: style-transfer. Create ONE full-body faceless geometric low-poly illustration of Tomo Ebizuka, using the reference standing character's exact pose and clothes. A modest fully clothed teenager with gray wavy bob, burgundy bow headband, black dress with white collar/placket/belt and burgundy ruffled hem, black opaque stockings and black shoes. Pose: standing, ankles gently crossed, arms relaxed down, viewer-left hand slightly extended. Face is a totally blank peach polygon surface: NO eyes, mouth, nose, eyebrows or facial marks. Style: crisp large flat triangular polygon facets, angular silhouette, hard edged vector-like low-poly geometry, no painterly texture. Full head hair feet hands all visible, generous 12 percent empty margin on every side. Output genuinely transparent alpha background, no checkerboard, shadows, text or objects. If genuine transparency impossible, use completely uniform bright #00FF00 background with no green anywhere on the character. Preserve reference proportions and outfit. Single portrait canvas.

## Seated geometric master

Use case: style-transfer. ONE full-body faceless geometric low-poly illustration of Tomo Ebizuka based on this reference. Preserve its seated 3/4 pose viewed slightly from above: right side of image hand touching cheek, other arm reaching toward viewer-left as if playing keys, fingers open, bent knees angled toward left and both feet complete. REMOVE keyboard entirely, remove chair and all background, text, border. Character only. Gray wavy bob and black bow headband; white long-sleeved blouse, dark neck ribbon and sleeve straps; charcoal purple pleated skirt, opaque black stockings, black shoes. Modest fully clothed teenager. Face completely blank peach polygon surface, no eyes mouth nose eyebrows facial marks. Crisp large flat triangular polygon facets, strong angular silhouette, hard edged vector-like geometry, no painterly texture. Keep exact reference hand gestures and clothes. Extend cropped feet as necessary. Entire head, hair, hands, both feet visible with generous 12 percent margin. Genuinely transparent alpha background. If true alpha impossible, completely uniform bright #00FF00 background, no green on subject. No shadows, checkerboard, objects, instruments, text.

## Keyboard

Use case: stylized-concept. Generate ONE isolated red electronic keyboard/synthesizer as independent website prop. Reference image role: perspective and instrument design only. NO PERSON, hands, character, stand, text or border. Keyboard length runs diagonally from lower-left near end to upper-right far end, as in reference, viewed from above at 3/4 angle, white/black keys visible and pale control panel on red casing. Complete instrument including both ends with 12 percent transparent margins all sides. Crisp low-poly flat geometric polygon illustration, matching faceted character art. Genuinely transparent alpha background, no checkerboard, shadows or texture. If genuine alpha impossible use uniform bright #00FF00 background and no green instrument parts.

## Seated correction

Edit target: this exact seated low-poly character. Change ONLY two things: replace every background/checkerboard pixel with perfectly flat solid chroma green RGB(0,255,0), and erase the tiny nose and mouth strokes to make the face entirely blank peach with absolutely NO facial features. Keep ALL character pixels, pose, composition, canvas size, clothes, facets, hair, hands, feet, scale and coordinates unchanged. No checkerboard, no texture, no shadow. Entire background must be uniform #00FF00, no green on character.

## Keyboard correction

Edit target: exact isolated red keyboard. Replace ONLY entire checkerboard background with perfectly flat solid bright chroma green RGB(0,255,0) #00FF00. Preserve keyboard exactly: geometry, perspective, colors, facets, keys, position, size, canvas dimensions, every instrument detail. NO checkerboard, no texture, no shadows. Background completely uniform pure green, no green instrument pixels. One isolated keyboard.

## Standing animation base

Use case: precise-object-edit. Edit exact standing faceless geometric character image as an animation base. Remove ONLY the flared skirt portion below the white belt, including burgundy ruffled hem and lower white placket. Replace that region with modest opaque dark charcoal knee-length tailored shorts covering thighs and reaching knees, continuing the already visible black stocking legs under the clothing; NO underwear or nudity. Keep upper dress bodice and white belt. Preserve the original full canvas pixel dimensions, character scale and placement, blank face, hair, hands, arms, upper torso, crossed leg pose, feet and all visible stocking/shoe pixels EXACTLY. This is an aligned base for placing original skirt over: no reposition, recrop, zoom, or pose adjustment. Retain true transparent alpha background if present; otherwise use uniform bright #00FF00. No facial features, checkerboard or shadows.

## Seated animation base

Use case: precise-object-edit. Edit exact seated faceless geometric character as an animation base. Remove ONLY purple pleated skirt, replace with modest opaque charcoal knee-length tailored shorts covering thighs to knees in the SAME seated position. No underwear or nudity. Fill the formerly skirt-covered legs plausibly, preserving bent knees. Do NOT change hands, arms, blouse, ribbon, straps, head, blank face, hair, existing stocking legs or shoes, character placement, scale, pose, canvas dimensions or coordinates. Absolutely exact image registration: original skirt should overlay this base later, so all unchanged pixels remain precisely positioned. Keep perfectly flat solid bright #00FF00 green background. No checkerboard, shadows, objects or facial features.

