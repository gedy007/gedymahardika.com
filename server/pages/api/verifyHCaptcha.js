"use strict";
(() => {
var exports = {};
exports.id = 995;
exports.ids = [995];
exports.modules = {

/***/ 544:
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ 321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(544);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);
node_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const sleep = () => new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, 350);
});

async function handler(req, res) {
  const {
    body,
    method
  } = req; // Extract the email and captcha code from the request body

  const {
    email,
    captcha
  } = body;

  if (method === "POST") {
    // If email or captcha are missing return an error
    if (!email || !captcha) {
      return res.status(422).json({
        message: "Unproccesable request, please provide the required fields"
      });
    }

    try {
      // Ping the hcaptcha verify API to verify the captcha code you received
      const response = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(`https://hcaptcha.com/siteverify`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        body: `response=${captcha}&secret=${process.env.HCAPTCHA_SECRET_KEY}`,
        method: "POST"
      });
      const captchaValidation = await response.json();
      /**
       * {
       *    "success": true|false,     // is the passcode valid, and does it meet security criteria you specified, e.g. sitekey?
       *    "challenge_ts": timestamp, // timestamp of the challenge (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
       *    "hostname": string,        // the hostname of the site where the challenge was solved
       *    "credit": true|false,      // optional: whether the response will be credited
       *    "error-codes": [...]       // optional: any error codes
       *    "score": float,            // ENTERPRISE feature: a score denoting malicious activity.
       *    "score_reason": [...]      // ENTERPRISE feature: reason(s) for score. See BotStop.com for details.
       *  }
       */

      if (captchaValidation.success) {
        // Replace this with the API that will save the data received
        // to your backend
        await sleep(); // Return 200 if everything is successful

        return res.status(200).send("OK");
      }

      return res.status(422).json({
        message: "Unproccesable request, Invalid captcha code"
      });
    } catch (error) {
      console.log(error);
      return res.status(422).json({
        message: "Something went wrong"
      });
    }
  } // Return 404 if someone pings the API with a method other than
  // POST


  return res.status(404).send("Not found");
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(321));
module.exports = __webpack_exports__;

})();