// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"JPj0W":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5df151bd31c26719";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"l7Wbs":[function(require,module,exports) {
var _cardView = require("./views/cardView");
var _navbarItemsView = require("./views/navbarItemsView");
var _sortView = require("./views/sortView");
var _stateModel = require("./model/stateModel");
// Navbar Controllers
const controlHomeBtn = function() {
    _cardView.renderCards(_stateModel.state.cards);
};
const controlSearchQuery = function() {
    const results = _stateModel.findCards(_navbarItemsView.getQuery());
    _cardView.renderCards(results);
};
// Sort controllers
const controlSortBtn = function() {
    _sortView.openSortModal(_stateModel.state.sortMethod);
};
const controlModalClose = function() {
    _sortView.closeSortModal();
};
const controlSortChoice = function(choice) {
    _sortView.closeSortModal();
    _cardView.renderCards(_stateModel.sortCards(choice));
};
// Event Subsrcibers
const init = function() {
    _cardView.renderCards(_stateModel.state.cards);
    _navbarItemsView.handleHomeBtn(controlHomeBtn);
    _navbarItemsView.handleSearchQuery(controlSearchQuery);
    _sortView.handleSortBtn(controlSortBtn);
    _sortView.handleModalClose(controlModalClose);
    _sortView.handleSortChoice(controlSortChoice);
};
init();

},{"./views/cardView":"fQSWV","./views/navbarItemsView":"lnRV5","./views/sortView":"1pg4W","./model/stateModel":"2DLQw"}],"fQSWV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderCards", ()=>renderCards);
const cardsContainer = document.querySelector(".cards-container");
const renderCards = function(cardList) {
    let html = "";
    cardsContainer.innerHTML = html;
    if (cardList.length) cardList.forEach(function(card, i) {
        html = `
                <div class="card-outline habitat-${card.habitatColor}">
                    
                    <!-- Card animal name -->
                    <h2 class="title">${card.animalName}</h2>
                    <div class="card-inner">
                        <!-- Card animal picture -->
                        <img class="animal-image" src="src/images/${card.imgSrc}" alt="${card.imgAlt}">
                        <div class="info-outline">
                            <!-- Card animal facts -->
                            <p class="fact">${card.facts}</p>
                            <hr>
                            <ul>
                                <!-- Card animal data points -->
                                <li><span>Scientific Name</span>: ${card.scientificName}</li>
                                <li><span>Average Height</span>: ${card.height}</li>
                                <li><span>Average Lifespan</span>: ${card.lifespan}</li>
                                <li><span>Habitat</span>: ${card.habitat}</li>
                            </ul>
                            <hr>
                            <!-- Card animal description -->
                            <p class="description">${card.description}</p>
                        </div>
                    </div>
                </div>`;
        cardsContainer.insertAdjacentHTML("beforeend", html);
    });
    else {
        html = "<p>No cards found</p>";
        cardsContainer.insertAdjacentHTML("beforeend", html);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lnRV5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleSearchQuery", ()=>handleSearchQuery);
parcelHelpers.export(exports, "handleHomeBtn", ()=>handleHomeBtn);
parcelHelpers.export(exports, "getQuery", ()=>getQuery);
const searchInput = document.querySelector("#search");
const searchForm = document.querySelector("#search-form");
const homeButton = document.querySelector(".home");
const handleSearchQuery = function(handler) {
    searchForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        handler();
    });
};
const handleHomeBtn = function(handler) {
    homeButton.addEventListener("click", handler);
};
const getQuery = function() {
    const query = searchInput.value.toLowerCase();
    searchInput.value = "";
    return query;
}; // homeButton.addEventListener('click', e => displayCards(cards));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1pg4W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "openSortModal", ()=>openSortModal);
parcelHelpers.export(exports, "closeSortModal", ()=>closeSortModal);
parcelHelpers.export(exports, "handleSortBtn", ()=>handleSortBtn);
parcelHelpers.export(exports, "handleModalClose", ()=>handleModalClose);
parcelHelpers.export(exports, "handleSortChoice", ()=>handleSortChoice);
const sortButton = document.querySelector("#sort");
const sortOptions = document.querySelector(".sort-options");
const sortItems = document.querySelectorAll(".sort-item");
const sortContainer = document.querySelector(".sort-modal");
const overlay = document.querySelector(".overlay");
const openSortModal = function(sortMethod) {
    sortContainer.classList.remove("hidden");
    overlay.classList.remove("hidden");
    overlay.classList.add("sort-overlay");
    sortItems.forEach((item)=>{
        item.classList.remove("chosen");
        if (item.textContent === sortMethod) item.classList.add("chosen");
    });
};
const closeSortModal = function() {
    sortContainer.classList.add("hidden");
    overlay.classList.add("hidden");
    overlay.classList.remove("sort-overlay");
};
const handleSortBtn = function(handler) {
    sortButton.addEventListener("click", handler);
};
const handleModalClose = function(handler) {
    document.addEventListener("keydown", (e)=>{
        if (e.key === "Escape") handler();
    });
    overlay.addEventListener("click", (e)=>{
        if (overlay.classList.contains("sort-overlay")) handler();
    });
};
const handleSortChoice = function(handler) {
    sortOptions.addEventListener("click", (e)=>handler(e.target.textContent));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2DLQw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "findCards", ()=>findCards);
parcelHelpers.export(exports, "sortCards", ()=>sortCards);
var _cardModel = require("./cardModel");
var _helpers = require("../helpers");
const state = {
    sortMethod: "Oldest Arrivals",
    cards: (0, _cardModel.cardList)
};
const findCards = function(query) {
    const cardResults = [];
    state.cards.forEach((card)=>{
        if (card.animalName.toLowerCase().includes(query)) cardResults.push(card);
    });
    return cardResults;
};
const sortCards = function(choice) {
    state.sortMethod = choice;
    const cardsClone = structuredClone(state.cards);
    switch(choice){
        case "Oldest Arrivals":
            return cardsClone;
        case "Newest Arrivals":
            return cardsClone.reverse();
        case "A-Z":
            return cardsClone.sort(_helpers.alphaSort);
        case "Z-A":
            return cardsClone.sort(_helpers.alphaSortReverse);
        case "Scientific Name A-Z":
            return cardsClone.sort(_helpers.scientificSort);
        case "Scientific name Z-A":
            return cardsClone.sort(_helpers.scientificSortReverse);
        case "Color":
            return cardsClone.sort(_helpers.colorSort);
    }
};

},{"./cardModel":"gQ41S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../helpers":"jVcEy"}],"gQ41S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cardList", ()=>cardList);
class Card {
    constructor(animalName, facts, scientificName, height, lifespan, habitat, description, imgSrc, imgAlt, habitatColor){
        this.animalName = animalName;
        this.facts = facts;
        this.scientificName = scientificName;
        this.height = height;
        this.lifespan = lifespan;
        this.habitat = habitat;
        this.description = description;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.habitatColor = habitatColor;
    }
}
const cardList = [
    new Card("Spider Monkey", "Spider monkeys are named after their spider-like appearance as they hang upside down by their tails.", "Ateles", "2 feet", "25 years", "Tropical rainforests", "They are found in tropical forests of Central and South America, from the south of Mexico to Brazil. Spider monkeys have long dexterous tails that they use as a fifth limb to hold on to tree branches. The genus is made up of seven species.", "makm-photography-Glm8xUm8Am4-unsplash.jpg", "Spider Monkey", "green"),
    new Card("Mantis Shrimp", "The mantis shrimp is well known for its striking force/speed that can boil water.", "Stomatopod", "4-8 in.", "3-6 years", "Indian & Pacific Oceans", "A small, aggressive marine Crustacean found in tropical and subtropical oceans. They sport vibrant colors and can club prey with the force of a bullet.", "mantis.jpg", "Mantis Shrimp", "blue"),
    new Card("Olm Salamander", "Generations in the dark have caused this salamander to grow skin over its eyes and become blind.", "Proteus anguinus", "40 cm", "58 years", "Well oxygenated underground water", 'The olm salamander is blind and "sees" through weak electromagnetic pulses, sounds, and smells. Locals believe it to be babies of cave dragons.', "salamander.jpeg", "Olm Salamander", "grey"),
    new Card("Emperor Scorpion", "The Emperor scorpion is the largest scorpion in the world and glow green or blue under ultraviolet light.", "Proteus anguinus", "8 in.", "6–8 years", "West Africa", "The Emperor scorpion has sensory hairs to detect vibrations in the air and ground so that they can sense prey. The Emperor scorpion's sting is normally not lethal.", "Scorpion.jpeg", "Emperor Scropion", "brown"),
    new Card("Puma", "The puma is the fourth largest cat in the world.", "Puma concolor", "24 – 35 in.", "8 – 13 years", "Americas", "Pumas hold the world record for animal with the most names, being referred to as puma, cougar, mountain lion, and the list continues with many more names!", "puma.jpeg", "Puma", "brown"),
    new Card("Pompeii worm", "The pompeii worm's tail can be found resting in water up to 200 degrees farenheit!", "Alvinella pompejanaconcolor", "5 in.", "unknown", "Hydrothermal vents", "The pompeii worm is known as an extremophile, meaning that it thrives in extreme conditions.", "pompeii_worm.jpeg", "Pompeii worm", "red"),
    new Card("Canary", "A common pet bird of the finch family.", "Serinus canaria domestica", "4.7 – 7.9 in.", "10 – 12 years", "Originated in Macaronesian Islands", "The male canary is the better singer compared to its counter part. This is due to the male's song being a method of attracting a female and marking their territory.", "canary.jpeg", "Canary", "yellow"),
    new Card("Leafcutter Ant", "Leafcutter ants have specialized jaws that saw off pieces of leaves.", " Atta cephalotes", "2 mm", "3-5 weeks", "Latin American and Caribbean forest floors", "Leafcutter ant is a generic name that encompasses 40+ ant species that chew leaves. They can carry up to 50 times their weight!", "leaf_cutter_ant.jpeg", "Leafcutter Ant", "green"),
    new Card("Great White Shark", "The Great White Shark is an apex predator found in coastal waters of every ocean!", "Carcharodon carcharias", "15 – 16 ft", "est. 30 to 70 years", "Coastal waters", "Despite the ferocious man-eating depiction made by the Steven Spielberg movie 'Jaws,' Great White Shark attacks are actually rare!", "great_white_shark.jpeg", "Great White Shark", "blue"),
    new Card("Toucan", "There are more that 40 different species of Toucan!", "Ramphastidae", "Up to 24 in.", "12 - 20 years", "Central and South America", "The bright colors of the Toucan are actually a clever means of camouflage! Their bright colors alongside the black makes them blend in to the colorful forest plants.", "toucan.jpeg", "Toucan", "yellow"),
    new Card("Mountain Goat", "The Mountain Goat, also known as the Rocky Mountain Goat, is a sure footed animal that lives on steep mountains.", "Oreamnos americanus", "40 cm", "12 - 18 years", "Northwestern North America", "The Mountain Goat can jump up to 12 ft to aid in traversing the steep, treacherous mountain sides!", "mountain_goat.jpeg", "Mountain Goat", "grey"),
    new Card("Greater Bilby", "The Greater Bilby is a rabbit-like nocturnal marsupial that lives in burrows.", "Macrotis lagotis", "11 to 22 in.", "6 - 7 years", "Range of Australian habitats", "The Greater Bilby copes with the extreme Australian heat by sleeping during the day and feeding at night. The obtain all of their water from the plants and insects that they feed on.", "bilby.jpeg", "Bilby", "red"),
    new Card("Okapi", "The Okapi is also known as the forest giraffe, zebra giraffe, and Congolese giraffe.", "Okapia johnstoni", "5 - 5.5 ft.", "15 - 20 years", "Ituri Rainforest, Central Africa", "The Okapi has a tongue that can grow to 14 inches in length! It is so long that they clean their ears and eyes with it, and even swat insects from their necks!", "okapi.jpeg", "Okapi", "green")
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jVcEy":[function(require,module,exports) {
// Sort Functions
// sort by name
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alphaSort", ()=>alphaSort);
parcelHelpers.export(exports, "alphaSortReverse", ()=>alphaSortReverse);
parcelHelpers.export(exports, "scientificSort", ()=>scientificSort);
parcelHelpers.export(exports, "scientificSortReverse", ()=>scientificSortReverse);
parcelHelpers.export(exports, "colorSort", ()=>colorSort);
const alphaSort = function(a, b) {
    const nameA = a.animalName.toUpperCase();
    const nameB = b.animalName.toUpperCase();
    if (nameA > nameB) return 1;
    if (nameB > nameA) return -1;
    return 0;
};
const alphaSortReverse = function(a, b) {
    const nameA = a.animalName.toUpperCase();
    const nameB = b.animalName.toUpperCase();
    if (nameA < nameB) return 1;
    if (nameB < nameA) return -1;
    return 0;
};
const scientificSort = function(a, b) {
    const nameA = a.scientificName.toUpperCase();
    const nameB = b.scientificName.toUpperCase();
    if (nameA > nameB) return 1;
    if (nameB > nameA) return -1;
    return 0;
};
const scientificSortReverse = function(a, b) {
    const nameA = a.scientificName.toUpperCase();
    const nameB = b.scientificName.toUpperCase();
    if (nameA < nameB) return 1;
    if (nameB < nameA) return -1;
    return 0;
};
const colorSort = function(a, b) {
    const nameA = a.habitatColor.toUpperCase();
    const nameB = b.habitatColor.toUpperCase();
    if (nameA > nameB) return 1;
    if (nameB > nameA) return -1;
    return 0;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["JPj0W","l7Wbs"], "l7Wbs", "parcelRequire5bd3")

//# sourceMappingURL=card.31c26719.js.map
