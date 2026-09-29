import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { build, createServer } from "vite";
import { generateContent } from "./content.mjs";
import { readFile, writeFile } from "node:fs/promises";

// Build first: the manifest is the source of truth for URLs in prerendered HTML.
// The SSR loader uses development URLs, which must match client asset hashes
// before React hydrates the page.

process.env.NODE_ENV = "production";
await generateContent();

await build({ build: { manifest: true } });

// Use Vite's JSX/alias handling for SSR, without introducing a second framework.
const server = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
});
let markup;
try {
    const { default: App } = await server.ssrLoadModule("/src/App.jsx");
    markup = renderToString(createElement(App));
} finally {
    await server.close();
}

const dist = new URL("../dist/", import.meta.url);
const manifest = JSON.parse(await readFile(new URL(".vite/manifest.json", dist), "utf8"));
for (const [source, asset] of Object.entries(manifest)) {
    if (source.startsWith("public/")) {
        markup = markup.replaceAll(`/${source}`, `/${asset.file}`);
    }
}
if (markup.includes("/public/")) throw new Error("Unresolved asset URL in prerendered HTML.");
const htmlFile = new URL("index.html", dist);
const html = await readFile(htmlFile, "utf8");
if (!html.includes('<div id="root"></div>')) throw new Error("Missing prerender root.");
await writeFile(htmlFile, html.replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`));
