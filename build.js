import * as esbuild from "esbuild";
import { execSync } from "child_process";
import { copyFileSync, mkdirSync, rmSync } from "fs";

const watch = process.argv.includes("--watch");

const jsDist = "dist/js";
const cssDist = "dist/css";
const docsJs = "docs/assets/js";
const docsCss = "docs/assets/css";

for (const dir of [jsDist, cssDist]) {
    rmSync(dir, { recursive: true, force: true });
}
for (const dir of [jsDist, cssDist, docsJs, docsCss]) {
    mkdirSync(dir, { recursive: true });
}

function copyToDist() {
    copyFileSync("src/swiffy-slider.d.ts", `${jsDist}/swiffy-slider.d.ts`);
    copyFileSync("src/swiffy-slider-extensions.d.ts", `${jsDist}/swiffy-slider-extensions.d.ts`);
}

function copyToDocs() {
    copyFileSync(`${jsDist}/swiffy-slider.js`, `${docsJs}/swiffy-slider.js`);
    copyFileSync(`${jsDist}/swiffy-slider.js.map`, `${docsJs}/swiffy-slider.js.map`);
    copyFileSync(`${jsDist}/swiffy-slider-extensions.js`, `${docsJs}/swiffy-slider-extensions.js`);
    copyFileSync(`${jsDist}/swiffy-slider-extensions.js.map`, `${docsJs}/swiffy-slider-extensions.js.map`);
    copyFileSync(`${cssDist}/swiffy-slider.css`, `${docsCss}/swiffy-slider.css`);
    copyFileSync(`${cssDist}/swiffy-slider.css.map`, `${docsCss}/swiffy-slider.css.map`);
}

function buildCss() {
    execSync(
        `npx lightningcss --minify --sourcemap --targets ">= 0.5%" src/swiffy-slider.css -o ${cssDist}/swiffy-slider.css`,
        { stdio: "inherit" }
    );
}

const jsContext = await esbuild.context({
    entryPoints: [
        "src/swiffy-slider.js",
        "src/swiffy-slider-extensions.js",
    ],
    outdir: jsDist,
    format: "esm",
    minify: true,
    sourcemap: true,
    bundle: false,
    plugins: [{
        name: "on-end",
        setup(build) {
            build.onEnd(() => {
                buildCss();
                copyToDist();
                copyToDocs();
                console.log(`[${new Date().toLocaleTimeString()}] Build complete`);
            });
        }
    }]
});

if (watch) {
    await jsContext.watch();
    console.log("Watching for changes...");
} else {
    await jsContext.rebuild();
    await jsContext.dispose();
}
