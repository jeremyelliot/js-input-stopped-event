const listeners=new WeakMap,defaults={wait:400,eventName:"input:hesitation",listenEvent:"input",checkValidity:!1};export default class Hesitation{static addTo(e,t){if(void 0!==e.length){for(let i of e)Hesitation.addTo(i,t);return}Hesitation.removeFrom(e);const i=Object.assign({},defaults,t),n=e=>{const t=e.target.value;i.checkValidity&&!e.target.checkValidity()||setTimeout(()=>{t===e.target.value&&e.target.dispatchEvent(new Event(i.eventName))},i.wait)};e.addEventListener(i.listenEvent,n),listeners.set(e,{listener:n,listenEvent:i.listenEvent})}static removeFrom(e){listeners.has(e)&&(e.removeEventListener(listeners.get(e).listenEvent,listeners.get(e).listener),listeners.delete(e))}}