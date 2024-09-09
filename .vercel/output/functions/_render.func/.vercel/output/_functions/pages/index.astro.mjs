/* empty css                                */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from '../chunks/astro/server_BLYtsrW9.mjs';
import 'kleur/colors';
import { a as getUpcoming, b as getTrending, c as getPlayingNow, $ as $$Layout } from '../chunks/api_JY7ASk2T.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$CardSkeleton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="animate-pulse flex flex-col justify-center items-center"> <div class="min-w-[150px] h-[220px] md:h-[250px] md:w-[400px] lg:h-[400px] bg-slate-400 rounded-2xl"></div> <div class="h-4 w-[140px] bg-slate-400 mt-2 rounded"></div> <div class="h-3 w-[80px] bg-slate-400 mt-2 rounded"></div> <div class="h-3 w-[50px] bg-slate-400 mt-2 rounded"></div> </div>`;
}, "/data/data/com.termux/files/home/Astro/src/components/views/movies/CardSkeleton.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    type,
    media
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/${type}/${media.id}`, "href")} class="text-center"> <img${addAttribute(media.title, "alt")}${addAttribute(`https://image.tmdb.org/t/p/w500${media.poster_path}`, "src")} class="w-full h-[220px] md:h-[250px] lg:h-[300px] object-center object-cover rounded-2xl border-2 cursor-pointer shadow-lg"> <h3 class="text-sm md:text-base text-slate-900 dark:text-slate-100 text-ellipsis mb-1 sm:mb-2 line-clamp-1 cursor-pointer"> ${media.title} </h3> <p class="text-xs md:text-sm text-slate-600 dark:text-zinc-400"> ${media.release_date} </p> <p class="text-xs md:text-sm text-slate-600 dark:text-zinc-400"> <span role="img" arial-lable="start">
⭐&nbsp;
</span> ${media.vote_average} </p> </a>`;
}, "/data/data/com.termux/files/home/Astro/src/components/Card.astro", void 0);

const $$MovieUpComing = createComponent(async ($$result, $$props, $$slots) => {
  const upcomingMovies = await getUpcoming();
  return renderTemplate`${maybeRenderHead()}<div class="mx-2 lg:container mb-11"> <div class="flex justify-between mb-4 mt-9"> <h2 class="text-xl text-slate-100 font-primary">Segera Tayang</h2> </div> <div class="flex space-x-4 lg:gap-5 snap-x overflow-x-auto scroll-smooth"> ${upcomingMovies.length > 0 ? upcomingMovies.map((movie) => renderTemplate`<div${addAttribute(movie.id, "key")} class="min-w-[155px] md:min-w-[170px] lg:min-w-[180px] flex flex-col"> ${renderComponent($$result, "Card", $$Card, { "type": "movie", "media": movie })} </div>`) : Array.from({
    length: 10
  }).map((_, index) => renderTemplate`${renderComponent($$result, "CardSkeleton", $$CardSkeleton, { "key": index })}`)} </div> </div>`;
}, "/data/data/com.termux/files/home/Astro/src/components/views/movies/MovieUpComing.astro", void 0);

const $$MovieTrending = createComponent(async ($$result, $$props, $$slots) => {
  const trendingMovies = await getTrending();
  return renderTemplate`${maybeRenderHead()}<div class="mx-2 lg:container mb-11"> <div class="flex justify-between mb-4 mt-9"> <h2 class="text-xl text-slate-100 font-primary">Trending Movie</h2> </div> <div class="flex space-x-4 lg:gap-5 snap-x overflow-x-auto scroll-smooth"> ${trendingMovies.length > 0 ? trendingMovies.map((movie) => renderTemplate`<div${addAttribute(movie.id, "key")} class="min-w-[155px] md:min-w-[170px] lg:min-w-[180px] flex flex-col"> ${renderComponent($$result, "Card", $$Card, { "type": "movie", "media": movie })} </div>`) : Array.from({
    length: 10
  }).map((_, index) => renderTemplate`${renderComponent($$result, "CardSkeleton", $$CardSkeleton, { "key": index })}`)} </div> </div>`;
}, "/data/data/com.termux/files/home/Astro/src/components/views/movies/MovieTrending.astro", void 0);

const $$MoviePlayNow = createComponent(async ($$result, $$props, $$slots) => {
  const playingMovies = await getPlayingNow();
  return renderTemplate`${maybeRenderHead()}<div class="mx-2 lg:container mb-11"> <div class="flex justify-between mb-4 mt-9"> <h2 class="text-xl text-slate-100 font-primary">Sedang Tayang</h2> </div> <div class="flex space-x-4 lg:gap-5 snap-x overflow-x-auto scroll-smooth"> ${playingMovies.length > 0 ? playingMovies.map((movie) => renderTemplate`<div${addAttribute(movie.id, "key")} class="min-w-[155px] md:min-w-[170px] lg:min-w-[180px] flex flex-col"> ${renderComponent($$result, "Card", $$Card, { "type": "movie", "media": movie })} </div>`) : Array.from({
    length: 10
  }).map((_) => renderTemplate`${renderComponent($$result, "CardSkeleton", $$CardSkeleton, {})}`)} </div> </div>`;
}, "/data/data/com.termux/files/home/Astro/src/components/views/movies/MoviePlayNow.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    upcomingMovies,
    trendingMovies,
    playNowMovie
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Halaman-Home", "description": "Halaman Home Movie-Search" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-site bg-cover overflow-hidden bg-no-repeat pb-24"> <div <h1 class="container text-slate-100 font-primary">Halaman Home
</div> ${renderComponent($$result2, "MovieUpComing", $$MovieUpComing, { "upcomingMovies": upcomingMovies })} ${renderComponent($$result2, "MoviePlayNow", $$MoviePlayNow, { "playNowMovie": playNowMovie })} ${renderComponent($$result2, "MovieTrending", $$MovieTrending, { "trendingMovies": trendingMovies })} </main> ` })}`;
}, "/data/data/com.termux/files/home/Astro/src/pages/index.astro", void 0);

const $$file = "/data/data/com.termux/files/home/Astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Index,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
