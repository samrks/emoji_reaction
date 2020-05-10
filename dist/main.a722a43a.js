// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
// 文字循环
var box = document.querySelector(".angry .txt-wrap");
var txt = document.querySelectorAll(".angry .txt");
var start = 0;
setInterval(function () {
  if (start === -box.offsetWidth) {
    start = 0;
  }

  txt[0].style.left = --start + "px";
  txt[1].style.left = --start + 80 + "px";
}, 13); // 入场动画

var emoji = document.querySelectorAll(".emoji");
var main = document.querySelector(".main");
var main_bg = document.querySelector(".main_bg");
var circle_line = document.querySelector(".circle_line");
var isReady = false;
var globalWidth = document.body.offsetWidth;

window.onresize = function () {
  globalWidth = document.body.offsetWidth;
};

window.onload = function () {
  if (globalWidth >= 992) {
    setTimeout(function () {
      main.style.animation = "main_in 2.5s 1 forwards";
      main_bg.style.animation = "main_bg_in 1.6s cubic-bezier(.215, .61, .355, 1) 1 forwards";

      for (var i = 0; i < emoji.length; i++) {
        emoji[i].style.animation = "emoji_in 1s cubic-bezier(.215, .61, .355, 1) 1 forwards ".concat(0.3 * i, "s");
      }

      setTimeout(function () {
        // circle_line.style.animation = "circle_line 2s ease infinite"
        isReady = true; // 入场完毕
      }, 800);
    }, 2000);
  } else if (globalWidth >= 768) {
    main.style.opacity = "1";
    main_bg.style.opacity = "1";
    main_bg.style.width = "600px";
    main_bg.style.height = "400px";

    for (var i = 0; i < emoji.length; i++) {
      emoji[i].style.opacity = "1";
    }
  } else {
    main.style.opacity = "1";
    main_bg.style.opacity = "1";
    main_bg.style.width = "400px";
    main_bg.style.height = "520px";

    for (var _i = 0; _i < emoji.length; _i++) {
      emoji[_i].style.opacity = "1";
    }
  }
}; // emoji 缩放动画


var timer;
main.addEventListener("mouseenter", function () {
  clearTimeout(timer);

  if (isReady) {
    timer = setTimeout(function () {
      main.style.backgroundColor = "#fff";
      main.style.width = "100vw";
      main.style.height = "100vh";

      for (var i = 0; i < emoji.length; i++) {
        emoji[i].style.opacity = "1";
      }

      emoji[0].style.animation = "fear_big .2s linear 1 forwards";
      emoji[1].style.animation = "heart_big .2s linear 1 forwards";
      emoji[2].style.animation = "cry_big .2s linear 1 forwards";
      emoji[3].style.animation = "cool_big .2s linear 1 forwards";
      emoji[4].style.animation = "angry_big .2s linear 1 forwards";
      emoji[5].style.animation = "wink_big .2s linear 1 forwards";
      setTimeout(function () {
        main.style.borderRadius = "0";
      }, 250);
      setTimeout(function () {
        main.style.width = "950px";
        main.style.height = "170px";
        main.style.borderRadius = "85px";
        emoji[0].style.animation = "fear_small .5s ease 1 forwards";
        emoji[1].style.animation = "heart_small .5s ease 1 forwards";
        emoji[2].style.animation = "cry_small .5s ease 1 forwards";
        emoji[3].style.animation = "cool_small .5s ease 1 forwards";
        emoji[4].style.animation = "angry_small .5s ease 1 forwards";
        emoji[5].style.animation = "wink_small .5s ease 1 forwards";
      }, 3000);
    }, 200);
  }
});
main.addEventListener("mouseleave", function () {
  clearTimeout(timer);
});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.a722a43a.js.map