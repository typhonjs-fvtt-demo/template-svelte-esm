import { SvelteApp } from '#runtime/svelte/application';

import BasicAppShell from './BasicAppShell.svelte';

export class BasicApp extends SvelteApp
{
   /**
    * Default Application options
    *
    * @returns {object} options - Application options.
    * @see https://typhonjs-fvtt-lib.github.io/api-docs/interfaces/_runtime_svelte_application.SvelteApp.Options.html
    */
   static get defaultOptions()
   {
      return /** @type {import('#runtime/svelte/application').SvelteApp.Options} */ foundry.utils.mergeObject(
         super.defaultOptions,
         {
            title: 'TemplateESM.title',  // Automatically localized from `lang/en.json`.
            width: 300,

            svelte: {
               class: BasicAppShell,
               target: document.body
            }
         }
      );
   }
}
