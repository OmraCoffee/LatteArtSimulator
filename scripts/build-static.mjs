import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
await mkdir(output, { recursive: true });
for (const file of ["index.html", "styles.css", "app.js", "script.js"]) {
  await copyFile(path.join(root, file), path.join(output, file));
}
console.log("Prepared static files in dist/");
