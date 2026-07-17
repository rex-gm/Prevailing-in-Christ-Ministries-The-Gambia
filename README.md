# Prevailing In Christ Ministries — Website

A self-contained starter site: `index.html`, `styles.css`, `script.js`, plus an
`images/` folder with your crest and worship photos already wired in.
No build step — open `index.html` in a browser, or open the folder in VS Code
and use a Live Server extension to preview.

## What's already done

- **Colors** — pulled directly from your crest: shield maroon, sword gold, and
  the navy/green ribbon under the cross (used as a thin tri-color divider
  above the footer and below the hero).
- **Logo** — cropped from your uploaded image and placed in the nav
  (`images/logo.png`, higher-res source at `images/logo-crop.jpg`).
- **Hero photo slideshow** — your 4 uploaded worship photos cross-fade every
  5 seconds in the hero background (`images/worship-1.jpg` through `-4.jpg`).
  Respects reduced-motion settings (shows the first photo only, no rotation).
- **Copy** — "Acts 19:20 — So mightily grew the word of God and prevailed" and
  the Invite / Inform / Involve motto from your banner are built into the
  hero and the three-pillar section.

## Still to fill in

Search `index.html` for these placeholders and replace with your real info:

- `STREET ADDRESS, CITY, REGION` (footer + "This Week" section)
- `hello@yourchurch.org`
- `EVENT NAME` — the featured Saturday event in the weekly schedule
- Social links (`IG`, `YT`, `X`, `FB` in the footer) currently point to `#`
- Service times — currently Sun 8:00/10:30 AM, Wed 6:00 PM; edit the
  `<ol class="rhythm__strip">` block if yours differ
- Sermon/Give links currently point to `#` — swap in your real pages

## Adding more photos later

Drop new images into `images/`, then either:
- add another `<div class="hero__slide" style="background-image:url('images/your-photo.jpg')"></div>`
  inside `#heroSlides` in `index.html` (and a matching `<span></span>` inside
  `#heroDots`) to add it to the rotation, or
- swap `images/worship-4.jpg` in `.sermons__photo` (in `styles.css`) for a
  different shot.

## Colors

Everything is driven by CSS variables at the top of `styles.css` under
`:root` (`--ink`, `--gold`, `--navy`, `--green`, etc.) if you ever want to
adjust the palette.

## Structure

- Hero — photo slideshow + headline + two CTAs (Join Us / Watch Online)
- About — three-pillar mission statement (Invite / Inform / Involve)
- This Week — weekly service rhythm strip
- Sermons — split panel linking to your sermon library
- Give — full-bleed giving callout
- Visit CTA — final invitation
- Footer — contact, quick links, service times, newsletter, socials

