!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("h6c0i"),l={formEl:document.querySelector(".form"),buttonEl:document.querySelector("button")};l.formEl.addEventListener("submit",(function(e,o,n){e.preventDefault(),Math.random()>.3?r.Notify.success("Fulfilled promise ".concat(o," in ").concat(n,"ms")):r.Notify.failure("Rejected promise ".concat(o," in ").concat(n,"ms"))}));l.formEl.elements.delay.value,l.formEl.elements.step.value,l.formEl.elements.amount.value}();
//# sourceMappingURL=03-promises.cf36deb6.js.map
