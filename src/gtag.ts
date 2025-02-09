import { GTAG_ID } from './config/config';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

window.dataLayer = window.dataLayer || [];
function gtag(...args: any[]) {
  window.dataLayer.push(args);
}
gtag('js', new Date());

gtag('config', GTAG_ID);