import { mkdir, copyFile } from "node:fs/promises";

await mkdir("www/assets", { recursive: true });
await copyFile("index.html", "www/index.html");
await copyFile("assets/maksa-icon.svg", "www/assets/maksa-icon.svg");
console.log("MAKSA ARAB web app and icon copied to www/");
