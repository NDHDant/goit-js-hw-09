function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=o);var i=o("eWCmQ");function u(e,n){const r=Math.random()>.3;return new Promise(((t,o)=>{setTimeout((()=>{r?t({index:e,delay:n}):o({index:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();let r=Number(n.currentTarget.delay.value),t=Number(n.currentTarget.step.value),o=Number(n.currentTarget.amount.value);for(let n=0;n<o;n+=1)u(n+1,r).then((({index:n,delay:r})=>{e(i).Notify.success(`✅ Fulfilled promise ${n} in ${r}ms`)})).catch((({index:n,delay:r})=>{e(i).Notify.warning(`❌ Rejected promise ${n} in ${r}ms`)})),r+=t}));
//# sourceMappingURL=03-promises.e047e414.js.map