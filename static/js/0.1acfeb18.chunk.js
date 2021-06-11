/*! For license information please see 0.1acfeb18.chunk.js.LICENSE.txt */
(this.webpackJsonpsharoncaronflags=this.webpackJsonpsharoncaronflags||[]).push([[0],{179:function(t,e,n){"use strict";var r=n(18),o=n(14);var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function a(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(e){i(e)}}function s(t){try{u(r.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))}function s(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}Object.create;function u(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}Object.create;var f,l=n(0),p=n(180),d="0.4.28",h=1e4,v="w:0.4.28",g="FIS_v2",y=36e5,b=((f={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',f["not-registered"]="Firebase Installation is not registered.",f["installation-not-found"]="Firebase Installation not found.",f["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',f["app-offline"]="Could not process request. Application offline.",f["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",f),w=new l.b("installations","Installations",b);function m(t){return t instanceof l.c&&t.code.includes("request-failed")}function S(t){return"https://firebaseinstallations.googleapis.com/v1/projects/"+t.projectId+"/installations"}function I(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}function _(t,e){return a(this,void 0,void 0,(function(){var n,r;return s(this,(function(o){switch(o.label){case 0:return[4,e.json()];case 1:return n=o.sent(),r=n.error,[2,w.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function C(t){var e=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function k(t,e){var n=e.refreshToken,r=C(t);return r.append("Authorization",function(t){return"FIS_v2 "+t}(n)),r}function x(t){return a(this,void 0,void 0,(function(){var e;return s(this,(function(n){switch(n.label){case 0:return[4,t()];case 1:return(e=n.sent()).status>=500&&e.status<600?[2,t()]:[2,e]}}))}))}function j(t,e){var n=e.fid;return a(this,void 0,void 0,(function(){var e,r,o,i,a,u;return s(this,(function(s){switch(s.label){case 0:return e=S(t),r=C(t),o={fid:n,authVersion:g,appId:t.appId,sdkVersion:v},i={method:"POST",headers:r,body:JSON.stringify(o)},[4,x((function(){return fetch(e,i)}))];case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3];case 2:return u=s.sent(),[2,{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:I(u.authToken)}];case 3:return[4,_("Create Installation",a)];case 4:throw s.sent()}}))}))}function T(t){return new Promise((function(e){setTimeout(e,t)}))}var D=/^[cdef][\w-]{21}$/;function P(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var e=function(t){return(e=t,btoa(String.fromCharCode.apply(String,function(t,e){for(var n=0,r=e.length,o=t.length;n<r;n++,o++)t[o]=e[n];return t}([],c(e)))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}(t);return D.test(e)?e:""}catch(n){return""}}function q(t){return t.appName+"!"+t.appId}var E=new Map;function O(t,e){var n=q(t);A(n,e),function(t,e){var n=B();n&&n.postMessage({key:t,fid:e});K()}(n,e)}function A(t,e){var n,r,o=E.get(t);if(o)try{for(var i=u(o),a=i.next();!a.done;a=i.next()){(0,a.value)(e)}}catch(s){n={error:s}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}var N=null;function B(){return!N&&"BroadcastChannel"in self&&((N=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(t){A(t.data.key,t.data.fid)}),N}function K(){0===E.size&&N&&(N.close(),N=null)}var L,V="firebase-installations-store",F=null;function M(){return F||(F=Object(p.openDb)("firebase-installations-database",1,(function(t){switch(t.oldVersion){case 0:t.createObjectStore(V)}}))),F}function $(t,e){return a(this,void 0,void 0,(function(){var n,r,o,i,a;return s(this,(function(s){switch(s.label){case 0:return n=q(t),[4,M()];case 1:return r=s.sent(),o=r.transaction(V,"readwrite"),[4,(i=o.objectStore(V)).get(n)];case 2:return a=s.sent(),[4,i.put(e,n)];case 3:return s.sent(),[4,o.complete];case 4:return s.sent(),a&&a.fid===e.fid||O(t,e.fid),[2,e]}}))}))}function J(t){return a(this,void 0,void 0,(function(){var e,n,r;return s(this,(function(o){switch(o.label){case 0:return e=q(t),[4,M()];case 1:return n=o.sent(),[4,(r=n.transaction(V,"readwrite")).objectStore(V).delete(e)];case 2:return o.sent(),[4,r.complete];case 3:return o.sent(),[2]}}))}))}function z(t,e){return a(this,void 0,void 0,(function(){var n,r,o,i,a,u;return s(this,(function(s){switch(s.label){case 0:return n=q(t),[4,M()];case 1:return r=s.sent(),o=r.transaction(V,"readwrite"),[4,(i=o.objectStore(V)).get(n)];case 2:return a=s.sent(),void 0!==(u=e(a))?[3,4]:[4,i.delete(n)];case 3:return s.sent(),[3,6];case 4:return[4,i.put(u,n)];case 5:s.sent(),s.label=6;case 6:return[4,o.complete];case 7:return s.sent(),!u||a&&a.fid===u.fid||O(t,u.fid),[2,u]}}))}))}function G(t){return a(this,void 0,void 0,(function(){var e,n,r;return s(this,(function(o){switch(o.label){case 0:return[4,z(t,(function(n){var r=function(t){return H(t||{fid:P(),registrationStatus:0})}(n),o=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine)return{installationEntry:e,registrationPromise:Promise.reject(w.create("app-offline"))};var n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:function(t,e){return a(this,void 0,void 0,(function(){var n,r;return s(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,7]),[4,j(t,e)];case 1:return n=o.sent(),[2,$(t,n)];case 2:return m(r=o.sent())&&409===r.customData.serverCode?[4,J(t)]:[3,4];case 3:return o.sent(),[3,6];case 4:return[4,$(t,{fid:e.fid,registrationStatus:0})];case 5:o.sent(),o.label=6;case 6:throw r;case 7:return[2]}}))}))}(t,n)}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:R(t)}:{installationEntry:e}}(t,r);return e=o.registrationPromise,o.installationEntry}))];case 1:return""!==(n=o.sent()).fid?[3,3]:(r={},[4,e]);case 2:return[2,(r.installationEntry=o.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:e}]}}))}))}function R(t){return a(this,void 0,void 0,(function(){var e,n,r,o;return s(this,(function(i){switch(i.label){case 0:return[4,U(t)];case 1:e=i.sent(),i.label=2;case 2:return 1!==e.registrationStatus?[3,5]:[4,T(100)];case 3:return i.sent(),[4,U(t)];case 4:return e=i.sent(),[3,2];case 5:return 0!==e.registrationStatus?[3,7]:[4,G(t)];case 6:return n=i.sent(),r=n.installationEntry,(o=n.registrationPromise)?[2,o]:[2,r];case 7:return[2,e]}}))}))}function U(t){return z(t,(function(t){if(!t)throw w.create("installation-not-found");return H(t)}))}function H(t){return 1===(e=t).registrationStatus&&e.registrationTime+h<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}function Q(t,e){var n=t.appConfig,r=t.platformLoggerProvider;return a(this,void 0,void 0,(function(){var t,o,i,a,u,c,f;return s(this,(function(s){switch(s.label){case 0:return t=function(t,e){var n=e.fid;return S(t)+"/"+n+"/authTokens:generate"}(n,e),o=k(n,e),(i=r.getImmediate({optional:!0}))&&o.append("x-firebase-client",i.getPlatformInfoString()),a={installation:{sdkVersion:v}},u={method:"POST",headers:o,body:JSON.stringify(a)},[4,x((function(){return fetch(t,u)}))];case 1:return(c=s.sent()).ok?[4,c.json()]:[3,3];case 2:return f=s.sent(),[2,I(f)];case 3:return[4,_("Generate Auth Token",c)];case 4:throw s.sent()}}))}))}function W(t,e){return void 0===e&&(e=!1),a(this,void 0,void 0,(function(){var n,r,o;return s(this,(function(u){switch(u.label){case 0:return[4,z(t.appConfig,(function(r){if(!Y(r))throw w.create("not-registered");var o=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+y}(t)}(o))return r;if(1===o.requestStatus)return n=function(t,e){return a(this,void 0,void 0,(function(){var n,r;return s(this,(function(o){switch(o.label){case 0:return[4,X(t.appConfig)];case 1:n=o.sent(),o.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,T(100)];case 3:return o.sent(),[4,X(t.appConfig)];case 4:return n=o.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,W(t,e)]:[2,r]}}))}))}(t,e),r;if(!navigator.onLine)throw w.create("app-offline");var u=function(t){var e={requestStatus:1,requestTime:Date.now()};return i(i({},t),{authToken:e})}(r);return n=function(t,e){return a(this,void 0,void 0,(function(){var n,r,o;return s(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,8]),[4,Q(t,e)];case 1:return n=a.sent(),o=i(i({},e),{authToken:n}),[4,$(t.appConfig,o)];case 2:return a.sent(),[2,n];case 3:return!m(r=a.sent())||401!==r.customData.serverCode&&404!==r.customData.serverCode?[3,5]:[4,J(t.appConfig)];case 4:return a.sent(),[3,7];case 5:return o=i(i({},e),{authToken:{requestStatus:0}}),[4,$(t.appConfig,o)];case 6:a.sent(),a.label=7;case 7:throw r;case 8:return[2]}}))}))}(t,u),u}))];case 1:return r=u.sent(),n?[4,n]:[3,3];case 2:return o=u.sent(),[3,4];case 3:o=r.authToken,u.label=4;case 4:return[2,o]}}))}))}function X(t){return z(t,(function(t){if(!Y(t))throw w.create("not-registered");var e,n=t.authToken;return 1===(e=n).requestStatus&&e.requestTime+h<Date.now()?i(i({},t),{authToken:{requestStatus:0}}):t}))}function Y(t){return void 0!==t&&2===t.registrationStatus}function Z(t){return a(this,void 0,void 0,(function(){var e;return s(this,(function(n){switch(n.label){case 0:return[4,G(t)];case 1:return(e=n.sent().registrationPromise)?[4,e]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}function tt(t,e){return a(this,void 0,void 0,(function(){var n,r,o,i;return s(this,(function(a){switch(a.label){case 0:return n=function(t,e){var n=e.fid;return S(t)+"/"+n}(t,e),r=k(t,e),o={method:"DELETE",headers:r},[4,x((function(){return fetch(n,o)}))];case 1:return(i=a.sent()).ok?[3,3]:[4,_("Delete Installation",i)];case 2:throw a.sent();case 3:return[2]}}))}))}function et(t,e){var n=t.appConfig;return function(t,e){B();var n=q(t),r=E.get(n);r||(r=new Set,E.set(n,r)),r.add(e)}(n,e),function(){!function(t,e){var n=q(t),r=E.get(n);r&&(r.delete(e),0===r.size&&E.delete(n),K())}(n,e)}}function nt(t){return w.create("missing-app-config-values",{valueName:t})}(L=r.a).INTERNAL.registerComponent(new o.a("installations",(function(t){var e=t.getProvider("app").getImmediate(),n={appConfig:function(t){var e,n;if(!t||!t.options)throw nt("App Configuration");if(!t.name)throw nt("App Name");try{for(var r=u(["projectId","apiKey","appId"]),o=r.next();!o.done;o=r.next()){var i=o.value;if(!t.options[i])throw nt(i)}}catch(a){e={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),platformLoggerProvider:t.getProvider("platform-logger")};return{app:e,getId:function(){return function(t){return a(this,void 0,void 0,(function(){var e,n,r;return s(this,(function(o){switch(o.label){case 0:return[4,G(t.appConfig)];case 1:return e=o.sent(),n=e.installationEntry,(r=e.registrationPromise)?r.catch(console.error):W(t).catch(console.error),[2,n.fid]}}))}))}(n)},getToken:function(t){return function(t,e){return void 0===e&&(e=!1),a(this,void 0,void 0,(function(){return s(this,(function(n){switch(n.label){case 0:return[4,Z(t.appConfig)];case 1:return n.sent(),[4,W(t,e)];case 2:return[2,n.sent().token]}}))}))}(n,t)},delete:function(){return function(t){return a(this,void 0,void 0,(function(){var e,n;return s(this,(function(r){switch(r.label){case 0:return[4,z(e=t.appConfig,(function(t){if(!t||0!==t.registrationStatus)return t}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw w.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw w.create("app-offline");case 3:return[4,tt(e,n)];case 4:return r.sent(),[4,J(e)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(n)},onIdChange:function(t){return et(n,t)}}}),"PUBLIC")),L.registerVersion("@firebase/installations",d)},180:function(t,e,n){!function(t){"use strict";function e(t){return Array.prototype.slice.call(t)}function n(t){return new Promise((function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function r(t,e,r){var o,i=new Promise((function(i,a){n(o=t[e].apply(t,r)).then(i,a)}));return i.request=o,i}function o(t,e,n){var o=r(t,e,n);return o.then((function(t){if(t)return new f(t,o.request)}))}function i(t,e,n){n.forEach((function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})}))}function a(t,e,n,o){o.forEach((function(o){o in n.prototype&&(t.prototype[o]=function(){return r(this[e],o,arguments)})}))}function s(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})}))}function u(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return o(this[e],r,arguments)})}))}function c(t){this._index=t}function f(t,e){this._cursor=t,this._request=e}function l(t){this._store=t}function p(t){this._tx=t,this.complete=new Promise((function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}}))}function d(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new p(n)}function h(t){this._db=t}function v(t,e,n){var o=r(indexedDB,"open",[t,e]),i=o.request;return i&&(i.onupgradeneeded=function(t){n&&n(new d(i.result,t.oldVersion,i.transaction))}),o.then((function(t){return new h(t)}))}function g(t){return r(indexedDB,"deleteDatabase",[t])}i(c,"_index",["name","keyPath","multiEntry","unique"]),a(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),u(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),i(f,"_cursor",["direction","key","primaryKey","value"]),a(f,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(f.prototype[t]=function(){var e=this,r=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,r),n(e._request).then((function(t){if(t)return new f(t,e._request)}))}))})})),l.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},i(l,"_store",["name","keyPath","indexNames","autoIncrement"]),a(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),u(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(l,"_store",IDBObjectStore,["deleteIndex"]),p.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},i(p,"_tx",["objectStoreNames","mode"]),s(p,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},i(d,"_db",["name","version","objectStoreNames"]),s(d,"_db",IDBDatabase,["deleteObjectStore","close"]),h.prototype.transaction=function(){return new p(this._db.transaction.apply(this._db,arguments))},i(h,"_db",["name","version","objectStoreNames"]),s(h,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[l,c].forEach((function(n){t in n.prototype&&(n.prototype[t.replace("open","iterate")]=function(){var n=e(arguments),r=n[n.length-1],o=this._store||this._index,i=o[t].apply(o,n.slice(0,-1));i.onsuccess=function(){r(i.result)}})}))})),[c,l].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[];return new Promise((function(o){n.iterateCursor(t,(function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():o(r)):o(r)}))}))})})),t.openDb=v,t.deleteDb=g,Object.defineProperty(t,"__esModule",{value:!0})}(e)}}]);
//# sourceMappingURL=0.1acfeb18.chunk.js.map