import { createApp } from 'vue';
import './style.css';

import {
  Quasar,
  Notify,
  Dialog,
  Loading,
  type QuasarPluginOptions,
} from 'quasar';
import quasarLang from 'quasar/lang/zh-TW';

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

import './index.css';

import App from './App.vue';

createApp(App)
  .use(Quasar, {
    plugins: {
      Notify,
      Dialog,
      Loading,
    },
    lang: quasarLang,
  } as QuasarPluginOptions)
  .mount('#app');
