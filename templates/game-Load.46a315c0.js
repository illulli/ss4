webpackJsonp([8,9,14,17],{188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.functions=t.constants=void 0;var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.constants={fsm:{keys:{state:"state",item:"itemId",itemType:"itemType"},zones:{lounge:"lounge",control:"control"},actions:{mine:"mine",inventory:"inventory"},questions:{idElem:"idElem"},items:{asteroidSample:"asteroidSample"}},sim:{engine:{ok:"ok",overheat:"overheat",exploded:"explo"}},IO:{vId:"vId",kId:"kId"},items:{asteroidSample:"asteroidSample",element:"element",weight:"weight",stock:"stock",ship:"ship",engine:"engine",hull:"hull"},relations:{contains:"contains"},elements:{iron:{shc:20},copper:{shc:10},potassium:{shc:30},chromium:{shc:10}}},t.functions={propKid:function(e){return{kId:e}},componentTag:function(e,t){return o.default.createElement("tag",t)}}},190:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"h",function(){return i}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return s}),n.d(t,"f",function(){return u}),n.d(t,"g",function(){return l}),n.d(t,"a",function(){return c});var r="persist:",o="persist/FLUSH",i="persist/REHYDRATE",a="persist/PAUSE",s="persist/PERSIST",u="persist/PURGE",l="persist/REGISTER",c=-1},191:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return console.log("action set zone"),{type:"SET_ZONE",payload:{zone:e,state:t}}}function i(e,t){return{type:"SET_FSM_STATE",payload:{id:e,state:t}}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.setZone=o,t.setFSMState=i;t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_FSM_STATE":return console.log("action setfsm "+t.payload.id),a({},e,r({},t.payload.id,a({},e[t.payload.id],t.payload.state)));default:return e}}},192:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t,n,r){return console.log("action addItem "+e+" type "+t+" id "+n),{type:"ADD_ITEM",payload:{container:e,type:t,id:n,item:r}}}function i(e,t,n,r){return console.log("action deleteItem "+e+" type "+t+" id "+n),{type:"DEL_ITEM",payload:{container:e,type:t,id:n,item:r}}}function a(e,t,n){return console.log("action editItem type "+e+" id "+t),{type:"EDIT_ITEM",payload:{type:e,id:t,props:n}}}function s(e,t,n){return console.log("action edit item key "+t+" val "+n),{type:"EDIT_USER_ANS",payload:{item:e,key:t,val:n}}}Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.addItem=o,t.deleteItem=i,t.editItem=a,t.editUserAns=s;var l=n(188);t.reducer=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(t={},r(t,l.constants.items.ship,(e={},r(e,l.constants.items.engine,{id:l.constants.items.engine,element:"iron",temp:l.constants.elements.iron.shc,state:l.constants.sim.engine.ok}),r(e,l.constants.items.hull,{id:l.constants.items.hull,element:"iron",temp:l.constants.elements.iron.shc,state:l.constants.sim.engine.ok}),e)),r(t,l.constants.items.asteroidSample,{}),r(t,l.constants.items.stock,{}),t),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(o.type){case"ADD_ITEM":return console.log("items reducer add sample"),u({},n,r({},o.payload.type,u({},n[o.payload.type],r({},o.payload.id,o.payload.item))));case"DEL_ITEM":console.log("items reducer del item");var i=u({},n[o.payload.type]);return delete i[o.payload.id],u({},n,r({},o.payload.type,i));case"EDIT_ITEM":var a=o.payload.id?n[o.payload.type][o.payload.id]:n[o.payload.type],s=u({},a,o.payload.props);return o.payload.id&&(s=r({},o.payload.id,s)),console.log("edit item with props",o.payload.props),console.log("edit item = ",s),u({},n,r({},o.payload.type,u({},n[o.payload.type],s)));case"EDIT_USER_ANS":var c=u({},o.payload.item,{user:u({},o.payload.item.user,r({},o.payload.key,o.payload.val))});return u({},n,r({},o.payload.item.type,u({},n[o.payload.item.type],r({},o.payload.item.id,c))));default:return n}}},196:function(e,t,n){"use strict";function r(e){return e}function o(e){return{type:"NEXT_STEP",payload:{step:e}}}function i(e){return{type:"PLAY_SIM",payload:{play:e}}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.dispatchAny=r,t.nextStep=o,t.playSim=i;t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{ui:{play:!0},sim:{t:0,temp:20}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"NEXT_STEP":return a({},e,{sim:a({},e.sim,t.payload.step)});case"PLAY_SIM":return a({},e,{ui:a({},e.ui,{play:t.payload.play})});default:return e}}},197:function(e,t,n){"use strict";function r(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}Object.defineProperty(t,"__esModule",{value:!0}),t.guid=r},198:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){var n=void 0!==e.version?e.version:i.a,o=(e.debug,void 0===e.stateReconciler?a.a:e.stateReconciler),d=e.getStoredState||u.a,p=void 0!==e.timeout?e.timeout:f,y=null,m=!1,v=!0,h=function(e){return e._persist.rehydrated&&y&&!v&&y.update(e),e};return function(a,u){var f=a||{},g=f._persist,b=r(f,["_persist"]),_=b;if(u.type===i.e){var O=!1,w=function(t,n){O||(u.rehydrate(e.key,t,n),O=!0)};if(p&&setTimeout(function(){!O&&w(void 0,new Error('redux-persist: persist timed out for persist key "'+e.key+'"'))},p),v=!1,y||(y=Object(s.a)(e)),g)return a;if("function"!=typeof u.rehydrate||"function"!=typeof u.register)throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return u.register(e.key),d(e).then(function(t){(e.migrate||function(e,t){return Promise.resolve(e)})(t,n).then(function(e){w(e)},function(e){w(void 0,e)})},function(e){w(void 0,e)}),c({},t(_,u),{_persist:{version:n,rehydrated:!1}})}if(u.type===i.f)return m=!0,u.result(Object(l.a)(e)),c({},t(_,u),{_persist:g});if(u.type===i.b)return u.result(y&&y.flush()),c({},t(_,u),{_persist:g});if(u.type===i.d)v=!0;else if(u.type===i.h){if(m)return c({},_,{_persist:c({},g,{rehydrated:!0})});if(u.key===e.key){var S=t(_,u),E=u.payload,j=!1!==o&&void 0!==E?o(E,a,S,e):S,P=c({},j,{_persist:c({},g,{rehydrated:!0})});return h(P)}}if(!g)return t(a,u);var k=t(_,u);return k===_?a:(k._persist=g,h(k))}}t.a=o;var i=n(190),a=n(238),s=n(204),u=n(205),l=n(206),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=5e3},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getRandomItem=function(e){return e[Math.floor(e.length*Math.random())]}},201:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(s),l=n(32),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.signIn=n.signIn.bind(n),n.signOut=n.signOut.bind(n),n}return i(t,e),a(t,[{key:"signIn",value:function(){gapi.auth2.getAuthInstance().signIn()}},{key:"signOut",value:function(){gapi.auth2.getAuthInstance().signOut()}},{key:"render",value:function(){return this.props.gapi.gapiReady?this.props.gapi.isSignedIn?u.default.createElement("button",{onClick:this.signOut},"sign out"):u.default.createElement("button",{onClick:this.signIn},"sign in"):u.default.createElement("p",null,"google apis loading...")}}]),t}(u.default.Component),f=function(e){return{gapi:e.gapi}};t.default=(0,l.connect)(f)(c)},204:function(e,t,n){"use strict";function r(e){function t(){if(0===v.length)return h&&clearInterval(h),void(h=null);var e=v.shift(),t=l.reduce(function(t,n){return n.in(t,e,y)},y[e]);if(void 0!==t)try{m[e]=p(t)}catch(e){console.error("redux-persist/createPersistoid: error serializing state",e)}else delete m[e];0===v.length&&n()}function n(){Object.keys(m).forEach(function(e){void 0===y[e]&&delete m[e]}),g=d.setItem(f,p(m)).catch(a)}function r(e){return(!u||-1!==u.indexOf(e)||"_persist"===e)&&(!s||-1===s.indexOf(e))}function a(e){}var s=e.blacklist||null,u=e.whitelist||null,l=e.transforms||[],c=e.throttle||0,f=""+(void 0!==e.keyPrefix?e.keyPrefix:i.c)+e.key,d=e.storage,p=!1===e.serialize?function(e){return e}:o,y={},m={},v=[],h=null,g=null;return{update:function(e){Object.keys(e).forEach(function(t){r(t)&&y[t]!==e[t]&&-1===v.indexOf(t)&&v.push(t)}),Object.keys(y).forEach(function(t){void 0===e[t]&&v.push(t)}),null===h&&(h=setInterval(t,c)),y=e},flush:function(){for(;0!==v.length;)t();return g||Promise.resolve()}}}function o(e){return JSON.stringify(e)}t.a=r;var i=n(190)},205:function(e,t,n){"use strict";function r(e){var t=e.transforms||[],n=""+(void 0!==e.keyPrefix?e.keyPrefix:i.c)+e.key,r=e.storage,a=(e.debug,!1===e.serialize?function(e){return e}:o);return r.getItem(n).then(function(e){if(e)try{var n={},r=a(e);return Object.keys(r).forEach(function(e){n[e]=t.reduceRight(function(t,n){return n.out(t,e,r)},a(r[e]))}),n}catch(e){throw e}})}function o(e){return JSON.parse(e)}t.a=r;var i=n(190)},206:function(e,t,n){"use strict";function r(e){var t=e.storage,n=""+(void 0!==e.keyPrefix?e.keyPrefix:i.c)+e.key;return t.removeItem(n,o)}function o(e){}t.a=r;var i=n(190)},212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    display: flex;\n    justify-content: flex-end;\n    background-color:red;\n"],["\n    display: flex;\n    justify-content: flex-end;\n    background-color:red;\n"]),l=n(0),c=r(l),f=n(33),d=n(189),p=r(d),y=n(211),m=r(y),v=n(201),h=r(v),g=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),s(t,[{key:"render",value:function(){return c.default.createElement(b,null,c.default.createElement(m.default,{icon:"facebook"}),c.default.createElement(m.default,{icon:"twitter"}),c.default.createElement(m.default,{icon:"google"}),c.default.createElement(h.default,null))}}]),t}(c.default.Component);t.default=(0,f.withSiteData)(g);var b=p.default.div(u)},213:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=r(u),c=n(32),f=n(13),d=n(70),p=r(d),y=n(230),m=r(y),v=n(237),h=n(244),g=r(h),b=n(247),_=r(b),O=n(248);"undefined"==typeof window&&(e.window={});var w=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.persistConfig={key:e.savefile,storage:g.default,stateReconciler:_.default},n.pReducer=(0,v.persistReducer)(n.persistConfig,m.default),n.store=(0,f.createStore)(n.pReducer,{},(0,f.applyMiddleware)(p.default)),n.persistor=(0,v.persistStore)(n.store),n}return a(t,e),s(t,[{key:"render",value:function(){return l.default.createElement(c.Provider,{store:this.store},l.default.createElement(O.PersistGate,{loading:l.default.createElement("p",null,"persisting!"),persistor:this.persistor},this.props.children))}}]),t}(l.default.Component);t.default=w}).call(t,n(4))},226:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return e+"-"+t}function u(e,t,n){return e+":"+t+"-"+n}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),f=r(c),d=n(213),p=r(d),y=(n(197),n(32)),m=n(212),v=r(m);"undefined"==typeof window&&(e.window={});var h=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.createFileWithJSONContent=function(e,t,n,r,o){var i="-------314159265358979323846",a="\r\n--"+i+"\r\n";console.log("creating file with prop gamename val "+this.props.gamename);var s={name:n,mimeType:"application/json",appProperties:{gamename:""+this.props.gamename}},u=a+"Content-Type: application/json\r\n\r\n"+JSON.stringify(s)+a+"Content-Type: application/json\r\n\r\n"+r+"\r\n---------314159265358979323846--",l="/upload/drive/v3/files",c="POST";e||(l=l+"/"+t,c="PATCH"),console.log("uploading content, method "+c+" path "+l);var f=gapi.client.request({path:l,method:c,params:{uploadType:"multipart"},headers:{"Content-Type":'multipart/related; boundary="'+i+'"'},body:u});o||(o=function(e){console.log(e)}),f.execute(o)},n.onNewGame=n.onNewGame.bind(n),n.onLoadGame=n.onLoadGame.bind(n),n.getLocalFiles=n.getLocalFiles.bind(n),n.listSaveFiles=n.listSaveFiles.bind(n),n.state={id:null,local:{},synced:!1,syncing:!1},n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){this.getLocalFiles()}},{key:"componentDidUpdate",value:function(e,t){!this.props.gapi.isSignedIn||this.state.synced||this.state.syncing||this.syncSaves()}},{key:"getLocalFiles",value:function(){var e=this,t=window.localStorage,n=new RegExp("("+this.props.gamename+"-A)"),r=[];for(var o in t)t.hasOwnProperty(o)&&o.match(n)&&r.push({key:o,val:t.getItem(o)});var i=r.map(function(e){return e.key.split("-")[1]});if(console.log("local ids",i),i){var a={};i.map(function(n){a[n]||(a[n]={date:t.getItem(u("date",e.props.gamename,"A")),desc:t.getItem(u("desc",e.props.gamename,"A"))})}),this.setState({local:a}),console.log("local meta",a)}}},{key:"onNewGame",value:function(){this.saveLocalMeta(),this.setState({filename:s(this.props.gamename,name)})}},{key:"saveLocalMeta",value:function(){var e=new Date;console.log("new game name: A date: "+e.getTime());var t=window.localStorage;t.setItem(u("date",this.props.gamename,"A"),e.getTime()),t.setItem(u("desc",this.props.gamename,"A"),"a game description")}},{key:"saveGame",value:function(){var e=s(this.props.gamename,"A");console.log("saving game to drive name "+e);var t=window.localStorage;this.listSaveFiles().then(function(n){var r=n.result.files;if(console.log("saveGame response",n),console.log("saving game, drive files found: "+r.length),r&&r.length>0){var o=r[0].id,i=t.getItem("persist:"+e);console.log("updated file from local",i),this.createFileWithJSONContent(!1,o,e,i,function(e){console.log("create file with json callback",e)})}else{var a=t.getItem("persist:"+e);console.log("create file from local",a),this.createFileWithJSONContent(!0,null,e,a,function(e){console.log("create file with json callback",e)})}this.saveLocalMeta()}.bind(this))}},{key:"listSaveFiles",value:function(){return gapi.client.drive.files.list({q:"appProperties has { key='gamename' and value='"+this.props.gamename+"' }",fields:"files(id, name, mimeType, modifiedTime)"})}},{key:"getFile",value:function(e){return gapi.client.drive.files.get({fileId:e,alt:"media",fields:"id, name, mimeType, modifiedTime"})}},{key:"syncSaves",value:function(){this.setState({syncing:!0});var e=window.localStorage;this.listSaveFiles().then(function(t){var n=t.result.files;if(console.log("loadGame response",t),console.log("loadinggame, drive files found: "+n.length),n&&n.length>0){var r=n[0].modifiedTime,o=e.getItem(u("date",this.props.gamename,"A")),i=new Date(r);console.log("driveTime "+r,i),console.log("is drive.getTime "+i.getTime()+" less than local time? "+o+" -> "+(i.getTime()<o)),i.getTime()>o?(console.log("drive file modified later than local file, downloading"),this.downloadSave(n[0])):(console.log("local file is later than drive file, which save file do you want?"),this.setState({saveConflict:n[0]}))}}.bind(this)).catch(function(e){console.log("syncSaves failed",e),this.setState({syncing:!1,synced:!0})})}},{key:"downloadSave",value:function(e){var t=this;console.log("downloading saving file ",e);var n=window.localStorage,r=e.id,o=e.name;console.log("downloading save file id: "+r+" name: "+o),this.getFile(r).then(function(e){console.log("get file result",e),console.log("file body",e.body),console.log("file result",e.result);n.setItem("persist:"+o,e.body);console.log("saving drive file to local storage at persist:"+o),t.setState({syncing:!1,synced:!0,saveConflict:null,error:null})}).catch(function(e){console.log("fet file error",e),t.setState({syncing:!1,synced:!0,error:e,saveConflict:null})})}},{key:"getAppData",value:function(){console.log("getting app data from drive"),console.log("drive",gapi.client.drive);gapi.client.drive.files.list({spaces:"appDataFolder",fields:"nextPageToken, files(id, name)",pageSize:100}).then(function(e){console.log("app data result",e)}).catch(function(e){console.log("app data error",e)})}},{key:"renderNewGame",value:function(){var e=this;return this.state.syncing?f.default.createElement("button",{onClick:function(){e.onNewGame()},disabled:!0},"New Game"):f.default.createElement("button",{onClick:function(){e.onNewGame()}},"New Game")}},{key:"renderSaves",value:function(){var e=this;if(!this.state.syncing&&this.state.local)return console.log("rendering save files, local:",this.state.local),Object.keys(this.state.local).map(function(t,n){var r=e.state.local[t];return f.default.createElement("button",{onClick:function(){e.onLoadGame(t)}},"save ",n," date: ",r.date,", desc: ",r.desc)})}},{key:"onLoadGame",value:function(e){var t=s(this.props.gamename,"A");console.log("load game name: "+t),this.setState({filename:t})}},{key:"renderSaveConflict",value:function(){var e=this;return this.state.saveConflict?f.default.createElement("div",null,f.default.createElement("p",null,"Your local file is ahead of your drive file, which would you like to continue with? (the other will be deleted)"),f.default.createElement("button",{onClick:function(){e.downloadSave(e.state.saveConflict)}},"Choose drive"),f.default.createElement("button",{onClick:function(){e.saveGame(),console.log("saving local game",e.state),e.setState({syncing:!1,synced:!0,saveConflict:null,error:null})}},"Choose local")):f.default.createElement("p",null,"probelm displaying conflict...")}},{key:"render",value:function(){var e=this;return this.state.saveConflict?this.renderSaveConflict():this.state.synced&&this.state.filename?f.default.createElement(p.default,{savefile:this.state.filename},f.default.createElement("button",{onClick:function(){e.saveGame()}},"save game to drive"),this.props.children):f.default.createElement("div",null,f.default.createElement(v.default,null),this.state.synced?f.default.createElement("p",null,"synced"):f.default.createElement("p",null,"not synced"),f.default.createElement("hr",null),this.renderNewGame(),f.default.createElement("hr",null),this.renderSaves(),f.default.createElement("hr",null),f.default.createElement("hr",null))}}]),t}(f.default.Component),g=function(e){return{gapi:e.gapi}};t.default=(0,y.connect)(g)(h)}).call(t,n(4))},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(13),o=n(231),i=n(191),a=n(192),s=n(232),u=n(196),l=n(233),c=(0,r.combineReducers)({simulation:u.reducer,game:o.reducer,fsm:i.reducer,items:a.reducer,relations:s.reducer}),f=function(e,t){var n=(0,l.parentReducer)(e,t);return c(n,t)};t.default=f},231:function(e,t,n){"use strict";function r(e,t){return{type:"SET_HEALTH",payload:{time:e,temp:t}}}Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0,t.setHealth=r;var o=n(188);t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{health:100,zone:o.constants.fsm.zones.lounge};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).type,e}},232:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0;var o=n(188);t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r({},o.constants.relations.contains,r({},o.constants.fsm.zones.control,r({},o.constants.items.ship,[o.constants.items.engine,o.constants.items.hull])));return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).type,e}},233:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.moveItem=t.parentReducer=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=(n(234),n(188));t.parentReducer=function(e,t){switch(t.type){case"ADD_ITEM":var n=e.relations[a.constants.relations.contains][t.payload.container]?e.relations[a.constants.relations.contains][t.payload.container]:{},s=n[t.payload.type]?n[t.payload.type]:[];if(s.indexOf(t.payload.id)<=-1)return i({},e,{relations:r({},a.constants.relations.contains,i({},e.relations[a.constants.relations.contains],r({},t.payload.container,i({},n,r({},t.payload.type,[].concat(o(s),[t.payload.id]))))))});break;case"DEL_ITEM":var u=e.relations[a.constants.relations.contains][t.payload.container],l=u[t.payload.type].filter(function(e){if(e!=t.payload.id)return e});return i({},e,{relations:r({},a.constants.relations.contains,i({},e.relations[a.constants.relations.contains],r({},t.payload.container,i({},u,r({},t.payload.type,l)))))});case"MOVE_ITEM":console.log("parent reducer move item");break;case"SET_ZONE":return i({},e,{fsm:i({},e.fsm,r({},t.payload.zone,{state:t.payload.state})),game:i({},e.game,{zone:t.payload.zone})});default:return e}return e},t.moveItem=function(e,t,n){return{type:"MOVE_ITEM",payload:{from:e,to:t,item:n}}}},234:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return{type:"ADD_SAMPLE",payload:{sample:e}}}Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.addSample=o;var a=n(235),s=n(236),u=(0,s.createAsteroid)();t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r({},a.constants.inventory.items,r({},a.constants.mine.samples,r({},u.sample.id,u.sample))),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ADD_SAMPLE":return i({},e,r({},a.constants.inventory.items,r({},a.constants.mine.samples,i({},e.inventory.samples,r({},t.payload.sample.id,t.payload.sample)))));default:return e}}},235:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=t.constants={input:{kId:"kId",vId:"vId"},store:{state:"state"},names:{lounge:"lounge"},types:{zones:"zones",actions:"actions",questions:"questions"},zones:{lounge:"lounge",control:"control"},questions:{read:"read"},actions:{mine:"mine",inventory:"inventory"},read:{q1:"q1"},mine:{samples:"samples"},inventory:{items:"items"},logTypes:{action:"action",answer:"answer"}};t.messages={changeZone:function(e,t){var n;return n={},r(n,i.input.vId,e),r(n,"changeFrom",function(e){return{to:t,from:e}}),n},toFSMState:function(e,t){return{id:e,state:t}},zone:function(e){return r({},i.input.vId,e)},action:function(e){return r({},i.input.vId,e)},output:function(e,t){return o(r({},i.input.vId,e),t)}}},236:function(e,t,n){"use strict";function r(){var e=["iron","magnesium","copper","silver"],t=(0,o.getRandomItem)(e);return{description:"it is a "+t+" asteroid",sample:{id:(0,i.guid)(),name:"unknown sample",game:{weight:10*Math.random()+5,element:t},user:{weight:null,element:null}}}}Object.defineProperty(t,"__esModule",{value:!0}),t.createAsteroid=r;var o=n(199),i=n(197)},237:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(198);n.d(t,"persistReducer",function(){return r.a});var o=n(239);n.d(t,"persistCombineReducers",function(){return o.a});var i=n(241);n.d(t,"persistStore",function(){return i.a});var a=n(242);n.d(t,"createMigrate",function(){return a.a});var s=n(243);n.d(t,"createTransform",function(){return s.a});var u=n(205);n.d(t,"getStoredState",function(){return u.a});var l=n(204);n.d(t,"createPersistoid",function(){return l.a});var c=n(206);n.d(t,"purgeStoredState",function(){return c.a});var f=n(190);n.d(t,"KEY_PREFIX",function(){return f.c}),n.d(t,"FLUSH",function(){return f.b}),n.d(t,"REHYDRATE",function(){return f.h}),n.d(t,"PAUSE",function(){return f.d}),n.d(t,"PERSIST",function(){return f.e}),n.d(t,"PURGE",function(){return f.f}),n.d(t,"REGISTER",function(){return f.g}),n.d(t,"DEFAULT_VERSION",function(){return f.a})},238:function(e,t,n){"use strict";function r(e,t,n,r){var a=(r.debug,i({},n));return e&&"object"===(void 0===e?"undefined":o(e))&&Object.keys(e).forEach(function(r){"_persist"!==r&&t[r]===n[r]&&(a[r]=e[r])}),a}t.a=r;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},239:function(e,t,n){"use strict";function r(e,t){return e.stateReconciler=void 0===e.stateReconciler?a.a:e.stateReconciler,Object(i.a)(e,Object(o.combineReducers)(t))}t.a=r;var o=n(13),i=n(198),a=n(240)},240:function(e,t,n){"use strict";function r(e,t,n,r){var s=(r.debug,a({},n));return e&&"object"===(void 0===e?"undefined":i(e))&&Object.keys(e).forEach(function(r){if("_persist"!==r&&t[r]===n[r])return o(n[r])?void(s[r]=a({},s[r],e[r])):void(s[r]=e[r])}),s}function o(e){return null!==e&&!Array.isArray(e)&&"object"===(void 0===e?"undefined":i(e))}t.a=r;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},241:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t,n){var r=n||!1,o=Object(i.createStore)(l,u,t?t.enhancer:void 0),c=function(e){o.dispatch({type:a.g,key:e})},f=function(t,n,i){var s={type:a.h,payload:n,err:i,key:t};e.dispatch(s),o.dispatch(s),r&&d.getState().bootstrapped&&(r(),r=!1)},d=s({},o,{purge:function(){var t=[];return e.dispatch({type:a.f,result:function(e){t.push(e)}}),Promise.all(t)},flush:function(){var t=[];return e.dispatch({type:a.b,result:function(e){t.push(e)}}),Promise.all(t)},pause:function(){e.dispatch({type:a.d})},persist:function(){e.dispatch({type:a.e,register:c,rehydrate:f})}});return d.persist(),d}t.a=o;var i=n(13),a=(n(198),n(190)),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u={registry:[],bootstrapped:!1},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case a.g:return s({},e,{registry:[].concat(r(e.registry),[t.key])});case a.h:var n=e.registry.indexOf(t.key),o=[].concat(r(e.registry));return o.splice(n,1),s({},e,{registry:o,bootstrapped:0===o.length});default:return e}}},242:function(e,t,n){"use strict";function r(e,t){return function(t,n){if(!t)return Promise.resolve(void 0);var r=t._persist&&void 0!==t._persist.version?t._persist.version:o.a;if(r===n)return Promise.resolve(t);if(r>n)return Promise.resolve(t);var i=Object.keys(e).map(function(e){return parseInt(e)}).filter(function(e){return n>=e&&e>r}).sort(function(e,t){return e-t});try{var a=i.reduce(function(t,n){return e[n](t)},t);return Promise.resolve(a)}catch(e){return Promise.reject(e)}}}t.a=r;var o=n(190)},243:function(e,t,n){"use strict";function r(e,t){function n(e){return!(!o||-1!==o.indexOf(e))||!(!i||-1===i.indexOf(e))}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.whitelist||null,i=r.blacklist||null;return{in:function(t,r,o){return!n(r)&&e?e(t,r,o):t},out:function(e,r,o){return!n(r)&&t?t(e,r,o):e}}}t.a=r},244:function(e,t,n){"use strict";t.__esModule=!0;var r=n(245),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=(0,o.default)("local")},245:function(e,t,n){"use strict";function r(e){var t=(0,i.default)(e);return{getItem:function(e){return new Promise(function(n,r){n(t.getItem(e))})},setItem:function(e,n){return new Promise(function(r,o){r(t.setItem(e,n))})},removeItem:function(e){return new Promise(function(n,r){n(t.removeItem(e))})}}}t.__esModule=!0,t.default=r;var o=n(246),i=function(e){return e&&e.__esModule?e:{default:e}}(o)},246:function(e,t,n){"use strict";function r(){}function o(e){if("object"!==("undefined"==typeof self?"undefined":a(self))||!(e in self))return!1;try{var t=self[e],n="redux-persist "+e+" test";t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch(e){return!1}return!0}function i(e){var t=e+"Storage";return o(t)?self[t]:s}t.__esModule=!0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=i;var s={getItem:r,setItem:r,removeItem:r}},247:function(e,t,n){"use strict";function r(e,t,n,r){var s=(r.debug,a({},n));return e&&"object"===(void 0===e?"undefined":i(e))&&Object.keys(e).forEach(function(r){if("_persist"!==r&&t[r]===n[r])return o(n[r])?void(s[r]=a({},s[r],e[r])):void(s[r]=e[r])}),s}function o(e){return null!==e&&!Array.isArray(e)&&"object"===(void 0===e?"undefined":i(e))}t.__esModule=!0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r},248:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.PersistGate=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0);!function(e){e&&e.__esModule}(s);(t.PersistGate=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.state={bootstrapped:!1},i.handlePersistorState=function(){i.props.persistor.getState().bootstrapped&&(i.props.onBeforeLift?Promise.resolve(i.props.onBeforeLift()).then(function(){return i.setState({bootstrapped:!0})}).catch(function(){return i.setState({bootstrapped:!0})}):i.setState({bootstrapped:!0}),i._unsubscribe&&i._unsubscribe())},a=n,o(i,a)}return i(t,e),a(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return"function"==typeof this.props.children?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(s.PureComponent)).defaultProps={loading:null}}});