# Data Visualisation Academy

## Intro

This repo contains the code for the Data Visualisation Academy, an online publication, knowledge base and education tool published and managed by the Publications Office of the European Commission.

## Developing

Clone this repository, and npm install all node dependencies (you should have Node installed)

```bash
npm run install
```

Then you can start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

For a static build, make sure you import the Svelte adapter from `adapter-static` in [svelte.config.js](svelte.config.js):

```
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;

```

Then you can build a production version of your app:

```bash
npm run build
```

The build output for deploy ends up in the `build` folder. You can preview the production build with `npm run preview`.

> To deploy your app to services like Netlify and Vercel, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Architecture

The Data Visualisation Catalog is a [SvelteKit](https://kit.svelte.dev/) application. It is a single page applications which uses routing. It uses static files for its content (it does not use any backend or data base).

### Data

#### TOC

The table of content for the Academy is currently managed in [this Google Sheet](https://docs.google.com/spreadsheets/d/1hP54K7fcr5643k-VlTKBpRx8wU1Mom9I7gNuKhWGtbE/edit?usp=sharing) (tab 'toc'). You can fetch the latest version with 

```bash
npm run toc
````

This will run the getTOC.cjs script that downloads the data and stores is it as [src/lib/data/toc.json](src/lib/data/toc.json). PAGES.JSON? For each page in the publication, the table of contents contains the following properties:

- `id`: a unique numerical id to identify the page, and also order the pages
- `title`: the title of the page
- `m1`: the main module the page is part of
- `t1`: the training the `m1` module is part of
- `m2`: the secondary module the page is part of (optional)
- `t2`: the secondary training the secondary module is part of (optional)
- `metatags`: tags to group related pages that are otherwise unrelated through module and trainings

#### Pages

Each page in the table of contents has a corresponding markdown file in [src/lib/pages](src/lib/pages). All the images (and videos) referenced in the page files are in the [static](static) folder.

### Routing

The application uses the following routes:

- root: the homepage is in [src/routes/+page.svelte](src/routes/+page.svelte)
- the individual pages are in [src/routes/[slug]/+pages.svelte]. The accompanying [src/routes/[slug]/+pages.js]
 file imports the markdown file corresponding to the slug of the page and prepares all the metadata (like the page navigation and related pages)
 - pages are grouped together with tags, based on their `m1`, `t1` and `metatags` HOW TO REACH THE METATAGS TAG PAGES?. These tag pages are generated with [src/routes/tag/[slug]/+pages.svelte], with their data logic in [src/routes/tag/[slug]/+pages.js]

 The `location` store is used to keep track of where the user is and can be imported from [src/lib/stores/store.js]. This store is read in the [BreadCrumbs](src/lib/components/BreadCrumbs.svelte), [TopMenuItem](src/lib/components/TopMenuItem.svelte), [MiddleMenuItem](src/lib/components/MiddleMenuItem.svelte) and [PageNavigation](src/lib/components/PageNavigation.svelte) components, and set in the `+page.svelte` files in the different levels of [src/lib/routing](src/lib/routing).

 ### Layout

 The main, side wide layout of the application is [src/lib/+layout.svelte](src/lib/+layout.svelte). It imports the [Header](src/lib/components/Header.svelte), BreadCrumbs(src/lib/components/BreadCrumbs.svelte), AccordionMenu(src/lib/components/AccordionMenu.svelte) and [Footer](src/lib/components/Footer.svelte) components and renders in a way depending on the `isMobile` store (which is true when the viewport is smaller than 1024 pixels, false otherwise).