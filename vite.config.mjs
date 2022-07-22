import { svelte }          from '@sveltejs/vite-plugin-svelte';
import resolve             from '@rollup/plugin-node-resolve'; // This resolves NPM modules from node_modules.
import preprocess          from 'svelte-preprocess';
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

const s_RESOLVE_CONFIG = {
   browser: true,
   dedupe: ['svelte', '@typhonjs-fvtt/runtime', '@typhonjs-fvtt/svelte-standard']
}

export default () =>
{
   /** @type {import('vite').UserConfig} */
   return {
      root: 'src/',                             // Source location / esbuild root.
      base: '/modules/template-svelte-esm/',    // Base module path that 30001 / served dev directory.
      publicDir: false,                         // No public resources to copy.
      cacheDir: '../.vite-cache',               // Relative from root directory.

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

      resolve: { conditions: ['browser', 'import'] },

      esbuild: { target: 'es2022,chrome100' },

      css: {
         // Creates a standard configuration for PostCSS with autoprefixer & postcss-preset-env.
         postcss: postcssConfig({ compress: s_COMPRESS, sourceMap: s_SOURCEMAPS })
      },

      server: {
         port: 30001,
         open: '/game',
         proxy: {
            '^/modules/template-svelte-esm/module.json': 'http://localhost:30000',
            '^(?!/modules/template-svelte-esm)': 'http://localhost:30000',
            '/socket.io': { target: 'ws://localhost:30000', ws: true }
         }
      },

      build: {
         outDir: __dirname,
         emptyOutDir: false,
         sourcemap: s_SOURCEMAPS,
         brotliSize: true,
         lib: {
            entry: './index.js',
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

         resolve(s_RESOLVE_CONFIG),    // Necessary when bundling npm-linked packages.

         // When s_TYPHONJS_MODULE_LIB is true transpile against the Foundry module version of TRL.
         // s_TYPHONJS_MODULE_LIB && typhonjsRuntime()
      ]
   };
};

