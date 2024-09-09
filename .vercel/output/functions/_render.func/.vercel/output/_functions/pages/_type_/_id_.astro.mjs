/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BLYtsrW9.mjs';
import 'kleur/colors';
import { g as getMediaDetails, $ as $$Layout } from '../../chunks/api_JY7ASk2T.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const {
    type,
    id
  } = Astro2.params;
  const mediaDetails = await getMediaDetails(type, id);
  if (!mediaDetails) {
    console.error("No media details found");
  }
  return renderTemplate`${mediaDetails ? renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": mediaDetails.title || "Detail", "description": mediaDetails.overview || "No description available", "movie": mediaDetails.backdrop_path }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="h-screen bg-lime-700"><div class="relative">${mediaDetails.backdrop_path ? renderTemplate`<img class="w-full h-[300px] md:h-auto object-cover object-center"${addAttribute(`https://image.tmdb.org/t/p/w500${mediaDetails.backdrop_path}`, "src")}${addAttribute(mediaDetails.title, "alt")}${addAttribute({
    maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, transparent 100%)"
  }, "style")}>` : renderTemplate`<p>
Backdrop image not available
</p>`}</div><div class="container flex"><img class="mr-5 z-20 md:-my-36 -my-24 mb-14 md:mb-20 w-[45%] md:w-[50%] h-auto md:h-auto object-cover object-center border-2 rounded-2xl"${addAttribute(`https://image.tmdb.org/t/p/w500${mediaDetails.poster_path}`, "src")}${addAttribute(mediaDetails.title, "alt")}><div class="flex-col"><h1 class="font-primary font-semibold md:font-bold text-xl md:text-5xl md: md:my-10 my-2">${mediaDetails.title || "Title not available"}</h1><div class="font-bold md:text-5xl flex">
Genres &nbsp;
<ul class="list-disc list-inside">${mediaDetails.genres && mediaDetails.genres.length > 0 ? mediaDetails.genres.map((genre) => renderTemplate`<li${addAttribute(genre.id, "key")}>${genre.name}</li>`) : renderTemplate`<li>No genres available</li>`}</ul></div></div></div><div class="container"><p class="font-bold md:text-2xl my-2">
Release Date:
<span class="bg-slate-700 px-2 rounded-xl">${mediaDetails.release_date || "Unknown"}</span></p><p class="font-bold md:text-2xl my-2">
Status:
<span class="bg-slate-700 px-2 rounded-xl">${mediaDetails.status || "Unknown"}</span></p><p class="font-bold md:text-2xl my-2">
Production Countries:
<span class="bg-slate-700 px-2 rounded-xl">${mediaDetails.production_countries ? mediaDetails.production_countries.map((country) => country.name).join(", ") : "Unknown"}</span></p><p class="mb-2 font-bold md:text-2xl">
Overview:
<span class="bg-slate-700 px-2 rounded-xl text-sm md:text-xl">${mediaDetails.overview || "No overview available"}</span></p></div></main>` })}` : Array.from({
    length: 10
  }).map((_) => renderTemplate`<p>
Loaddoongg,,,,
</p>`)}`;
}, "/data/data/com.termux/files/home/Astro/src/pages/[type]/[id].astro", void 0);

const $$file = "/data/data/com.termux/files/home/Astro/src/pages/[type]/[id].astro";
const $$url = "/[type]/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
