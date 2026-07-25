/* Shared PWA bootstrap; intentionally side-effect free except Service Worker registration. */
(function(){
  'use strict';
  if(!('serviceWorker' in navigator)||location.protocol==='file:')return;
  const script=document.currentScript;
  const base=new URL('../',script?.src||location.href);
  navigator.serviceWorker.register(new URL('sw.js',base).href,{scope:base.pathname}).catch(error=>console.warn('Service Worker registration failed:',error.message));
})();
/* PUBLIC-RC-01 build: 2026-07-25 RC1; cache: spain-trip-public-rc-01-v1. */
