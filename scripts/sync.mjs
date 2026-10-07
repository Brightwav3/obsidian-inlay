/**
 * Copies manifest.json + theme.css into every vault that uses Inlay.
 * Obsidian doesn't pick up edits through symlinks, so vaults get real copies.
 *
 * Vaults: the bundled showcase vault, plus one absolute vault path per line
 * in vaults.local.txt (git-ignored, machine specific).
 *
 * Usage: npm run sync
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "fs";
import { join } from "path";

const vaults = ["showcase-vault"];
if (existsSync("vaults.local.txt")) {
	vaults.push(...readFileSync("vaults.local.txt", "utf8").split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("#")));
}

for (const vault of vaults) {
	const dir = join(vault, ".obsidian", "themes", "Inlay");
	mkdirSync(dir, { recursive: true });
	for (const file of ["manifest.json", "theme.css"]) copyFileSync(file, join(dir, file));
	console.log(`synced → ${dir}`);
}
