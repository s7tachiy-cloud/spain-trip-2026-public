/* Shared PWA bootstrap; intentionally side-effect free except Service Worker registration. */
(function(){
  'use strict';
  if(!('serviceWorker' in navigator)||location.protocol==='file:')return;
  const base=new URL('./',location.href);
  navigator.serviceWorker.register(new URL('sw.js',base).href,{scope:base.pathname}).catch(error=>console.warn('Service Worker registration failed:',error.message));
})();
