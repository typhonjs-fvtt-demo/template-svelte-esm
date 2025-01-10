import { BasicApp } from './view/BasicApp.js';

Hooks.once('ready', () => new BasicApp().render(true, { focus: true }));
