var _int = setInterval(() => {
  var script = document.createElement("script");
  script.src = "https://suroihax.glitch.me/script.user.js";
  document.head.prepend(script);
  clearInterval(_int);
}, 100);