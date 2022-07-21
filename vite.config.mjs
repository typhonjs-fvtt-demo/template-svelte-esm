import * as path           from 'path';

import { svelte }          from '@sveltejs/vite-plugin-svelte';
// import postcss             from 'rollup-plugin-postcss';       // Process Sass / CSS w/ PostCSS
import resolve             from '@rollup/plugin-node-resolve'; // This resolves NPM modules from node_modules.
import preprocess          from 'svelte-preprocess';
// import { terser }          from 'rollup-plugin-terser';        // Terser is used for minification / mangling
import {
   postcssConfig,
   terserConfig,
   typhonjsRuntime }       from '@typhonjs-fvtt/runtime/rollup';

const s_COMPRESS = false;  // Set to true to compress the module bundle.
const s_SOURCEMAPS = true; // Generate sourcemaps for the bundle (recommended).

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

const s_RESOLVE_CONFIG = {
   browser: true,
   dedupe: ['svelte', '@typhonjs-fvtt/runtime', '@typhonjs-fvtt/svelte-standard']
}

export default () =>
{
   /** @type {import('vite').UserConfig} */
   return {
      root: 'src/',
      base: '/modules/template-svelte-esm/',
      publicDir: path.resolve(__dirname, 'public'),

      optimizeDeps: {
         include: [
            '@typhonjs-fvtt/runtime/svelte/action',
            '@typhonjs-fvtt/runtime/svelte/animate',
            '@typhonjs-fvtt/runtime/svelte/application',
            '@typhonjs-fvtt/runtime/svelte/application/dialog',
            '@typhonjs-fvtt/runtime/svelte/application/legacy',
            '@typhonjs-fvtt/runtime/svelte/component/core',
            '@typhonjs-fvtt/runtime/svelte/component/dialog',
            // '@typhonjs-fvtt/runtime/svelte/gsap',
            // '@typhonjs-fvtt/runtime/svelte/gsap/plugin',
            // '@typhonjs-fvtt/runtime/svelte/gsap/plugin/bonus',
            '@typhonjs-fvtt/runtime/svelte/handler',
            '@typhonjs-fvtt/runtime/svelte/helper',
            '@typhonjs-fvtt/runtime/svelte/math',
            '@typhonjs-fvtt/runtime/svelte/plugin/data',
            '@typhonjs-fvtt/runtime/svelte/plugin/system',
            '@typhonjs-fvtt/runtime/svelte/store',
            '@typhonjs-fvtt/runtime/svelte/transition',
            '@typhonjs-fvtt/runtime/svelte/util'
         ]
      },

      resolve: {
         conditions: ['browser', 'import'],
      },

      esbuild: {
         target: 'es2022,chrome100'
      },

      css: {
         postcss: postcssMain
      },

      server: {
         port: 30001,
         open: false,
         proxy: {
            '^(?!/modules/template-svelte-esm)': 'http://localhost:30000',
            '/socket.io': {
               target: 'ws://localhost:30000',
               ws: true
            }
         }
      },

      build: {
         outDir: path.resolve(__dirname, 'dist'),
         emptyOutDir: true,
         sourcemap: s_SOURCEMAPS,
         brotliSize: true,
         lib: {
            name: 'Template Svelte ESM',
            entry: path.resolve(__dirname, 'src/index.js'),
            formats: ['es'],
            fileName: 'index'
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
         // s_TYPHONJS_MODULE_LIB && typhonjsRuntime()
      ]
   };
};

