import { SvelteApp } from '#runtime/svelte/application';
import { deepMerge } from '#runtime/util/object';

import BasicAppShell from './BasicAppShell.svelte';

export class BasicApp extends SvelteApp
{
   /**
    * Default Application options
    *
    * @returns {SvelteApp.Options} options - SvelteApp options.
    * @see https://typhonjs-fvtt-lib.github.io/api-docs/interfaces/_runtime_svelte_application.SvelteApp.Options.html
    */
   static get defaultOptions()
   {
      return deepMerge(super.defaultOptions, {
         title: 'TemplateESM.title',  // Automatically localized from `lang/en.json`.
         width: 300,

         svelte: {
            class: BasicAppShell,
            target: document.body
         }
      });
   }
}
