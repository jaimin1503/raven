# RAVEN landing page

A cinematic, responsive landing page for RAVEN (RAW Video Engine), built with React, TypeScript, Vite, and Tailwind CSS.

## Content and assets

Product visuals are stored in `public/assets/images` and the RAVEN app icon is in `public/assets/icons`. Replace these files with updated captures using the same filenames, or update the image paths in the page when adding new visuals.

The page intentionally avoids making unsupported claims about universal RAW video support. Device capability, formats, resolutions, and frame rates are described as dependent on the Android hardware.

## Links and release status

The app is in closed testing on Google Play. Early access is self-serve: visitors join the Google Group in `TESTER_GROUP_URL` (`src/App.tsx`), then opt in at `PLAY_OPT_IN_URL` and install. The group must allow anyone to join and must be added under Play Console → Testing → Closed testing → Testers. Instagram: `INSTAGRAM_URL` (@theravenroll). Add the public Google Play URL in the footer and FAQ once the app is public.

## Build

Use the existing Vite scripts to preview changes and create a production build. No backend service or analytics provider is required for this static landing page.
# raven
