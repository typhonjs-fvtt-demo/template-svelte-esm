import * as path           from 'path';

import { svelte }          from '@sveltejs/vite-plugin-svelte';
// import postcss             from 'rollup-plugin-postcss';       // Process Sass / CSS w/ PostCSS
// import resolve             from '@rollup/plugin-node-resolve'; // This resolves NPM modules from node_modules.
import preprocess          from 'svelte-preprocess';
// import { terser }          from 'rollup-plugin-terser';        // Terser is used for minification / mangling
import {
   postcssConfig,
   terserConfig,
   typhonjsRuntime }       from '@typhonjs-fvtt/runtime/rollup';

const s_COMPRESS = false;  // Set to true to compress the module bundle.
const s_SOURCEMAPS = true; // Generate sourcemaps for the bundle (recommended).
const s_OUTPUT_CSS = 'template-svelte-esm.css';

// Set to true to enable linking against the TyphonJS Runtime Library module.
// You must add a Foundry module dependency on the `typhonjs` Foundry package or manually install it in Foundry from:
// https://github.com/typhonjs-fvtt-lib/typhonjs/releases/latest/download/module.json
const s_TYPHONJS_MODULE_LIB = false;

// Creates a standard configuration for PostCSS with autoprefixer & postcss-preset-env.
const postcssMain = postcssConfig({
   // extract: 'template-svelte-esm.css', // remove
   // to: 'template-svelte-esm.css',
   compress: s_COMPRESS,
   sourceMap: s_SOURCEMAPS
});

export default () =>
{
   /** @type {import('vite').UserConfig} */
   return {
      root: 'src/',
      base: '/modules/template-svelte-esm/',
      publicDir: '../public',

      resolve: {
         conditions: ['browser', 'import'],
         dedupe: ['svelte', '@typhonjs-fvtt/runtime', '@typhonjs-fvtt/svelte-standard']
      },

      css: {
         postcss: postcssMain
      },

      server: {
         port: 30001,
         open: true,
         proxy: {
            '^(?!/modules/template-svelte-esm)': 'http://localhost:30000',
            '/socket.io': {
               target: 'ws://localhost:30000',
               ws: true
            }
         }
      },

      build: {
         outDir: '../dist',
         emptyOutDir: true,
         sourcemap: s_SOURCEMAPS,
         brotliSize: true,
         rollupOptions: {
            output: {
               assetFileNames: (assetInfo) => assetInfo.name === 'style.css' ? s_OUTPUT_CSS : assetInfo.name
            },
         },
         lib: {
            name: 'Template Svelte ESM',
            entry: 'init.js',
            // entry: path.resolve(__dirname, 'src/init.js'),
            formats: ['es'],
            fileName: 'template-svelte-esm'
         }
      },

      plugins: [
         svelte({
            preprocess: preprocess(),
            onwarn: (warning, handler) =>
            {
               // Suppress `a11y-missing-attribute` for missing href in <a> links.
               // Foundry doesn't follow accessibility rules.
               if (warning.message.includes(`<a> element should have an href attribute`)) { return; }

               // Let Rollup handle all other warnings normally.
               handler(warning);
            },
         }),

         // postcss(postcssMain),

         // resolve(s_RESOLVE_CONFIG),

         // When s_TYPHONJS_MODULE_LIB is true transpile against the Foundry module version of TRL.
         s_TYPHONJS_MODULE_LIB && typhonjsRuntime()
      ]
   };
};

