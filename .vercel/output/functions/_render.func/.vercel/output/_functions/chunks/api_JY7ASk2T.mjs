import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, a as renderComponent, f as renderSlot, b as createAstro } from './astro/server_BLYtsrW9.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { CgExtensionRemove, CgExtensionAdd } from 'react-icons/cg';
import { SiTurbosquid } from 'react-icons/si';

function Navbar({ text1, text2, onClick1, onClick2, changeBackground }) {
  const [changeUp, setChangUp] = useState("hidden");
  const changeScrollUp = () => {
    if (window.scrollY > 100) {
      setChangUp(false);
    } else {
      setChangUp("hidden");
    }
  };
  useEffect(() => {
    changeScrollUp();
    window.addEventListener("scroll", changeScrollUp);
    return () => {
      window.removeEventListener("scroll", changeScrollUp);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "main",
    {
      className: `${changeUp} md:hidden fixed bottom-2 lg:bottom-8 w-full z-50`,
      children: /* @__PURE__ */ jsx("div", { className: "mx-5", children: /* @__PURE__ */ jsxs("div", { className: "w-full bg-black/20 h-[80px] backdrop-blur-2xl border rounded-full mx-w-[460px] mx-auto px-5 py-2 flex items-center justify-between text-3xl text-slate-100", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/",
            className: "cursor-pointer hover:text-amber-200 flex flex-col items-center",
            children: [
              /* @__PURE__ */ jsx(BiHomeAlt, {}),
              /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Home" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: onClick1,
            className: "cursor-pointer hover:text-amber-200 flex flex-col items-center",
            children: [
              /* @__PURE__ */ jsx(CgExtensionRemove, {}),
              /* @__PURE__ */ jsx("p", { className: "text-sm", children: text1 })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: changeBackground,
            className: "cursor-pointer text-[60px] animate-spin hover:text-amber-200 flex flex-col items-center",
            children: /* @__PURE__ */ jsx(SiTurbosquid, {})
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: onClick2,
            className: "cursor-pointer hover:text-amber-200 flex flex-col items-center",
            children: [
              /* @__PURE__ */ jsx(CgExtensionAdd, {}),
              /* @__PURE__ */ jsx("p", { className: "text-sm", children: text2 })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/autor",
            className: "cursor-pointer hover:text-amber-200 flex flex-col items-center",
            children: [
              /* @__PURE__ */ jsx(BiUser, {}),
              /* @__PURE__ */ jsx("p", { className: "text-sm", children: "About" })
            ]
          }
        )
      ] }) })
    }
  );
}

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    movie,
    title,
    description,
    image = "../../public/cover.png"
  } = Astro2.props;
  Astro2.request.url;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/favicon.ico"><link href="https://fonts.googleapis.com/css2?family=Aldrich&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title} | Cp_Sudrajat</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- css librerias/ cdn -->${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "text1": "All-Movie", "text2": "Tv-Show", "onClick1": () => console.log("Clicked 1"), "onClick2": () => console.log("Clicked 2"), "changeBackground": () => console.log("Change Background"), "client:component-hydration": "load", "client:component-path": "/data/data/com.termux/files/home/Astro/src/components/Navbar.jsx", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/data/data/com.termux/files/home/Astro/src/layouts/Layout.astro", void 0);

const apiKey = "1e8721e91fef0dffa5aae9822d273c9c";
const baseUrl = "https://api.themoviedb.org/3";
async function getMediaDetails(type, id) {
  try {
    const url = `${baseUrl}/${type}/${id}?language=en-US&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching media details:", error);
    return null;
  }
}
async function getUpcoming() {
  try {
    const response = await fetch(
      `${baseUrl}/movie/upcoming?language=en-US&page=1&region=ID&api_key=${apiKey}`
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching media details:", error);
    return [];
  }
}
async function getTrending() {
  try {
    const response = await fetch(
      `${baseUrl}/trending/movie/day?language=en-US&page=1&region=ID&api_key=${apiKey}`
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}
async function getPlayingNow() {
  try {
    const response = await fetch(`${baseUrl}/movie/now_playing?language=en-US&page=1&region=ID&api_key=${apiKey}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}

export { $$Layout as $, getUpcoming as a, getTrending as b, getPlayingNow as c, getMediaDetails as g };
