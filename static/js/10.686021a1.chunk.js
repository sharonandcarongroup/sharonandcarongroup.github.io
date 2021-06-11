/*! For license information please see 10.686021a1.chunk.js.LICENSE.txt */
(this.webpackJsonpsharoncaronflags=this.webpackJsonpsharoncaronflags||[]).push([[10],{191:function(t,e,i){"use strict";i.r(e);var r=i(18);i(179);var n=function(){return(n=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function s(t,e,i,r){return new(i||(i=Promise))((function(n,s){function o(t){try{c(r.next(t))}catch(e){s(e)}}function a(t){try{c(r.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))}function o(t,e){var i,r,n,s,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(n=(n=o.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(a){s=[6,a],r=0}finally{i=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}Object.create;Object.create;var a,c=i(0),u=i(19),h=i(14),l=function(){function t(t,e,i,r){this.client=t,this.storage=e,this.storageCache=i,this.logger=r}return t.prototype.isCachedDataFresh=function(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;var i=Date.now()-e,r=i<=t;return this.logger.debug("Config fetch cache check. Cache age millis: "+i+". Cache max age millis (minimumFetchIntervalMillis setting): "+t+". Is cache hit: "+r+"."),r},t.prototype.fetch=function(t){return s(this,void 0,void 0,(function(){var e,i,r,n,s;return o(this,(function(o){switch(o.label){case 0:return[4,Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()])];case 1:return e=o.sent(),i=e[0],(r=e[1])&&this.isCachedDataFresh(t.cacheMaxAgeMillis,i)?[2,r]:(t.eTag=r&&r.eTag,[4,this.client.fetch(t)]);case 2:return n=o.sent(),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],200===n.status&&s.push(this.storage.setLastSuccessfulFetchResponse(n)),[4,Promise.all(s)];case 3:return o.sent(),[2,n]}}))}))},t}(),f=((a={})["registration-window"]="Undefined window object. This SDK only supports usage in a browser environment.",a["registration-project-id"]="Undefined project identifier. Check Firebase app initialization.",a["registration-api-key"]="Undefined API key. Check Firebase app initialization.",a["registration-app-id"]="Undefined app identifier. Check Firebase app initialization.",a["storage-open"]="Error thrown when opening storage. Original error: {$originalErrorMessage}.",a["storage-get"]="Error thrown when reading from storage. Original error: {$originalErrorMessage}.",a["storage-set"]="Error thrown when writing to storage. Original error: {$originalErrorMessage}.",a["storage-delete"]="Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",a["fetch-client-network"]="Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",a["fetch-timeout"]='The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',a["fetch-throttle"]='The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',a["fetch-client-parse"]="Fetch client could not parse response. Original error: {$originalErrorMessage}.",a["fetch-status"]="Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",a),g=new c.b("remoteconfig","Remote Config",f);var p=function(){function t(t,e,i,r,n,s){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=i,this.projectId=r,this.apiKey=n,this.appId=s}return t.prototype.fetch=function(t){return s(this,void 0,void 0,(function(){var e,i,r,n,s,a,c,u,h,l,f,p,d,m,v,y,w,b,_;return o(this,(function(o){switch(o.label){case 0:return[4,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()])];case 1:e=o.sent(),i=e[0],r=e[1],n=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",s=n+"/v1/projects/"+this.projectId+"/namespaces/"+this.namespace+":fetch?key="+this.apiKey,a={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:i,app_instance_id_token:r,app_id:this.appId,language_code:(void 0===C&&(C=navigator),C.languages&&C.languages[0]||C.language)},u={method:"POST",headers:a,body:JSON.stringify(c)},h=fetch(s,u),l=new Promise((function(e,i){t.signal.addEventListener((function(){var t=new Error("The operation was aborted.");t.name="AbortError",i(t)}))})),o.label=2;case 2:return o.trys.push([2,5,,6]),[4,Promise.race([h,l])];case 3:return o.sent(),[4,h];case 4:return f=o.sent(),[3,6];case 5:throw p=o.sent(),d="fetch-client-network","AbortError"===p.name&&(d="fetch-timeout"),g.create(d,{originalErrorMessage:p.message});case 6:if(m=f.status,v=f.headers.get("ETag")||void 0,200!==f.status)return[3,11];b=void 0,o.label=7;case 7:return o.trys.push([7,9,,10]),[4,f.json()];case 8:return b=o.sent(),[3,10];case 9:throw _=o.sent(),g.create("fetch-client-parse",{originalErrorMessage:_.message});case 10:y=b.entries,w=b.state,o.label=11;case 11:if("INSTANCE_STATE_UNSPECIFIED"===w?m=500:"NO_CHANGE"===w?m=304:"NO_TEMPLATE"!==w&&"EMPTY_CONFIG"!==w||(y={}),304!==m&&200!==m)throw g.create("fetch-status",{httpStatus:m});return[2,{status:m,eTag:v,config:y}]}var C}))}))},t}(),d=function(){function t(){this.listeners=[]}return t.prototype.addEventListener=function(t){this.listeners.push(t)},t.prototype.abort=function(){this.listeners.forEach((function(t){return t()}))},t}(),m=["1","true","t","yes","y","on"],v=function(){function t(t,e){void 0===e&&(e=""),this._source=t,this._value=e}return t.prototype.asString=function(){return this._value},t.prototype.asBoolean=function(){return"static"!==this._source&&m.indexOf(this._value.toLowerCase())>=0},t.prototype.asNumber=function(){if("static"===this._source)return 0;var t=Number(this._value);return isNaN(t)&&(t=0),t},t.prototype.getSource=function(){return this._source},t}(),y=function(){function t(t,e,i,r,n){this.app=t,this._client=e,this._storageCache=i,this._storage=r,this._logger=n,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}return t.prototype.setLogLevel=function(t){switch(t){case"debug":this._logger.logLevel=u.a.DEBUG;break;case"silent":this._logger.logLevel=u.a.SILENT;break;default:this._logger.logLevel=u.a.ERROR}},Object.defineProperty(t.prototype,"fetchTimeMillis",{get:function(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastFetchStatus",{get:function(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"},enumerable:!1,configurable:!0}),t.prototype.activate=function(){return s(this,void 0,void 0,(function(){var t,e,i;return o(this,(function(r){switch(r.label){case 0:return[4,Promise.all([this._storage.getLastSuccessfulFetchResponse(),this._storage.getActiveConfigEtag()])];case 1:return t=r.sent(),e=t[0],i=t[1],e&&e.config&&e.eTag&&e.eTag!==i?[4,Promise.all([this._storageCache.setActiveConfig(e.config),this._storage.setActiveConfigEtag(e.eTag)])]:[2,!1];case 2:return r.sent(),[2,!0]}}))}))},t.prototype.ensureInitialized=function(){var t=this;return this._initializePromise||(this._initializePromise=this._storageCache.loadFromStorage().then((function(){t._isInitializationComplete=!0}))),this._initializePromise},t.prototype.fetch=function(){return s(this,void 0,void 0,(function(){var t,e,i,r=this;return o(this,(function(n){switch(n.label){case 0:t=new d,setTimeout((function(){return s(r,void 0,void 0,(function(){return o(this,(function(e){return t.abort(),[2]}))}))}),this.settings.fetchTimeoutMillis),n.label=1;case 1:return n.trys.push([1,4,,6]),[4,this._client.fetch({cacheMaxAgeMillis:this.settings.minimumFetchIntervalMillis,signal:t})];case 2:return n.sent(),[4,this._storageCache.setLastFetchStatus("success")];case 3:return n.sent(),[3,6];case 4:return e=n.sent(),u="fetch-throttle",i=(a=e)instanceof c.c&&-1!==a.code.indexOf(u)?"throttle":"failure",[4,this._storageCache.setLastFetchStatus(i)];case 5:throw n.sent(),e;case 6:return[2]}var a,u}))}))},t.prototype.fetchAndActivate=function(){return s(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,this.fetch()];case 1:return t.sent(),[2,this.activate()]}}))}))},t.prototype.getAll=function(){var t=this;return function(t,e){void 0===t&&(t={});void 0===e&&(e={});return Object.keys(n(n({},t),e))}(this._storageCache.getActiveConfig(),this.defaultConfig).reduce((function(e,i){return e[i]=t.getValue(i),e}),{})},t.prototype.getBoolean=function(t){return this.getValue(t).asBoolean()},t.prototype.getNumber=function(t){return this.getValue(t).asNumber()},t.prototype.getString=function(t){return this.getValue(t).asString()},t.prototype.getValue=function(t){this._isInitializationComplete||this._logger.debug('A value was requested for key "'+t+'" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.');var e=this._storageCache.getActiveConfig();return e&&void 0!==e[t]?new v("remote",e[t]):this.defaultConfig&&void 0!==this.defaultConfig[t]?new v("default",String(this.defaultConfig[t])):(this._logger.debug('Returning static value for key "'+t+'". Define a default or remote value if this is unintentional.'),new v("static"))},t}();function w(t,e){var i=t.target.error||void 0;return g.create(e,{originalErrorMessage:i&&i.message})}var b="app_namespace_store";var _=function(){function t(t,e,i,r){void 0===r&&(r=new Promise((function(t,e){var i=indexedDB.open("firebase_remote_config",1);i.onerror=function(t){e(w(t,"storage-open"))},i.onsuccess=function(e){t(e.target.result)},i.onupgradeneeded=function(t){var e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore(b,{keyPath:"compositeKey"})}}}))),this.appId=t,this.appName=e,this.namespace=i,this.openDbPromise=r}return t.prototype.getLastFetchStatus=function(){return this.get("last_fetch_status")},t.prototype.setLastFetchStatus=function(t){return this.set("last_fetch_status",t)},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.get("last_successful_fetch_timestamp_millis")},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.set("last_successful_fetch_timestamp_millis",t)},t.prototype.getLastSuccessfulFetchResponse=function(){return this.get("last_successful_fetch_response")},t.prototype.setLastSuccessfulFetchResponse=function(t){return this.set("last_successful_fetch_response",t)},t.prototype.getActiveConfig=function(){return this.get("active_config")},t.prototype.setActiveConfig=function(t){return this.set("active_config",t)},t.prototype.getActiveConfigEtag=function(){return this.get("active_config_etag")},t.prototype.setActiveConfigEtag=function(t){return this.set("active_config_etag",t)},t.prototype.getThrottleMetadata=function(){return this.get("throttle_metadata")},t.prototype.setThrottleMetadata=function(t){return this.set("throttle_metadata",t)},t.prototype.deleteThrottleMetadata=function(){return this.delete("throttle_metadata")},t.prototype.get=function(t){return s(this,void 0,void 0,(function(){var e,i=this;return o(this,(function(r){switch(r.label){case 0:return[4,this.openDbPromise];case 1:return e=r.sent(),[2,new Promise((function(r,n){var s=e.transaction([b],"readonly").objectStore(b),o=i.createCompositeKey(t);try{var a=s.get(o);a.onerror=function(t){n(w(t,"storage-get"))},a.onsuccess=function(t){var e=t.target.result;r(e?e.value:void 0)}}catch(c){n(g.create("storage-get",{originalErrorMessage:c&&c.message}))}}))]}}))}))},t.prototype.set=function(t,e){return s(this,void 0,void 0,(function(){var i,r=this;return o(this,(function(n){switch(n.label){case 0:return[4,this.openDbPromise];case 1:return i=n.sent(),[2,new Promise((function(n,s){var o=i.transaction([b],"readwrite").objectStore(b),a=r.createCompositeKey(t);try{var c=o.put({compositeKey:a,value:e});c.onerror=function(t){s(w(t,"storage-set"))},c.onsuccess=function(){n()}}catch(u){s(g.create("storage-set",{originalErrorMessage:u&&u.message}))}}))]}}))}))},t.prototype.delete=function(t){return s(this,void 0,void 0,(function(){var e,i=this;return o(this,(function(r){switch(r.label){case 0:return[4,this.openDbPromise];case 1:return e=r.sent(),[2,new Promise((function(r,n){var s=e.transaction([b],"readwrite").objectStore(b),o=i.createCompositeKey(t);try{var a=s.delete(o);a.onerror=function(t){n(w(t,"storage-delete"))},a.onsuccess=function(){r()}}catch(c){n(g.create("storage-delete",{originalErrorMessage:c&&c.message}))}}))]}}))}))},t.prototype.createCompositeKey=function(t){return[this.appId,this.appName,this.namespace,t].join()},t}(),C=function(){function t(t){this.storage=t}return t.prototype.getLastFetchStatus=function(){return this.lastFetchStatus},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.lastSuccessfulFetchTimestampMillis},t.prototype.getActiveConfig=function(){return this.activeConfig},t.prototype.loadFromStorage=function(){return s(this,void 0,void 0,(function(){var t,e,i,r,n,s;return o(this,(function(o){switch(o.label){case 0:return t=this.storage.getLastFetchStatus(),e=this.storage.getLastSuccessfulFetchTimestampMillis(),i=this.storage.getActiveConfig(),[4,t];case 1:return(r=o.sent())&&(this.lastFetchStatus=r),[4,e];case 2:return(n=o.sent())&&(this.lastSuccessfulFetchTimestampMillis=n),[4,i];case 3:return(s=o.sent())&&(this.activeConfig=s),[2]}}))}))},t.prototype.setLastFetchStatus=function(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)},t.prototype.setActiveConfig=function(t){return this.activeConfig=t,this.storage.setActiveConfig(t)},t}();function S(t,e){return new Promise((function(i,r){var n=Math.max(e-Date.now(),0),s=setTimeout(i,n);t.addEventListener((function(){clearTimeout(s),r(g.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}var T,E=function(){function t(t,e){this.client=t,this.storage=e}return t.prototype.fetch=function(t){return s(this,void 0,void 0,(function(){var e;return o(this,(function(i){switch(i.label){case 0:return[4,this.storage.getThrottleMetadata()];case 1:return e=i.sent()||{backoffCount:0,throttleEndTimeMillis:Date.now()},[2,this.attemptFetch(t,e)]}}))}))},t.prototype.attemptFetch=function(t,e){var i=e.throttleEndTimeMillis,r=e.backoffCount;return s(this,void 0,void 0,(function(){var e,n,s;return o(this,(function(o){switch(o.label){case 0:return[4,S(t.signal,i)];case 1:o.sent(),o.label=2;case 2:return o.trys.push([2,5,,7]),[4,this.client.fetch(t)];case 3:return e=o.sent(),[4,this.storage.deleteThrottleMetadata()];case 4:return o.sent(),[2,e];case 5:if(!function(t){if(!(t instanceof c.c)||!t.customData)return!1;var e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(n=o.sent()))throw n;return s={throttleEndTimeMillis:Date.now()+Object(c.j)(r),backoffCount:r+1},[4,this.storage.setThrottleMetadata(s)];case 6:return o.sent(),[2,this.attemptFetch(t,s)];case 7:return[2]}}))}))},t}(),M="@firebase/remote-config";(T=r.a).INTERNAL.registerComponent(new h.a("remoteConfig",(function(t,e){var i=e.instanceIdentifier,r=t.getProvider("app").getImmediate(),n=t.getProvider("installations").getImmediate();if("undefined"===typeof window)throw g.create("registration-window");var s=r.options,o=s.projectId,a=s.apiKey,c=s.appId;if(!o)throw g.create("registration-project-id");if(!a)throw g.create("registration-api-key");if(!c)throw g.create("registration-app-id");i=i||"firebase";var h=new _(c,r.name,i),f=new C(h),d=new u.b(M);d.logLevel=u.a.ERROR;var m=new p(n,T.SDK_VERSION,i,o,a,c),v=new E(m,h),w=new l(v,h,f,d),b=new y(r,w,f,h,d);return b.ensureInitialized(),b}),"PUBLIC").setMultipleInstances(!0)),T.registerVersion(M,"0.1.39")}}]);
//# sourceMappingURL=10.686021a1.chunk.js.map