var X=Object.defineProperty;var q=(e,o,n)=>o in e?X(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n;var M=(e,o,n)=>(q(e,typeof o!="symbol"?o+"":o,n),n);import{u as useSelector,a as useDispatch,r as reactExports,d as dist,l as lodash_defaultsdeepExports,c as createSlice,b as current,C as Color,p as partition,e as createSelector,f as del,g as update,s as setMany,h as entries,i as styled,j as jsx,k as jsxs,m as useCombobox,R as React,F as Fragment,S as StateManagedSelect$1,n as useTranslation,o as dist$1,q as FontAwesomeIcon,t as faLightbulb,v as faHeadphones,w as faDisplay,x as faMicrochip,y as createListenerMiddleware,z as configureStore,A as faBook,B as t,D as faSquare,E as faCircle,G as faUndo,H as faSave,I as faTrash,J as faCompress,K as faExpand,L as faMagicWandSparkles,M as faStopwatch,N as faXmarkCircle,O as ReactTextareaAutocomplete,P as faClapperboard,Q as faCode,T as faFloppyDisk,U as stringify,V as faAngleDown,W as faPlus,X as faUpload,Y as faXmark,Z as faToolbox,_ as useProgress,$ as faCircleQuestion,a0 as faWarning,a1 as useLocation,a2 as Link$1,a3 as faComputer,a4 as faCancel,a5 as faDownload,a6 as faKeyboard,a7 as faStethoscope,a8 as faBrush,a9 as faGear,aa as faBug,ab as faDiscord,ac as faGithub,ad as faLanguage,ae as useResizeObserver,af as Shape,ag as shallowEqual,ah as useSpring,ai as animated,aj as Html,ak as useGLTF,al as Segments,am as Segment,an as PresentationControls,ao as useThree,ap as useFrame,aq as PerspectiveCamera,ar as BufferAttribute,as as Canvas,at as OrbitControls,au as faUnlock,av as faSpinner,aw as Object3D,ax as SpotLight,ay as config,az as createGlobalStyle,aA as Route,aB as Provider_default,aC as instance,aD as Browser,aE as initReactI18next,aF as resourcesToBackend,aG as createRoot,aH as __vitePreload}from"./vendor-a406d3c1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const __variableDynamicImportRuntimeHelper=(e,o)=>{const n=e[o];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+o)))})},style="",app_global="";var TestKeyState=(e=>(e[e.Initial=0]="Initial",e[e.KeyDown=1]="KeyDown",e[e.KeyUp=2]="KeyUp",e))(TestKeyState||{});let globalAudioContext,globalAmp,globalAmpGain=1;const ampGain=.25,ampAttack=.05,ampDecay=.05,ampSustain=1,ampRelease=.05;function getAudioContext(){return globalAudioContext===void 0&&(globalAudioContext=new AudioContext),globalAudioContext}function getGlobalAmp(){if(globalAmp===void 0){const e=getAudioContext();globalAmp=e.createGain(),globalAmp.gain.value=globalAmpGain,globalAmp.connect(e.destination)}return globalAmp}function setGlobalAmpGain(e){globalAmpGain=e,globalAmp!==void 0&&(globalAmp.gain.setValueAtTime(globalAmp.gain.value,getAudioContext().currentTime),globalAmp.gain.linearRampToValueAtTime(globalAmpGain,getAudioContext().currentTime+.2))}function midiNoteToFrequency(e){let o=440;return Math.pow(2,(e-69)/12)*o}class Note{constructor(o,n){M(this,"audioContext");M(this,"osc");M(this,"amp");M(this,"ampSustainTime");M(this,"midiNote");this.midiNote=o,this.audioContext=getAudioContext(),this.osc=new OscillatorNode(this.audioContext,{type:n,frequency:midiNoteToFrequency(this.midiNote)}),this.ampSustainTime=0,this.amp=this.audioContext.createGain(),this.amp.gain.value=0,this.amp.connect(getGlobalAmp()),this.osc.connect(this.amp)}noteOn(){const o=this.audioContext.currentTime;this.osc.start(o),this.ampSustainTime=o+ampAttack+ampDecay,this.amp.gain.linearRampToValueAtTime(ampGain,o+ampAttack),this.amp.gain.linearRampToValueAtTime(ampGain*ampSustain,this.ampSustainTime)}noteOff(){this.audioContext.currentTime>=this.ampSustainTime&&this.amp.gain.setValueAtTime(ampGain*ampSustain,this.audioContext.currentTime);const o=Math.max(this.audioContext.currentTime,this.ampSustainTime)+ampRelease;this.osc.stop(o),this.amp.gain.linearRampToValueAtTime(0,o)}}const useAppSelector=useSelector,useAppDispatch=useDispatch;var TestKeyboardSoundsMode=(e=>(e[e.Random=0]="Random",e[e.WickiHayden=1]="WickiHayden",e[e.Chromatic=2]="Chromatic",e))(TestKeyboardSoundsMode||{});let lastPressedKeys=[],notes={};const baseSeed=Math.floor(Math.random()*1e3),seededRandom=e=>((baseSeed+e)*9301+49297)%233280/233280,calculateMidiNote=(e,o,n,r,s)=>{const a=Math.min(4,n-r-1)+Math.max(0,5-n);switch(e){case 1:return[-18,-19,-14,-9,-4][a]+72+o+s*2;case 2:return[-15,-12,-7,-1,4][a]+72+o+s;case 0:default:return 72+o+Math.floor(seededRandom(r*1e3+s)*24)-12}},turnOffAllTheNotes=()=>{Object.values(notes).forEach(e=>e==null?void 0:e.noteOff())},TestKeyboardSounds=({pressedKeys:e})=>{const{waveform:o,volume:n,mode:r,transpose:s}=useAppSelector(getTestKeyboardSoundsSettings);return reactExports.useEffect(()=>{setGlobalAmpGain(n/100)},[n]),reactExports.useEffect(()=>{if(e.length===0)turnOffAllTheNotes();else{const a=e.length;lastPressedKeys=e.reduce((i,c,l)=>[...i,c.reduce((d,u,_)=>{var h,g;const p=`${l},${_}`,C=((h=lastPressedKeys==null?void 0:lastPressedKeys.at(l))==null?void 0:h.at(_))??TestKeyState.KeyUp,K=u??TestKeyState.KeyUp;if(K!=C)if(K==TestKeyState.KeyDown){const y=calculateMidiNote(r,s,a,l,_);notes[p]=new Note(y,o),notes[p].noteOn()}else K==TestKeyState.KeyUp&&((g=notes[p])==null||g.noteOff());return[...d,u]},[])],[])}},[e]),reactExports.useEffect(()=>()=>{turnOffAllTheNotes()},[]),null},THEMES={OLIVIA_DARK:{alpha:{c:"#363434",t:"#E8C4B8"},mod:{c:"#363434",t:"#E8C4B8"},accent:{c:"#E8C4B8",t:"#363434"}},OLIVE:{alpha:{t:"#66665A",c:"#D9D7C4"},mod:{c:"#66665A",t:"#9DA183"},accent:{c:"#9DA183",t:"#66665A"}},OLIVE_DARK:{alpha:{c:"#66665A",t:"#9DA183"},mod:{c:"#66665A",t:"#9DA183"},accent:{c:"#9DA183",t:"#66665A"}},OLNY:{alpha:{c:"#c20018",t:"#cfa174"},mod:{c:"#c20018",t:"#cfa174"},accent:{t:"#c20018",c:"#cfa174"}},GREG:{alpha:{c:"#f8c200",t:"#393b3b"},mod:{c:"#f7f2ea",t:"#393b3b"},accent:{c:"#171718",t:"#393b3b"}},CARBON_BLACK_A:{alpha:{c:"#788194",t:"#f3f3f3"},mod:{c:"#3b3b3e",t:"#f3f3f3"},accent:{c:"#e66b67",t:"#f3f3f3"}},CARBON_BLACK_B:{alpha:{c:"#3b3b3e",t:"#f3f3f3"},mod:{c:"#788194",t:"#f3f3f3"},accent:{c:"#e66b67",t:"#f3f3f3"}},SILVER_GREY_A:{alpha:{c:"#b2b3b8",t:"#f3f3f3"},mod:{c:"#838589",t:"#f3f3f3"},accent:{c:"#e8db5d",t:"#3d3125"}},SILVER_GREY_B:{alpha:{c:"#838589",t:"#f3f3f3"},mod:{c:"#b2b3b8",t:"#f3f3f3"},accent:{c:"#e8db5d",t:"#3d3125"}},NAVY_BLUE_A:{alpha:{c:"#547be8",t:"#f3f3f3"},mod:{c:"#49599f",t:"#f3f3f3"},accent:{c:"#4dcfe0",t:"#f3f3f3"}},NAVY_BLUE_B:{alpha:{c:"#49599f",t:"#f3f3f3"},mod:{c:"#547be8",t:"#f3f3f3"},accent:{c:"#4dcfe0",t:"#f3f3f3"}},FENDAI:{alpha:{c:"#f0ebec",t:"#07010f"},mod:{c:"#f0ebec",t:"#56395c"},accent:{c:"#fc5d75",t:"#56395c"}},HONEY_MILK:{alpha:{c:"#fffff8",t:"#07010f"},mod:{c:"#fffff8",t:"#07010f"},accent:{c:"#f8b140",t:"#07010f"}},MATCHA:{alpha:{c:"#e8e8df",t:"#4e475c"},mod:{c:"#828572",t:"#4e475c"},accent:{c:"#828572",t:"#4e475c"}},BLACK_GREY:{alpha:{c:"#7e8293",t:"#a5cbe6"},mod:{c:"#364352",t:"#eff3f2"},accent:{c:"#364352",t:"#eff3f2"}},WHITE_GREEN:{alpha:{c:"#fefefe",t:"#272727"},mod:{c:"#275c65",t:"#d0eae8"},accent:{c:"#275c65",t:"#d0eae8"}},WHITE:{alpha:{c:"#fefefe",t:"#272727"},mod:{c:"#fefefe",t:"#272727"},accent:{c:"#fefefe",t:"#272727"}},BLACK:{alpha:{c:"#272727",t:"#fefefe"},mod:{c:"#272727",t:"#fefefe"},accent:{c:"#272727",t:"#fefefe"}},BLACK_AND_WHITE:{alpha:{c:"#fefefe",t:"#272727"},mod:{c:"#272727",t:"#fefefe"},accent:{c:"#272727",t:"#fefefe"}},CLASSIC_GREY:{alpha:{c:"#fcfcfc",t:"#1a1a1a"},mod:{c:"#a0a0a0",t:"#1a1a1a"},accent:{c:"#a0a0a0",t:"#1a1a1a"}},...dist.THEMES};class Store{constructor(o){M(this,"store");const n=localStorage.getItem("via-app-store");this.store=n?lodash_defaultsdeepExports(JSON.parse(n),o):o}get(o){return this.store[o]}set(o,n){const r={...this.store,[o]:{...n}};this.store=r,setTimeout(()=>{localStorage.setItem("via-app-store",JSON.stringify(r))},0)}}const entryLog=[],logCommand=(e,o,n)=>{entryLog.push({kbAddr:e,request:o,response:n,ts:Date.now()})},getLog=window.__getLogs=()=>entryLog;window.addEventListener("message",e=>{e.data.command==="fetchLogs"&&window.postMessage({command:"getLogs",payload:getLog()},"*")});const globalBuffer={},eventWaitBuffer={},filterHIDDevices=e=>e.filter(o=>{var n;return(n=o.collections)==null?void 0:n.some(r=>r.usage===97&&r.usagePage===65376)}),getVIAPathIdentifier=()=>self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||`via-path:${Math.random()}`,tagDevice=e=>{const o=e.__path||getVIAPathIdentifier();e.__path=o;const n={_device:e,usage:97,usagePage:65376,interface:1,vendorId:e.vendorId??-1,productId:e.productId??-1,path:o,productName:e.productName};return ExtendedHID._cache[o]=n},tryForgetDevice=e=>{const o=ExtendedHID._cache[e.path];if(o)return o._device.forget()},ExtendedHID={_cache:{},requestDevice:async()=>{const e=await navigator.hid.requestDevice({filters:[{usagePage:65376,usage:97}]});return e.forEach(tagDevice),e[0]},getFilteredDevices:async()=>{try{return filterHIDDevices(await navigator.hid.getDevices())}catch{return[]}},devices:async(e=!1)=>{let o=await ExtendedHID.getFilteredDevices();if(o.length===0||e){try{await ExtendedHID.requestDevice()}catch{return[]}o=await ExtendedHID.getFilteredDevices()}return o.map(tagDevice)},HID:class{constructor(o){M(this,"_hidDevice");M(this,"interface",-1);M(this,"vendorId",-1);M(this,"productId",-1);M(this,"productName","");M(this,"path","");M(this,"openPromise",Promise.resolve());M(this,"readP",promisify(o=>this.read(o)));if(this._hidDevice=ExtendedHID._cache[o],this._hidDevice)this.vendorId=this._hidDevice.vendorId,this.productId=this._hidDevice.productId,this.path=this._hidDevice.path,this.interface=this._hidDevice.interface,this.productName=this._hidDevice.productName,globalBuffer[this.path]=globalBuffer[this.path]||[],eventWaitBuffer[this.path]=eventWaitBuffer[this.path]||[],this._hidDevice._device.opened||this.open();else throw new Error("Missing hid device in cache")}async open(){return this._hidDevice&&!this._hidDevice._device.opened&&(this.openPromise=this._hidDevice._device.open(),this.setupListeners(),await this.openPromise),Promise.resolve()}setupListeners(){this._hidDevice&&this._hidDevice._device.addEventListener("inputreport",o=>{eventWaitBuffer[this.path].length!==0?eventWaitBuffer[this.path].shift()(new Uint8Array(o.data.buffer)):globalBuffer[this.path].push({currTime:Date.now(),message:new Uint8Array(o.data.buffer)})})}read(o){var n;this.fastForwardGlobalBuffer(Date.now()),globalBuffer[this.path].length>0?o(void 0,(n=globalBuffer[this.path].shift())==null?void 0:n.message):eventWaitBuffer[this.path].push(r=>o(void 0,r))}fastForwardGlobalBuffer(o){let n=globalBuffer[this.path].length;for(;n&&(n--,globalBuffer[this.path][0].currTime<o);)globalBuffer[this.path].shift()}async write(o){var r;await this.openPromise;const n=new Uint8Array(o.slice(1));await((r=this._hidDevice)==null?void 0:r._device.sendReport(0,n))}}},promisify=e=>()=>new Promise((o,n)=>{e((r,s)=>{r?n(r):o(s)})}),HID=ExtendedHID,k=class{static startMonitoring(){this.shouldMonitor=!0,!this.hasMonitored&&navigator.hid&&(navigator.hid.addEventListener("connect",k.onConnect),navigator.hid.addEventListener("disconnect",k.onDisconnect))}static stopMonitoring(){this.shouldMonitor=!1}static on(o,n){this._listeners[o]=[...this._listeners[o],n]}static off(o,n){this._listeners[o]=this._listeners[o].filter(r=>r!==n)}};let usbDetect=k;M(usbDetect,"_listeners",{change:[],remove:[]}),M(usbDetect,"shouldMonitor",!1),M(usbDetect,"hasMonitored",!1),M(usbDetect,"onConnect",({device:o})=>{console.log("Detected Connection"),k.shouldMonitor&&k._listeners.change.forEach(n=>n(o))}),M(usbDetect,"onDisconnect",({device:o})=>{console.log("Detected Disconnection"),k.shouldMonitor&&(k._listeners.change.forEach(n=>n(o)),k._listeners.remove.forEach(n=>n(o)))});async function scanDevices(e){return HID.devices(e)}function initAndConnectDevice({path:e}){return new HID.HID(e)}function startMonitoring(){usbDetect.startMonitoring()}const extractDeviceInfo=e=>({productId:e.productId,vendorId:e.vendorId,productName:e.productName,protocol:e.protocol}),initialState$8={appErrors:[]},getErrorTimestamp=()=>{const e=new Date;return`${e.toLocaleTimeString([],{hour12:!1})}.${e.getMilliseconds().toString().padStart(3,"0")}`},extractMessageFromKeyboardAPIError=e=>`Command Name: ${e.commandName}
Command: ${formatBytes(e.commandBytes)}
Response: ${formatBytes(e.responseBytes)}`,getMessageFromError=e=>e.stack||e.message,formatBytes=e=>e.join(" "),errorsSlice=createSlice({name:"errors",initialState:initialState$8,reducers:{logAppError:(e,o)=>{e.appErrors.push({...o.payload,timestamp:getErrorTimestamp()})},logKeyboardAPIError:(e,o)=>{const{deviceInfo:n}=o.payload;e.appErrors.push({timestamp:getErrorTimestamp(),message:extractMessageFromKeyboardAPIError(o.payload),deviceInfo:n})},clearAppErrors:e=>{e.appErrors=[]}}}),{logKeyboardAPIError,logAppError,clearAppErrors}=errorsSlice.actions,errorsReducer=errorsSlice.reducer,getAppErrors=e=>e.errors.appErrors,COMMAND_START=0,PER_KEY_RGB_CHANNEL_COMMAND=[0,1];var APICommand=(e=>(e[e.GET_PROTOCOL_VERSION=1]="GET_PROTOCOL_VERSION",e[e.GET_KEYBOARD_VALUE=2]="GET_KEYBOARD_VALUE",e[e.SET_KEYBOARD_VALUE=3]="SET_KEYBOARD_VALUE",e[e.DYNAMIC_KEYMAP_GET_KEYCODE=4]="DYNAMIC_KEYMAP_GET_KEYCODE",e[e.DYNAMIC_KEYMAP_SET_KEYCODE=5]="DYNAMIC_KEYMAP_SET_KEYCODE",e[e.CUSTOM_MENU_SET_VALUE=7]="CUSTOM_MENU_SET_VALUE",e[e.CUSTOM_MENU_GET_VALUE=8]="CUSTOM_MENU_GET_VALUE",e[e.CUSTOM_MENU_SAVE=9]="CUSTOM_MENU_SAVE",e[e.EEPROM_RESET=10]="EEPROM_RESET",e[e.BOOTLOADER_JUMP=11]="BOOTLOADER_JUMP",e[e.DYNAMIC_KEYMAP_MACRO_GET_COUNT=12]="DYNAMIC_KEYMAP_MACRO_GET_COUNT",e[e.DYNAMIC_KEYMAP_MACRO_GET_BUFFER_SIZE=13]="DYNAMIC_KEYMAP_MACRO_GET_BUFFER_SIZE",e[e.DYNAMIC_KEYMAP_MACRO_GET_BUFFER=14]="DYNAMIC_KEYMAP_MACRO_GET_BUFFER",e[e.DYNAMIC_KEYMAP_MACRO_SET_BUFFER=15]="DYNAMIC_KEYMAP_MACRO_SET_BUFFER",e[e.DYNAMIC_KEYMAP_MACRO_RESET=16]="DYNAMIC_KEYMAP_MACRO_RESET",e[e.DYNAMIC_KEYMAP_GET_LAYER_COUNT=17]="DYNAMIC_KEYMAP_GET_LAYER_COUNT",e[e.DYNAMIC_KEYMAP_GET_BUFFER=18]="DYNAMIC_KEYMAP_GET_BUFFER",e[e.DYNAMIC_KEYMAP_SET_BUFFER=19]="DYNAMIC_KEYMAP_SET_BUFFER",e[e.DYNAMIC_KEYMAP_GET_ENCODER=20]="DYNAMIC_KEYMAP_GET_ENCODER",e[e.DYNAMIC_KEYMAP_SET_ENCODER=21]="DYNAMIC_KEYMAP_SET_ENCODER",e[e.BACKLIGHT_CONFIG_SET_VALUE=7]="BACKLIGHT_CONFIG_SET_VALUE",e[e.BACKLIGHT_CONFIG_GET_VALUE=8]="BACKLIGHT_CONFIG_GET_VALUE",e[e.BACKLIGHT_CONFIG_SAVE=9]="BACKLIGHT_CONFIG_SAVE",e))(APICommand||{});const APICommandValueToName=Object.entries(APICommand).reduce((e,[o,n])=>({...e,[n]:o}),{});var KeyboardValue=(e=>(e[e.UPTIME=1]="UPTIME",e[e.LAYOUT_OPTIONS=2]="LAYOUT_OPTIONS",e[e.SWITCH_MATRIX_STATE=3]="SWITCH_MATRIX_STATE",e[e.FIRMWARE_VERSION=4]="FIRMWARE_VERSION",e[e.DEVICE_INDICATION=5]="DEVICE_INDICATION",e))(KeyboardValue||{});const BACKLIGHT_BRIGHTNESS=9,BACKLIGHT_EFFECT=10,BACKLIGHT_COLOR_1=12,BACKLIGHT_COLOR_2=13,BACKLIGHT_CUSTOM_COLOR=23,PROTOCOL_ALPHA=7,PROTOCOL_BETA=8,PROTOCOL_GAMMA=9,cache={},eqArr=(e,o)=>e.length!==o.length?!1:e.every((n,r)=>o[r]===n),shiftTo16Bit=([e,o])=>e<<8|o,shiftFrom16Bit=e=>[e>>8,e&255],shiftBufferTo16Bit=e=>{const o=[];for(let n=0;n<e.length;n+=2)o.push(shiftTo16Bit([e[n],e[n+1]]));return o},shiftBufferFrom16Bit=e=>e.map(shiftFrom16Bit).flatMap(o=>o),globalCommandQueue={},canConnect=e=>{try{return new KeyboardAPI(e.path),!0}catch(o){return console.error("Skipped ",e,o),!1}};class KeyboardAPI{constructor(o){M(this,"kbAddr");if(this.kbAddr=o,!cache[o]){const n=initAndConnectDevice({path:o});cache[o]={hid:n}}}refresh(o){this.kbAddr=o,cache[o]={...cache[o],hid:initAndConnectDevice({path:o})}}async getByteBuffer(){return this.getHID().readP()}async getProtocolVersion(){try{const[,o,n]=await this.hidCommand(1);return shiftTo16Bit([o,n])}catch{return-1}}async getKey(o,n,r){const s=await this.hidCommand(4,[o,n,r]);return shiftTo16Bit([s[4],s[5]])}async getLayerCount(){if(await this.getProtocolVersion()>=PROTOCOL_BETA){const[,n]=await this.hidCommand(17);return n}return 4}async readRawMatrix(o,n){const r=await this.getProtocolVersion();if(r>=PROTOCOL_BETA)return this.fastReadRawMatrix(o,n);if(r===PROTOCOL_ALPHA)return this.slowReadRawMatrix(o,n);throw new Error("Unsupported protocol version")}async getKeymapBuffer(o,n){if(n>28)throw new Error("Max data length is 28");return[...await this.hidCommand(18,[...shiftFrom16Bit(o),n])].slice(4,n+4)}async fastReadRawMatrix({rows:o,cols:n},r){const s=o*n,a=14,i=new Array(Math.ceil(s/a)).fill(0),{res:c}=i.reduce(({res:d,remaining:u})=>u<a?{res:[...d,this.getKeymapBuffer(r*s*2+2*(s-u),u*2)],remaining:0}:{res:[...d,this.getKeymapBuffer(r*s*2+2*(s-u),a*2)],remaining:u-a},{res:[],remaining:s});return(await Promise.all(c)).flatMap(shiftBufferTo16Bit)}async slowReadRawMatrix({rows:o,cols:n},r){const s=o*n,a=new Array(s).fill(0).map((i,c)=>this.getKey(r,~~(c/n),c%n));return Promise.all(a)}async writeRawMatrix(o,n){const r=await this.getProtocolVersion();if(r>=PROTOCOL_BETA)return this.fastWriteRawMatrix(n);if(r===PROTOCOL_ALPHA)return this.slowWriteRawMatrix(o,n)}async slowWriteRawMatrix({cols:o},n){n.forEach(async(r,s)=>r.forEach(async(a,i)=>{await this.setKey(s,~~(i/o),i%o,a)}))}async fastWriteRawMatrix(o){const n=o.flatMap(a=>a.map(i=>i)),r=shiftBufferFrom16Bit(n),s=28;for(let a=0;a<r.length;a+=s){const i=r.slice(a,a+s);await this.hidCommand(19,[...shiftFrom16Bit(a),i.length,...i])}}async getKeyboardValue(o,n,r=1){const s=[o,...n];return(await this.hidCommand(2,s)).slice(1+s.length,1+s.length+r)}async setKeyboardValue(o,...n){const r=[o,...n];await this.hidCommand(3,r)}async getEncoderValue(o,n,r){const s=[o,n,+r],a=await this.hidCommand(20,s);return shiftTo16Bit([a[4],a[5]])}async setEncoderValue(o,n,r,s){const a=[o,n,+r,...shiftFrom16Bit(s)];await this.hidCommand(21,a)}async getCustomMenuValue(o){return(await this.hidCommand(8,o)).slice(0+o.length)}async setCustomMenuValue(...o){await this.hidCommand(7,o)}async getPerKeyRGBMatrix(o){return(await Promise.all(o.map(r=>this.hidCommand(8,[...PER_KEY_RGB_CHANNEL_COMMAND,r,1])))).map(r=>[...r.slice(5,7)])}async setPerKeyRGBMatrix(o,n,r){await this.hidCommand(7,[...PER_KEY_RGB_CHANNEL_COMMAND,o,1,n,r])}async getBacklightValue(o,n=1){const r=[o];return(await this.hidCommand(8,r)).slice(2,2+n)}async setBacklightValue(o,...n){const r=[o,...n];await this.hidCommand(7,r)}async getRGBMode(){const o=[BACKLIGHT_EFFECT],[,,n]=await this.hidCommand(8,o);return n}async getBrightness(){const o=[BACKLIGHT_BRIGHTNESS],[,,n]=await this.hidCommand(8,o);return n}async getColor(o){const n=[o===1?BACKLIGHT_COLOR_1:BACKLIGHT_COLOR_2],[,,r,s]=await this.hidCommand(8,n);return{hue:r,sat:s}}async setColor(o,n,r){const s=[o===1?BACKLIGHT_COLOR_1:BACKLIGHT_COLOR_2,n,r];await this.hidCommand(7,s)}async getCustomColor(o){const n=[BACKLIGHT_CUSTOM_COLOR,o],[,,,r,s]=await this.hidCommand(8,n);return{hue:r,sat:s}}async setCustomColor(o,n,r){const s=[BACKLIGHT_CUSTOM_COLOR,o,n,r];await this.hidCommand(7,s)}async setRGBMode(o){const n=[BACKLIGHT_EFFECT,o];await this.hidCommand(7,n)}async commitCustomMenu(o){await this.hidCommand(9,[o])}async saveLighting(){await this.hidCommand(9)}async resetEEPROM(){await this.hidCommand(10)}async jumpToBootloader(){await this.hidCommand(11)}async setKey(o,n,r,s){const a=await this.hidCommand(5,[o,n,r,...shiftFrom16Bit(s)]);return shiftTo16Bit([a[4],a[5]])}async getMacroCount(){const[,o]=await this.hidCommand(12);return o}async getMacroBufferSize(){const[,o,n]=await this.hidCommand(13);return shiftTo16Bit([o,n])}async getMacroBytes(){const o=await this.getMacroBufferSize(),n=28,r=[];for(let a=0;a<o;a+=28)r.push(this.hidCommand(14,[...shiftFrom16Bit(a),n]));return(await Promise.all(r)).flatMap(a=>a.slice(4))}async setMacroBytes(o){const n=await this.getMacroBufferSize(),r=o.length;if(r>n)throw new Error(`Macro size (${r}) exceeds buffer size (${n})`);const s=n-1,a=shiftFrom16Bit(s);await this.resetMacros();try{await this.hidCommand(15,[...shiftFrom16Bit(s),1,255]);const i=28;for(let c=0;c<o.length;c+=i){const l=o.slice(c,c+i);await this.hidCommand(15,[...shiftFrom16Bit(c),l.length,...l])}}finally{await this.hidCommand(15,[...a,1,0])}}async resetMacros(){await this.hidCommand(16)}get commandQueueWrapper(){return globalCommandQueue[this.kbAddr]?globalCommandQueue[this.kbAddr]:(globalCommandQueue[this.kbAddr]={isFlushing:!1,commandQueue:[]},globalCommandQueue[this.kbAddr])}async timeout(o){return new Promise((n,r)=>{this.commandQueueWrapper.commandQueue.push({res:n,rej:r,args:()=>new Promise(s=>setTimeout(()=>{s(),n(void 0)},o))}),this.commandQueueWrapper.isFlushing||this.flushQueue()})}async hidCommand(o,n=[]){return new Promise((r,s)=>{this.commandQueueWrapper.commandQueue.push({res:r,rej:s,args:[o,n]}),this.commandQueueWrapper.isFlushing||this.flushQueue()})}async flushQueue(){if(this.commandQueueWrapper.isFlushing!==!0){for(this.commandQueueWrapper.isFlushing=!0;this.commandQueueWrapper.commandQueue.length!==0;){const{res:o,rej:n,args:r}=this.commandQueueWrapper.commandQueue.shift();if(typeof r=="function")await r(),o();else try{const s=await this._hidCommand(...r);o(s)}catch(s){const a=extractDeviceInfo(this.getHID());store.dispatch(logAppError({message:getMessageFromError(s),deviceInfo:a})),n(s)}}this.commandQueueWrapper.isFlushing=!1}}getHID(){return cache[this.kbAddr].hid}async _hidCommand(o,n=[]){const r=[COMMAND_START,o,...n],s=new Array(33).fill(0);r.forEach((c,l)=>{s[l]=c}),await this.getHID().write(s);const a=Array.from(await this.getByteBuffer()),i=a.slice(0,r.length-1);if(logCommand(this.kbAddr,r,a),!eqArr(r.slice(1),i)){console.error(`Command for ${this.kbAddr}:`,r,"Bad Resp:",a);const c=extractDeviceInfo(this.getHID()),l=APICommandValueToName[o];throw store.dispatch(logKeyboardAPIError({commandName:l,commandBytes:r.slice(1),responseBytes:a,deviceInfo:c})),new Error("Receiving incorrect response for command")}return console.debug(`Command for ${this.kbAddr}`,r,"Correct Resp:",a),a}}function getVendorProductId(e,o){return e*65536+o}const idExists=({productId:e,vendorId:o},n)=>n[getVendorProductId(o,e)],getRecognisedDevices=async(e,o=!1)=>(await scanDevices(o)).filter(r=>idExists(r,e)&&canConnect(r));let deviceStore;const defaultStoreData={definitionIndex:{generatedAt:-1,hash:"",version:"2.0.0",theme:dist.getTheme(),accentColor:"#ad7070",supportedVendorProductIdMap:{}},definitions:{},settings:{showDesignTab:!1,disableFastRemap:!1,ShowSliderValuesMode:"Slider Only",renderMode:"2D",themeMode:"dark",designDefinitionVersion:"v3",themeName:"OLIVIA_DARK",macroEditor:{smartOptimizeEnabled:!0,recordDelaysEnabled:!1,tapEnterAtEOMEnabled:!1},testKeyboardSoundsSettings:{isEnabled:!0,volume:100,waveform:"sine",mode:TestKeyboardSoundsMode.WickiHayden,transpose:0}}};function initDeviceStore(){deviceStore=new Store(defaultStoreData)}initDeviceStore();async function syncStore(){var o;const e=deviceStore.get("definitionIndex");try{const n=((o=document.getElementById("definition_hash"))==null?void 0:o.dataset.hash)||"";if(n===e.hash)return e;const s=await(await fetch("/definitions/supported_kbs.json",{cache:"reload"})).json(),a=s.vendorProductIds.v2.reduce((l,d)=>(l[d]=l[d]||{},l[d].v2=l[d].v3=!0,l),{}),i=s.vendorProductIds.v3.reduce((l,d)=>(l[d]=l[d]||{},l[d].v3=!0,l),a),c={...s,hash:n,supportedVendorProductIdMap:i};return deviceStore.set("definitionIndex",c),deviceStore.set("definitions",{}),c}catch(n){console.warn(n)}return e}const getMissingDefinition=async(e,o)=>{const n=getVendorProductId(e.vendorId,e.productId),r=`/definitions/${o}/${n}.json`,a=await(await fetch(r)).json();let i=deviceStore.get("definitions");const c={...i,[n]:{...i[n],[o]:a}};try{deviceStore.set("definitions",c)}catch{localStorage.clear(),initDeviceStore(),i=deviceStore.get("definitions"),deviceStore.set("definitions",{...i,[n]:{...i[n],[o]:a}})}return[a,o]},getSupportedIdsFromStore=()=>{var e;return(e=deviceStore.get("definitionIndex"))==null?void 0:e.supportedVendorProductIdMap},getDefinitionsFromStore=()=>deviceStore.get("definitions"),getThemeModeFromStore=()=>{var e;return(e=deviceStore.get("settings"))==null?void 0:e.themeMode},getThemeNameFromStore=()=>{var e;return(e=deviceStore.get("settings"))==null?void 0:e.themeName},getSettings=()=>deviceStore.get("settings"),setSettings=e=>{deviceStore.set("settings",current(e))},quantumRangesKeys=["_QK_MODS","_QK_MODS_MAX","_QK_MOD_TAP","_QK_MOD_TAP_MAX","_QK_LAYER_TAP","_QK_LAYER_TAP_MAX","_QK_LAYER_MOD","_QK_LAYER_MOD_MAX","_QK_TO","_QK_TO_MAX","_QK_MOMENTARY","_QK_MOMENTARY_MAX","_QK_DEF_LAYER","_QK_DEF_LAYER_MAX","_QK_TOGGLE_LAYER","_QK_TOGGLE_LAYER_MAX","_QK_ONE_SHOT_LAYER","_QK_ONE_SHOT_LAYER_MAX","_QK_ONE_SHOT_MOD","_QK_ONE_SHOT_MOD_MAX","_QK_LAYER_TAP_TOGGLE","_QK_LAYER_TAP_TOGGLE_MAX","_QK_KB","_QK_KB_MAX","_QK_MACRO","_QK_MACRO_MAX"],quantumRanges=e=>Object.keys(e).reduce((o,n)=>quantumRangesKeys.includes(n)?{...o,[n]:e[n]}:o,{}),modCodes={QK_LCTL:256,QK_LSFT:512,QK_LALT:1024,QK_LGUI:2048,QK_RMODS_MIN:4096,QK_RCTL:4352,QK_RSFT:4608,QK_RALT:5120,QK_RGUI:6144},modMasks={MOD_LCTL:1,MOD_LSFT:2,MOD_LALT:4,MOD_LGUI:8,MOD_RCTL:17,MOD_RSFT:18,MOD_RALT:20,MOD_RGUI:24,MOD_HYPR:15,MOD_MEH:7},topLevelMacroToValue={MT:"_QK_MOD_TAP",LT:"_QK_LAYER_TAP",LM:"_QK_LAYER_MOD",TO:"_QK_TO",MO:"_QK_MOMENTARY",DF:"_QK_DEF_LAYER",TG:"_QK_TOGGLE_LAYER",OSL:"_QK_ONE_SHOT_LAYER",OSM:"_QK_ONE_SHOT_MOD",TT:"_QK_LAYER_TAP_TOGGLE",CUSTOM:"_QK_KB",MACRO:"_QK_MACRO"},modifierKeyToValue={LCTL:modCodes.QK_LCTL,C:modCodes.QK_LCTL,LSFT:modCodes.QK_LSFT,S:modCodes.QK_LSFT,LALT:modCodes.QK_LALT,A:modCodes.QK_LALT,LGUI:modCodes.QK_LGUI,LCMD:modCodes.QK_LGUI,LWIN:modCodes.QK_LGUI,G:modCodes.QK_LGUI,RCTL:modCodes.QK_RCTL,RSFT:modCodes.QK_RSFT,ALGR:modCodes.QK_RALT,RALT:modCodes.QK_RALT,RCMD:modCodes.QK_RGUI,RWIN:modCodes.QK_RGUI,RGUI:modCodes.QK_RGUI,SCMD:modCodes.QK_LSFT|modCodes.QK_LGUI,SWIN:modCodes.QK_LSFT|modCodes.QK_LGUI,SGUI:modCodes.QK_LSFT|modCodes.QK_LGUI,LSG:modCodes.QK_LSFT|modCodes.QK_LGUI,LAG:modCodes.QK_LALT|modCodes.QK_LGUI,RSG:modCodes.QK_RSFT|modCodes.QK_RGUI,RAG:modCodes.QK_RALT|modCodes.QK_RGUI,LCA:modCodes.QK_LCTL|modCodes.QK_LALT,LSA:modCodes.QK_LSFT|modCodes.QK_LALT,SAGR:modCodes.QK_RSFT|modCodes.QK_RALT,RSA:modCodes.QK_RSFT|modCodes.QK_RALT,RCS:modCodes.QK_RCTL|modCodes.QK_RSFT,LCAG:modCodes.QK_LCTL|modCodes.QK_LALT|modCodes.QK_LGUI,MEH:modCodes.QK_LCTL|modCodes.QK_LALT|modCodes.QK_LSFT,HYPR:modCodes.QK_LCTL|modCodes.QK_LALT|modCodes.QK_LSFT|modCodes.QK_LGUI},modifierValueToKey=Object.entries(modifierKeyToValue).reduce((e,[o,n])=>({...e,[n]:o}),{}),leftModifierValueToKey=Object.entries(modifierKeyToValue).filter(([e,o])=>Object.values(modCodes).includes(o)&&o<modCodes.QK_RMODS_MIN).reduce((e,[o,n])=>({...e,[n]:o}),{}),rightModifierValueToKey=Object.entries(modifierKeyToValue).filter(([e,o])=>Object.values(modCodes).includes(o)&&o>=modCodes.QK_RMODS_MIN).reduce((e,[o,n])=>({...e,[n]:o}),{}),topLevelValueToMacro=e=>Object.entries(topLevelMacroToValue).reduce((o,[n,r])=>({...o,[e[r]]:n}),{}),advancedStringToKeycode=(e,o)=>{const r=e.toUpperCase().split(/\(|\)/).map(s=>s.trim());return Object.keys(topLevelMacroToValue).includes(r[0])?parseTopLevelMacro(r,o):Object.keys(modifierKeyToValue).includes(r[0])?parseModifierCode(r,o):0},advancedKeycodeToString=(e,o,n)=>{let r=Object.entries(quantumRanges(o)).map(([p,C])=>[C,p]),s=null,a=-1;for(let p=0;p<r.length;p+=2)e>=r[p][0]&&e<=r[p+1][0]&&(s=r[p][1],a=+r[p][0]);if(["_QK_MODS"].includes(s))return topLevelModToString(e,n);let c=topLevelValueToMacro(o)[a]+"(",l=e&~a,d=0,u="",_=0;switch(s){case"_QK_KB":case"_QK_MACRO":c+=e-a+")";break;case"_QK_MOMENTARY":case"_QK_DEF_LAYER":case"_QK_TOGGLE_LAYER":case"_QK_ONE_SHOT_LAYER":case"_QK_LAYER_TAP_TOGGLE":case"_QK_TO":c+=l+")";break;case"_QK_LAYER_TAP":d=l>>8,u=n[l&255],c+=d+","+u+")";break;case"_QK_ONE_SHOT_MOD":c+=modValueToString(l)+")";break;case"_QK_LAYER_MOD":let p=o._QK_LAYER_MOD_MASK,C=Math.log2(p+1);d=l>>C,_=l&p,c+=d+","+modValueToString(_)+")";break;case"_QK_MOD_TAP":_=l>>8&31,u=n[l&255],c+=modValueToString(_)+","+u+")";break;default:c=null}return c},modValueToString=e=>{const o=["MOD_HYPR","MOD_MEH"];return Object.entries(modMasks).filter(r=>!o.includes(r[0])&&(r[1]&e)===r[1]).map(r=>r[0]).join(" | ")},topLevelModToString=(e,o)=>{const n=o[e&255],r=e&7936,s=modifierValueToKey[r];if(s!=null)return s+"("+n+")";const a=Object.entries(r&modCodes.QK_RMODS_MIN?rightModifierValueToKey:leftModifierValueToKey).filter(i=>{const c=Number.parseInt(i[0]);return(c&r)===c}).map(i=>i[1]);return a.join("(")+"("+n+")".repeat(a.length)},parseTopLevelMacro=(e,o)=>{const n=e[0],r=e[1]??"";let[s,a]=["",""],i=0,c=0;switch(n){case"MO":case"DF":case"TG":case"OSL":case"TT":case"TO":return i=Number.parseInt(r),i<0?0:o[topLevelMacroToValue[n]]|i&255;case"OSM":return c=parseMods(r),c===0?0:o[topLevelMacroToValue[n]]|c&255;case"LM":[s,a]=r.split(",").map(u=>u.trim());let l=o._QK_LAYER_MOD_MASK,d=Math.log2(l+1);return i=Number.parseInt(s),c=parseMods(a),i<0||c===0?0:o[topLevelMacroToValue[n]]|(i&15)<<d|c&l;case"LT":return[s,a]=r.split(",").map(u=>u.trim()),i=Number.parseInt(s),i<0||!o.hasOwnProperty(a)?0:o[topLevelMacroToValue[n]]|(i&15)<<8|o[a];case"MT":return[s,a]=r.split(",").map(u=>u.trim()),c=parseMods(s),c===0||!o.hasOwnProperty(a)?0:o[topLevelMacroToValue[n]]|(c&31)<<8|o[a]&255;case"CUSTOM":{const u=Number.parseInt(r),_=o._QK_KB_MAX-o._QK_KB;return u>=0&&u<=_?o[topLevelMacroToValue[n]]+u:0}case"MACRO":{const u=Number.parseInt(r),_=o._QK_MACRO_MAX-o._QK_MACRO;return u>=0&&u<=_?o[topLevelMacroToValue[n]]+u:0}default:return 0}},parseMods=(e="")=>{const o=e.split("|").map(n=>n.trim());return o.reduce((n,r)=>n&&modMasks.hasOwnProperty(r),!0)?o.reduce((n,r)=>n|modMasks[r],0):0},parseModifierCode=(e,o)=>{const n=e.filter(s=>s.length!==0),r=n.map((s,a)=>a===n.length-1?o.hasOwnProperty(s)?o[s]:null:modifierKeyToValue.hasOwnProperty(s)?modifierKeyToValue[s]:null);return r.find(s=>s===null)?0:r.reduce((s,a)=>s|a,0)},anyKeycodeToString=(e,o,n)=>{let r="";const s=advancedKeycodeToString(e,o,n);return n[e]&&!n[e].startsWith("_QK")?r=n[e]:s!==null&&(r=s),r};function isAlpha(e){return/[A-Za-z]/.test(e)&&e.length===1}function isNumpadNumber(e){return/['0-9]/.test(e)&&e.length===1}function isArrowKey(e){return/[🠗🠕🠖🠔←↑→↓]$/.test(e)}function isNumpadSymbol(e){const o="-+.÷×".split("");return e.length===1&&o.includes(e[0])}function isMultiLegend(e){const o='~!@#$%^&*()_+|{}:"<>?'.split("");return e.length!==1&&o.includes(e[0])}function getByteForCode(e,o){const n=o[e];if(n!==void 0)return n;if(isLayerCode(e))return getByteForLayerCode(e,o);if(advancedStringToKeycode(e,o)!==null)return advancedStringToKeycode(e,o);throw`Could not find byte for ${e}`}function isLayerCode(e){return/([A-Za-z]+)\((\d+)\)/.test(e)}function getByteForLayerCode(e,o){const n=e.match(/([A-Za-z]+)\((\d+)\)/);if(n){const[,r,s]=n,a=parseInt(s);switch(r){case"TO":return Math.min(o._QK_TO+a,o._QK_TO_MAX);case"MO":return Math.min(o._QK_MOMENTARY+a,o._QK_MOMENTARY_MAX);case"DF":return Math.min(o._QK_DEF_LAYER+a,o._QK_DEF_LAYER_MAX);case"TG":return Math.min(o._QK_TOGGLE_LAYER+a,o._QK_TOGGLE_LAYER_MAX);case"OSL":return Math.min(o._QK_ONE_SHOT_LAYER+a,o._QK_ONE_SHOT_LAYER_MAX);case"TT":return Math.min(o._QK_LAYER_TAP_TOGGLE+a,o._QK_LAYER_TAP_TOGGLE_MAX);case"CUSTOM":return Math.min(o._QK_KB+a,o._QK_KB_MAX);case"MACRO":return Math.min(o._QK_MACRO+a,o._QK_MACRO_MAX);default:throw new Error("Incorrect code")}}throw new Error("No match found")}function getCodeForLayerByte(e,o){if(o._QK_TO<=e&&o._QK_TO_MAX>=e)return`TO(${e-o._QK_TO})`;if(o._QK_MOMENTARY<=e&&o._QK_MOMENTARY_MAX>=e)return`MO(${e-o._QK_MOMENTARY})`;if(o._QK_DEF_LAYER<=e&&o._QK_DEF_LAYER_MAX>=e)return`DF(${e-o._QK_DEF_LAYER})`;if(o._QK_TOGGLE_LAYER<=e&&o._QK_TOGGLE_LAYER_MAX>=e)return`TG(${e-o._QK_TOGGLE_LAYER})`;if(o._QK_ONE_SHOT_LAYER<=e&&o._QK_ONE_SHOT_LAYER_MAX>=e)return`OSL(${e-o._QK_ONE_SHOT_LAYER})`;if(o._QK_LAYER_TAP_TOGGLE<=e&&o._QK_LAYER_TAP_TOGGLE_MAX>=e)return`TT(${e-o._QK_LAYER_TAP_TOGGLE})`;if(o._QK_KB<=e&&o._QK_KB_MAX>=e)return`CUSTOM(${e-o._QK_KB})`;if(o._QK_MACRO<=e&&o._QK_MACRO_MAX>=e)return`MACRO(${e-o._QK_MACRO})`}const keycodesList=getKeycodes().reduce((e,o)=>e.concat(o.keycodes),[]),getByteToKey=e=>Object.keys(e).reduce((o,n)=>{const r=e[n];if(r in o){const s=keycodesList.find(({code:a})=>a===n);return s?{...o,[r]:s.code}:o}return{...o,[r]:n}},{});function isLayerKey(e,o){return[[o._QK_TO,o._QK_TO_MAX],[o._QK_MOMENTARY,o._QK_MOMENTARY_MAX],[o._QK_DEF_LAYER,o._QK_DEF_LAYER_MAX],[o._QK_TOGGLE_LAYER,o._QK_TOGGLE_LAYER_MAX],[o._QK_ONE_SHOT_LAYER,o._QK_ONE_SHOT_LAYER_MAX],[o._QK_LAYER_TAP_TOGGLE,o._QK_LAYER_TAP_TOGGLE_MAX],[o._QK_KB,o._QK_KB_MAX],[o._QK_MACRO,o._QK_MACRO_MAX]].some(n=>e>=n[0]&&e<=n[1])}function getCodeForByte(e,o,n){const r=n[e];return r&&!r.startsWith("_QK")?r:isLayerKey(e,o)?getCodeForLayerByte(e,o):advancedKeycodeToString(e,o,n)!==null?advancedKeycodeToString(e,o,n):"0x"+Number(e).toString(16)}function keycodeInMaster(e,o){return e in o||isLayerCode(e)||advancedStringToKeycode(e,o)!==null}function shorten(e){return e.split(" ").map(o=>o.slice(0,1)+o.slice(1).replace(/[aeiou ]/gi,"")).join("")}function isCustomKeycodeByte(e,o){return e>=o._QK_KB&&e<=o._QK_KB_MAX}function getCustomKeycodeIndex(e,o){return e-o._QK_KB}function isMacroKeycodeByte(e,o){return e>=o._QK_MACRO&&e<=o._QK_MACRO_MAX}function getMacroKeycodeIndex(e,o){return e-o._QK_MACRO}function getLabelForByte(e,o=100,n,r){const s=getCodeForByte(e,n,r),a=keycodesList.find(({code:i})=>i===s);return a?getShortNameForKeycode(a,o):s}function getShortNameForKeycode(e,o=100){const{code:n,name:r,shortName:s}=e;if(o<=150&&s)return s;if(o===100&&r.length>5){const a=shorten(r);if(n){const i=n.replace("KC_","").replace("_"," ");return a.length>4&&i.length<a.length?i:a}return a}return r}function getOtherMenu(e){return{id:"other",label:"Other",keycodes:Object.keys(e).filter(n=>!n.startsWith("_QK")).filter(n=>!keycodesList.map(({code:r})=>r).includes(n)).map(n=>({name:n.replace("KC_","").replace(/_/g," "),code:n}))}}function buildLayerMenu(){const e=[{name:`Fn1
(Fn3)`,code:"FN_MO13",title:"Hold = Layer 1, Hold with Fn2 = Layer 3",shortName:"Fn1(3)"},{name:`Fn2
(Fn3)`,code:"FN_MO23",title:"Hold = Layer 2, Hold with Fn1 = Layer 3",shortName:"Fn2(3)"},{name:"Space Fn1",code:"LT(1,KC_SPC)",title:"Hold = Layer 1, Tap = Space",shortName:"Spc Fn1"},{name:"Space Fn2",code:"LT(2,KC_SPC)",title:"Hold = Layer 2, Tap = Space",shortName:"Spc Fn2"},{name:"Space Fn3",code:"LT(3,KC_SPC)",title:"Hold = Layer 3, Tap = Space",shortName:"Spc Fn3"}],o={id:"layers",label:"Layers",width:"label",keycodes:[{name:"MO",code:"MO(layer)",type:"layer",layer:0,title:"Momentary turn layer on"},{name:"TG",code:"TG(layer)",type:"layer",layer:0,title:"Toggle layer on/off"},{name:"TT",code:"TT(layer)",type:"layer",layer:0,title:"Normally acts like MO unless it's tapped multple times which toggles layer on"},{name:"OSL",code:"OSL(layer)",type:"layer",layer:0,title:"Switch to layer for one keypress"},{name:"TO",code:"TO(layer)",type:"layer",layer:0,title:"Turn on layer when pressed"},{name:"DF",code:"DF(layer)",type:"layer",layer:0,title:"Sets the default layer"}]};return{...o,keycodes:[...e,...o.keycodes.flatMap(n=>{let r=[];for(let s=0;s<10;s++){const a=(n.title||"").replace("layer",`layer ${s}`),i=n.code.replace("layer",`${s}`),c=n.name+`(${s})`;r=[...r,{...n,name:c,title:a,code:i}]}return r})]}}function generateMacros(e=16){let o=[];for(let n=0;n<e;n++){const r=`M${n}`,s=`MACRO(${n})`,a=`Macro ${n}`;o=[...o,{name:r,title:a,code:s}]}return o}function getKeycodes(e=16){return[{id:"basic",label:"Basic",keycodes:[{name:"",code:"KC_NO",title:"Nothing"},{name:"▽",code:"KC_TRNS",title:"Pass-through"},{name:"Esc",code:"KC_ESC",keys:"esc"},{name:"A",code:"KC_A",keys:"a"},{name:"B",code:"KC_B",keys:"b"},{name:"C",code:"KC_C",keys:"c"},{name:"D",code:"KC_D",keys:"d"},{name:"E",code:"KC_E",keys:"e"},{name:"F",code:"KC_F",keys:"f"},{name:"G",code:"KC_G",keys:"g"},{name:"H",code:"KC_H",keys:"h"},{name:"I",code:"KC_I",keys:"i"},{name:"J",code:"KC_J",keys:"j"},{name:"K",code:"KC_K",keys:"k"},{name:"L",code:"KC_L",keys:"l"},{name:"M",code:"KC_M",keys:"m"},{name:"N",code:"KC_N",keys:"n"},{name:"O",code:"KC_O",keys:"o"},{name:"P",code:"KC_P",keys:"p"},{name:"Q",code:"KC_Q",keys:"q"},{name:"R",code:"KC_R",keys:"r"},{name:"S",code:"KC_S",keys:"s"},{name:"T",code:"KC_T",keys:"t"},{name:"U",code:"KC_U",keys:"u"},{name:"V",code:"KC_V",keys:"v"},{name:"W",code:"KC_W",keys:"w"},{name:"X",code:"KC_X",keys:"x"},{name:"Y",code:"KC_Y",keys:"y"},{name:"Z",code:"KC_Z",keys:"z"},{name:`!
1`,code:"KC_1",keys:"1"},{name:`@
2`,code:"KC_2",keys:"2"},{name:`#
3`,code:"KC_3",keys:"3"},{name:`$
4`,code:"KC_4",keys:"4"},{name:`%
5`,code:"KC_5",keys:"5"},{name:`^
6`,code:"KC_6",keys:"6"},{name:`&
7`,code:"KC_7",keys:"7"},{name:`*
8`,code:"KC_8",keys:"8"},{name:`(
9`,code:"KC_9",keys:"9"},{name:`)
0`,code:"KC_0",keys:"0"},{name:`_
-`,code:"KC_MINS",keys:"-"},{name:`+
=`,code:"KC_EQL",keys:"="},{name:"~\n`",code:"KC_GRV",keys:"`"},{name:`{
[`,code:"KC_LBRC",keys:"["},{name:`}
]`,code:"KC_RBRC",keys:"]"},{name:`|
\\`,code:"KC_BSLS",keys:"\\",width:1500},{name:`:
;`,code:"KC_SCLN",keys:";"},{name:`"
'`,code:"KC_QUOT",keys:"'"},{name:`<
,`,code:"KC_COMM",keys:","},{name:`>
.`,code:"KC_DOT",keys:"."},{name:`?
/`,code:"KC_SLSH",keys:"/"},{name:"=",code:"KC_PEQL"},{name:",",code:"KC_PCMM"},{name:"F1",code:"KC_F1"},{name:"F2",code:"KC_F2"},{name:"F3",code:"KC_F3"},{name:"F4",code:"KC_F4"},{name:"F5",code:"KC_F5"},{name:"F6",code:"KC_F6"},{name:"F7",code:"KC_F7"},{name:"F8",code:"KC_F8"},{name:"F9",code:"KC_F9"},{name:"F10",code:"KC_F10"},{name:"F11",code:"KC_F11"},{name:"F12",code:"KC_F12"},{name:"Print Screen",code:"KC_PSCR",shortName:"Print"},{name:"Scroll Lock",code:"KC_SLCK",shortName:"Scroll"},{name:"Pause",code:"KC_PAUS"},{name:"Tab",code:"KC_TAB",keys:"tab",width:1500},{name:"Backspace",code:"KC_BSPC",keys:"backspace",width:2e3,shortName:"Bksp"},{name:"Insert",code:"KC_INS",keys:"insert",shortName:"Ins"},{name:"Del",code:"KC_DEL",keys:"delete"},{name:"Home",code:"KC_HOME",keys:"home"},{name:"End",code:"KC_END",keys:"end"},{name:"Page Up",code:"KC_PGUP",keys:"pageup",shortName:"PgUp"},{name:"Page Down",code:"KC_PGDN",keys:"pagedown",shortName:"PgDn"},{name:`Num
Lock`,code:"KC_NLCK",keys:"num",shortName:"N.Lck"},{name:"Caps Lock",code:"KC_CAPS",keys:"caps_lock",width:1750},{name:"Enter",code:"KC_ENT",keys:"enter",width:2250},{name:"1",code:"KC_P1",keys:"num_1",title:"Numpad 1"},{name:"2",code:"KC_P2",keys:"num_2",title:"Numpad 2"},{name:"3",code:"KC_P3",keys:"num_3",title:"Numpad 3"},{name:"4",code:"KC_P4",keys:"num_4",title:"Numpad 4"},{name:"5",code:"KC_P5",keys:"num_5",title:"Numpad 5"},{name:"6",code:"KC_P6",keys:"num_6",title:"Numpad 6"},{name:"7",code:"KC_P7",keys:"num_7",title:"Numpad 7"},{name:"8",code:"KC_P8",keys:"num_8",title:"Numpad 8"},{name:"9",code:"KC_P9",keys:"num_9",title:"Numpad 9"},{name:"0",code:"KC_P0",width:2e3,keys:"num_0",title:"Numpad 0"},{name:"÷",code:"KC_PSLS",keys:"num_divide",title:"Numpad ÷"},{name:"×",code:"KC_PAST",keys:"num_multiply",title:"Numpad ×"},{name:"-",code:"KC_PMNS",keys:"num_subtract",title:"Numpad -"},{name:"+",code:"KC_PPLS",keys:"num_add",title:"Numpad +"},{name:".",code:"KC_PDOT",keys:"num_decimal",title:"Numpad ."},{name:`Num
Enter`,code:"KC_PENT",shortName:"N.Ent",title:"Numpad Enter"},{name:"Left Shift",code:"KC_LSFT",keys:"shift",width:2250,shortName:"LShft"},{name:"Right Shift",code:"KC_RSFT",width:2750,shortName:"RShft"},{name:"Left Ctrl",code:"KC_LCTL",keys:"ctrl",width:1250,shortName:"LCtl"},{name:"Right Ctrl",code:"KC_RCTL",width:1250,shortName:"RCtl"},{name:"Left Win",code:"KC_LGUI",keys:"cmd",width:1250,shortName:"LWin"},{name:"Right Win",code:"KC_RGUI",width:1250,shortName:"RWin"},{name:"Left Alt",code:"KC_LALT",keys:"alt",width:1250,shortName:"LAlt"},{name:"Right Alt",code:"KC_RALT",width:1250,shortName:"RAlt"},{name:"Space",code:"KC_SPC",keys:"space",width:6250},{name:"Menu",code:"KC_APP",width:1250,shortName:"RApp"},{name:"Left",code:"KC_LEFT",keys:"left",shortName:"←"},{name:"Down",code:"KC_DOWN",keys:"down",shortName:"↓"},{name:"Up",code:"KC_UP",keys:"up",shortName:"↑"},{name:"Right",code:"KC_RGHT",keys:"right",shortName:"→"}]},{id:"wt_lighting",label:"Lighting",width:"label",keycodes:[{name:"Bright -",code:"BR_DEC",title:"Brightness -",shortName:"BR -"},{name:"Bright +",code:"BR_INC",title:"Brightness +",shortName:"BR +"},{name:"Effect -",code:"EF_DEC",title:"Effect -",shortName:"EF -"},{name:"Effect +",code:"EF_INC",title:"Effect +",shortName:"EF +"},{name:"Effect Speed -",code:"ES_DEC",title:"Effect Speed -",shortName:"ES -"},{name:"Effect Speed +",code:"ES_INC",title:"Effect Speed +",shortName:"ES +"},{name:"Color1 Hue -",code:"H1_DEC",title:"Color1 Hue -",shortName:"H1 -"},{name:"Color1 Hue +",code:"H1_INC",title:"Color1 Hue +",shortName:"H1 +"},{name:"Color2 Hue -",code:"H2_DEC",title:"Color2 Hue -",shortName:"H2 -"},{name:"Color2 Hue +",code:"H2_INC",title:"Color2 Hue +",shortName:"H2 +"},{name:"Color1 Sat -",code:"S1_DEC",title:"Color1 Sat -",shortName:"S1 -"},{name:"Color1 Sat +",code:"S1_INC",title:"Color1 Sat +",shortName:"S1 +"},{name:"Color2 Sat -",code:"S2_DEC",title:"Color2 Sat -",shortName:"S2 -"},{name:"Color2 Sat +",code:"S2_INC",title:"Color2 Sat +",shortName:"S2 +"}]},{id:"media",label:"Media",width:"label",keycodes:[{name:"Vol -",code:"KC_VOLD",title:"Volume Down"},{name:"Vol +",code:"KC_VOLU",title:"Volume Up"},{name:"Mute",code:"KC_MUTE",title:"Mute Audio"},{name:"Play",code:"KC_MPLY",title:"Play/Pause"},{name:"Media Stop",code:"KC_MSTP",title:"Media Stop"},{name:"Previous",code:"KC_MPRV",title:"Media Previous"},{name:"Next",code:"KC_MNXT",title:"Media Next"},{name:"Rewind",code:"KC_MRWD",title:"Rewind"},{name:"Fast Forward",code:"KC_MFFD",title:"Fast Forward"},{name:"Select",code:"KC_MSEL",title:"Media Select"},{name:"Eject",code:"KC_EJCT",title:"Media Eject"}]},{id:"macro",label:"Macro",width:"label",keycodes:generateMacros(e)},buildLayerMenu(),{id:"special",label:"Special",width:"label",keycodes:[{name:"~",code:"S(KC_GRV)",keys:"`",title:"Shift + `"},{name:"!",code:"S(KC_1)",keys:"!",title:"Shift + 1"},{name:"@",code:"S(KC_2)",keys:"@",title:"Shift + 2"},{name:"#",code:"S(KC_3)",keys:"#",title:"Shift + 3"},{name:"$",code:"S(KC_4)",keys:"$",title:"Shift + 4"},{name:"%",code:"S(KC_5)",keys:"%",title:"Shift + 5"},{name:"^",code:"S(KC_6)",keys:"^",title:"Shift + 6"},{name:"&",code:"S(KC_7)",keys:"&",title:"Shift + 7"},{name:"*",code:"S(KC_8)",keys:"*",title:"Shift + 8"},{name:"(",code:"S(KC_9)",keys:"(",title:"Shift + 9"},{name:")",code:"S(KC_0)",keys:")",title:"Shift + 0"},{name:"_",code:"S(KC_MINS)",keys:"_",title:"Shift + -"},{name:"+",code:"S(KC_EQL)",keys:"+",title:"Shift + ="},{name:"{",code:"S(KC_LBRC)",keys:"{",title:"Shift + ["},{name:"}",code:"S(KC_RBRC)",keys:"}",title:"Shift + ]"},{name:"|",code:"S(KC_BSLS)",keys:"|",title:"Shift + \\"},{name:":",code:"S(KC_SCLN)",keys:":",title:"Shift + /"},{name:'"',code:"S(KC_QUOT)",keys:'"',title:"Shift + '"},{name:"<",code:"S(KC_COMM)",keys:"<",title:"Shift + ,"},{name:">",code:"S(KC_DOT)",keys:">",title:"Shift + ."},{name:"?",code:"S(KC_SLSH)",keys:"?",title:"Shift + /"},{name:"NUHS",code:"KC_NUHS",title:"Non-US # and ~"},{name:"NUBS",code:"KC_NUBS",title:"Non-US \\ and |"},{name:"Ro",code:"KC_RO",title:"JIS \\ and |"},{name:"¥",code:"KC_JYEN",title:"JPN Yen"},{name:"無変換",code:"KC_MHEN",title:"JIS Muhenkan"},{name:"漢字",code:"KC_HANJ",title:"Hanja"},{name:"한영",code:"KC_HAEN",title:"HanYeong"},{name:"変換",code:"KC_HENK",title:"JIS Henkan"},{name:"かな",code:"KC_KANA",title:"JIS Katakana/Hiragana"},{name:"Esc `",code:"KC_GESC",title:"Esc normally, but ` when Shift or Win is pressed"},{name:"LS (",code:"KC_LSPO",title:"Left Shift when held, ( when tapped"},{name:"RS )",code:"KC_RSPC",title:"Right Shift when held, ) when tapped"},{name:"LC (",code:"KC_LCPO",title:"Left Control when held, ( when tapped"},{name:"RC )",code:"KC_RCPC",title:"Right Control when held, ) when tapped"},{name:"LA (",code:"KC_LAPO",title:"Left Alt when held, ( when tapped"},{name:"RA )",code:"KC_RAPC",title:"Right Alt when held, ) when tapped"},{name:"SftEnt",code:"KC_SFTENT",title:"Right Shift when held, Enter when tapped"},{name:"Reset",code:"RESET",title:"Reset the keyboard"},{name:"Debug",code:"DEBUG",title:"Toggle debug mode"},{name:"Toggle NKRO",code:"MAGIC_TOGGLE_NKRO",shortName:"NKRO",title:"Toggle NKRO"},{name:"Locking Num Lock",code:"KC_LNUM"},{name:"Locking Caps Lock",code:"KC_LCAP"},{name:"Locking Scroll Lock",code:"KC_LSCR"},{name:"Power",code:"KC_PWR"},{name:"Power OSX",code:"KC_POWER"},{name:"Sleep",code:"KC_SLEP"},{name:"Wake",code:"KC_WAKE"},{name:"Calc",code:"KC_CALC"},{name:"Mail",code:"KC_MAIL"},{name:"Help",code:"KC_HELP"},{name:"Stop",code:"KC_STOP"},{name:"Alt Erase",code:"KC_ERAS"},{name:"Again",code:"KC_AGAIN"},{name:"Menu",code:"KC_MENU"},{name:"Undo",code:"KC_UNDO"},{name:"Select",code:"KC_SELECT"},{name:"Exec",code:"KC_EXECUTE"},{name:"Cut",code:"KC_CUT"},{name:"Copy",code:"KC_COPY"},{name:"Paste",code:"KC_PASTE"},{name:"Find",code:"KC_FIND"},{name:"My Comp",code:"KC_MYCM"},{name:"Home",code:"KC_WWW_HOME"},{name:"Back",code:"KC_WWW_BACK"},{name:"Forward",code:"KC_WWW_FORWARD"},{name:"Stop",code:"KC_WWW_STOP"},{name:"Refresh",code:"KC_WWW_REFRESH"},{name:"Favorites",code:"KC_WWW_FAVORITES"},{name:"Search",code:"KC_WWW_SEARCH"},{name:"Screen +",code:"KC_BRIU",shortName:"Scr +",title:"Screen Brightness Up"},{name:"Screen -",code:"KC_BRID",shortName:"Scr -",title:"Screen Brightness Down"},{name:"F13",code:"KC_F13"},{name:"F14",code:"KC_F14"},{name:"F15",code:"KC_F15"},{name:"F16",code:"KC_F16"},{name:"F17",code:"KC_F17"},{name:"F18",code:"KC_F18"},{name:"F19",code:"KC_F19"},{name:"F20",code:"KC_F20"},{name:"F21",code:"KC_F21"},{name:"F22",code:"KC_F22"},{name:"F23",code:"KC_F23"},{name:"F24",code:"KC_F24"},{name:"Mouse ↑",code:"KC_MS_UP"},{name:"Mouse ↓",code:"KC_MS_DOWN"},{name:"Mouse ←",code:"KC_MS_LEFT"},{name:"Mouse →",code:"KC_MS_RIGHT"},{name:"Mouse Btn1",code:"KC_MS_BTN1"},{name:"Mouse Btn2",code:"KC_MS_BTN2"},{name:"Mouse Btn3",code:"KC_MS_BTN3"},{name:"Mouse Btn4",code:"KC_MS_BTN4"},{name:"Mouse Btn5",code:"KC_MS_BTN5"},{name:"Mouse Btn6",code:"KC_MS_BTN6"},{name:"Mouse Btn7",code:"KC_MS_BTN7"},{name:"Mouse Btn8",code:"KC_MS_BTN8"},{name:"Mouse Wh ↑",code:"KC_MS_WH_UP"},{name:"Mouse Wh ↓",code:"KC_MS_WH_DOWN"},{name:"Mouse Wh ←",code:"KC_MS_WH_LEFT"},{name:"Mouse Wh →",code:"KC_MS_WH_RIGHT"},{name:"Mouse Acc0",code:"KC_MS_ACCEL0"},{name:"Mouse Acc1",code:"KC_MS_ACCEL1"},{name:"Mouse Acc2",code:"KC_MS_ACCEL2"},{name:"Audio On",code:"AU_ON"},{name:"Audio Off",code:"AU_OFF"},{name:"Audio Toggle",code:"AU_TOG"},{name:"Clicky Toggle",code:"CLICKY_TOGGLE"},{name:"Clicky Enable",code:"CLICKY_ENABLE"},{name:"Clicky Disable",code:"CLICKY_DISABLE"},{name:"Clicky Up",code:"CLICKY_UP"},{name:"Clicky Down",code:"CLICKY_DOWN"},{name:"Clicky Reset",code:"CLICKY_RESET"},{name:"Music On",code:"MU_ON"},{name:"Music Off",code:"MU_OFF"},{name:"Music Toggle",code:"MU_TOG"},{name:"Music Mode",code:"MU_MOD"}]},{id:"qmk_lighting",label:"Lighting",width:"label",keycodes:[{name:"BL Toggle",code:"BL_TOGG"},{name:"BL On",code:"BL_ON"},{name:"BL Off",code:"BL_OFF",shortName:"BL Off"},{name:"BL -",code:"BL_DEC"},{name:"BL +",code:"BL_INC"},{name:"BL Cycle",code:"BL_STEP"},{name:"BR Toggle",code:"BL_BRTG"},{name:"RGB Toggle",code:"RGB_TOG"},{name:"RGB Mode -",code:"RGB_RMOD"},{name:"RGB Mode +",code:"RGB_MOD"},{name:"Hue -",code:"RGB_HUD"},{name:"Hue +",code:"RGB_HUI"},{name:"Sat -",code:"RGB_SAD"},{name:"Sat +",code:"RGB_SAI"},{name:"Bright -",code:"RGB_VAD"},{name:"Bright +",code:"RGB_VAI"},{name:"Effect Speed-",code:"RGB_SPD"},{name:"Effect Speed+",code:"RGB_SPI"},{name:"RGB Mode P",code:"RGB_M_P",title:"Plain"},{name:"RGB Mode B",code:"RGB_M_B",title:"Breathe"},{name:"RGB Mode R",code:"RGB_M_R",title:"Rainbow"},{name:"RGB Mode SW",code:"RGB_M_SW",title:"Swirl"},{name:"RGB Mode SN",code:"RGB_M_SN",title:"Snake"},{name:"RGB Mode K",code:"RGB_M_K",title:"Knight"},{name:"RGB Mode X",code:"RGB_M_X",title:"Xmas"},{name:"RGB Mode G",code:"RGB_M_G",title:"Gradient"}]},{id:"custom",label:"Custom",width:"label",keycodes:[{name:"CUSTOM(0)",code:"CUSTOM(0)",title:"Custom Keycode 0"},{name:"CUSTOM(1)",code:"CUSTOM(1)",title:"Custom Keycode 1"},{name:"CUSTOM(2)",code:"CUSTOM(2)",title:"Custom Keycode 2"},{name:"CUSTOM(3)",code:"CUSTOM(3)",title:"Custom Keycode 3"},{name:"CUSTOM(4)",code:"CUSTOM(4)",title:"Custom Keycode 4"},{name:"CUSTOM(5)",code:"CUSTOM(5)",title:"Custom Keycode 5"},{name:"CUSTOM(6)",code:"CUSTOM(6)",title:"Custom Keycode 6"},{name:"CUSTOM(7)",code:"CUSTOM(7)",title:"Custom Keycode 7"},{name:"CUSTOM(8)",code:"CUSTOM(8)",title:"Custom Keycode 8"},{name:"CUSTOM(9)",code:"CUSTOM(9)",title:"Custom Keycode 9"},{name:"CUSTOM(10)",code:"CUSTOM(10)",title:"Custom Keycode 10"},{name:"CUSTOM(11)",code:"CUSTOM(11)",title:"Custom Keycode 11"},{name:"CUSTOM(12)",code:"CUSTOM(12)",title:"Custom Keycode 12"},{name:"CUSTOM(13)",code:"CUSTOM(13)",title:"Custom Keycode 13"},{name:"CUSTOM(14)",code:"CUSTOM(14)",title:"Custom Keycode 14"},{name:"CUSTOM(15)",code:"CUSTOM(15)",title:"Custom Keycode 15"}]}]}const categoriesForKeycodeModule=e=>({default:["basic","media","macro","layers","special"],[dist.BuiltInKeycodeModule.WTLighting]:["wt_lighting"],[dist.BuiltInKeycodeModule.QMKLighting]:["qmk_lighting"]})[e],getKeycodesForKeyboard=e=>{let o=[];if("lighting"in e){const{keycodes:n}=dist.getLightingDefinition(e.lighting);o=categoriesForKeycodeModule("default").concat(n===dist.KeycodeType.None?[]:n===dist.KeycodeType.QMK?categoriesForKeycodeModule(dist.BuiltInKeycodeModule.QMKLighting):categoriesForKeycodeModule(dist.BuiltInKeycodeModule.WTLighting))}else{const{keycodes:n}=e;o=n.flatMap(categoriesForKeycodeModule)}return getKeycodes().flatMap(n=>o.includes(n.id)?n.keycodes:[]).sort((n,r)=>n.code<=r.code?-1:1)},CSSVarObject={keyWidth:52,keyXSpacing:2,keyHeight:54,keyYSpacing:2,keyXPos:52+2,keyYPos:54+2,faceXPadding:[6,6],faceYPadding:[2,10],insideBorder:10},KeycapMetric={keyWidth:18.1,keyXSpacing:1.05,keyHeight:18.1,keyYSpacing:1.05,keyXPos:19.15,keyYPos:19.15},getComboKeyProps=e=>{if(e.w2===void 0||e.h2===void 0)return{clipPath:null,normalizedRects:null};const{x:o,y:n,x2:r=0,y2:s=0,w:a,w2:i,h:c,h2:l}=e,d=Math.max(e.w,e.w2),u=Math.max(e.h,e.h2),_=Math.min(o,o+r),p=Math.min(n,n+s),[C,K,h,g,y,m,S,x]=a===d?[o+r-_,o-_,n+s-p,n-p,i,a,l,c]:[o-_,o+r-_,n-p,n+s-p,a,i,c,l],b=T=>`polygon(${T.map(A=>`${100*A[0]}% ${100*A[1]}%`).join(",")})`,w=[[K/d,g/u],[C/d,g/u],[C/d,h/u],[(C+y)/d,h/u],[(C+y)/d,g/u],[(K+m)/d,g/u],[(K+m)/d,(g+x)/u],[(C+y)/d,(g+x)/u],[(C+y)/d,(h+S)/u],[C/d,(h+S)/u],[C/d,(g+x)/u],[K/d,(g+x)/u]];return{clipPath:b(w),normalizedRects:[[C,h,y,S],[K,g,m,x]]}};function calculatePointPosition({x:e=0,x2:o=0,y:n=0,r=0,rx:s=0,ry:a=0,w:i=0,w2:c=0,h:l=0}){const d=r*(2*Math.PI)/360,u=Math.cos(d),_=Math.sin(d),p=CSSVarObject.keyXPos*s,C=CSSVarObject.keyYPos*a,K=CSSVarObject.keyXPos*(e+o)+Math.max(c,i)*CSSVarObject.keyWidth/2+(Math.max(c,i)-1)*CSSVarObject.keyXSpacing/2,h=CSSVarObject.keyYPos*n+l*CSSVarObject.keyHeight/2+(l-1)*CSSVarObject.keyYSpacing/2,g=K*u-h*_-p*u+C*_+p,y=K*_+h*u-p*_-C*u+C;return[g,y]}const sortByX=(e,o)=>{const n=calculatePointPosition(e),r=calculatePointPosition(o);return n[0]-r[0]},sortByYX=(e,o)=>{const n=calculatePointPosition(e),r=calculatePointPosition(o);return n[1]-r[1]===0?n[0]-r[0]:n[1]-r[1]},withinChain=(e,o)=>{const n=calculatePointPosition(e),r=calculatePointPosition(o);return Math.abs(n[1]-r[1])<CSSVarObject.keyYPos*.9},getTraversalOrder=e=>{const[o,...n]=[...e].sort(sortByYX);if(o===void 0)return n;{const[r,s]=partition([...e],a=>withinChain(o,a));return[...r.sort(sortByX),...getTraversalOrder(s)]}},widthProfiles={1:[1,2,3,4],1.25:[4],1.5:[2,4],1.75:[3,4],2:[1,4],2.25:[3,4],2.75:[4],3:[4],6.25:[4],7:[4]},getRowForKey=(e,o)=>e.h!==1?o:widthProfiles[e.w]?widthProfiles[e.w].includes(o)?o:widthProfiles[e.w][0]:4,getRowProfiles=e=>{switch(!e.some(n=>n.some(r=>r.w!==1||r.h!==1))||e.length){case 8:return[1,1,1,1,2,3,4,4];case 7:return[1,1,1,2,3,4,4];case 6:return[1,1,2,3,4,4];case 5:return[1,2,3,4,4];case 4:return[2,3,4,4];case 3:return[2,3,4];default:return Array(e.length).fill(1)}},getKeyId=e=>`${e.w}-${e.h}-${e.col}-${e.row}-${e.w2}-${e.h2}`,getKeyboardRowPartitions=e=>{const{partitionedKeys:o}=getTraversalOrder(e).reduce(({prevX:r,partitionedKeys:s},a)=>{const[i]=calculatePointPosition(a);return r>=i&&s.push([]),s[s.length-1].push(a),{partitionedKeys:s,prevX:i}},{partitionedKeys:[],prevX:1/0}),n=getRowProfiles(o);return{rowMap:o.reduce((r,s,a)=>s.reduce((i,c)=>({...i,[getKeyId(c)]:getRowForKey(c,n[a])}),r),{}),partitionedKeys:o}},getNextKey=(e,o)=>{const n=o.filter(i=>!i.d),r=o[e],s=getTraversalOrder([...n]),a=s.indexOf(r);return a===s.length-1?null:o.indexOf(s[(a+1)%s.length])},makeSRGBTheme=e=>Object.entries(e).reduce((o,[n,r])=>{const s=`#${new Color(r.c).convertSRGBToLinear().getHexString()}`,a=`#${new Color(r.t).convertSRGBToLinear().getHexString()}`;return{...o,[n]:{c:s,t:a}}},{}),calculateKeyboardFrameDimensions=e=>{const o=e.map(dist.getBoundingBox),n=Math.min(...o.map(i=>i.xStart)),r=Math.min(...o.map(i=>i.yStart)),s=Math.max(...o.map(i=>i.xEnd))-n,a=Math.max(...o.map(i=>i.yEnd))-r;return{width:s,height:a}},getMeshName=(e,o,n)=>{if(e.ei!==void 0)return"E-100";if(e.h===2&&e.w===1)return`K-R${o}V-200`;if(e.w===1.25&&e.w2===1.5)return"K-R2-ISO";if(e.w===1.5&&e.w2===2.25)return"K-R2-BAE";if(e.h>1)return n?"K-R4C-100":"K-R4-100";if(!n)switch(e.w){case 1.25:case 1.5:case 1.75:case 1:case 2:case 2.25:case 2.75:return`K-R${o}-${e.w*100}`;case 3:case 6:case 6.25:case 6.5:case 7:return`K-R4C-${e.w*100}`;default:return"K-R4C-100"}switch(e.w){case 1:case 1.25:case 1.5:case 1.75:return`K-R${o}-${e.w*100}`;case 2:case 2.25:case 2.75:case 3:case 6:case 6.25:case 6.5:case 7:return`K-R4C-${e.w*100}`;default:return"K-R4C-100"}},getScale=(e,o)=>{if(e.ei!==void 0)return o;if(e.h===2&&e.w===1)return[1,1,1];if(e.w===1.25&&e.w2===1.5)return[1,1,1];if(e.w===1.5&&e.w2===2.25)return[1,1,1];if(e.h>1)return o;if(e.h==1)switch(e.w){case 1.25:case 1.5:case 1.75:case 2:case 2.25:case 2.75:case 3:case 6:case 6.25:case 6.5:case 7:return[1,1,1];case 1:return[1,1,1];default:return o}return o},getLabelOffsets=(e,o)=>{let n=0,r=0;return e.length==1&&'^*"'.split("").includes(e[0])&&(n=.2),o.length==1&&(",.".split("").includes(o[0])?r=.4:"/\\;'[]".split("").includes(o[0])?r=.3:"-".split("").includes(o[0])&&(r=.1)),[n,r]},getLabel=(e,o,n,r,s,a)=>{let i="",c=1,l=[0,0],d="";if(isCustomKeycodeByte(e,s)&&(r!=null&&r.customKeycodes)&&r.customKeycodes[getCustomKeycodeIndex(e,s)]!==void 0){const _=getCustomKeycodeIndex(e,s);i=getShortNameForKeycode(r.customKeycodes[_]),d=getShortNameForKeycode(r.customKeycodes[_],700)}else e&&(i=getLabelForByte(e,o*100,s,a)??"",d=getLabelForByte(e,700,s,a)??"");let u;if(isMacroKeycodeByte(e,s)){const _=getMacroKeycodeIndex(e,s);u=n[_],d=u||""}if(isAlpha(i)||isNumpadNumber(i))return i&&{label:i.toUpperCase(),macroExpression:u,key:(i||"")+(u||""),size:c,offset:l};if(isMultiLegend(i)){const _=i[0],p=i[i.length-1];return p&&{topLabel:_,bottomLabel:p,macroExpression:u,key:(i||"")+(u||""),size:c,offset:getLabelOffsets(_,p)}}else return isNumpadSymbol(i)&&(c=2),isArrowKey(i)&&(c=1.5),{label:i,centerLabel:i,tooltipLabel:d,macroExpression:u,key:(i||"")+(u||""),size:c,offset:l}},updateCSSVariables=e=>{const o=THEMES[e]||THEMES.OLIVIA_DARK;document.documentElement.style.setProperty("--color_accent",o.accent.c),document.documentElement.style.setProperty("--color_inside-accent",o.accent.t)};function getRGBPrime(e,o,n){if(e>=0&&e<60)return[o,n,0];if(e>=60&&e<120)return[n,o,0];if(e>=120&&e<180)return[0,o,n];if(e>=180&&e<240)return[0,n,o];if(e>=240&&e<300)return[n,0,o];if(e>=300&&e<360)return[o,0,n];if(e===360)return[o,n,0];throw new Error("Invalid hue")}const getColorByte=e=>{const o=e.replace("#",""),n=parseInt(o[0],16)*16+parseInt(o[1],16),r=parseInt(o[2],16)*16+parseInt(o[3],16),s=parseInt(o[4],16)*16+parseInt(o[5],16);return[n,r,s]},getDarkenedColor=(e,o=.8)=>{const[n,r,s]=getColorByte(e),a=Math.round(n*o).toString(16),i=Math.round(r*o).toString(16),c=Math.round(s*o).toString(16);return`#${a.padStart(2,"0")}${i.padStart(2,"0")}${c.padStart(2,"0")}`},getHSV=e=>{const[o,n,r]=getColorByte(e).map(u=>u/255),[s,a]=[Math.max(o,n,r),Math.min(o,n,r)],i=s-a;let c=60,l=0,d=s;return i===0?c=c*0:s===o?c=c*((n-r)/i%6):s===n?c=c*((r-o)/i+2):s===r&&(c=c*((o-n)/i+4)),s!==0&&(l=i/s),[(c+360)%360,l,d]},getHSVFrom256=e=>[Math.round(360*e[0]/255),Math.round(e[1]/255),1];function getRGB({hue:e,sat:o}){o=o/255,e=Math.round(360*e)/255;const n=o,r=n*(1-Math.abs(e/60%2-1)),s=1-n,[a,i,c]=getRGBPrime(e,n,r).map(l=>Math.round(255*(s+l)));return`rgba(${a},${i},${c},1)`}function toDegrees(e){return e*(180/Math.PI)}function calcRadialHue(e,o){if(e<200&&o<200){const n=200-e,r=200-o;return 2*Math.PI-Math.atan(n/r)}else if(e>200&&o<200){const n=e-200,r=200-o;return Math.atan(n/r)}else if(e<200&&o>200){const n=200-e,r=o-200;return Math.PI+Math.atan(n/r)}else if(e>200&&o>200){const n=e-200,r=o-200;return .5*Math.PI+Math.atan(r/n)}else{if(e===200)return o>200?Math.PI:0;if(o===200)return e>=200?.5*Math.PI:1.5*Math.PI}}function calcRadialMagnitude(e,o){if(e<200&&o<200){const n=200-e,r=200-o;return Math.sqrt(n*n+r*r)/200}else if(e>200&&o<200){const n=e-200,r=200-o;return Math.sqrt(n*n+r*r)/200}else if(e<200&&o>200){const n=200-e,r=o-200;return Math.sqrt(n*n+r*r)/200}else if(e>200&&o>200){const n=e-200,r=o-200;return Math.sqrt(n*n+r*r)/200}else{if(e===200)return o>200?(o-200)/200:(200-o)/200;if(o===200)return e>200?(e-200)/200:(200-e)/200}}function hsToRgb({hue:e,sat:o}){o=o/255,e=Math.round(360*e)/255;const n=o,r=n*(1-Math.abs(e/60%2-1)),s=1-n,[a,i,c]=getRGBPrime(e,n,r).map(l=>Math.round(255*(s+l)));return[a,i,c]}function getHex({hue:e,sat:o}){let[n,r,s]=hsToRgb({hue:e,sat:o}).map(a=>a.toString(16));return n.length==1&&(n="0"+n),r.length==1&&(r="0"+r),s.length==1&&(s="0"+s),"#"+n+r+s}function isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}const webGLIsAvailable=isWebGLAvailable(),initialState$7={...getSettings(),isTestMatrixEnabled:!1,restartRequired:!1,allowGlobalHotKeys:!1},toggleBool=(e,o)=>{e[o]=!e[o],setSettings(e)},settingsSlice=createSlice({name:"settings",initialState:initialState$7,reducers:{toggleFastRemap:e=>{toggleBool(e,"disableFastRemap")},updateShowSliderValuesMode:(e,o)=>{e.ShowSliderValuesMode=o.payload,setSettings(e)},toggleCreatorMode:e=>{toggleBool(e,"showDesignTab")},toggleThemeMode:e=>{const o=e.themeMode==="light"?"dark":"light";document.documentElement.dataset.themeMode=o,e.themeMode=o,setSettings(e)},updateRenderMode:(e,o)=>{e.renderMode=o.payload,setSettings(e)},updateDesignDefinitionVersion:(e,o)=>{e.designDefinitionVersion=o.payload,setSettings(e)},updateThemeName:(e,o)=>{e.themeName=o.payload,updateCSSVariables(e.themeName),setSettings(e)},setTestMatrixEnabled:(e,o)=>{e.isTestMatrixEnabled=o.payload},setMacroEditorSettings:(e,o)=>{const n={...e.macroEditor,...o.payload};e.macroEditor=n,setSettings(e)},setTestKeyboardSoundsSettings:(e,o)=>{const n={...e.testKeyboardSoundsSettings,...o.payload};e.testKeyboardSoundsSettings=n,setSettings(e)},disableGlobalHotKeys:e=>{e.allowGlobalHotKeys=!1},enableGlobalHotKeys:e=>{e.allowGlobalHotKeys=!0}}}),{toggleFastRemap,updateShowSliderValuesMode,toggleCreatorMode,setTestMatrixEnabled,setTestKeyboardSoundsSettings,setMacroEditorSettings,toggleThemeMode,disableGlobalHotKeys,enableGlobalHotKeys,updateRenderMode,updateThemeName,updateDesignDefinitionVersion}=settingsSlice.actions,settingsReducer=settingsSlice.reducer,getDesignDefinitionVersion=e=>e.settings.designDefinitionVersion,getDisableFastRemap=e=>e.settings.disableFastRemap,getShowSliderValuesMode=e=>webGLIsAvailable?e.settings.ShowSliderValuesMode:"Slider Only",getShowDesignTab=e=>e.settings.showDesignTab,getIsTestMatrixEnabled=e=>e.settings.isTestMatrixEnabled,getMacroEditorSettings=e=>e.settings.macroEditor,getTestKeyboardSoundsSettings=e=>e.settings.testKeyboardSoundsSettings,getRenderMode=e=>webGLIsAvailable?e.settings.renderMode:"2D",getThemeMode=e=>e.settings.themeMode,getThemeName=e=>e.settings.themeName,getSelectedTheme=createSelector(getThemeName,e=>THEMES[e]),getSelectedSRGBTheme=createSelector(getSelectedTheme,e=>makeSRGBTheme(e)),basicKeyToByte={_QK_MODS:256,_QK_MODS_MAX:8191,_QK_MOD_TAP:24576,_QK_MOD_TAP_MAX:32767,_QK_LAYER_TAP:16384,_QK_LAYER_TAP_MAX:20479,_QK_LAYER_MOD:22784,_QK_LAYER_MOD_MAX:23039,_QK_TO:20496,_QK_TO_MAX:20511,_QK_MOMENTARY:20736,_QK_MOMENTARY_MAX:20767,_QK_DEF_LAYER:20992,_QK_DEF_LAYER_MAX:21023,_QK_TOGGLE_LAYER:21248,_QK_TOGGLE_LAYER_MAX:21279,_QK_ONE_SHOT_LAYER:21504,_QK_ONE_SHOT_LAYER_MAX:21535,_QK_ONE_SHOT_MOD:21760,_QK_ONE_SHOT_MOD_MAX:22015,_QK_LAYER_TAP_TOGGLE:22528,_QK_LAYER_TAP_TOGGLE_MAX:22559,_QK_LAYER_MOD_MASK:15,_QK_MACRO:24338,_QK_MACRO_MAX:24353,_QK_KB:24448,_QK_KB_MAX:24463,KC_NO:0,KC_TRNS:1,KC_A:4,KC_B:5,KC_C:6,KC_D:7,KC_E:8,KC_F:9,KC_G:10,KC_H:11,KC_I:12,KC_J:13,KC_K:14,KC_L:15,KC_M:16,KC_N:17,KC_O:18,KC_P:19,KC_Q:20,KC_R:21,KC_S:22,KC_T:23,KC_U:24,KC_V:25,KC_W:26,KC_X:27,KC_Y:28,KC_Z:29,KC_1:30,KC_2:31,KC_3:32,KC_4:33,KC_5:34,KC_6:35,KC_7:36,KC_8:37,KC_9:38,KC_0:39,KC_ENT:40,KC_ESC:41,KC_BSPC:42,KC_TAB:43,KC_SPC:44,KC_MINS:45,KC_EQL:46,KC_LBRC:47,KC_RBRC:48,KC_BSLS:49,KC_NUHS:50,KC_SCLN:51,KC_QUOT:52,KC_GRV:53,KC_COMM:54,KC_DOT:55,KC_SLSH:56,KC_CAPS:57,KC_F1:58,KC_F2:59,KC_F3:60,KC_F4:61,KC_F5:62,KC_F6:63,KC_F7:64,KC_F8:65,KC_F9:66,KC_F10:67,KC_F11:68,KC_F12:69,KC_PSCR:70,KC_SLCK:71,KC_PAUS:72,KC_INS:73,KC_HOME:74,KC_PGUP:75,KC_DEL:76,KC_END:77,KC_PGDN:78,KC_RGHT:79,KC_LEFT:80,KC_DOWN:81,KC_UP:82,KC_NLCK:83,KC_PSLS:84,KC_PAST:85,KC_PMNS:86,KC_PPLS:87,KC_PENT:88,KC_P1:89,KC_P2:90,KC_P3:91,KC_P4:92,KC_P5:93,KC_P6:94,KC_P7:95,KC_P8:96,KC_P9:97,KC_P0:98,KC_PDOT:99,KC_NUBS:100,KC_APP:101,KC_POWER:102,KC_PEQL:103,KC_F13:104,KC_F14:105,KC_F15:106,KC_F16:107,KC_F17:108,KC_F18:109,KC_F19:110,KC_F20:111,KC_F21:112,KC_F22:113,KC_F23:114,KC_F24:115,KC_EXECUTE:116,KC_HELP:117,KC_MENU:118,KC_SELECT:119,KC_STOP:120,KC_AGAIN:121,KC_UNDO:122,KC_CUT:123,KC_COPY:124,KC_PASTE:125,KC_FIND:126,KC_LCAP:130,KC_LNUM:131,KC_LSCR:132,KC_PCMM:133,KC_KP_EQUAL_AS400:134,KC_RO:135,KC_KANA:136,KC_JYEN:137,KC_HENK:138,KC_MHEN:139,KC_INT6:140,KC_INT7:141,KC_INT8:142,KC_INT9:143,KC_HAEN:144,KC_HANJ:145,KC_LANG3:146,KC_LANG4:147,KC_LANG5:148,KC_LANG6:149,KC_LANG7:150,KC_LANG8:151,KC_LANG9:152,KC_ERAS:153,KC_SYSREQ:154,KC_CANCEL:155,KC_CLR:156,KC_CLEAR:156,KC_PRIOR:157,KC_OUT:160,KC_OPER:161,KC_CLEAR_AGAIN:162,KC_CRSEL:163,KC_EXSEL:164,KC_PWR:165,KC_SLEP:166,KC_WAKE:167,KC_MUTE:168,KC_VOLU:169,KC_VOLD:170,KC_MNXT:171,KC_MPRV:172,KC_MSTP:173,KC_MPLY:174,KC_MSEL:175,KC_EJCT:176,KC_MAIL:177,KC_CALC:178,KC_MYCM:179,KC_WWW_SEARCH:180,KC_WWW_HOME:181,KC_WWW_BACK:182,KC_WWW_FORWARD:183,KC_WWW_STOP:184,KC_WWW_REFRESH:185,KC_WWW_FAVORITES:186,KC_MFFD:187,KC_MRWD:188,KC_BRIU:189,KC_BRID:190,KC_LCTL:224,KC_LSFT:225,KC_LALT:226,KC_LGUI:227,KC_RCTL:228,KC_RSFT:229,KC_RALT:230,KC_RGUI:231,KC_MS_UP:240,KC_MS_DOWN:241,KC_MS_LEFT:242,KC_MS_RIGHT:243,KC_MS_BTN1:244,KC_MS_BTN2:245,KC_MS_BTN3:246,KC_MS_BTN4:247,KC_MS_BTN5:248,KC_MS_WH_UP:249,KC_MS_WH_DOWN:250,KC_MS_WH_LEFT:251,KC_MS_WH_RIGHT:252,KC_MS_ACCEL0:253,KC_MS_ACCEL1:254,KC_MS_ACCEL2:255,RESET:23552,DEBUG:23553,MAGIC_TOGGLE_NKRO:23572,KC_GESC:23574,AU_ON:23581,AU_OFF:23582,AU_TOG:23583,CLICKY_TOGGLE:23584,CLICKY_ENABLE:23585,CLICKY_DISABLE:23586,CLICKY_UP:23587,CLICKY_DOWN:23588,CLICKY_RESET:23589,MU_ON:23590,MU_OFF:23591,MU_TOG:23592,MU_MOD:23593,BL_ON:23739,BL_OFF:23740,BL_DEC:23741,BL_INC:23742,BL_TOGG:23743,BL_STEP:23744,BL_BRTG:23745,RGB_TOG:23746,RGB_MOD:23747,RGB_RMOD:23748,RGB_HUI:23749,RGB_HUD:23750,RGB_SAI:23751,RGB_SAD:23752,RGB_VAI:23753,RGB_VAD:23754,RGB_SPI:23755,RGB_SPD:23756,RGB_M_P:23757,RGB_M_B:23758,RGB_M_R:23759,RGB_M_SW:23760,RGB_M_SN:23761,RGB_M_K:23762,RGB_M_X:23763,RGB_M_G:23764,KC_LSPO:23767,KC_RSPC:23768,KC_SFTENT:23769,KC_LCPO:23795,KC_RCPC:23796,KC_LAPO:23797,KC_RAPC:23798,BR_INC:24320,BR_DEC:24321,EF_INC:24322,EF_DEC:24323,ES_INC:24324,ES_DEC:24325,H1_INC:24326,H1_DEC:24327,S1_INC:24328,S1_DEC:24329,H2_INC:24330,H2_DEC:24331,S2_INC:24332,S2_DEC:24333,FN_MO13:24336,FN_MO23:24337},v10BasicKeyToByte={_QK_MODS:256,_QK_MODS_MAX:8191,_QK_MOD_TAP:24576,_QK_MOD_TAP_MAX:32767,_QK_LAYER_TAP:16384,_QK_LAYER_TAP_MAX:20479,_QK_LAYER_MOD:22784,_QK_LAYER_MOD_MAX:23039,_QK_TO:20480,_QK_TO_MAX:20511,_QK_MOMENTARY:20736,_QK_MOMENTARY_MAX:20767,_QK_DEF_LAYER:20992,_QK_DEF_LAYER_MAX:21023,_QK_TOGGLE_LAYER:21248,_QK_TOGGLE_LAYER_MAX:21279,_QK_ONE_SHOT_LAYER:21504,_QK_ONE_SHOT_LAYER_MAX:21535,_QK_ONE_SHOT_MOD:21760,_QK_ONE_SHOT_MOD_MAX:22015,_QK_LAYER_TAP_TOGGLE:22528,_QK_LAYER_TAP_TOGGLE_MAX:22559,_QK_LAYER_MOD_MASK:15,_QK_MACRO:24338,_QK_MACRO_MAX:24353,_QK_KB:24448,_QK_KB_MAX:24463,KC_NO:0,KC_TRNS:1,KC_A:4,KC_B:5,KC_C:6,KC_D:7,KC_E:8,KC_F:9,KC_G:10,KC_H:11,KC_I:12,KC_J:13,KC_K:14,KC_L:15,KC_M:16,KC_N:17,KC_O:18,KC_P:19,KC_Q:20,KC_R:21,KC_S:22,KC_T:23,KC_U:24,KC_V:25,KC_W:26,KC_X:27,KC_Y:28,KC_Z:29,KC_1:30,KC_2:31,KC_3:32,KC_4:33,KC_5:34,KC_6:35,KC_7:36,KC_8:37,KC_9:38,KC_0:39,KC_ENT:40,KC_ESC:41,KC_BSPC:42,KC_TAB:43,KC_SPC:44,KC_MINS:45,KC_EQL:46,KC_LBRC:47,KC_RBRC:48,KC_BSLS:49,KC_NUHS:50,KC_SCLN:51,KC_QUOT:52,KC_GRV:53,KC_COMM:54,KC_DOT:55,KC_SLSH:56,KC_CAPS:57,KC_F1:58,KC_F2:59,KC_F3:60,KC_F4:61,KC_F5:62,KC_F6:63,KC_F7:64,KC_F8:65,KC_F9:66,KC_F10:67,KC_F11:68,KC_F12:69,KC_PSCR:70,KC_SLCK:71,KC_PAUS:72,KC_INS:73,KC_HOME:74,KC_PGUP:75,KC_DEL:76,KC_END:77,KC_PGDN:78,KC_RGHT:79,KC_LEFT:80,KC_DOWN:81,KC_UP:82,KC_NLCK:83,KC_PSLS:84,KC_PAST:85,KC_PMNS:86,KC_PPLS:87,KC_PENT:88,KC_P1:89,KC_P2:90,KC_P3:91,KC_P4:92,KC_P5:93,KC_P6:94,KC_P7:95,KC_P8:96,KC_P9:97,KC_P0:98,KC_PDOT:99,KC_NUBS:100,KC_APP:101,KC_POWER:102,KC_PEQL:103,KC_F13:104,KC_F14:105,KC_F15:106,KC_F16:107,KC_F17:108,KC_F18:109,KC_F19:110,KC_F20:111,KC_F21:112,KC_F22:113,KC_F23:114,KC_F24:115,KC_EXECUTE:116,KC_HELP:117,KC_MENU:118,KC_SELECT:119,KC_STOP:120,KC_AGAIN:121,KC_UNDO:122,KC_CUT:123,KC_COPY:124,KC_PASTE:125,KC_FIND:126,KC_LCAP:130,KC_LNUM:131,KC_LSCR:132,KC_PCMM:133,KC_KP_EQUAL_AS400:134,KC_RO:135,KC_KANA:136,KC_JYEN:137,KC_HENK:138,KC_MHEN:139,KC_INT6:140,KC_INT7:141,KC_INT8:142,KC_INT9:143,KC_HAEN:144,KC_HANJ:145,KC_LANG3:146,KC_LANG4:147,KC_LANG5:148,KC_LANG6:149,KC_LANG7:150,KC_LANG8:151,KC_LANG9:152,KC_ERAS:153,KC_SYSREQ:154,KC_CANCEL:155,KC_CLR:156,KC_CLEAR:156,KC_PRIOR:157,KC_OUT:160,KC_OPER:161,KC_CLEAR_AGAIN:162,KC_CRSEL:163,KC_EXSEL:164,KC_PWR:165,KC_SLEP:166,KC_WAKE:167,KC_MUTE:168,KC_VOLU:169,KC_VOLD:170,KC_MNXT:171,KC_MPRV:172,KC_MSTP:173,KC_MPLY:174,KC_MSEL:175,KC_EJCT:176,KC_MAIL:177,KC_CALC:178,KC_MYCM:179,KC_WWW_SEARCH:180,KC_WWW_HOME:181,KC_WWW_BACK:182,KC_WWW_FORWARD:183,KC_WWW_STOP:184,KC_WWW_REFRESH:185,KC_WWW_FAVORITES:186,KC_MFFD:187,KC_MRWD:188,KC_BRIU:189,KC_BRID:190,KC_LCTL:224,KC_LSFT:225,KC_LALT:226,KC_LGUI:227,KC_RCTL:228,KC_RSFT:229,KC_RALT:230,KC_RGUI:231,KC_MS_UP:240,KC_MS_DOWN:241,KC_MS_LEFT:242,KC_MS_RIGHT:243,KC_MS_BTN1:244,KC_MS_BTN2:245,KC_MS_BTN3:246,KC_MS_BTN4:247,KC_MS_BTN5:248,KC_MS_WH_UP:249,KC_MS_WH_DOWN:250,KC_MS_WH_LEFT:251,KC_MS_WH_RIGHT:252,KC_MS_ACCEL0:253,KC_MS_ACCEL1:254,KC_MS_ACCEL2:255,RESET:23552,DEBUG:23553,MAGIC_TOGGLE_NKRO:23572,KC_GESC:23574,AU_ON:23581,AU_OFF:23582,AU_TOG:23583,CLICKY_TOGGLE:23584,CLICKY_ENABLE:23585,CLICKY_DISABLE:23586,CLICKY_UP:23587,CLICKY_DOWN:23588,CLICKY_RESET:23589,MU_ON:23590,MU_OFF:23591,MU_TOG:23592,MU_MOD:23593,BL_ON:23739,BL_OFF:23740,BL_DEC:23741,BL_INC:23742,BL_TOGG:23743,BL_STEP:23744,BL_BRTG:23745,RGB_TOG:23746,RGB_MOD:23747,RGB_RMOD:23748,RGB_HUI:23749,RGB_HUD:23750,RGB_SAI:23751,RGB_SAD:23752,RGB_VAI:23753,RGB_VAD:23754,RGB_SPI:23755,RGB_SPD:23756,RGB_M_P:23757,RGB_M_B:23758,RGB_M_R:23759,RGB_M_SW:23760,RGB_M_SN:23761,RGB_M_K:23762,RGB_M_X:23763,RGB_M_G:23764,KC_LSPO:23767,KC_RSPC:23768,KC_SFTENT:23769,KC_LCPO:23795,KC_RCPC:23796,KC_LAPO:23797,KC_RAPC:23798,BR_INC:24320,BR_DEC:24321,EF_INC:24322,EF_DEC:24323,ES_INC:24324,ES_DEC:24325,H1_INC:24326,H1_DEC:24327,S1_INC:24328,S1_DEC:24329,H2_INC:24330,H2_DEC:24331,S2_INC:24332,S2_DEC:24333,FN_MO13:24336,FN_MO23:24337},v11BasicKeyToByte={_QK_MODS:256,_QK_MODS_MAX:8191,_QK_MOD_TAP:8192,_QK_MOD_TAP_MAX:16383,_QK_LAYER_TAP:16384,_QK_LAYER_TAP_MAX:20479,_QK_LAYER_MOD:20480,_QK_LAYER_MOD_MAX:20991,_QK_TO:20992,_QK_TO_MAX:21023,_QK_MOMENTARY:21024,_QK_MOMENTARY_MAX:21055,_QK_DEF_LAYER:21056,_QK_DEF_LAYER_MAX:21087,_QK_TOGGLE_LAYER:21088,_QK_TOGGLE_LAYER_MAX:21119,_QK_ONE_SHOT_LAYER:21120,_QK_ONE_SHOT_LAYER_MAX:21151,_QK_ONE_SHOT_MOD:21152,_QK_ONE_SHOT_MOD_MAX:21183,_QK_LAYER_TAP_TOGGLE:21184,_QK_LAYER_TAP_TOGGLE_MAX:21215,_QK_LAYER_MOD_MASK:31,_QK_MACRO:30466,_QK_MACRO_MAX:30481,_QK_KB:32512,_QK_KB_MAX:32767,KC_NO:0,KC_TRNS:1,KC_A:4,KC_B:5,KC_C:6,KC_D:7,KC_E:8,KC_F:9,KC_G:10,KC_H:11,KC_I:12,KC_J:13,KC_K:14,KC_L:15,KC_M:16,KC_N:17,KC_O:18,KC_P:19,KC_Q:20,KC_R:21,KC_S:22,KC_T:23,KC_U:24,KC_V:25,KC_W:26,KC_X:27,KC_Y:28,KC_Z:29,KC_1:30,KC_2:31,KC_3:32,KC_4:33,KC_5:34,KC_6:35,KC_7:36,KC_8:37,KC_9:38,KC_0:39,KC_ENT:40,KC_ESC:41,KC_BSPC:42,KC_TAB:43,KC_SPC:44,KC_MINS:45,KC_EQL:46,KC_LBRC:47,KC_RBRC:48,KC_BSLS:49,KC_NUHS:50,KC_SCLN:51,KC_QUOT:52,KC_GRV:53,KC_COMM:54,KC_DOT:55,KC_SLSH:56,KC_CAPS:57,KC_F1:58,KC_F2:59,KC_F3:60,KC_F4:61,KC_F5:62,KC_F6:63,KC_F7:64,KC_F8:65,KC_F9:66,KC_F10:67,KC_F11:68,KC_F12:69,KC_PSCR:70,KC_SLCK:71,KC_PAUS:72,KC_INS:73,KC_HOME:74,KC_PGUP:75,KC_DEL:76,KC_END:77,KC_PGDN:78,KC_RGHT:79,KC_LEFT:80,KC_DOWN:81,KC_UP:82,KC_NLCK:83,KC_PSLS:84,KC_PAST:85,KC_PMNS:86,KC_PPLS:87,KC_PENT:88,KC_P1:89,KC_P2:90,KC_P3:91,KC_P4:92,KC_P5:93,KC_P6:94,KC_P7:95,KC_P8:96,KC_P9:97,KC_P0:98,KC_PDOT:99,KC_NUBS:100,KC_APP:101,KC_POWER:102,KC_PEQL:103,KC_F13:104,KC_F14:105,KC_F15:106,KC_F16:107,KC_F17:108,KC_F18:109,KC_F19:110,KC_F20:111,KC_F21:112,KC_F22:113,KC_F23:114,KC_F24:115,KC_EXECUTE:116,KC_HELP:117,KC_MENU:118,KC_SELECT:119,KC_STOP:120,KC_AGAIN:121,KC_UNDO:122,KC_CUT:123,KC_COPY:124,KC_PASTE:125,KC_FIND:126,KC_LCAP:130,KC_LNUM:131,KC_LSCR:132,KC_PCMM:133,KC_KP_EQUAL_AS400:134,KC_RO:135,KC_KANA:136,KC_JYEN:137,KC_HENK:138,KC_MHEN:139,KC_INT6:140,KC_INT7:141,KC_INT8:142,KC_INT9:143,KC_HAEN:144,KC_HANJ:145,KC_LANG3:146,KC_LANG4:147,KC_LANG5:148,KC_LANG6:149,KC_LANG7:150,KC_LANG8:151,KC_LANG9:152,KC_ERAS:153,KC_SYSREQ:154,KC_CANCEL:155,KC_CLR:156,KC_CLEAR:156,KC_PRIOR:157,KC_OUT:160,KC_OPER:161,KC_CLEAR_AGAIN:162,KC_CRSEL:163,KC_EXSEL:164,KC_PWR:165,KC_SLEP:166,KC_WAKE:167,KC_MUTE:168,KC_VOLU:169,KC_VOLD:170,KC_MNXT:171,KC_MPRV:172,KC_MSTP:173,KC_MPLY:174,KC_MSEL:175,KC_EJCT:176,KC_MAIL:177,KC_CALC:178,KC_MYCM:179,KC_WWW_SEARCH:180,KC_WWW_HOME:181,KC_WWW_BACK:182,KC_WWW_FORWARD:183,KC_WWW_STOP:184,KC_WWW_REFRESH:185,KC_WWW_FAVORITES:186,KC_MFFD:187,KC_MRWD:188,KC_BRIU:189,KC_BRID:190,KC_MS_UP:205,KC_MS_DOWN:206,KC_MS_LEFT:207,KC_MS_RIGHT:208,KC_MS_BTN1:209,KC_MS_BTN2:210,KC_MS_BTN3:211,KC_MS_BTN4:212,KC_MS_BTN5:213,KC_MS_BTN6:214,KC_MS_BTN7:215,KC_MS_BTN8:216,KC_MS_WH_UP:217,KC_MS_WH_DOWN:218,KC_MS_WH_LEFT:219,KC_MS_WH_RIGHT:220,KC_MS_ACCEL0:221,KC_MS_ACCEL1:222,KC_MS_ACCEL2:223,KC_LCTL:224,KC_LSFT:225,KC_LALT:226,KC_LGUI:227,KC_RCTL:228,KC_RSFT:229,KC_RALT:230,KC_RGUI:231,RESET:31744,DEBUG:31746,MAGIC_TOGGLE_NKRO:28691,KC_GESC:31766,KC_ASUP:31761,KC_ASDN:31760,KC_ASRP:31762,KC_ASTG:31765,KC_ASON:31763,KC_ASOFF:31764,AU_ON:29824,AU_OFF:29825,AU_TOG:29826,CLICKY_TOGGLE:29834,CLICKY_ENABLE:29835,CLICKY_DISABLE:29836,CLICKY_UP:29837,CLICKY_DOWN:29838,CLICKY_RESET:29839,MU_ON:29840,MU_OFF:29841,MU_TOG:29842,MU_MOD:29843,MI_ON:28928,MI_OFF:28929,MI_TOG:28930,MI_C:28944,MI_Cs:28945,MI_D:28946,MI_Ds:28947,MI_E:28948,MI_F:28949,MI_Fs:28950,MI_G:28951,MI_Gs:28952,MI_A:28953,MI_As:28954,MI_B:28955,MI_C_1:28960,MI_Cs_1:28961,MI_D_1:28962,MI_Ds_1:28963,MI_E_1:28964,MI_F_1:28965,MI_Fs_1:28966,MI_G_1:28967,MI_Gs_1:28968,MI_A_1:28969,MI_As_1:28970,MI_B_1:28971,MI_C_2:28976,MI_Cs_2:28977,MI_D_2:28978,MI_Ds_2:28979,MI_E_2:28980,MI_F_2:28981,MI_Fs_2:28982,MI_G_2:28983,MI_Gs_2:28984,MI_A_2:28985,MI_As_2:28986,MI_B_2:28987,MI_C_3:28992,MI_Cs_3:28993,MI_D_3:28994,MI_Ds_3:28995,MI_E_3:28996,MI_F_3:28997,MI_Fs_3:28998,MI_G_3:28999,MI_Gs_3:29e3,MI_A_3:29001,MI_As_3:29002,MI_B_3:29003,MI_C_4:29008,MI_Cs_4:29009,MI_D_4:29010,MI_Ds_4:29011,MI_E_4:29012,MI_F_4:29013,MI_Fs_4:29014,MI_G_4:29015,MI_Gs_4:29016,MI_A_4:29017,MI_As_4:29018,MI_B_4:29019,MI_C_5:29024,MI_Cs_5:29025,MI_D_5:29026,MI_Ds_5:29027,MI_E_5:29028,MI_F_5:29029,MI_Fs_5:29030,MI_G_5:29031,MI_Gs_5:29032,MI_A_5:29033,MI_As_5:29034,MI_B_5:29035,MI_OCT_N2:29040,MI_OCT_N1:29041,MI_OCT_0:29042,MI_OCT_1:29043,MI_OCT_2:29044,MI_OCT_3:29045,MI_OCT_4:29046,MI_OCT_5:29047,MI_OCT_6:29048,MI_OCT_7:29049,MI_OCTD:29050,MI_OCTU:29051,MI_TRNS_N6:29056,MI_TRNS_N5:29057,MI_TRNS_N4:29058,MI_TRNS_N3:29059,MI_TRNS_N2:29060,MI_TRNS_N1:29061,MI_TRNS_0:29062,MI_TRNS_1:29063,MI_TRNS_2:29064,MI_TRNS_3:29065,MI_TRNS_4:29066,MI_TRNS_5:29067,MI_TRNS_6:29068,MI_TRNSD:29069,MI_TRNSU:29070,MI_VEL_0:29072,MI_VEL_1:29073,MI_VEL_2:29074,MI_VEL_3:29075,MI_VEL_4:29076,MI_VEL_5:29077,MI_VEL_6:29078,MI_VEL_7:29079,MI_VEL_8:29080,MI_VEL_9:29081,MI_VEL_10:29082,MI_VELD:29083,MI_VELU:29084,MI_CH1:29088,MI_CH2:29089,MI_CH3:29090,MI_CH4:29091,MI_CH5:29092,MI_CH6:29093,MI_CH7:29094,MI_CH8:29095,MI_CH9:29096,MI_CH10:29097,MI_CH11:29098,MI_CH12:29099,MI_CH13:29100,MI_CH14:29101,MI_CH15:29102,MI_CH16:29103,MI_CHD:29104,MI_CHU:29105,MI_ALLOFF:29120,MI_SUST:29121,MI_PORT:29122,MI_SOST:29123,MI_SOFT:29124,MI_LEG:29125,MI_MOD:29126,MI_MODSD:29127,MI_MODSU:29128,MI_BENDD:29129,MI_BENDU:29130,BL_ON:30720,BL_OFF:30721,BL_DEC:30723,BL_INC:30724,BL_TOGG:30722,BL_STEP:30725,BL_BRTG:30726,RGB_TOG:30752,RGB_MOD:30753,RGB_RMOD:30754,RGB_HUI:30755,RGB_HUD:30756,RGB_SAI:30757,RGB_SAD:30758,RGB_VAI:30759,RGB_VAD:30760,RGB_SPI:30761,RGB_SPD:30762,RGB_M_P:30763,RGB_M_B:30764,RGB_M_R:30765,RGB_M_SW:30766,RGB_M_SN:30767,RGB_M_K:30768,RGB_M_X:30769,RGB_M_G:30770,RGB_MODE_RGBTEST:30771,VLK_TOG:31767,KC_LSPO:31770,KC_RSPC:31771,KC_SFTENT:31774,OUT_AUTO:31776,OUT_USB:31777,QK_CLEAR_EEPROM:31747,HPT_ON:31808,HPT_OFF:31809,HPT_TOG:31810,HPT_RST:31811,HPT_FBK:31812,HPT_BUZ:31813,HPT_MODI:31814,HPT_MODD:31815,HPT_CONT:31816,HPT_CONI:31817,HPT_COND:31818,HPT_DWLI:31819,HPT_DWLD:31820,KC_LCPO:31768,KC_RCPC:31769,KC_LAPO:31772,KC_RAPC:31773,CMB_ON:31824,CMB_OFF:31825,CMB_TOG:31826,MAGIC_SWAP_LCTL_LGUI:28695,MAGIC_SWAP_RCTL_RGUI:28697,MAGIC_UNSWAP_LCTL_LGUI:28696,MAGIC_UNSWAP_RCTL_RGUI:28698,MAGIC_SWAP_CTL_GUI:28699,MAGIC_UNSWAP_CTL_GUI:28700,MAGIC_TOGGLE_CTL_GUI:28701,MAGIC_EE_HANDS_LEFT:28702,MAGIC_EE_HANDS_RIGHT:28703,DYN_REC_START1:31827,DYN_REC_START2:31828,DYN_REC_STOP:31829,DYN_MACRO_PLAY1:31830,DYN_MACRO_PLAY2:31831,FN_MO13:30464,FN_MO23:30465},v12BasicKeyToByte={_QK_MODS:256,_QK_MODS_MAX:8191,_QK_MOD_TAP:8192,_QK_MOD_TAP_MAX:16383,_QK_LAYER_TAP:16384,_QK_LAYER_TAP_MAX:20479,_QK_LAYER_MOD:20480,_QK_LAYER_MOD_MAX:20991,_QK_TO:20992,_QK_TO_MAX:21023,_QK_MOMENTARY:21024,_QK_MOMENTARY_MAX:21055,_QK_DEF_LAYER:21056,_QK_DEF_LAYER_MAX:21087,_QK_TOGGLE_LAYER:21088,_QK_TOGGLE_LAYER_MAX:21119,_QK_ONE_SHOT_LAYER:21120,_QK_ONE_SHOT_LAYER_MAX:21151,_QK_ONE_SHOT_MOD:21152,_QK_ONE_SHOT_MOD_MAX:21183,_QK_LAYER_TAP_TOGGLE:21184,_QK_LAYER_TAP_TOGGLE_MAX:21215,_QK_LAYER_MOD_MASK:31,_QK_MACRO:30464,_QK_MACRO_MAX:30591,_QK_KB:32256,_QK_KB_MAX:32511,KC_NO:0,KC_TRNS:1,KC_A:4,KC_B:5,KC_C:6,KC_D:7,KC_E:8,KC_F:9,KC_G:10,KC_H:11,KC_I:12,KC_J:13,KC_K:14,KC_L:15,KC_M:16,KC_N:17,KC_O:18,KC_P:19,KC_Q:20,KC_R:21,KC_S:22,KC_T:23,KC_U:24,KC_V:25,KC_W:26,KC_X:27,KC_Y:28,KC_Z:29,KC_1:30,KC_2:31,KC_3:32,KC_4:33,KC_5:34,KC_6:35,KC_7:36,KC_8:37,KC_9:38,KC_0:39,KC_ENT:40,KC_ESC:41,KC_BSPC:42,KC_TAB:43,KC_SPC:44,KC_MINS:45,KC_EQL:46,KC_LBRC:47,KC_RBRC:48,KC_BSLS:49,KC_NUHS:50,KC_SCLN:51,KC_QUOT:52,KC_GRV:53,KC_COMM:54,KC_DOT:55,KC_SLSH:56,KC_CAPS:57,KC_F1:58,KC_F2:59,KC_F3:60,KC_F4:61,KC_F5:62,KC_F6:63,KC_F7:64,KC_F8:65,KC_F9:66,KC_F10:67,KC_F11:68,KC_F12:69,KC_PSCR:70,KC_SLCK:71,KC_PAUS:72,KC_INS:73,KC_HOME:74,KC_PGUP:75,KC_DEL:76,KC_END:77,KC_PGDN:78,KC_RGHT:79,KC_LEFT:80,KC_DOWN:81,KC_UP:82,KC_NLCK:83,KC_PSLS:84,KC_PAST:85,KC_PMNS:86,KC_PPLS:87,KC_PENT:88,KC_P1:89,KC_P2:90,KC_P3:91,KC_P4:92,KC_P5:93,KC_P6:94,KC_P7:95,KC_P8:96,KC_P9:97,KC_P0:98,KC_PDOT:99,KC_NUBS:100,KC_APP:101,KC_POWER:102,KC_PEQL:103,KC_F13:104,KC_F14:105,KC_F15:106,KC_F16:107,KC_F17:108,KC_F18:109,KC_F19:110,KC_F20:111,KC_F21:112,KC_F22:113,KC_F23:114,KC_F24:115,KC_EXECUTE:116,KC_HELP:117,KC_MENU:118,KC_SELECT:119,KC_STOP:120,KC_AGAIN:121,KC_UNDO:122,KC_CUT:123,KC_COPY:124,KC_PASTE:125,KC_FIND:126,KC_LCAP:130,KC_LNUM:131,KC_LSCR:132,KC_PCMM:133,KC_KP_EQUAL_AS400:134,KC_RO:135,KC_KANA:136,KC_JYEN:137,KC_HENK:138,KC_MHEN:139,KC_INT6:140,KC_INT7:141,KC_INT8:142,KC_INT9:143,KC_HAEN:144,KC_HANJ:145,KC_LANG3:146,KC_LANG4:147,KC_LANG5:148,KC_LANG6:149,KC_LANG7:150,KC_LANG8:151,KC_LANG9:152,KC_ERAS:153,KC_SYSREQ:154,KC_CANCEL:155,KC_CLR:156,KC_CLEAR:156,KC_PRIOR:157,KC_OUT:160,KC_OPER:161,KC_CLEAR_AGAIN:162,KC_CRSEL:163,KC_EXSEL:164,KC_PWR:165,KC_SLEP:166,KC_WAKE:167,KC_MUTE:168,KC_VOLU:169,KC_VOLD:170,KC_MNXT:171,KC_MPRV:172,KC_MSTP:173,KC_MPLY:174,KC_MSEL:175,KC_EJCT:176,KC_MAIL:177,KC_CALC:178,KC_MYCM:179,KC_WWW_SEARCH:180,KC_WWW_HOME:181,KC_WWW_BACK:182,KC_WWW_FORWARD:183,KC_WWW_STOP:184,KC_WWW_REFRESH:185,KC_WWW_FAVORITES:186,KC_MFFD:187,KC_MRWD:188,KC_BRIU:189,KC_BRID:190,KC_MS_UP:205,KC_MS_DOWN:206,KC_MS_LEFT:207,KC_MS_RIGHT:208,KC_MS_BTN1:209,KC_MS_BTN2:210,KC_MS_BTN3:211,KC_MS_BTN4:212,KC_MS_BTN5:213,KC_MS_BTN6:214,KC_MS_BTN7:215,KC_MS_BTN8:216,KC_MS_WH_UP:217,KC_MS_WH_DOWN:218,KC_MS_WH_LEFT:219,KC_MS_WH_RIGHT:220,KC_MS_ACCEL0:221,KC_MS_ACCEL1:222,KC_MS_ACCEL2:223,KC_LCTL:224,KC_LSFT:225,KC_LALT:226,KC_LGUI:227,KC_RCTL:228,KC_RSFT:229,KC_RALT:230,KC_RGUI:231,RESET:31744,DEBUG:31746,MAGIC_TOGGLE_NKRO:28691,KC_GESC:31766,KC_ASUP:31761,KC_ASDN:31760,KC_ASRP:31762,KC_ASTG:31765,KC_ASON:31763,KC_ASOFF:31764,AU_ON:29824,AU_OFF:29825,AU_TOG:29826,CLICKY_TOGGLE:29834,CLICKY_ENABLE:29835,CLICKY_DISABLE:29836,CLICKY_UP:29837,CLICKY_DOWN:29838,CLICKY_RESET:29839,MU_ON:29840,MU_OFF:29841,MU_TOG:29842,MU_MOD:29843,MI_ON:28928,MI_OFF:28929,MI_TOG:28930,MI_C:28944,MI_Cs:28945,MI_D:28946,MI_Ds:28947,MI_E:28948,MI_F:28949,MI_Fs:28950,MI_G:28951,MI_Gs:28952,MI_A:28953,MI_As:28954,MI_B:28955,MI_C_1:28960,MI_Cs_1:28961,MI_D_1:28962,MI_Ds_1:28963,MI_E_1:28964,MI_F_1:28965,MI_Fs_1:28966,MI_G_1:28967,MI_Gs_1:28968,MI_A_1:28969,MI_As_1:28970,MI_B_1:28971,MI_C_2:28976,MI_Cs_2:28977,MI_D_2:28978,MI_Ds_2:28979,MI_E_2:28980,MI_F_2:28981,MI_Fs_2:28982,MI_G_2:28983,MI_Gs_2:28984,MI_A_2:28985,MI_As_2:28986,MI_B_2:28987,MI_C_3:28992,MI_Cs_3:28993,MI_D_3:28994,MI_Ds_3:28995,MI_E_3:28996,MI_F_3:28997,MI_Fs_3:28998,MI_G_3:28999,MI_Gs_3:29e3,MI_A_3:29001,MI_As_3:29002,MI_B_3:29003,MI_C_4:29008,MI_Cs_4:29009,MI_D_4:29010,MI_Ds_4:29011,MI_E_4:29012,MI_F_4:29013,MI_Fs_4:29014,MI_G_4:29015,MI_Gs_4:29016,MI_A_4:29017,MI_As_4:29018,MI_B_4:29019,MI_C_5:29024,MI_Cs_5:29025,MI_D_5:29026,MI_Ds_5:29027,MI_E_5:29028,MI_F_5:29029,MI_Fs_5:29030,MI_G_5:29031,MI_Gs_5:29032,MI_A_5:29033,MI_As_5:29034,MI_B_5:29035,MI_OCT_N2:29040,MI_OCT_N1:29041,MI_OCT_0:29042,MI_OCT_1:29043,MI_OCT_2:29044,MI_OCT_3:29045,MI_OCT_4:29046,MI_OCT_5:29047,MI_OCT_6:29048,MI_OCT_7:29049,MI_OCTD:29050,MI_OCTU:29051,MI_TRNS_N6:29056,MI_TRNS_N5:29057,MI_TRNS_N4:29058,MI_TRNS_N3:29059,MI_TRNS_N2:29060,MI_TRNS_N1:29061,MI_TRNS_0:29062,MI_TRNS_1:29063,MI_TRNS_2:29064,MI_TRNS_3:29065,MI_TRNS_4:29066,MI_TRNS_5:29067,MI_TRNS_6:29068,MI_TRNSD:29069,MI_TRNSU:29070,MI_VEL_0:29072,MI_VEL_1:29073,MI_VEL_2:29074,MI_VEL_3:29075,MI_VEL_4:29076,MI_VEL_5:29077,MI_VEL_6:29078,MI_VEL_7:29079,MI_VEL_8:29080,MI_VEL_9:29081,MI_VEL_10:29082,MI_VELD:29083,MI_VELU:29084,MI_CH1:29088,MI_CH2:29089,MI_CH3:29090,MI_CH4:29091,MI_CH5:29092,MI_CH6:29093,MI_CH7:29094,MI_CH8:29095,MI_CH9:29096,MI_CH10:29097,MI_CH11:29098,MI_CH12:29099,MI_CH13:29100,MI_CH14:29101,MI_CH15:29102,MI_CH16:29103,MI_CHD:29104,MI_CHU:29105,MI_ALLOFF:29120,MI_SUST:29121,MI_PORT:29122,MI_SOST:29123,MI_SOFT:29124,MI_LEG:29125,MI_MOD:29126,MI_MODSD:29127,MI_MODSU:29128,MI_BENDD:29129,MI_BENDU:29130,BL_ON:30720,BL_OFF:30721,BL_DEC:30723,BL_INC:30724,BL_TOGG:30722,BL_STEP:30725,BL_BRTG:30726,RGB_TOG:30752,RGB_MOD:30753,RGB_RMOD:30754,RGB_HUI:30755,RGB_HUD:30756,RGB_SAI:30757,RGB_SAD:30758,RGB_VAI:30759,RGB_VAD:30760,RGB_SPI:30761,RGB_SPD:30762,RGB_M_P:30763,RGB_M_B:30764,RGB_M_R:30765,RGB_M_SW:30766,RGB_M_SN:30767,RGB_M_K:30768,RGB_M_X:30769,RGB_M_G:30770,RGB_MODE_RGBTEST:30771,VLK_TOG:31767,KC_LSPO:31770,KC_RSPC:31771,KC_SFTENT:31774,OUT_AUTO:31776,OUT_USB:31777,QK_CLEAR_EEPROM:31747,HPT_ON:31808,HPT_OFF:31809,HPT_TOG:31810,HPT_RST:31811,HPT_FBK:31812,HPT_BUZ:31813,HPT_MODI:31814,HPT_MODD:31815,HPT_CONT:31816,HPT_CONI:31817,HPT_COND:31818,HPT_DWLI:31819,HPT_DWLD:31820,KC_LCPO:31768,KC_RCPC:31769,KC_LAPO:31772,KC_RAPC:31773,CMB_ON:31824,CMB_OFF:31825,CMB_TOG:31826,MAGIC_SWAP_LCTL_LGUI:28695,MAGIC_SWAP_RCTL_RGUI:28697,MAGIC_UNSWAP_LCTL_LGUI:28696,MAGIC_UNSWAP_RCTL_RGUI:28698,MAGIC_SWAP_CTL_GUI:28699,MAGIC_UNSWAP_CTL_GUI:28700,MAGIC_TOGGLE_CTL_GUI:28701,MAGIC_EE_HANDS_LEFT:28702,MAGIC_EE_HANDS_RIGHT:28703,DYN_REC_START1:31827,DYN_REC_START2:31828,DYN_REC_STOP:31829,DYN_MACRO_PLAY1:31830,DYN_MACRO_PLAY2:31831,FN_MO13:31863,FN_MO23:31864};function getBasicKeyDict(e){switch(e){case 13:case 12:return v12BasicKeyToByte;case 11:return v11BasicKeyToByte;case 10:return v10BasicKeyToByte;default:return basicKeyToByte}}const autocompleteKeycodes={KC_NO:!0,KC_A:!0,KC_B:!0,KC_C:!0,KC_D:!0,KC_E:!0,KC_F:!0,KC_G:!0,KC_H:!0,KC_I:!0,KC_J:!0,KC_K:!0,KC_L:!0,KC_M:!0,KC_N:!0,KC_O:!0,KC_P:!0,KC_Q:!0,KC_R:!0,KC_S:!0,KC_T:!0,KC_U:!0,KC_V:!0,KC_W:!0,KC_X:!0,KC_Y:!0,KC_Z:!0,KC_1:!0,KC_2:!0,KC_3:!0,KC_4:!0,KC_5:!0,KC_6:!0,KC_7:!0,KC_8:!0,KC_9:!0,KC_0:!0,KC_ENT:!0,KC_ESC:!0,KC_BSPC:!0,KC_TAB:!0,KC_SPC:!0,KC_MINS:!0,KC_EQL:!0,KC_LBRC:!0,KC_RBRC:!0,KC_BSLS:!0,KC_NUHS:!0,KC_SCLN:!0,KC_QUOT:!0,KC_GRV:!0,KC_COMM:!0,KC_DOT:!0,KC_SLSH:!0,KC_CAPS:!0,KC_F1:!0,KC_F2:!0,KC_F3:!0,KC_F4:!0,KC_F5:!0,KC_F6:!0,KC_F7:!0,KC_F8:!0,KC_F9:!0,KC_F10:!0,KC_F11:!0,KC_F12:!0,KC_PSCR:!0,KC_SLCK:!0,KC_PAUS:!0,KC_INS:!0,KC_HOME:!0,KC_PGUP:!0,KC_DEL:!0,KC_END:!0,KC_PGDN:!0,KC_RGHT:!0,KC_LEFT:!0,KC_DOWN:!0,KC_UP:!0,KC_NLCK:!0,KC_PSLS:!0,KC_KP_ASTERISK:!0,KC_PAST:!0,KC_PPLS:!0,KC_PMNS:!0,KC_PENT:!0,KC_P1:!0,KC_P2:!0,KC_P3:!0,KC_P4:!0,KC_P5:!0,KC_P6:!0,KC_P7:!0,KC_P8:!0,KC_P9:!0,KC_P0:!0,KC_PDOT:!0,KC_NUBS:!0,KC_APP:!0,KC_POWER:!0,KC_PEQL:!0,KC_F13:!0,KC_F14:!0,KC_F15:!0,KC_F16:!0,KC_F17:!0,KC_F18:!0,KC_F19:!0,KC_F20:!0,KC_F21:!0,KC_F22:!0,KC_F23:!0,KC_F24:!0,KC_EXECUTE:!0,KC_HELP:!0,KC_MENU:!0,KC_SELECT:!0,KC_STOP:!0,KC_AGAIN:!0,KC_UNDO:!0,KC_CUT:!0,KC_COPY:!0,KC_PASTE:!0,KC_FIND:!0,KC_LCAP:!0,KC_LNUM:!0,KC_LSCR:!0,KC_PCMM:!0,KC_KP_EQUAL_AS400:!0,KC_RO:!0,KC_KANA:!0,KC_JYEN:!0,KC_HENK:!0,KC_MHEN:!0,KC_INT6:!0,KC_INT7:!0,KC_INT8:!0,KC_INT9:!0,KC_HAEN:!0,KC_HANJ:!0,KC_LANG3:!0,KC_LANG4:!0,KC_LANG5:!0,KC_LANG6:!0,KC_LANG7:!0,KC_LANG8:!0,KC_LANG9:!0,KC_SYSREQ:!0,KC_CANCEL:!0,KC_CLEAR:!0,KC_PRIOR:!0,KC_OUT:!0,KC_OPER:!0,KC_CLEAR_AGAIN:!0,KC_CRSEL:!0,KC_EXSEL:!0,KC_LCTL:!0,KC_LSFT:!0,KC_LALT:!0,KC_LGUI:!0,KC_RCTL:!0,KC_RSFT:!0,KC_RALT:!0,KC_RGUI:!0,KC_PWR:!0,KC_SLEP:!0,KC_WAKE:!0,KC_MUTE:!0,KC_VOLU:!0,KC_VOLD:!0,KC_MNXT:!0,KC_MPRV:!0,KC_MSTP:!0,KC_MPLY:!0,KC_MSEL:!0,KC_EJCT:!0,KC_MAIL:!0,KC_CALC:!0,KC_MYCM:!0,KC_WWW_SEARCH:!0,KC_WWW_HOME:!0,KC_WWW_BACK:!0,KC_WWW_FORWARD:!0,KC_WWW_STOP:!0,KC_WWW_REFRESH:!0,KC_WWW_FAVORITES:!0,KC_MFFD:!0,KC_MRWD:!0},getAutocompleteKeycodes=()=>keycodesList.filter(e=>!!autocompleteKeycodes[e.code]);function isAutocompleteKeycode(e){const o=e.toUpperCase().replace(/^[+-]/,"");return!!autocompleteKeycodes[o]}var RawKeycodeSequenceAction=(e=>(e[e.Tap=1]="Tap",e[e.Down=2]="Down",e[e.Up=3]="Up",e[e.Delay=4]="Delay",e[e.CharacterStream=5]="CharacterStream",e))(RawKeycodeSequenceAction||{}),GroupedKeycodeSequenceAction=(e=>(e[e.Chord=6]="Chord",e))(GroupedKeycodeSequenceAction||{}),KeyAction=(e=>(e[e.Tap=1]="Tap",e[e.Down=2]="Down",e[e.Up=3]="Up",e[e.Delay=4]="Delay",e))(KeyAction||{});const KeyActionPrefix=1,DelayTerminator=124,MacroTerminator=0;function splitExpression(expression){let regex;try{return regex=eval("/(?<!\\\\)({.*?})/g"),expression.split(regex).filter(e=>e.length)}catch(e){return console.error("Lookbehind is not supported in this browser."),[]}}function optimizedSequenceToRawSequence(e){return e.flatMap(o=>{if(o[0]==GroupedKeycodeSequenceAction.Chord){const n=r=>s=>[r,s];return[...o[1]].map(n(RawKeycodeSequenceAction.Down)).concat([...o[1]].reverse().map(n(RawKeycodeSequenceAction.Up)))}else return[o]})}function rawSequenceToOptimizedSequence(e){let o=[];return o=convertToTapsAndChords(e),o}function convertToTapsAndChords(e){let o=[],n=[],r=0;const s=e.reduce((c,l)=>l[0]===RawKeycodeSequenceAction.Tap?[...c,[RawKeycodeSequenceAction.Down,l[1]],[RawKeycodeSequenceAction.Up,l[1]]]:[...c,l],[]);let a=[];s.forEach((c,l)=>{let d=!1;if(o.push(c),c[0]===RawKeycodeSequenceAction.Down)r==n.length&&(n.push(c[1]),r++,d=!0);else if(c[0]===RawKeycodeSequenceAction.Up){const u=c[1];n.length>0&&u===n[r-1]&&(r--,r==0?(n.length===1?a.push([RawKeycodeSequenceAction.Tap,n[0]]):a.push([GroupedKeycodeSequenceAction.Chord,n]),o=[]):d=!0)}l===s.length-1&&(d=!1),d||(a.push(...o),o=[],n=[],r=0)});let i=[];for(let c=0;c<a.length;c++)c+1<a.length&&a[c][0]==RawKeycodeSequenceAction.Down&&a[c+1][0]==RawKeycodeSequenceAction.Up&&a[c][1]===a[c+1][1]?(i.push([RawKeycodeSequenceAction.Tap,a[c][1]]),c++):i.push(a[c]);return i}const mapKeycodeToCharacterStream={KC_A:["a","A"],KC_B:["b","B"],KC_C:["c","C"],KC_D:["d","D"],KC_E:["e","E"],KC_F:["f","F"],KC_G:["g","G"],KC_H:["h","H"],KC_I:["i","I"],KC_J:["j","J"],KC_K:["k","K"],KC_L:["l","L"],KC_M:["m","M"],KC_N:["n","N"],KC_O:["o","O"],KC_P:["p","P"],KC_Q:["q","Q"],KC_R:["r","R"],KC_S:["s","S"],KC_T:["t","T"],KC_U:["u","U"],KC_V:["v","V"],KC_W:["w","W"],KC_X:["x","X"],KC_Y:["y","Y"],KC_Z:["z","Z"],KC_1:["1","!"],KC_2:["2","@"],KC_3:["3","#"],KC_4:["4","$"],KC_5:["5","%"],KC_6:["6","^"],KC_7:["7","&"],KC_8:["8","*"],KC_9:["9","("],KC_0:["0",")"],KC_SPC:[" "," "],KC_MINS:["-","_"],KC_EQL:["=","+"],KC_LBRC:["[","{"],KC_RBRC:["]","}"],KC_BSLS:["\\","|"],KC_SCLN:[";",":"],KC_QUOT:["'",'"'],KC_GRV:["`","~"],KC_COMM:[",","<"],KC_DOT:[".",">"],KC_SLSH:["/","?"]},mapCharToShiftedChar=Object.values(mapKeycodeToCharacterStream).reduce((e,[o,n])=>({...e,[o]:n}),{});function convertCharacterTaps(e){return e.reduce((n,r)=>r[0]==RawKeycodeSequenceAction.Down&&r[1]in mapKeycodeToCharacterStream?[...n,[RawKeycodeSequenceAction.Tap,r[1]]]:r[0]==RawKeycodeSequenceAction.Up&&r[1]in mapKeycodeToCharacterStream?n:[...n,r],[])}function trimLastWait(e){return e[e.length-1]&&e[e.length-1][0]===RawKeycodeSequenceAction.Delay?e.slice(0,-1):e}function mergeConsecutiveWaits(e){return e.reduce((o,n)=>(o[o.length-1]&&o[o.length-1][0]===RawKeycodeSequenceAction.Delay&&n[0]===RawKeycodeSequenceAction.Delay?o.splice(-1,1,[RawKeycodeSequenceAction.Delay,Number(o[o.length-1][1])+Number(n[1])]):o.push(n),o),[])}function foldKeydownKeyupKeys(e){return e.reduce((o,n)=>(o[o.length-1]&&o[o.length-1][0]===RawKeycodeSequenceAction.Down&&n[0]===RawKeycodeSequenceAction.Up&&o[o.length-1][1]===n[1]?o.splice(-1,1,[RawKeycodeSequenceAction.Tap,n[1]]):o.push(n),o),[])}function convertToCharacterStreams(e){let o=e.reduce((s,a)=>{if(a[0]==RawKeycodeSequenceAction.Tap&&a[1]in mapKeycodeToCharacterStream){const i=mapKeycodeToCharacterStream[a[1]][0];return s[s.length-1]!==void 0&&s[s.length-1][0]===RawKeycodeSequenceAction.CharacterStream?[...s.slice(0,-1),[RawKeycodeSequenceAction.CharacterStream,s[s.length-1][1]+i]]:[...s,[RawKeycodeSequenceAction.CharacterStream,i]]}else return[...s,a]},[]),n=[];for(let s=0;s<o.length;s++)if(s+2<o.length&&o[s][0]===RawKeycodeSequenceAction.Down&&o[s+1][0]===RawKeycodeSequenceAction.CharacterStream&&o[s+2][0]===RawKeycodeSequenceAction.Up&&o[s][1]===o[s+2][1]&&(o[s][1]==="KC_LSFT"||o[s][1]==="KC_RSFT")){const a=o[s+1][1].split("").map(i=>mapCharToShiftedChar[i]).join("");n.push([RawKeycodeSequenceAction.CharacterStream,a]),s+=2}else n.push(o[s]);return n.reduce((s,a)=>a[0]===RawKeycodeSequenceAction.CharacterStream&&s[s.length-1]!==void 0&&s[s.length-1][0]===RawKeycodeSequenceAction.CharacterStream?(s[s.length-1][1]=s[s.length-1][1].concat(a[1]),s):[...s,a],[])}function sequenceToExpression(e){let o=[];return e.forEach(n=>{switch(n[0]){case RawKeycodeSequenceAction.Tap:o.push("{"+n[1]+"}");break;case RawKeycodeSequenceAction.Down:o.push("{+"+n[1]+"}");break;case RawKeycodeSequenceAction.Up:o.push("{-"+n[1]+"}");break;case RawKeycodeSequenceAction.Delay:o.push("{"+n[1]+"}");break;case GroupedKeycodeSequenceAction.Chord:o.push("{"+n[1].join(",")+"}");break;case RawKeycodeSequenceAction.CharacterStream:o.push(n[1].replace(/{/g,"\\{"))}}),o.join("")}function expressionToSequence(e){let o=splitExpression(e),n=[];return o.forEach(r=>{if(/^{.*}$/.test(r))if(r=r.slice(1,-1),/^\d+$/.test(r))n.push([RawKeycodeSequenceAction.Delay,parseInt(r)]);else{const s=/^[+-]/.test(r)?r.slice(0,1):null,a=r.replace(/^[+-]/,"").split(",").map(i=>i.trim().toUpperCase()).filter(i=>i.length);if(a.length>0)if(s==null)a.length==1?n.push([RawKeycodeSequenceAction.Tap,a[0]]):n.push([GroupedKeycodeSequenceAction.Chord,a]);else{const i=s=="+"?RawKeycodeSequenceAction.Down:RawKeycodeSequenceAction.Up;n.push([i,a[0]])}}else r=r.replace(/\\{/g,"{"),n.push([RawKeycodeSequenceAction.CharacterStream,r])}),n}function validateMacroExpression(expression){let unclosedBlockRegex,keycodeBlockRegex;try{unclosedBlockRegex=eval("/(?<!\\\\){(?![^{]*})/"),keycodeBlockRegex=eval("/(?<!\\\\){(.*?)}/g")}catch(e){return console.error("Lookbehind is not supported in this browser."),{isValid:!1,errorMessage:"Lookbehind is not supported in this browser."}}if(expression.match(unclosedBlockRegex))return{isValid:!1,errorMessage:"Looks like a keycode block - {} - is unclosed! Are you missing an '}'?"};let groups=null;for(;groups=keycodeBlockRegex.exec(expression);){const e=groups[1].replace(/\s+/g,"");if(!e.length)return{isValid:!1,errorMessage:"Sorry, I can't handle empty {}. Fill them up with keycodes or use \\{} to tell the macro to literally type {}"};const o=e.split(",").filter(n=>n.trim().length&&!isAutocompleteKeycode(n));if(o.length)return{isValid:!1,errorMessage:`Whoops! Invalid keycodes detected inside {}: ${o.join(", ")}`}}return{isValid:!0,errorMessage:void 0}}class MacroAPI{constructor(o,n,r){this.keyboardApi=o,this.basicKeyToByte=n,this.byteToKey=r}async readRawKeycodeSequences(){const o=await this.keyboardApi.getMacroBytes(),n=await this.keyboardApi.getMacroCount();let r=0,s=0;const a=[];let i=[];if(n===0)throw Error("Macros are disabled");for(;s<o.length&&r<n;){let c=o[s];switch(c){case MacroTerminator:a[r]=i,r++,i=[];break;case KeyAction.Tap:c=o[++s],i.push([RawKeycodeSequenceAction.Tap,this.byteToKey[c]]);break;case KeyAction.Down:c=o[++s],i.push([RawKeycodeSequenceAction.Down,this.byteToKey[c]]);break;case KeyAction.Up:c=o[++s],i.push([RawKeycodeSequenceAction.Up,this.byteToKey[c]]);break;default:{const l=String.fromCharCode(c);i.length&&i[i.length-1][0]===RawKeycodeSequenceAction.CharacterStream?i[i.length-1]=[RawKeycodeSequenceAction.CharacterStream,i[i.length-1][1]+l]:i.push([RawKeycodeSequenceAction.CharacterStream,l]);break}}s++}return a}rawKeycodeSequencesToMacroBytes(o){return o.flatMap(n=>{const r=[];return n.forEach(s=>{switch(s[0]){case RawKeycodeSequenceAction.Tap:r.push(KeyAction.Tap,this.basicKeyToByte[s[1]]);break;case RawKeycodeSequenceAction.Up:r.push(KeyAction.Up,this.basicKeyToByte[s[1]]);break;case RawKeycodeSequenceAction.Down:r.push(KeyAction.Down,this.basicKeyToByte[s[1]]);break;case RawKeycodeSequenceAction.Delay:break;case RawKeycodeSequenceAction.CharacterStream:r.push(...s[1].split("").map(a=>a.charCodeAt(0)));break}}),r.push(MacroTerminator),r})}async writeRawKeycodeSequences(o){const n=this.rawKeycodeSequencesToMacroBytes(o);await this.keyboardApi.setMacroBytes(n)}}function validateMacroExpressionV11(expression){let unclosedBlockRegex,keycodeBlockRegex;try{unclosedBlockRegex=eval("/(?<!\\\\){(?![^{]*})/"),keycodeBlockRegex=eval("/(?<!\\\\){(.*?)}/g")}catch(e){return console.error("Lookbehind is not supported in this browser."),{isValid:!1,errorMessage:"Lookbehind is not supported in this browser."}}if(expression.match(unclosedBlockRegex))return{isValid:!1,errorMessage:"Looks like a keycode block - {} - is unclosed! Are you missing an '}'?"};let groups=null;for(;groups=keycodeBlockRegex.exec(expression);){const e=groups[1].replace(/\s+/g,"");if(!e.length)return{isValid:!1,errorMessage:"Sorry, I can't handle empty {}. Fill them up with keycodes or use \\{} to tell the macro to literally type {}"};if(/^\d+$/.test(e)){if(/\d{5,}/.test(e))return{isValid:!1,errorMessage:`Invalid delay: ${e}. Please use a delay value of 9999 or less.`}}else{const o=e.replace(/^[-+]/,"").split(",").filter(n=>n.trim().length&&!isAutocompleteKeycode(n));if(o.length)return{isValid:!1,errorMessage:`Whoops! Invalid keycodes detected inside {}: ${o.join(", ")}`}}}return{isValid:!0,errorMessage:void 0}}class MacroAPIV11{constructor(o,n,r){this.keyboardApi=o,this.basicKeyToByte=n,this.byteToKey=r}async readRawKeycodeSequences(){const o=await this.keyboardApi.getMacroBytes(),n=await this.keyboardApi.getMacroCount();let r=0,s=0;const a=[];let i=[];if(n===0)throw Error("Macros are disabled");for(;s<o.length&&r<n;){let c=o[s];switch(c){case MacroTerminator:a[r]=i,r++,i=[];break;case KeyActionPrefix:switch(c=o[++s],c){case KeyAction.Tap:c=o[++s],i.push([RawKeycodeSequenceAction.Tap,this.byteToKey[c]]);break;case KeyAction.Down:c=o[++s],i.push([RawKeycodeSequenceAction.Down,this.byteToKey[c]]);break;case KeyAction.Up:c=o[++s],i.push([RawKeycodeSequenceAction.Up,this.byteToKey[c]]);break;case KeyAction.Delay:let l=[];for(c=o[++s];c!==DelayTerminator&&s<o.length;)l.push(c),c=o[++s];const d=l.reduce((u,_)=>(u+=String.fromCharCode(_),u),"");i.push([RawKeycodeSequenceAction.Delay,parseInt(d)]);break;default:throw`Expected a KeyAction to follow the KeyActionPrefix. Received ${c} instead.`}break;default:{const l=String.fromCharCode(c);i.length&&i[i.length-1][0]===RawKeycodeSequenceAction.CharacterStream?i[i.length-1]=[RawKeycodeSequenceAction.CharacterStream,i[i.length-1][1]+l]:i.push([RawKeycodeSequenceAction.CharacterStream,l]);break}}s++}return a}rawKeycodeSequencesToMacroBytes(o){return o.flatMap(n=>{const r=[];return n.forEach(s=>{switch(s[0]){case RawKeycodeSequenceAction.Tap:r.push(KeyActionPrefix,KeyAction.Tap,this.basicKeyToByte[s[1]]);break;case RawKeycodeSequenceAction.Down:r.push(KeyActionPrefix,KeyAction.Down,this.basicKeyToByte[s[1]]);break;case RawKeycodeSequenceAction.Up:r.push(KeyActionPrefix,KeyAction.Up,this.basicKeyToByte[s[1]]);break;case RawKeycodeSequenceAction.Delay:let a=`${s[1]}`;r.push(KeyActionPrefix,KeyAction.Delay,...a.split("").map(i=>i.charCodeAt(0)),DelayTerminator);break;case RawKeycodeSequenceAction.CharacterStream:r.push(...s[1].split("").map(i=>i.charCodeAt(0)));break}}),r.push(MacroTerminator),r})}async writeRawKeycodeSequences(o){const n=this.rawKeycodeSequencesToMacroBytes(o);await this.keyboardApi.setMacroBytes(n)}}const getMacroAPI=(e,o)=>{const n=getBasicKeyDict(e),r=getByteToKey(getBasicKeyDict(e));return e>=11?new MacroAPIV11(o,n,r):new MacroAPI(o,n,r)},getMacroValidator=e=>e>=11?validateMacroExpressionV11:validateMacroExpression,isDelaySupported=e=>e>=11,initialState$6={selectedDevicePath:null,connectedDevicePaths:{},supportedIds:{},forceAuthorize:!1},deviceSlice=createSlice({name:"devices",initialState:initialState$6,reducers:{selectDevice:(e,o)=>{o.payload?e.selectedDevicePath=o.payload.path:e.selectedDevicePath=null},setForceAuthorize:(e,o)=>{e.forceAuthorize=o.payload},updateConnectedDevices:(e,o)=>{e.connectedDevicePaths=o.payload},clearAllDevices:e=>{e.selectedDevicePath=null,e.connectedDevicePaths={}},updateSupportedIds:(e,o)=>{e.supportedIds=o.payload},ensureSupportedIds:(e,o)=>{const{productIds:n,version:r}=o.payload;n.forEach(s=>{e.supportedIds[s]=e.supportedIds[s]??{},e.supportedIds[s][r]=!0})}}}),{clearAllDevices,selectDevice,updateConnectedDevices,updateSupportedIds,ensureSupportedIds,setForceAuthorize}=deviceSlice.actions,devicesReducer=deviceSlice.reducer,getForceAuthorize=e=>e.devices.forceAuthorize,getConnectedDevices=e=>e.devices.connectedDevicePaths,getSelectedDevicePath=e=>e.devices.selectedDevicePath,getSupportedIds=e=>e.devices.supportedIds,getSelectedConnectedDevice=createSelector(getConnectedDevices,getSelectedDevicePath,(e,o)=>o&&e[o]),getSelectedKeyboardAPI=createSelector(getSelectedDevicePath,e=>e&&new KeyboardAPI(e)),macrosInitialState={ast:[],macroBufferSize:0,macroCount:0,isFeatureSupported:!0},macrosSlice=createSlice({name:"macros",initialState:macrosInitialState,reducers:{loadMacrosSuccess:(e,o)=>{e.ast=o.payload.ast,e.macroBufferSize=o.payload.macroBufferSize,e.macroCount=o.payload.macroCount},saveMacrosSuccess:(e,o)=>{e.ast=o.payload.ast},setMacrosNotSupported:e=>{e.isFeatureSupported=!1}}}),{loadMacrosSuccess,saveMacrosSuccess,setMacrosNotSupported}=macrosSlice.actions,macrosReducer=macrosSlice.reducer,loadMacros=e=>async(o,n)=>{const{protocol:r}=e;if(r<8)o(setMacrosNotSupported());else try{const s=n(),a=getSelectedKeyboardAPI(s),i=getMacroAPI(r,a);if(i){const c=await i.readRawKeycodeSequences(),l=await a.getMacroBufferSize(),d=await a.getMacroCount();o(loadMacrosSuccess({ast:c,macroBufferSize:l,macroCount:d}))}}catch{o(setMacrosNotSupported())}},saveMacros=(e,o)=>async(n,r)=>{const s=r(),a=getSelectedKeyboardAPI(s),{protocol:i}=e,c=getMacroAPI(i,a);if(c){const l=o.map(d=>{const u=expressionToSequence(d);return optimizedSequenceToRawSequence(u)});await c.writeRawKeycodeSequences(l),n(saveMacrosSuccess({ast:l}))}},getIsMacroFeatureSupported=e=>e.macros.isFeatureSupported,getAST=e=>e.macros.ast,getMacroBufferSize=e=>e.macros.macroBufferSize,getMacroCount=e=>e.macros.macroCount,getExpressions=createSelector(getAST,e=>e.map(o=>{const n=rawSequenceToOptimizedSequence(o);return sequenceToExpression(n)})),getIsDelaySupported=createSelector(getSelectedConnectedDevice,e=>!!e&&isDelaySupported(e.protocol)),maxBitSize=5,packBits=e=>e.reduce((o,[n,r])=>o<<minBitSize(r)|n,0)>>>0,numIntoBytes=e=>[e>>24,e>>16,e>>8,e].map(o=>o&255),bytesIntoNum=e=>(e[0]<<24|e[1]<<16|e[2]<<8|e[3])>>>0,unpackBits=(e,o)=>o.reverse().reduce(({res:n,bits:r},s)=>({bits:r>>minBitSize(s),res:[r&(1<<minBitSize(s))-1,...n]}),{bits:e,res:[]}).res,minBitSize=e=>1+Array(maxBitSize).fill(0).findIndex((o,n)=>2<<n>=e);function isFulfilledPromise(e){return e.status==="fulfilled"}function isAuthorizedDeviceConnected(e,o){return o&&o[e.vendorProductId]&&o[e.vendorProductId][e.requiredDefinitionVersion]}const initialState$5={definitions:{},customDefinitions:{},layoutOptionsMap:{}},definitionsSlice=createSlice({name:"definitions",initialState:initialState$5,reducers:{updateDefinitions:(e,o)=>{e.definitions={...e.definitions,...o.payload}},loadInitialCustomDefinitions:(e,o)=>{e.customDefinitions=o.payload},unloadCustomDefinition:(e,o)=>{const{version:n,id:r}=o.payload,s=e.customDefinitions[r];Object.keys(s).length===1?(delete e.customDefinitions[r],del(r)):(delete s[n],update(r,a=>(delete a[n],a))),e.customDefinitions={...e.customDefinitions}},loadCustomDefinitions:(e,o)=>{const{version:n,definitions:r}=o.payload;r.forEach(s=>{const a=e.customDefinitions[s.vendorProductId]??{};a[n]=s,e.customDefinitions[s.vendorProductId]=a})},updateLayoutOptions:(e,o)=>{e.layoutOptionsMap={...e.layoutOptionsMap,...o.payload}}}}),{loadCustomDefinitions,loadInitialCustomDefinitions,updateDefinitions,unloadCustomDefinition,updateLayoutOptions}=definitionsSlice.actions,definitionsReducer=definitionsSlice.reducer,getBaseDefinitions=e=>e.definitions.definitions,getCustomDefinitions=e=>e.definitions.customDefinitions,getLayoutOptionsMap=e=>e.definitions.layoutOptionsMap,getDefinitions=createSelector(getBaseDefinitions,getCustomDefinitions,(e,o)=>Object.entries(o).reduce((n,[r,s])=>({...n,[r]:{...n[r],...s}}),e)),getSelectedDefinition=createSelector(getDefinitions,getSelectedConnectedDevice,(e,o)=>o&&e&&e[o.vendorProductId]&&e[o.vendorProductId][o.requiredDefinitionVersion]),getBasicKeyToByte=createSelector(getSelectedConnectedDevice,e=>{const o=getBasicKeyDict(e?e.protocol:0);return{basicKeyToByte:o,byteToKey:getByteToKey(o)}}),getSelectedLayoutOptions=createSelector(getSelectedDefinition,getLayoutOptionsMap,getSelectedDevicePath,(e,o,n)=>n&&o[n]||e&&e.layouts.labels&&e.layouts.labels.map(r=>0)||[]),getSelectedOptionKeys=createSelector(getSelectedLayoutOptions,getSelectedDefinition,(e,o)=>o?e.flatMap((n,r)=>o.layouts.optionKeys[r]&&o.layouts.optionKeys[r][n]||[]):[]),getSelectedKeyDefinitions=createSelector(getSelectedDefinition,getSelectedOptionKeys,(e,o)=>e&&o?e.layouts.keys.concat(o):[]),updateLayoutOption=(e,o)=>async(n,r)=>{const s=r(),a=getSelectedDefinition(s),i=getSelectedKeyboardAPI(s),c=getSelectedDevicePath(s);if(!a||!i||!c||!a.layouts.labels)return;const l=a.layouts.labels.map(_=>Array.isArray(_)?_.slice(1).length:2),d=[...getSelectedLayoutOptions(s)];d[e]=o;const u=numIntoBytes(packBits(d.map((_,p)=>[_,l[p]])));try{await i.setKeyboardValue(KeyboardValue.LAYOUT_OPTIONS,...u)}catch{console.warn("Setting layout option command not working")}n(updateLayoutOptions({[c]:d}))},storeCustomDefinitions=({definitions:e,version:o})=>async(n,r)=>{try{const s=getCustomDefinitions(r()),a=e.map(i=>[i.vendorProductId,{...s[i.vendorProductId],[o]:i}]);return setMany(a)}catch(s){throw console.error(s),s}},loadStoredCustomDefinitions=()=>async(e,o)=>{try{const n=await entries(),r=n.filter(([i])=>["string","number"].includes(typeof i)).reduce((i,c)=>({...i,[c[0]]:c[1]}),{});e(loadInitialCustomDefinitions(r));const[s,a]=n.reduce(([i,c],[l,d])=>[d.v2?[...i,Number(l)]:i,d.v3?[...c,Number(l)]:c],[[],[]]);e(ensureSupportedIds({productIds:s,version:"v2"})),e(ensureSupportedIds({productIds:a,version:"v3"}))}catch(n){console.error(n)}},loadLayoutOptions=()=>async(e,o)=>{const n=o(),r=getSelectedDefinition(n),s=getSelectedConnectedDevice(n),a=getSelectedKeyboardAPI(n);if(!s||!r||!r.layouts.labels||!a)return;const{path:i}=s;try{const c=await a.getKeyboardValue(KeyboardValue.LAYOUT_OPTIONS,[],4),l=unpackBits(bytesIntoNum(c),r.layouts.labels.map(d=>Array.isArray(d)?d.slice(1).length:2));e(updateLayoutOptions({[i]:l}))}catch{console.warn("Getting layout options command not working")}},reloadDefinitions=e=>async(o,n)=>{const r=n(),s=getBaseDefinitions(r),a=getDefinitions(r),i=e.filter(({vendorProductId:d,requiredDefinitionVersion:u})=>!a||!a[d]||!a[d][u]),c=await Promise.allSettled(i.map(d=>getMissingDefinition(d,d.requiredDefinitionVersion)));c.forEach((d,u)=>{const _=i[u];if(d.status==="rejected"){const p=extractDeviceInfo(_);o(logAppError({message:`Fetching ${_.requiredDefinitionVersion} definition failed`,deviceInfo:p}))}});const l=c.filter(isFulfilledPromise).map(d=>d.value);l.length&&o(updateDefinitions(l.reduce((d,[u,_])=>({...d,[u.vendorProductId]:{...d[u.vendorProductId],[_]:u}}),s)))},initialState$4={rawDeviceMap:{},numberOfLayers:4,selectedLayerIndex:0,selectedKey:null,configureKeyboardIsSelectable:!1,selectedPaletteColor:[0,0]},keymapSlice=createSlice({name:"keymap",initialState:initialState$4,reducers:{setSelectedPaletteColor:(e,o)=>{e.selectedPaletteColor=o.payload},setNumberOfLayers:(e,o)=>{e.numberOfLayers=o.payload},setConfigureKeyboardIsSelectable:(e,o)=>{e.configureKeyboardIsSelectable=o.payload},loadLayerSuccess:(e,o)=>{const{layerIndex:n,keymap:r,devicePath:s}=o.payload;e.rawDeviceMap[s]=e.rawDeviceMap[s]||Array(e.numberOfLayers).fill({keymap:[],isLoaded:!1}),e.rawDeviceMap[s][n]={keymap:r,isLoaded:!0}},setLayer:(e,o)=>{e.selectedLayerIndex=o.payload},clearSelectedKey:e=>{e.selectedKey=null},updateSelectedKey:(e,o)=>{e.selectedKey=o.payload},saveKeymapSuccess:(e,o)=>{const{layers:n,devicePath:r}=o.payload;e.rawDeviceMap[r]=n},setKey:(e,o)=>{const{keymapIndex:n,value:r,devicePath:s}=o.payload,{selectedLayerIndex:a}=e;e.rawDeviceMap[s][a].keymap[n]=r}},extraReducers:e=>{e.addCase(selectDevice,o=>{o.selectedKey=null})}}),{setNumberOfLayers,setLayer,loadLayerSuccess,clearSelectedKey,setKey,updateSelectedKey,saveKeymapSuccess,setConfigureKeyboardIsSelectable,setSelectedPaletteColor}=keymapSlice.actions,keymapReducer=keymapSlice.reducer,loadKeymapFromDevice=e=>async(o,n)=>{const r=n();if(getLoadProgress(r)===1)return;const{path:s,vendorProductId:a,requiredDefinitionVersion:i}=e,c=getSelectedKeyboardAPI(r),l=await c.getLayerCount();o(setNumberOfLayers(l));const{matrix:d}=getDefinitions(r)[a][i];for(var u=0;u<l;u++){const _=await c.readRawMatrix(d,u);o(loadLayerSuccess({layerIndex:u,keymap:_,devicePath:s}))}},saveRawKeymapToDevice=(e,o)=>async(n,r)=>{const s=r(),{path:a}=o,i=getSelectedKeyboardAPI(s),c=getSelectedDefinition(s);if(!a||!c||!i)return;const{matrix:l}=c;await i.writeRawMatrix(l,e);const d=e.map(u=>({keymap:u,isLoaded:!0}));n(saveKeymapSuccess({layers:d,devicePath:a}))},updateKey=(e,o)=>async(n,r)=>{const s=r(),a=getSelectedKeyDefinitions(s),i=getSelectedConnectedDevice(s),c=getSelectedKeyboardAPI(s),l=getSelectedDefinition(s);if(!i||!a||!l||!c)return;const d=getSelectedLayerIndex(s),{path:u}=i,{row:_,col:p}=a[e];await c.setKey(d,_,p,o);const{matrix:C}=l,K=_*C.cols+p;n(setKey({keymapIndex:K,value:o,devicePath:u}))},getConfigureKeyboardIsSelectable=e=>e.keymap.configureKeyboardIsSelectable,getSelectedKey=e=>e.keymap.selectedKey,getRawDeviceMap=e=>e.keymap.rawDeviceMap,getNumberOfLayers=e=>e.keymap.numberOfLayers,getSelectedLayerIndex=e=>e.keymap.selectedLayerIndex,getSelected256PaletteColor=e=>e.keymap.selectedPaletteColor,getSelectedPaletteColor=createSelector(getSelected256PaletteColor,([e,o])=>[360*e/255,o/255]),getSelectedRawLayers=createSelector(getRawDeviceMap,getSelectedDevicePath,(e,o)=>o&&e[o]||[]),getLoadProgress=createSelector(getSelectedRawLayers,getNumberOfLayers,(e,o)=>e&&e.filter(n=>n.isLoaded).length/o);createSelector(getSelectedRawLayers,getSelectedLayerIndex,(e,o)=>e&&e[o]);const getSelectedKeymaps=createSelector(getSelectedKeyDefinitions,getSelectedDefinition,getSelectedRawLayers,(e,o,n)=>{if(o&&n){const r=n.map(a=>a.keymap),{matrix:{cols:s}}=o;return r.map(a=>e.map(({row:i,col:c})=>a[i*s+c]))}}),getSelectedKeymap=createSelector(getSelectedKeymaps,getSelectedLayerIndex,(e,o)=>e&&e[o]),commandParamLengths={[dist.LightingValue.BACKLIGHT_COLOR_1]:2,[dist.LightingValue.BACKLIGHT_COLOR_2]:2,[dist.LightingValue.QMK_RGBLIGHT_COLOR]:2,[dist.LightingValue.BACKLIGHT_CUSTOM_COLOR]:2,[dist.LightingValue.BACKLIGHT_CAPS_LOCK_INDICATOR_COLOR]:2,[dist.LightingValue.BACKLIGHT_CAPS_LOCK_INDICATOR_ROW_COL]:2,[dist.LightingValue.BACKLIGHT_LAYER_1_INDICATOR_COLOR]:2,[dist.LightingValue.BACKLIGHT_LAYER_2_INDICATOR_COLOR]:2,[dist.LightingValue.BACKLIGHT_LAYER_3_INDICATOR_COLOR]:2,[dist.LightingValue.BACKLIGHT_LAYER_1_INDICATOR_ROW_COL]:2,[dist.LightingValue.BACKLIGHT_LAYER_2_INDICATOR_ROW_COL]:2,[dist.LightingValue.BACKLIGHT_LAYER_3_INDICATOR_ROW_COL]:2,[dist.LightingValue.BACKLIGHT_EFFECT_SPEED]:1,[dist.LightingValue.BACKLIGHT_USE_7U_SPACEBAR]:1,[dist.LightingValue.BACKLIGHT_USE_ISO_ENTER]:1,[dist.LightingValue.BACKLIGHT_USE_SPLIT_BACKSPACE]:1,[dist.LightingValue.BACKLIGHT_USE_SPLIT_LEFT_SHIFT]:1,[dist.LightingValue.BACKLIGHT_USE_SPLIT_RIGHT_SHIFT]:1,[dist.LightingValue.BACKLIGHT_DISABLE_AFTER_TIMEOUT]:1,[dist.LightingValue.BACKLIGHT_DISABLE_HHKB_BLOCKER_LEDS]:1,[dist.LightingValue.BACKLIGHT_DISABLE_WHEN_USB_SUSPENDED]:1},initialState$3={lightingMap:{}},lightingSlice=createSlice({name:"lighting",initialState:initialState$3,reducers:{updateSelectedLightingData:(e,o)=>{const{lightingData:n,devicePath:r}=o.payload;e.lightingMap[r]=n},updateLighting:(e,o)=>{e.lightingMap={...e.lightingMap,...o.payload}}}}),{updateLighting,updateSelectedLightingData}=lightingSlice.actions,lightingReducer=lightingSlice.reducer,updateBacklightValue=(e,...o)=>async(n,r)=>{const s=r(),a=getSelectedConnectedDevice(s);if(!a)return;const c={...getSelectedLightingData(s),[e]:[...o]},{path:l}=a;n(updateSelectedLightingData({lightingData:c,devicePath:l}));const d=getSelectedKeyboardAPI(s);await d.setBacklightValue(e,...o),await d.saveLighting()},updateCustomColor=(e,o,n)=>async(r,s)=>{const a=s(),i=getSelectedConnectedDevice(a),c=getSelectedKeyboardAPI(a),l=getSelectedLightingData(a);if(!i||!l||!c)return;const d=[...l.customColors||[]];d[e]={hue:o,sat:n};const u={...l,customColors:d},{path:_}=i;r(updateSelectedLightingData({lightingData:u,devicePath:_})),c.setCustomColor(e,o,n),await c.saveLighting()},updateLightingData=e=>async(o,n)=>{const r=n(),s=getSelectedDefinition(r),a=getSelectedKeyboardAPI(r);if(!s||!a)return;const{path:i}=e;if(!dist.isVIADefinitionV2(s))throw new Error("This method is only compatible with v2 definitions");const{lighting:c}=s,{supportedLightingValues:l,effects:d}=dist.getLightingDefinition(c);if(l.length!==0){let u={};if(l.indexOf(dist.LightingValue.BACKLIGHT_CUSTOM_COLOR)!==-1){const C=await Array(Math.max(...d.map(([h,g])=>g))).fill(0).map((h,g)=>a.getCustomColor(g));u={customColors:await Promise.all(C)}}const _=l.map(C=>({command:C,promise:a.getBacklightValue(+C,commandParamLengths[C])})),p=await Promise.all(_.map(C=>C.promise));u=_.reduce(({res:C,ref:K},h,g)=>({ref:K,res:{...C,[h.command]:K[g]}}),{res:u,ref:p}).res,o(updateLighting({[i]:{...u}}))}},getLightingMap=e=>e.lighting.lightingMap,getSelectedLightingData=createSelector(getLightingMap,getSelectedDevicePath,(e,o)=>o&&e[o]);function getIconColor(e){return{style:{color:e?"var(--bg_icon-highlighted)":"var(--bg_control)"}}}const Grid=styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: min-content min-content minmax(0, 1fr);
  > div {
    pointer-events: all;
  }
`,Cell=styled.div`
  border-right: 1px solid var(--border_color_cell);
`,MenuCell=styled(Cell)`
  background: var(--bg_menu);
  border-top: 1px solid var(--border_color_cell);
`,OverflowCell=styled(Cell)`
  border-top: 1px solid var(--border_color_cell);
  overflow: auto;
`,SpanOverflowCell=styled(Cell)`
  border-top: 1px solid var(--border_color_cell);
  overflow: auto;
  grid-column: span 2;
`,SubmenuCell=styled(Cell)`
  border-top: 1px solid var(--border_color_cell);
  background: var(--bg_control);
`,SubmenuOverflowCell=styled(SubmenuCell)`
  min-width: 80px;
  overflow: auto;
  overflow-x: hidden; /* Override just the horizontal part */
`,SinglePaneFlexCell=styled(Cell)`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`,ConfigureFlexCell=styled(SinglePaneFlexCell)`
  pointer-events: none;
  height: 500px;
`,CategoryIconContainer=styled.span`
  position: relative;
  color: var(--color_inside-accent);
  height: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$selected?"var(--color_accent)":"transparent"};
  border-radius: 10px;
  width: 40px;
  &:hover {
    color: ${e=>e.$selected?"var(--color_inside-accent)":"var(--color_accent)"};
    & .tooltip {
      transform: scale(1) translateX(0px);
      opacity: 1;
    }
  }
  .tooltip {
    transform: translateX(-5px) scale(0.6);
    opacity: 0;
  }
`,IconContainer=styled.span`
  display: inline-block;
  text-align: center;
  width: 35px;
  position: relative;
  &:hover > span > div {
    background-color: red;
  }
`,ControlRow=styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  border-bottom: 1px solid var(--border_color_cell);
  font-size: 20px;
  justify-content: space-between;
  display: flex;
  line-height: 50px;
  min-height: 50px;
  box-sizing: border-box;
  padding-left: 5px;
  padding-right: 5px;
`,IndentedControlRow=styled(ControlRow)`
  padding-left: 17px;
`,Label$1=styled.label`
  color: var(--color_label);
  font-weight: 400;
`,SubLabel=styled(Label$1)`
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
`,Detail=styled.span`
  color: var(--color_accent);
  display: flex;
  align-items: center;
`,Row=styled.div`
  cursor: pointer;
  white-space: nowrap;
  margin-bottom: 15px;
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
  color: ${e=>getIconColor(e.$selected).style.color};
  border-left: 2px solid transparent;

  svg {
    height: 20px;
    vertical-align: middle;
  }

  &:hover {
    color: var(--color_label-highlighted);
    & .tooltip {
      transform: scale(1) translateX(0px);
      opacity: 1;
    }
  }
  .tooltip {
    transform: translateX(-5px) scale(0.6);
    opacity: 0;
  }
`,SubmenuRow=styled(Row)`
  background: ${e=>e.$selected?"var(--bg_icon)":"inherit"};
  padding: 4px 8px;
  font-weight: 400;
  min-width: min-content;
  border-color: transparent;
  margin-bottom: 11px;
  color: ${e=>e.$selected?"var(--color_label-highlighted)":"var(--color_label)"};
  border-radius: 12px;
`,Pane$9=styled.div`
  background: var(--gradient);
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: var(--gradient);
`,CenterPane=styled(Pane$9)`
  overflow: auto;
  display: block;
`,ConfigureBasePane=styled(Pane$9)`
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: transparent;
  pointer-events: none;
  z-index: 3;
`,SvgIcLightbulbOutline24Px=e=>jsx("svg",{width:11.9,height:17,...e,children:jsx("path",{d:"M3.4 16.15a.853.853 0 00.85.85h3.4a.852.852 0 00.85-.85v-.85H3.4zM5.95 0a5.947 5.947 0 00-3.4 10.829v1.921a.852.852 0 00.85.85h5.1a.852.852 0 00.85-.85v-1.921A5.947 5.947 0 005.95 0zm2.422 9.435l-.722.51V11.9h-3.4V9.945l-.722-.51a4.25 4.25 0 114.845 0z",fill:"currentColor"})}),title$4="Lighting",component$4=SvgIcLightbulbOutline24Px,AccentButtonBase=styled.button`
  height: 40px;
  padding: 0 15px;
  line-height: 40px;
  min-width: 100px;
  text-align: center;
  outline: none;
  font-size: 20px;
  border-radius: 5px;
  color: var(--color_accent);
  border: 1px solid var(--color_accent);
  display: inline-block;
  box-sizing: border-box;
  pointer-events: ${e=>e.disabled?"none":"auto"};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};

  &:hover {
    border: 1px solid var(--color_accent);
  }
`,AccentButton=styled(AccentButtonBase)`
  background-color: ${e=>e.disabled?"var(--bg_control-disabled)":"var(--bg_outside-accent)"};
  color: ${e=>e.disabled?"var(--bg_control)":"var(--color_accent)"};
  border-color: ${e=>e.disabled?"var(--bg_control)":"var(--color_accent)"};

  &:hover {
    filter: brightness(0.7);
  }
`,AccentButtonLarge=styled(AccentButton)`
  font-size: 24px;
  line-height: 60px;
  height: 60px;
`,PrimaryAccentButton=styled(AccentButtonBase)`
  color: ${e=>e.disabled?"var(--bg_control)":"var(--color_inside-accent)"};
  border-color: ${e=>e.disabled?"var(--bg_control)":"var(--color_accent)"};
  background-color: ${e=>e.disabled?"transparent":"var(--color_accent)"};
  &:hover {
    filter: brightness(0.7);
  }
`,Keycode$2=styled.span`
  color: var(--color_accent);
  display: flex;
  padding-left: 10px;
`,KeycodeLabel=styled.span`
  color: var(--color_label);
  display: flex;
`,Item=styled.div`
  box-sizing: border-box;
  min-width: 200px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${e=>e.$selected?"var(--bg_control)":"var(--bg_menu)"};

  &:hover {
    background-color: var(--bg_control);
  }
`,AutocompleteItem=({selected:e,entity:{label:o,code:n}})=>jsxs(Item,{$selected:e,children:[jsx(KeycodeLabel,{children:o})," ",jsx(Keycode$2,{children:n})]}),AutocompleteLoading=()=>jsx("div",{children:"Loading"}),findKeycodes=e=>{const o=e.toUpperCase();return getAutocompleteKeycodes().filter(({name:n,title:r,code:s})=>r?r.toUpperCase().indexOf(o)>-1:n.toUpperCase().indexOf(o)>-1||s.toUpperCase().indexOf(o)>-1).slice(0,10).map(({name:n,code:r,title:s})=>({label:s||n,code:r}))},TextInput=styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid var(--color_accent);
  filter: brightness(0.7);
  color: var(--color_accent);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  transition: all 0.2s ease-out;

  &:focus {
    filter: brightness(1);
    color: var(--color_accent);
    outline: none;
  }

  &::placeholder {
    color: var(--color_control);
  }
`,ModalBackground=styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`,ModalContainer=styled.div`
  border: 2px solid var(--color_accent);
  min-width: 460px;
  max-width: 550px;
  min-height: 170px;
  gap: 20px;
  background-color: var(--bg_menu);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`,PromptText=styled.div`
  font-weight: 500;
  user-select: none;
  color: var(--color_label);
  font-size: 20px;
  text-align: center;
`,RowDiv$1=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  gap: 20px;
`,AutocompleteContainer=styled.ul`
  position: fixed;
  background-color: var(--bg_menu);
  max-height: 210px;
  overflow: auto;
  border: 1px solid var(--bg_control);
  margin: 0;
  padding: 0;
  width: auto;
  margin-top: -24px;
  line-height: normal;
`,AutocompleteItemRow=styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid var(--bg_control);
  }
`;function isHex(e){const o=e.toLowerCase();return`0x${parseInt(o,16).toString(16).toLowerCase()}`===o}function inputIsBasicByte(e,o){return e.trim().toUpperCase()in o}function basicByteFromInput(e,o){const n=e.trim().toUpperCase();return o[n]}function inputIsAdvancedKeyCode(e,o){const n=e.trim().toUpperCase();return advancedStringToKeycode(n,o)!==0}function advancedKeyCodeFromInput(e,o){const n=e.trim().toUpperCase();return advancedStringToKeycode(n,o)}function inputIsHex(e){return isHex(e.trim())}function hexFromInput(e){const o=e.toLowerCase();return parseInt(o,16)}function inputIsValid(e,o){return inputIsBasicByte(e,o)||inputIsAdvancedKeyCode(e,o)||inputIsHex(e)}function keycodeFromInput(e,o){return inputIsBasicByte(e,o)?basicByteFromInput(e,o):inputIsAdvancedKeyCode(e,o)?advancedKeyCodeFromInput(e,o):inputIsHex(e)?hexFromInput(e):null}const getInputItems=e=>e.map(o=>({code:o.code,label:o.title??o.name})),KeycodeModal=e=>{const o=useAppSelector(getSelectedDefinition),{basicKeyToByte:n,byteToKey:r}=useAppSelector(getBasicKeyToByte);if(!o)return null;const s=getInputItems(getKeycodesForKeyboard(o)),[a,i]=reactExports.useState(s),c=anyKeycodeToString(e.defaultValue,n,r),{getMenuProps:l,getInputProps:d,highlightedIndex:u,inputValue:_,getItemProps:p,isOpen:C}=useCombobox({items:a,initialIsOpen:c==="",defaultInputValue:c,itemToString:h=>(h==null?void 0:h.code)??"",onInputValueChange:({inputValue:h})=>{i(s.filter(({label:g,code:y})=>[g,y].flatMap(m=>m.split(/\s+/)).map(m=>m.toLowerCase()).some(m=>m.startsWith((h??"").toLowerCase()))))}}),K=inputIsValid(_,n);return jsx(ModalBackground,{children:jsxs(ModalContainer,{children:[jsx(PromptText,{children:"Please enter your desired QMK keycode or hex code:"}),jsxs("div",{children:[jsx("div",{children:jsx(TextInput,{...d(),type:"text",placeholder:c||"KC_NO, 0xFF, etc."})}),jsx(AutocompleteContainer,{...l(),style:{display:C&&a.length?"block":"none"},children:C&&a.map((h,g)=>reactExports.createElement(AutocompleteItemRow,{...p({item:h,index:g}),key:h.code},jsx(AutocompleteItem,{selected:u===g,entity:h},h.code)))})]}),jsxs(RowDiv$1,{children:[jsx(AccentButton,{onClick:e.onExit,children:"Cancel"}),jsx(PrimaryAccentButton,{disabled:!K,onClick:()=>{e.onConfirm(keycodeFromInput(_,n))},children:"Confirm"})]})]})})},PelpiKeycodeInput=e=>{const[o,n]=React.useState(!1),{basicKeyToByte:r,byteToKey:s}=useAppSelector(getBasicKeyToByte);return jsxs(Fragment,{children:[jsx(AccentButton,{onClick:()=>n(!0),children:anyKeycodeToString(e.value,r,s)}),o&&jsx(KeycodeModal,{defaultValue:e.value,onChange:e.setValue,onConfirm:a=>{e.setValue(a),n(!1)},onExit:()=>n(!1)})]})},HiddenInput=styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`,Switch=styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`,Slider=styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${e=>e.$ischecked?"var(--color_accent)":"var(--bg_control)"};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 4px;
  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 4px;
    background-color: ${e=>e.$ischecked?"var(--color_inside-accent)":"var(--bg_icon)"};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    ${e=>e.$ischecked?"transform: translateX(26px)":""};
  }
`;function AccentSlider(e){const{isChecked:o,onChange:n}=e,[r,s]=React.useState(o),a=reactExports.useRef(null);return React.useEffect(()=>{s(o)},[o]),jsxs(Switch,{children:[jsx(HiddenInput,{ref:a,type:"checkbox",checked:r,onChange:()=>{const c=!o;s(c),n(c),a.current&&a.current.blur()}}),jsx(Slider,{$ischecked:r})]})}const customStyles={option:(e,o)=>({...e,"&:hover":{backgroundColor:o.isSelected?"var(--color_accent)":"var(--bg_control)"},":active":{backgroundColor:"var(--bg_control)"},background:o.isSelected?"var(--color_accent)":o.isFocused?"var(--bg_control)":"var(--bg_menu)",color:o.isSelected?"var(--color_inside-accent)":(o.isFocused,"var(--color_accent)")}),container:e=>({...e,lineHeight:"initial",flex:1}),input:e=>({...e,color:"var(--color_accent)",opacity:.5}),singleValue:e=>({...e,color:"var(--color_accent)"}),dropdownIndicator:e=>({...e,color:"var(--color_accent)"}),indicatorSeparator:e=>({...e,backgroundColor:"var(--color_accent)"}),menuList:e=>({...e,borderColor:"var(--color_accent)",backgroundColor:"var(--bg_menu)"}),placeholder:e=>({...e,color:"var(--color_accent)"}),valueContainer:e=>({...e,":active":{backgroundColor:"var(--bg_control)",borderColor:"var(--color_accent)"},"&:hover":{borderColor:"var(--color_accent)"},color:"var(--color_accent)",background:"var(--bg_menu)"}),control:(e,o)=>({...e,boxShadow:"none",":active":{backgroundColor:"transparent",borderColor:"var(--color_accent)"},"&:hover":{borderColor:"var(--color_accent)"},color:"var(--color_accent)",borderColor:"1px solid var(--color_accent)",background:"var(--bg_menu)",overflow:"hidden",width:o.selectProps.width||250})},AccentSelect=e=>jsx(StateManagedSelect$1,{...e,styles:customStyles});styled.div`
  border: 2px solid var(--bg_control);
  transition: border-color 0.2s ease-in-out;
  margin: 15px 0px;
  display: inline-block;
  &:focus-within {
    border-color: var(--color_accent);
  }
  border-radius: 4px;
  font-size: 16px;
`;const KeycodeSequenceLabel=styled.div`
  display: inline-flex;
  user-select: none;
  color: #717070;
  padding: 6px 4px;
  text-overflow: ellipsis;
  min-width: 30px;
  font-size: 12px;
  text-align: center;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
  font-size: 16px;
  border: 2px solid var(--border_color_icon);
  background: var(--bg_control);
  color: var(--color_label-highlighted);
  margin: 0;
  box-shadow: none;
  position: relative;
  border-radius: 2px;
  white-space: nowrap;
  position: relative;
  margin: 15px 0px;
`,KeycodeDownLabel=styled(KeycodeSequenceLabel)`
  &::after {
    border-style: solid;
    border-color: transparent;
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--color_accent);
    position: absolute;
    margin-top: 55px;
    width: 0;
  }
`,SequenceLabelSeparator=styled.div`
  width: 20px;
  display: inline-flex;
  vertical-align: middle;
  border: 1px solid var(--color_accent);
`,CharacterStreamLabel=styled(KeycodeSequenceLabel)`
  border-color: var(--border_color_cell);
  background: var(--bg_menu);
  white-space: pre-wrap;
  min-height: 1.25em;
  letter-spacing: 2px;
`,KeycodePressLabel=styled(KeycodeSequenceLabel)`
  border-color: var(--color_accent);
`,KeycodeUpLabel=styled(KeycodeSequenceLabel)`
  &::after {
    content: '';
    border-style: solid;
    margin-top: -55px;
    border-color: transparent;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid var(--color_accent);
    position: absolute;
    width: 0;
  }
`,KeycodeSequenceWait=styled.div`
  display: inline-flex;
  font-weight: bold;
  user-select: none;
  color: #717070;
  text-overflow: ellipsis;
  min-width: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
  font-size: 16px;
  color: var(--color_label-highlighted);
  box-shadow: none;
  position: relative;
  white-space: nowrap;
  position: relative;
  margin: 15px 0px;
  box-sizing: border-box;
  border: 2px solid;
  padding: 4px 4px;
  border-color: var(--color_accent);
  border-radius: 2px;
`,NumberInput=styled.input.attrs({type:"number",placeholder:"XXXXX"})`
  appearance: none;
  background: none;
  border: none;
  border-bottom: 1px solid;
  color: var(--color_label);
  width: 45px;
  text-align: center;
  font-family: inherit;
  font-size: inherit;
  color: var(--color_label-highlighted);
  margin: 0 5px 0 0;
  &:focus {
    color: var(--color_accent);
  }
  &::-webkit-inner-spin-button {
    appearance: none;
    display: none;
  }
  &:invalid {
    color: red;
  }
  &:placeholder-shown {
    color: red;
  }
`,WaitInput=e=>{const o=reactExports.useRef(null),n=s=>{(!s.data||!/^\d$/.test(s.data))&&s.preventDefault()},r=s=>{+s.target.value>0&&+s.target.value<1e5&&e.updateValue(e.index,+s.target.value)};return jsxs(KeycodeSequenceWait,{children:[jsx(NumberInput,{ref:o,onBeforeInput:n,value:e.value,onChange:r}),"ms"]})},getSequenceItemComponent=e=>e===RawKeycodeSequenceAction.Down?KeycodeDownLabel:e===RawKeycodeSequenceAction.Up?KeycodeUpLabel:e===RawKeycodeSequenceAction.CharacterStream?CharacterStreamLabel:KeycodePressLabel;function capitalize(e){return e[0].toUpperCase()+e.slice(1)}const getSequenceLabel=e=>{const o=(e==null?void 0:e.keys)??(e==null?void 0:e.shortName)??(e==null?void 0:e.name)??"";return o.length>1?capitalize(o):o},Container$g=styled.span`
  display: inline-flex;
  align-items: center; /* Changed from space-between to center */
  line-height: initial;
  gap: ${e=>e.$mode===1?"10px":"8px"};
  width: ${e=>{switch(e.$mode){case 0:return"200px";case 1:return"auto";case 2:return"280px";default:return"200px"}}};
`,SliderInput=styled.input.attrs({type:"range"})`
  accent-color: var(--color_accent);
  width: ${e=>{switch(e.$mode){case 0:return"100%";case 1:return"200px";case 2:return"180px";default:return"100%"}}};
  flex: none;
`,ValueDisplay=styled.span`
  text-align: right;
  font-size: 20px;
  color: var(--color_label_highlighted);
  white-space: nowrap;
  min-width: 40px;
`,StyledNumberInput=styled(NumberInput)`
  width: 80px;
  flex: none;
`,AccentRange=e=>{const o=useAppSelector(getShowSliderValuesMode),n=o==="Slider Only"?0:o==="Slider & Show Value"?1:o==="Slider & Input Field"?2:0,[r,s]=reactExports.useState(Number(e.defaultValue||e.value||e.min||0));reactExports.useEffect(()=>{const l=Number(e.defaultValue||e.value||e.min||0);s(l)},[e.defaultValue,e.value,e.min]);const a=l=>{s(l),e.onChange&&e.onChange(l)},i=l=>{const d=+l.target.value;a(d)},c=l=>{const d=+l.target.value;a(d)};return jsxs(Container$g,{$mode:n,children:[n===1&&jsx(ValueDisplay,{children:r}),jsx(SliderInput,{...e,$mode:n,value:r,onChange:i}),n===2&&jsx(StyledNumberInput,{...e,type:"number",value:r,onChange:c})]})},ColorPickerContainer=styled.div`
  display: flex;
  align-items: center;
`,ColorLens=styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid black;
  opacity: 0.7;
  background: rgba(255, 255, 255, 0.2);
  pointer-events: none;
  box-sizing: border-box;
  transform: translate3d(195px, 195px, 0);
`,ColorInner=styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, white, rgba(0, 0, 0, 0));
`,ColorOuter=styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    red,
    yellow,
    lime,
    aqua,
    blue,
    magenta,
    red
  );
`,ColorThumbnail=styled.div`
  display: inline-block;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 4px solid var(--border_color_cell);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`,Container$f=styled.div`
  border: 4px solid var(--border_color_cell);
  width: 180px;
  height: 180px;
  position: relative;
`,PickerContainer=styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.11) 0 1px 1px 1px;
  position: absolute;
  transform: translate3d(-205px, 50px, 0);

  &::after {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    border: 11px solid var(--border_color_cell);
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-right-color: transparent;
    right: -22px;
    top: 66px;
  }
`,ColorPreview=styled.div`
  width: 180px;
  height: 24px;
  border: 4px solid var(--border_color_cell);
  border-bottom: none;
`,ColorHexContainer=styled.div`
  border: 4px solid var(--border_color_cell);
  border-bottom: none;
  width: 180px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background: var(--bg_menu);
`,ColorHexInput=styled.input`
  text-align: center;
  border: none;
  color: var(--color_accent);
  background: var(--bg_menu);
  font-size: 20px;
  font-weight: 300;
  padding: 0;
  width: 100%;
  &:focus {
    outline: none;
    color: var(--color_accent);
    border-color: var(--color_accent);
  }
`;class ColorPicker extends reactExports.Component{constructor(){super(...arguments);M(this,"ref",null);M(this,"refWidth",0);M(this,"refHeight",0);M(this,"mouseDown",!1);M(this,"state",{lensTransform:"",showPicker:!1,offset:[5,5],hexColorCode:getHex(this.props.color)});M(this,"onMouseMove",n=>{if(this.mouseDown){const{offsetX:r,offsetY:s}=n.nativeEvent,a=`translate3d(${r-5}px, ${s-5}px, 0)`,i=[r,s],{hue:c,sat:l}=this.getLinearHueSat(i),d=getHex(this.props.color);this.props.setColor(Math.round(255*(c/360)),Math.round(255*l)),this.setState({lensTransform:a,offset:i,hexColorCode:d})}});M(this,"onMouseDown",n=>{this.mouseDown=!0,this.onMouseMove(n),this.ref&&(this.ref.style.cursor="pointer")});M(this,"onMouseUp",()=>{if(this.mouseDown=!1,this.ref&&(this.ref.style.cursor="auto"),this.props.onMouseUp){const{hue:n,sat:r}=this.getLinearHueSat(this.state.offset);this.props.onMouseUp(n,r)}});M(this,"onThumbnailClick",()=>{this.props.onOpen&&this.props.onOpen(),this.setState({showPicker:!0})});M(this,"pickerContainer",React.createRef());M(this,"colorThumbnail",React.createRef());M(this,"onDocumentClick",n=>{if(this.state.showPicker&&this.pickerContainer.current&&!this.pickerContainer.current.contains(n.target)&&this.colorThumbnail.current&&!this.colorThumbnail.current.contains(n.target)&&!this.mouseDown){if(this.props.onClose){const{hue:r,sat:s}=this.getLinearHueSat(this.state.offset);this.props.onClose(r,s)}this.mouseDown=!1,this.setState({showPicker:!1,hexColorCode:getHex(this.props.color)})}else this.mouseDown&&this.state.showPicker&&this.pickerContainer.current&&!this.pickerContainer.current.contains(n.target)&&this.colorThumbnail.current&&!this.colorThumbnail.current.contains(n.target)&&this.onMouseUp()});M(this,"handleHexChange",n=>{let r=n.target.value;r=r.replace(/[^A-Fa-f0-9]/g,""),r.length>0&&r[0]!=="#"&&(r=`#${r}`),r.length>7&&(r=r.substring(0,7)),this.setState({hexColorCode:r})});M(this,"handleHexBlur",n=>{this.setState({hexColorCode:getHex(this.props.color)})});M(this,"handleHexSubmit",n=>{if(n.key==="Enter"){if(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(this.state.hexColorCode)){var r=this.state.hexColorCode.replace("#","");r.length==3&&(r=`${r.split("").map(c=>c+c).join("")}`);const[a,i]=getHSV(r);this.props.setColor(Math.round(255*(a/360)),Math.round(255*i))}this.setState({hexColorCode:getHex(this.props.color)})}})}componentWillUnmount(){document.removeEventListener("mousedown",this.onDocumentClick),document.removeEventListener("click",this.onDocumentClick)}componentDidUpdate({color:n},r){if(this.ref&&this.state.showPicker&&(!r.showPicker||n!==this.props.color)){const{width:s,height:a}=this.ref.getBoundingClientRect();this.refWidth=s,this.refHeight=a;const{hue:i,sat:c}=this.props.color,l=s*i/255,d=a*(1-c/255),u=`translate3d(${l-5}px, ${d-5}px, 0)`;this.setState({lensTransform:u,offset:[l,d]})}}componentDidMount(){document.addEventListener("click",this.onDocumentClick),document.addEventListener("mousedown",this.onDocumentClick)}getRadialHueSat(n){const{offsetX:r,offsetY:s}=n.nativeEvent,a=toDegrees(calcRadialHue(r,s)??0),i=Math.min(1,calcRadialMagnitude(r,s)??0);return{hue:a,sat:i}}getLinearHueSat([n,r]){const s=this.refWidth,a=this.refHeight,[i,c]=[Math.max(0,n),Math.max(0,r)],l=360*Math.min(1,i/s),d=1-Math.min(1,c/a);return{hue:l,sat:d}}render(){const n=getRGB(this.props.color),{isSelected:r=!1}=this.props,{offset:s}=this.state,a=`translate3d(${s[0]-5}px, ${s[1]-5}px, 0)`;return jsx(Fragment,{children:jsxs(ColorPickerContainer,{children:[jsx(ColorThumbnail,{ref:this.colorThumbnail,onClick:this.onThumbnailClick,style:{background:n,borderColor:r?"var(--color_accent)":"var(--border_color_cell)"}}),this.state.showPicker&&jsxs(PickerContainer,{ref:this.pickerContainer,onMouseUp:this.onMouseUp,children:[jsx(ColorHexContainer,{children:jsx(ColorHexInput,{type:"text",value:this.state.hexColorCode,onChange:this.handleHexChange,onBlur:this.handleHexBlur,onKeyDown:this.handleHexSubmit})}),jsx(ColorPreview,{style:{background:getRGB(this.props.color)}}),jsx(Container$f,{children:jsx(ColorOuter,{onMouseDown:this.onMouseDown,onMouseMove:this.onMouseMove,ref:i=>this.ref=i,children:jsx(ColorInner,{children:jsx(ColorLens,{style:{transform:a}})})})})]})]})})}}const ArrayColorPicker=e=>{const{color:o,setColor:n}=e;return jsx(ColorPicker,{color:{hue:o[0],sat:o[1]},setColor:n})},ColorPalettePickerContainer=styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`,PreviousColorContainer=styled.div`
  display: flex;
  background: var(--bg_control);
  border-radius: 15px;
`,PreviousColorOption=styled.div`
  display: inline-block;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 4px solid var(--border_color_cell);
  cursor: pointer;
  transition: transform 0.2s ease-out;
  &:hover {
    opacity: 0.8;
  }
  transform: ${e=>e.$selected?"scale(0.8)":"scale(0.6)"};
  border-color: ${e=>e.$selected?"var(--color_accent)":"var(--border_color_cell)"};
`,ConnectedColorPalettePicker=()=>{const e=useDispatch(),o=reactExports.useCallback((n,r)=>e(setSelectedPaletteColor([n,r])),[e]);return reactExports.useEffect(()=>(e(updateShowKeyPainter(!0)),()=>{e(updateShowKeyPainter(!1))})),jsx(ColorPalettePicker,{color:[0,0],setColor:o})},ColorPalettePicker=e=>{const{color:o,setColor:n}=e,[r,s]=reactExports.useState(o),[a,i]=reactExports.useState(o),c=reactExports.useMemo(()=>Array(9).fill(0).map((l,d)=>[Math.round(d*255/10),255,255]),[]);return jsxs(ColorPalettePickerContainer,{children:[jsx(PreviousColorContainer,{children:c.map((l,d)=>{const u=r[0]===l[0]&&r[1]===l[1];return jsx(PreviousColorOption,{$selected:u,style:{background:getRGB({hue:l[0]??0,sat:l[1]??0})},onClick:()=>{s(l),n(l[0],l[1])}},d)})}),jsx(ColorPicker,{isSelected:a[0]===r[0]&&a[1]===r[1],color:{hue:a[0],sat:a[1]},setColor:(l,d)=>{s([l,d]),i([l,d])},onOpen:()=>{s([a[0],a[1]]),n(a[0],a[1])},onMouseUp:()=>{s([a[0],a[1]]),n(a[0],a[1])}})]})},VIACustomItem=React.memo(e=>{const{t:o}=useTranslation();return jsxs(ControlRow,{id:e._id,children:[jsx(Label$1,{children:o(e.label)}),jsx(Detail,{children:"type"in e?jsx(VIACustomControl,{...e,value:e.value&&Array.from(e.value)}):e.content})]})}),boxOrArr=e=>Array.isArray(e)?e:[e],valueIsChecked=(e,o)=>boxOrArr(e).every((n,r)=>n==o[r]),getRangeValue=(e,o)=>o>255?shiftTo16Bit([e[0],e[1]]):e[0],getRangeBytes=(e,o)=>o>255?shiftFrom16Bit(e):[e],VIACustomControl=e=>{const{t:o}=useTranslation(),{content:n,type:r,options:s,value:a}=e,[i,...c]=n;switch(r){case"button":{const l=s||[1];return jsx(AccentButton,{onClick:()=>e.updateValue(i,...c,l[0]),children:o("Click")})}case"range":return jsx(AccentRange,{min:s[0],max:s[1],defaultValue:getRangeValue(e.value,s[1]),onChange:l=>e.updateValue(i,...c,...getRangeBytes(l,s[1]))});case"keycode":return jsx(PelpiKeycodeInput,{value:shiftTo16Bit([e.value[0],e.value[1]]),meta:{},setValue:l=>e.updateValue(i,...c,...shiftFrom16Bit(l))});case"toggle":{const l=s||[0,1];return jsx(AccentSlider,{isChecked:valueIsChecked(l[1],e.value),onChange:d=>e.updateValue(i,...c,...boxOrArr(l[+d]))})}case"dropdown":{const l=s.map((d,u)=>{const[_,p]=typeof d=="string"?[d,u]:d;return{value:p||u,label:_}});return jsx(AccentSelect,{onChange:d=>d&&e.updateValue(i,...c,+d.value),options:l,value:l.find(d=>a[0]===d.value)})}case"color":return jsx(ArrayColorPicker,{color:e.value,setColor:(l,d)=>e.updateValue(i,...c,l,d)});case"color-palette":return jsx(ConnectedColorPalettePicker,{})}return null},CustomPane=styled(CenterPane)`
  height: 100%;
  background: var(--color_dark_grey);
`,Container$e=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;
`;function categoryGenerator(e){return e.selectedCustomMenuData?"showIf"in e.viaMenu&&!dist$1.evalExpr(e.viaMenu.showIf,e.selectedCustomMenuData)?[]:e.viaMenu.content.flatMap(o=>submenuGenerator(o,e)):[]}function itemGenerator(e,o){return o.selectedCustomMenuData?"showIf"in e&&!dist$1.evalExpr(e.showIf,o.selectedCustomMenuData)?[]:"label"in e?{...e,key:e._id}:e.content.flatMap(n=>itemGenerator(n,o)):[]}const MenuComponent=React.memo(e=>jsx(Fragment,{children:e.elem.content.flatMap(o=>itemGenerator(o,e)).map(o=>jsx(VIACustomItem,{...o,updateValue:e.updateCustomMenuValue,value:e.selectedCustomMenuData[o.content[0]]}))})),MenuBuilder=e=>o=>reactExports.createElement(MenuComponent,{...o,key:e._id,elem:e});function submenuGenerator(e,o){if(!o.selectedCustomMenuData)return[];useTranslation();const n="showIf"in e&&!dist$1.evalExpr(e.showIf,o.selectedCustomMenuData);if("label"in e){let r=function(s){throw new Error("Function not implemented.")};return{label:e.label,Menu:n?()=>jsx("div",{style:{padding:"20px",textAlign:"center",color:"var(--color_label)"},children:r()}):MenuBuilder(e),isHidden:n}}else return n?[]:e.content.flatMap(r=>submenuGenerator(r,o))}const Pane$8=e=>{const{t:o}=useTranslation(),n=useAppDispatch(),r=useAppSelector(getSelectedDefinition),s=useAppSelector(getSelectedCustomMenuData),a={...e,selectedDefinition:r,selectedCustomMenuData:s,updateCustomMenuValue:(u,..._)=>n(updateCustomMenuValue(u,..._))},i=categoryGenerator(a),[c,l]=reactExports.useState(i[0]||{label:"",Menu:()=>jsx("div",{})}),d=c.Menu;return!r||!s?null:i.length===0?jsx(OverflowCell,{children:jsx(CustomPane,{children:jsx(Container$e,{children:jsx("div",{style:{padding:"20px",textAlign:"center",color:"var(--color_label)"},children:o("No features available for this firmware version.")})})})}):jsxs(Fragment,{children:[jsx(SubmenuOverflowCell,{children:jsx(MenuContainer$5,{children:i.map(u=>jsx(SubmenuRow,{$selected:c.label===u.label,onClick:()=>!u.isHidden&&l(u),style:{opacity:u.isHidden?.5:1,cursor:u.isHidden?"not-allowed":"pointer"},children:o(u.label)},u.label))})}),jsx(OverflowCell,{children:jsx(CustomPane,{children:jsx(Container$e,{children:d(a)})})})]})},MenuContainer$5=styled.div`
  padding: 15px 10px 20px 10px;
`,iconKeywords=[{icon:faLightbulb,keywords:["light","rgb"]},{icon:faHeadphones,keywords:["audio","sound"]},{icon:faDisplay,keywords:["display","oled","lcd"]}],getIconFromLabel=e=>{const o=e.label.toLowerCase(),n={icon:faMicrochip};return(iconKeywords.find(r=>r.keywords.some(s=>o.includes(s)))||n).icon},makeCustomMenu=(e,o)=>({Title:e.label,Icon:()=>jsx(FontAwesomeIcon,{icon:getIconFromLabel(e)}),Pane:n=>reactExports.createElement(Pane$8,{...n,key:`${e.label}-${o}`,viaMenu:e})}),makeCustomMenus=e=>e.map(makeCustomMenu),initialState$2={firmwareVersionMap:{}},firmwareSlice=createSlice({name:"firmware",initialState:initialState$2,reducers:{updateFirmwareVersion:(e,o)=>{const{devicePath:n,version:r}=o.payload;e.firmwareVersionMap[n]=r}}}),{updateFirmwareVersion}=firmwareSlice.actions,firmwareReducer=firmwareSlice.reducer,getFirmwareVersionMap=e=>e.firmware.firmwareVersionMap,getSelectedFirmwareVersion=createSelector(getFirmwareVersionMap,getSelectedDevicePath,(e,o)=>o?e[o]:void 0),loadFirmwareVersion=e=>async(o,n)=>{const r=n(),s=getSelectedKeyboardAPI(r),{path:a}=e;try{const i=await s.getKeyboardValue(KeyboardValue.FIRMWARE_VERSION,[],4),c=i[0]<<24|i[1]<<16|i[2]<<8|i[3];o(updateFirmwareVersion({devicePath:a,version:c}))}catch(i){console.error("Failed to load firmware version:",i)}},initialState$1={customMenuDataMap:{},commonMenusMap:{},showKeyPainter:!1},menusSlice=createSlice({name:"menus",initialState:initialState$1,reducers:{updateShowKeyPainter:(e,o)=>{e.showKeyPainter=o.payload},updateSelectedCustomMenuData:(e,o)=>{const{devicePath:n,menuData:r}=o.payload;e.customMenuDataMap[n]=r},updateCommonMenus:(e,o)=>{const{commonMenuMap:n}=o.payload;e.commonMenusMap=n},updateCustomMenuData:(e,o)=>{e.customMenuDataMap={...e.customMenuDataMap,...o.payload}}}}),{updateShowKeyPainter,updateSelectedCustomMenuData,updateCustomMenuData}=menusSlice.actions,menusReducer=menusSlice.reducer,updateCustomMenuValue=(e,...o)=>async(n,r)=>{const s=r(),a=getSelectedConnectedDevice(s);if(!a)return;const i=getSelectedCustomMenuData(s),c=getCustomCommands(s),l={...i,[e]:[...o.slice(c[e].length)]},{path:d}=a;n(updateSelectedCustomMenuData({menuData:l,devicePath:d}));const u=getSelectedKeyboardAPI(s);u.setCustomMenuValue(...o.slice(0));const _=o[0];u.commitCustomMenu(_)},tryResolveCommonMenu=e=>typeof e=="string"?dist.commonMenus[e]:e,updateV3MenuData=e=>async(o,n)=>{const r=n(),s=getSelectedDefinition(r),a=getSelectedKeyboardAPI(r);if(!dist.isVIADefinitionV3(s))throw new Error("V3 menus are only compatible with V3 VIA definitions.");const i=getV3Menus(r),c=getSelectedFirmwareVersion(r),l=i.flatMap(_=>extractCommands(_,c)),{protocol:d,path:u}=e;if(l.length!==0&&d>=11){let _={};const p=l.map(([h,g,...y])=>({command:h,promise:a.getCustomMenuValue([g].concat(y))})),C=await Promise.all(p.map(h=>h.promise));_=p.reduce(({res:h,ref:g},y,m)=>({ref:g,res:{...h,[y.command]:g[m].slice(1)}}),{res:_,ref:C}).res;const K=Math.max(...s.layouts.keys.map(h=>h.li??-1));if(console.debug(K,"maxLedIndex"),K>=0){const h=await a.getPerKeyRGBMatrix(Array(K+1).fill(0).map((g,y)=>y));_.__perKeyRGB=h}o(updateSelectedCustomMenuData({devicePath:u,menuData:{..._,...c!==void 0&&{id_firmware_version:[c]}}}))}},isFirmwareOnlyExpr=e=>{try{const{state:o}=dist$1.parseExpr(e),n=Object.keys(o);return n.length>0&&n.every(r=>r==="id_firmware_version")}catch{return!1}},extractCommands=(e,o)=>typeof e=="string"?[]:o!==void 0&&"showIf"in e&&typeof e.showIf=="string"&&isFirmwareOnlyExpr(e.showIf)&&!dist$1.evalExpr(e.showIf,{id_firmware_version:[o]})?[]:"type"in e?[e.content]:"content"in e&&typeof e.content!="string"?e.content.flatMap(n=>extractCommands(n,o)):[],getShowKeyPainter=e=>e.menus.showKeyPainter,getCustomMenuDataMap=e=>e.menus.customMenuDataMap,getSelectedCustomMenuData=createSelector(getCustomMenuDataMap,getSelectedDevicePath,(e,o)=>o&&e[o]),getV3Menus=createSelector(getSelectedDefinition,e=>!e||!dist.isVIADefinitionV3(e)?[]:(e.menus||[]).flatMap(tryResolveCommonMenu).map((o,n)=>dist.isVIAMenu(o)?compileMenu("custom_menu",3,o,n):o)),getV3MenuComponents=createSelector(getSelectedDefinition,e=>!e||!dist.isVIADefinitionV3(e)?[]:(e.menus||[]).flatMap(tryResolveCommonMenu).map((o,n)=>dist.isVIAMenu(o)?makeCustomMenu(compileMenu("custom_menu",3,o,n),n):o)),getCustomCommands=createSelector(getSelectedDefinition,getV3Menus,getSelectedFirmwareVersion,(e,o,n)=>{if(!e)return[];const r=dist.isVIADefinitionV2(e)?e.customMenus:o;return r===void 0?[]:r.flatMap(s=>extractCommands(s,n)).reduce((s,a)=>({...s,[a[0]]:a.slice(1)}),{})}),compileMenu=(e,o=0,n,r)=>o===0?n:{...n,_id:`${e}_${r}`,content:n.label!==void 0?typeof n.content=="string"?n.content:n.content.map((s,a)=>compileMenu(`${e}_${a}`,o-1,s,r)):n.content.map((s,a)=>compileMenu(`${e}_${a}`,o,s,r))},initialState={showMatrix:!1,selectedOptionKeys:[],selectedDefinitionIndex:0},designSlice=createSlice({name:"design",initialState,reducers:{updateSelectedDefinitionIndex:(e,o)=>{e.selectedDefinitionIndex=o.payload},updateSelectedOptionKeys:(e,o)=>{e.selectedOptionKeys=o.payload},updateShowMatrix:(e,o)=>{e.showMatrix=o.payload}}}),{updateSelectedDefinitionIndex,updateSelectedOptionKeys,updateShowMatrix}=designSlice.actions,designReducer=designSlice.reducer,getSelectedDefinitionIndex=e=>e.design.selectedDefinitionIndex,getDesignSelectedOptionKeys=e=>e.design.selectedOptionKeys,getShowMatrix=e=>e.design.showMatrix,formatNumberAsHex=(e,o)=>`0x${e.toString(16).padStart(o,"0").toUpperCase()}`,errorsListenerMiddleware=createListenerMiddleware(),captureError=(e,o)=>{console.error("Error captured:",{message:e,deviceInfo:{productName:o.productName,vendorId:formatNumberAsHex(o.vendorId,4),protocol:o.protocol}})};errorsListenerMiddleware.startListening({actionCreator:logAppError,effect:async({payload:{message:e,deviceInfo:o}},n)=>{captureError(e,o)}});errorsListenerMiddleware.startListening({actionCreator:logKeyboardAPIError,effect:async({payload:e},o)=>{captureError(extractMessageFromKeyboardAPIError(e),e.deviceInfo)}});const store=configureStore({reducer:{settings:settingsReducer,macros:macrosReducer,devices:devicesReducer,keymap:keymapReducer,definitions:definitionsReducer,lighting:lightingReducer,menus:menusReducer,design:designReducer,errors:errorsReducer,firmware:firmwareReducer},middleware:e=>e().prepend(errorsListenerMiddleware.middleware)}),imgSrc="/assets/chippy_600-902171c5.png",defaultChippy={width:300,height:300,src:imgSrc},LoaderContainer=styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,CircleContainer=styled.div`
  border-radius: 50%;
  background-color: var(--bg_icon);
  height: ${e=>e.$containerHeight}px;
  width: ${e=>e.$containerWidth}px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  animation-duration: 1.5s;
  animation-name: roll;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

  &::after {
    height: ${e=>e.$containerHeight}px;
    width: ${e=>e.$containerWidth}px;
    position: absolute;
    content: '';
    background-color: ${e=>e.$progressColor};
    top: ${e=>e.$containerHeight+1}px;
    left: 0;
    right: 0;
    transition: transform 0.4s ease-out;
    transform: translate3d(
      0,
      ${e=>-(e.$progress||0)*e.$containerHeight}px,
      0
    );
  }
`,SvgComponent=e=>{const{theme:o}=e,n=getDarkenedColor(o.accent.c,.8),r={"upper-body":o.mod.t,"lower-body":o.mod.c,accent:n,bowtie:n,pins:n,feet:"#000"};return jsxs("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:0,y:0,viewBox:"0 0 600 600",style:{enableBackground:"new 0 0 600 600"},xmlSpace:"preserve",...e,children:[jsx("style",{children:`.st3{fill:#fdfefe}.st4{fill:${r.bowtie}}.st5{fill-rule:evenodd;clip-rule:evenodd;fill:${r.accent}}.st7,.st9{fill-rule:evenodd;clip-rule:evenodd}.st10,.st9{fill:#fff}`}),jsxs("g",{id:"Layer_2_00000088814685506851870240000015950599998114990989_",children:[jsx("g",{id:"Feet",children:jsx("path",{d:"M169.7 432.1c28.3 0 51.5 23.3 51.5 51.5s-23.3 51.5-51.5 51.5-51.5-23.3-51.5-51.5 23.2-51.5 51.5-51.5zM425.8 432.1c28.3 0 51.5 23.3 51.5 51.5s-23.3 51.5-51.5 51.5-51.5-23.3-51.5-51.5 23.2-51.5 51.5-51.5z"})}),jsxs("g",{id:"Body",children:[jsx("path",{d:"M26.7 66.8h546.2c9.8 0 17.7 7.9 17.7 17.7v273.3H9V84.6c0-9.8 7.9-17.8 17.7-17.8z",style:{fill:r["upper-body"]}}),jsx("path",{d:"M9 357.4h581.6v113.7c0 8.4-6.9 15.3-15.3 15.3h-551c-8.4 0-15.3-6.9-15.3-15.3V357.4z",style:{fill:r["lower-body"]}})]}),jsx("path",{d:"M229.4 262.8s33.5 19.4 66.3 19.4c33.5 0 66.3-19.4 66.3-19.4",style:{fill:"none",stroke:"#000",strokeWidth:6.8265,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:2.0408},id:"Smile"}),jsxs("g",{id:"Eyes",children:[jsx("path",{d:"M417.1 132.4c26.5 0 48 26.4 48 59.1s-21.4 59.1-48 59.1-48-26.4-48-59.1 21.5-59.1 48-59.1zM175.3 132.4c26.5 0 48 26.4 48 59.1s-21.4 59.1-48 59.1-48-26.4-48-59.1 21.5-59.1 48-59.1z"}),jsx("path",{className:"st3",d:"M422.7 210.7c4.2 0 7.7 3.5 7.7 7.7s-3.5 7.7-7.7 7.7-7.7-3.5-7.7-7.7 3.5-7.7 7.7-7.7zM418.2 159.7c9.5 0 17.3 7.8 17.3 17.3s-7.8 17.3-17.3 17.3-17.3-7.8-17.3-17.3c-.1-9.5 7.7-17.3 17.3-17.3zM179.9 210.7c4.2 0 7.7 3.5 7.7 7.7s-3.5 7.7-7.7 7.7-7.7-3.5-7.7-7.7 3.5-7.7 7.7-7.7zM175.3 159.7c9.5 0 17.3 7.8 17.3 17.3s-7.8 17.3-17.3 17.3S158 186.5 158 177c-.1-9.5 7.8-17.3 17.3-17.3z"})]}),jsx("g",{id:"Pins",children:jsx("path",{className:"st4",d:"M12.6 276h17.5c5.8 0 10.5 6.9 10.5 15.3V324c0 8.4-4.7 15.3-10.5 15.3H12.6C6.7 339.3 2 332.4 2 324v-32.7c0-8.4 4.7-15.3 10.6-15.3zM12.6 190.3h17.5c5.8 0 10.5 6.9 10.5 15.3v32.7c0 8.4-4.7 15.3-10.5 15.3H12.6c-5.8 0-10.5-6.9-10.5-15.3v-32.7c-.1-8.4 4.6-15.3 10.5-15.3zM12.6 102.6h17.5c5.8 0 10.5 6.9 10.5 15.3v32.7c0 8.4-4.7 15.3-10.5 15.3H12.6C6.7 165.8 2 159 2 150.5v-32.7c0-8.4 4.7-15.2 10.6-15.2zM569.6 276h17.5c5.8 0 10.5 6.9 10.5 15.3V324c0 8.4-4.7 15.3-10.5 15.3h-17.5c-5.8 0-10.5-6.9-10.5-15.3v-32.7c0-8.4 4.7-15.3 10.5-15.3zM569.6 190.3h17.5c5.8 0 10.5 6.9 10.5 15.3v32.7c0 8.4-4.7 15.3-10.5 15.3h-17.5c-5.8 0-10.5-6.9-10.5-15.3v-32.7c0-8.4 4.7-15.3 10.5-15.3zM569.6 102.6h17.5c5.8 0 10.5 6.9 10.5 15.3v32.7c0 8.4-4.7 15.3-10.5 15.3h-17.5c-5.8 0-10.5-6.9-10.5-15.3v-32.7c0-8.5 4.7-15.3 10.5-15.3z"})}),jsx("g",{id:"Cheeks",children:jsxs("g",{id:"Layer_8",children:[jsx("ellipse",{transform:"rotate(120 89.724 277.697)",className:"st5",cx:68.5,cy:243.9,rx:12.9,ry:29.3}),jsx("ellipse",{transform:"rotate(150 447.814 278.705)",className:"st5",cx:430.5,cy:271.6,rx:29.3,ry:12.9})]})}),jsx("g",{id:"Bowties",children:jsx("path",{className:"st4",d:"m293.7 356.6 73.5-33.7v67.3l-73.5-33.6zM293.7 356.6l-73.5 33.7V323l73.5 33.6z"})})]}),jsxs("g",{id:"Layer2",style:{opacity:.15},children:[jsx("path",{className:"st7",d:"M6.7 105.2c2.5-2.6 5.8-2.5 5.8-2.5v63.2s-3.9.4-7.1-4c-.7-.7-3.4-5.1-3.4-11.3v-32.4c0-7 2.7-11 4.7-13z"}),jsx("path",{d:"M112.4 486.3H24c-13 0-14.8-14.5-14.8-14.5S9 332.7 9 353.4c0 20.8 79.5 132.9 103.4 132.9z",style:{fillRule:"evenodd",clipRule:"evenodd",fill:"#180000"}}),jsx("path",{className:"st9",d:"M35.9 105.1c-2.5-2.6-5.8-2.5-5.8-2.5v63.2s3.9.4 7.1-4c.7-.7 3.4-5.1 3.4-11.3v-32.4c0-7-2.8-11-4.7-13z"}),jsx("path",{className:"st7",d:"M6.7 192.9c2.5-2.6 5.8-2.5 5.8-2.5v63.2s-3.9.4-7.1-4c-.7-.7-3.4-5.1-3.4-11.3v-32.4c0-7 2.7-11 4.7-13z"}),jsx("path",{className:"st9",d:"M35.9 192.8c-2.5-2.6-5.8-2.5-5.8-2.5v63.2s3.9.4 7.1-4c.7-.7 3.4-5.1 3.4-11.3v-32.4c0-7-2.8-11-4.7-13z"}),jsx("path",{className:"st7",d:"M6.7 278.6c2.5-2.6 5.8-2.5 5.8-2.5v63.2s-3.9.4-7.1-4c-.7-.7-3.4-5.1-3.4-11.3v-32.4c0-6.9 2.7-10.9 4.7-13z"}),jsx("path",{className:"st9",d:"M35.9 278.5c-2.5-2.6-5.8-2.5-5.8-2.5v63.2s3.9.4 7.1-4c.7-.7 3.4-5.1 3.4-11.3v-32.4c0-7-2.8-11-4.7-13z"}),jsx("path",{className:"st7",d:"M563.7 105.2c2.5-2.6 5.8-2.5 5.8-2.5v63.2s-3.9.4-7.1-4c-.7-.7-3.4-5.1-3.4-11.3v-32.4c0-7 2.7-11 4.7-13z"}),jsx("path",{className:"st9",d:"M592.9 105.1c-2.5-2.6-5.8-2.5-5.8-2.5v63.2s3.9.4 7.1-4c.7-.7 3.4-5.1 3.4-11.3v-32.4c0-7-2.7-11-4.7-13z"}),jsx("path",{className:"st7",d:"M563.7 192.9c2.5-2.6 5.8-2.5 5.8-2.5v63.2s-3.9.4-7.1-4c-.7-.7-3.4-5.1-3.4-11.3v-32.4c0-7 2.7-11 4.7-13z"}),jsx("path",{className:"st9",d:"M592.9 192.8c-2.5-2.6-5.8-2.5-5.8-2.5v63.2s3.9.4 7.1-4c.7-.7 3.4-5.1 3.4-11.3v-32.4c0-7-2.7-11-4.7-13z"}),jsx("path",{className:"st7",d:"M563.7 278.6c2.5-2.6 5.8-2.5 5.8-2.5v63.2s-3.9.4-7.1-4c-.7-.7-3.4-5.1-3.4-11.3v-32.4c0-6.9 2.7-10.9 4.7-13z"}),jsx("path",{className:"st9",d:"M592.9 278.5c-2.5-2.6-5.8-2.5-5.8-2.5v63.2s3.9.4 7.1-4c.7-.7 3.4-5.1 3.4-11.3v-32.4c0-7-2.7-11-4.7-13z"}),jsx("path",{className:"st10",d:"M220.2 323.1v34.2l73.4-.6zM293.7 356.6l73.5-33.6v34.3"})]})]})};function ChippyLoader(e){const o=e.width||defaultChippy.width,n=e.width||defaultChippy.height,r=o*.25,[s,a]=[n+r*2,o+r*2],i=useAppSelector(getSelectedTheme);return jsx(LoaderContainer,{children:jsx(CircleContainer,{$progress:e.progress,$progressColor:getDarkenedColor(i.accent.c,.9),$containerHeight:s,$containerWidth:a,children:jsx("div",{style:{zIndex:1,width:o},children:jsx(SvgComponent,{theme:e.theme})})})})}const LoadingText=styled.div`
  font-size: 30px;
  color: var(--color_label-highlighted);
`;function LoadingText$1(e){const{t:o}=useTranslation();return jsx(LoadingText,{"data-tid":"loading-message",children:o(e.isSearching?"Searching for devices...":"Loading...")})}const Button=styled.div`
  display: flex;
  transition: transform 0.2s ease-out;
  user-select: none;
  color: #717070;
  border: 1px #717070 solid;
  width: 45px;
  height: 45px;
  padding: 2px;
  margin: 2px;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
  box-shadow: #8c8c8c 0 1px 0 0;
  &:hover {
    transform: translate3d(0, -2px, 0);
  }
`,title$3="Keymap",component$3=e=>jsx(FontAwesomeIcon,{icon:faBook}),Message$1=styled.span`
  font-size: 18px;
  margin: 8px;
  text-align: center;
`,ErrorMessage=styled(Message$1)`
  color: #d15e5e;
`,SuccessMessage=styled(Message$1)`
  color: #9ab46a;
`,Encoder=styled(CenterPane)`
  height: 100%;
  background: var(--color_dark_grey);
`,Container$d=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;
`,renderEncoderError=()=>jsx(ErrorMessage,{children:"Your current firmware does not support rotary encoders. Install the latest firmware for your device."}),Pane$7=()=>{const[e,o]=reactExports.useState(),[n,r]=reactExports.useState(),s=useAppSelector(getSelectedKey),a=useAppDispatch(),i=useAppSelector(getSelectedKeyDefinitions),c=useAppSelector(g=>getSelectedKeymap(g)||[]),l=useAppSelector(getSelectedLayerIndex),d=useAppSelector(getSelectedConnectedDevice),u=useAppSelector(getSelectedKeyboardAPI),_=c[s??-1],p=i[s??-1],C=!!p&&p.col!==-1&&p.row!==-1,K=(g,y)=>{if(u&&s!==null&&p&&p.ei!==void 0){const m=+p.ei;switch(g){case"ccw":{u.setEncoderValue(l,m,!1,y),r(y);break}case"cw":{u.setEncoderValue(l,m,!0,y),o(y);break}case"click":{a(updateKey(s,y));break}}}},h=async(g,y,m)=>{const S=await m.getEncoderValue(g,y,!0),x=await m.getEncoderValue(g,y,!1);o(S),r(x)};return reactExports.useEffect(()=>{if(d&&d.protocol>=10&&p!==void 0&&p.ei!==void 0&&u){const g=+p.ei;h(l,g,u)}},[p,d,l]),p===void 0||d&&d.protocol<10||n===void 0||e===void 0?jsx(SpanOverflowCell,{children:renderEncoderError()}):jsx(SpanOverflowCell,{children:jsx(Encoder,{children:jsxs(Container$d,{children:[jsxs(ControlRow,{children:[jsx(Label$1,{children:"Rotate Counterclockwise"}),jsx(Detail,{children:jsx(PelpiKeycodeInput,{value:n,meta:{},setValue:g=>K("ccw",g)})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:"Rotate Clockwise"}),jsx(Detail,{children:jsx(PelpiKeycodeInput,{value:e,meta:{},setValue:g=>K("cw",g)})})]}),C&&jsxs(ControlRow,{children:[jsx(Label$1,{children:"Press Encoder"}),jsx(Detail,{children:jsx(PelpiKeycodeInput,{value:_,meta:{},setValue:g=>K("click",g)})})]})]})})})},KeycodeList=styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 64px);
  grid-auto-rows: 64px;
  justify-content: center;
  grid-gap: 10px;
`,MenuContainer$4=styled.div`
  padding: 15px 20px 20px 10px;
`,Keycode=styled(Button)`
  width: 50px;
  height: 50px;
  line-height: 18px;
  border-radius: 64px;
  font-size: 14px;
  border: 4px solid var(--border_color_icon);
  background: var(--bg_control);
  color: var(--color_label-highlighted);
  margin: 0;
  box-shadow: none;
  position: relative;
  border-radius: 10px;
  &:hover {
    border-color: var(--color_accent);
    transform: translate3d(0, -2px, 0);
  }
  ${e=>e.disabled&&"cursor:not-allowed;filter:opacity(50%);"}
`,KeycodeContent=styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
`,CustomKeycode=styled(Button)`
  width: 50px;
  height: 50px;
  line-height: 18px;
  border-radius: 10px;
  font-size: 14px;
  border: 4px solid var(--border_color_icon);
  background: var(--color_accent);
  border-color: var(--color_inside_accent);
  color: var(--color_inside_accent);
  margin: 0;
`,KeycodeContainer=styled.div`
  padding: 12px;
  padding-bottom: 30px;
`,KeycodeDesc=styled.div`
  position: fixed;
  bottom: 0;
  background: var(--bg_control);
  color: var(--color_label-highlighted);
  box-sizing: border-box;
  transition: opacity 0.4s ease-out;
  height: 25px;
  width: 100%;
  line-height: 14px;
  padding: 5px;
  font-size: 14px;
  opacity: 1;
  pointer-events: none;
  &:empty {
    opacity: 0;
  }
`,generateKeycodeCategories=(e,o=16)=>getKeycodes(o).concat(getOtherMenu(e)),maybeFilter=(e,o)=>e?()=>!0:o,Pane$6=()=>{const e=useAppSelector(getSelectedKey),o=useAppDispatch(),n=useAppSelector(getSelectedKeyDefinitions);return reactExports.useEffect(()=>()=>{o(updateSelectedKey(null))},[]),e!==null&&n[e].ei!==void 0?jsx(Pane$7,{}):jsx(KeycodePane,{})},KeycodePane=()=>{var P;const{t:e}=useTranslation(),o=useAppDispatch(),n=useAppSelector(f=>f.macros),r=useAppSelector(getSelectedDefinition),s=useAppSelector(getSelectedConnectedDevice),a=useAppSelector(getSelectedKeymap),i=useAppSelector(getSelectedKey),c=useAppSelector(getDisableFastRemap),l=useAppSelector(getSelectedKeyDefinitions),{basicKeyToByte:d}=useAppSelector(getBasicKeyToByte),u=useAppSelector(getMacroCount),_=reactExports.useMemo(()=>generateKeycodeCategories(d,u),[d,u]);if(!r||!s||!a)return null;const[p,C]=reactExports.useState(_[0].id),[K,h]=reactExports.useState(null),[g,y]=reactExports.useState(!1),m=()=>{if(dist.isVIADefinitionV3(r))return S(r);const{lighting:f,customKeycodes:R}=r,{keycodes:E}=dist.getLightingDefinition(f);return _.filter(maybeFilter(E===dist.KeycodeType.QMK,({id:L})=>L!=="qmk_lighting")).filter(maybeFilter(E===dist.KeycodeType.WT,({id:L})=>L!=="lighting")).filter(maybeFilter(typeof R<"u",({id:L})=>L!=="custom"))},S=f=>{const E=["default",...f.keycodes||[]].flatMap(L=>categoriesForKeycodeModule(L));return(r.customKeycodes||[]).length!==0&&E.push("custom"),_.filter(L=>E.includes(L.id))},x=()=>jsx(ErrorMessage,{children:e("Your current firmware does not support macros. Install the latest firmware for your device.")}),b=()=>{const{t:f}=useTranslation();return jsx(MenuContainer$4,{children:m().map(({id:R,label:E})=>jsx(SubmenuRow,{$selected:R===p,onClick:()=>C(R),children:f(E)},R))})},w=()=>(o(disableGlobalHotKeys()),jsx(KeycodeModal,{defaultValue:i!==null?a[i]:void 0,onExit:()=>{o(enableGlobalHotKeys()),y(!1)},onConfirm:f=>{o(enableGlobalHotKeys()),T(f),y(!1)}})),T=f=>{i!==null&&(o(updateKey(i,f)),o(updateSelectedKey(c||!l?null:getNextKey(i,l))))},A=(f,R)=>{if(f=="text")y(!0);else return keycodeInMaster(f,d)&&T(getByteForCode(f,d))},v=(f,R)=>{const{code:E,title:L,name:B}=f;return jsx(Keycode,{disabled:!keycodeInMaster(E,d)&&E!="text",onClick:()=>A(E),onMouseOver:()=>h(L?`${E}: ${L}`:E),onMouseOut:()=>h(null),children:jsx(KeycodeContent,{children:B})},E)},D=()=>jsx(CustomKeycode,{onClick:()=>i!==null&&A("text"),onMouseOver:()=>h(e("Enter any QMK Keycode")),onMouseOut:()=>h(null),children:"Any"},"customKeycode"),O=(f,R)=>{const E=f.map((L,B)=>v(L));switch(R){case"macro":return n.isFeatureSupported?jsx(KeycodeList,{children:E}):x();case"special":return jsx(KeycodeList,{children:E.concat(D())});case"custom":return!dist.isVIADefinitionV2(r)&&!dist.isVIADefinitionV3(r)||!r.customKeycodes?null:jsx(KeycodeList,{children:r.customKeycodes.map((L,B)=>v({...L,code:`CUSTOM(${B})`}))});default:return jsx(KeycodeList,{children:E})}},I=(P=_.find(({id:f})=>f===p))==null?void 0:P.keycodes;return jsxs(Fragment,{children:[jsx(SubmenuOverflowCell,{children:b()}),jsxs(OverflowCell,{children:[jsx(KeycodeContainer,{children:O(I,p)}),jsx(KeycodeDesc,{children:K}),g&&w()]})]})},Icon$5=component$3,Title$5=title$3,Keycode$1=Object.freeze(Object.defineProperty({__proto__:null,Icon:Icon$5,KeycodePane,Pane:Pane$6,Title:Title$5},Symbol.toStringTag,{value:"Module"})),LightingControl=e=>{const o=useAppDispatch(),n=useAppSelector(getSelectedLightingData),r=useAppSelector(getSelectedDefinition),[s,a,i]=e.meta,c=n&&n[s];if(!c||!r)return null;const l=typeof a=="string"?a:a(e);switch(i.type){case"slider":return jsxs(ControlRow,{children:[jsx(Label$1,{children:l}),jsx(Detail,{children:jsx(AccentSlider,{isChecked:!!c[0],onChange:d=>o(updateBacklightValue(s,+d))})})]});case"range":return jsxs(ControlRow,{children:[jsx(Label$1,{children:l}),jsx(Detail,{children:jsx(AccentRange,{max:i.max,min:i.min,defaultValue:c[0],onChange:d=>o(updateBacklightValue(s,d))})})]});case"color":return jsxs(ControlRow,{children:[jsx(Label$1,{children:l}),jsx(Detail,{children:jsx(ArrayColorPicker,{color:c,setColor:(d,u)=>o(updateBacklightValue(s,d,u))})})]});case"select":{const d=i.getOptions(r).map((u,_)=>({value:_,label:u}));return jsxs(ControlRow,{children:[jsx(Label$1,{children:l}),jsx(Detail,{children:jsx(AccentSelect,{onChange:u=>{u&&o(updateBacklightValue(s,+u.value))},options:d,value:d.find(u=>c[0]===u.value)})})]})}case"row_col":return jsxs(ControlRow,{children:[jsx(Label$1,{children:l}),jsx(Detail,{children:jsx(AccentSlider,{isChecked:c[0]!==255,onChange:d=>{o(updateBacklightValue(s,...d?[254,254]:[255,255]))}})})]})}return null},BacklightControls=[[dist.LightingValue.BACKLIGHT_BRIGHTNESS,"Brightness",{type:"range",min:0,max:255}],[dist.LightingValue.BACKLIGHT_EFFECT,"Effect",{type:"select",getOptions:e=>dist.isVIADefinitionV2(e)&&dist.getLightingDefinition(e.lighting).effects.map(([o])=>o)}],[dist.LightingValue.BACKLIGHT_EFFECT_SPEED,"Effect Speed",{type:"range",min:0,max:3}]],UnderglowControls=[[dist.LightingValue.QMK_RGBLIGHT_BRIGHTNESS,"Underglow Brightness",{type:"range",min:0,max:255}],[dist.LightingValue.QMK_RGBLIGHT_EFFECT,"Underglow Effect",{type:"select",getOptions:e=>dist.isVIADefinitionV2(e)&&dist.getLightingDefinition(e.lighting).underglowEffects.map(([o])=>o)}],[dist.LightingValue.QMK_RGBLIGHT_EFFECT_SPEED,"Underglow Effect Speed",{type:"range",min:0,max:3}]],GeneralPane=()=>{const e=useAppDispatch(),o=useAppSelector(getSelectedLightingData),n=useAppSelector(getSelectedDefinition);if(!o)return null;if(!dist.isVIADefinitionV2(n))throw new Error("This lighting component is only compatible with v2 definitions");const r=dist.getLightingDefinition(n.lighting),{supportedLightingValues:s}=r;if(r.supportedLightingValues.length!==0){const a=r.effects.map(([C,K])=>K),i=r.underglowEffects.map(([C,K])=>K),c=o[dist.LightingValue.BACKLIGHT_EFFECT],l=o[dist.LightingValue.QMK_RGBLIGHT_EFFECT],d=c&&a[c[0]]||0,u=l&&i[l[0]]===1,p=!!o.customColors&&d>2;return jsxs(Fragment,{children:[BacklightControls.filter(C=>s.indexOf(C[0])!==-1).map(C=>jsx(LightingControl,{meta:C})),UnderglowControls.filter(C=>s.indexOf(C[0])!==-1).map(C=>jsx(LightingControl,{meta:C})),new Array(d).fill(1).map((C,K)=>C+K).map(C=>{let K,h;const g=C===1?dist.LightingValue.BACKLIGHT_COLOR_1:dist.LightingValue.BACKLIGHT_COLOR_2,y=o[g];if(p&&o.customColors)[K,h]=[o.customColors[C-1],(m,S)=>e(updateCustomColor(C-1,m,S))];else if(y)[K,h]=[{hue:y[0],sat:y[1]},(m,S)=>e(updateBacklightValue(g,m,S))];else return null;return jsxs(ControlRow,{children:[jsxs(Label$1,{children:["Color ",C]}),jsx(Detail,{children:jsx(ColorPicker,{color:K,setColor:h})})]},C)}),u&&jsx(LightingControl,{meta:[dist.LightingValue.QMK_RGBLIGHT_COLOR,"Underglow Color",{type:"color"}]})]})}return null},LayoutConfigValues=[dist.LightingValue.BACKLIGHT_USE_7U_SPACEBAR,dist.LightingValue.BACKLIGHT_USE_ISO_ENTER,dist.LightingValue.BACKLIGHT_USE_SPLIT_BACKSPACE,dist.LightingValue.BACKLIGHT_USE_SPLIT_LEFT_SHIFT,dist.LightingValue.BACKLIGHT_USE_SPLIT_RIGHT_SHIFT,dist.LightingValue.BACKLIGHT_DISABLE_HHKB_BLOCKER_LEDS],BooleanControls=[[dist.LightingValue.BACKLIGHT_USE_7U_SPACEBAR,"Use 7U Spacebar LEDs"],[dist.LightingValue.BACKLIGHT_USE_ISO_ENTER,"Use ISO Enter LEDs"],[dist.LightingValue.BACKLIGHT_USE_SPLIT_BACKSPACE,"Use Split Backspace LEDs"],[dist.LightingValue.BACKLIGHT_USE_SPLIT_LEFT_SHIFT,"Use Split Left Shift LEDs"],[dist.LightingValue.BACKLIGHT_USE_SPLIT_RIGHT_SHIFT,"Use Split Right Shift LEDs"],[dist.LightingValue.BACKLIGHT_DISABLE_HHKB_BLOCKER_LEDS,"Disable HHKB Blocker LEDs"]],Pane$5=()=>{const e=useAppDispatch(),o=useAppSelector(getSelectedLightingData),n=useAppSelector(getSelectedDefinition);if(!o)return null;if(!dist.isVIADefinitionV2(n))throw new Error("This lighting component is only compatible with v2 definitions");const r=dist.getLightingDefinition(n.lighting);if(r.supportedLightingValues.length!==0){const s=BooleanControls.filter(a=>r.supportedLightingValues.indexOf(a[0])!==-1);return jsx(Fragment,{children:s.map(([a,i])=>{const c=o&&o[a],l=c&&c[0];return jsxs(ControlRow,{children:[jsx(Label$1,{children:i}),jsx(Detail,{children:jsx(AccentSlider,{isChecked:!!l,onChange:d=>e(updateBacklightValue(a,+d))})})]},a)})})}return null},AdvancedLightingValues=[dist.LightingValue.BACKLIGHT_DISABLE_WHEN_USB_SUSPENDED,dist.LightingValue.BACKLIGHT_DISABLE_AFTER_TIMEOUT,dist.LightingValue.BACKLIGHT_CAPS_LOCK_INDICATOR_COLOR,dist.LightingValue.BACKLIGHT_CAPS_LOCK_INDICATOR_ROW_COL,dist.LightingValue.BACKLIGHT_LAYER_1_INDICATOR_COLOR,dist.LightingValue.BACKLIGHT_LAYER_1_INDICATOR_ROW_COL,dist.LightingValue.BACKLIGHT_LAYER_2_INDICATOR_COLOR,dist.LightingValue.BACKLIGHT_LAYER_2_INDICATOR_ROW_COL,dist.LightingValue.BACKLIGHT_LAYER_3_INDICATOR_COLOR,dist.LightingValue.BACKLIGHT_LAYER_3_INDICATOR_ROW_COL],AccentText=styled.span`
  color: var(--color_accent);
`,RGBControls=[[dist.LightingValue.BACKLIGHT_DISABLE_WHEN_USB_SUSPENDED,"Disable LEDs when USB is suspended",{type:"slider"}],[dist.LightingValue.BACKLIGHT_DISABLE_AFTER_TIMEOUT,()=>{const e=useAppSelector(getSelectedLightingData),o=e&&e[dist.LightingValue.BACKLIGHT_DISABLE_AFTER_TIMEOUT];return o?jsxs("span",{children:["LED Sleep Timeout:"," ",jsx(AccentText,{children:o[0]?`After ${o[0]} mins`:"Never"})]}):null},{type:"range",min:0,max:255}],[dist.LightingValue.BACKLIGHT_CAPS_LOCK_INDICATOR_COLOR,"Caps Lock indicator color",{type:"color"}],[dist.LightingValue.BACKLIGHT_CAPS_LOCK_INDICATOR_ROW_COL,"Caps Lock indicator",{type:"row_col"}],[dist.LightingValue.BACKLIGHT_LAYER_1_INDICATOR_COLOR,"Layer 1 indicator color",{type:"color"}],[dist.LightingValue.BACKLIGHT_LAYER_1_INDICATOR_ROW_COL,"Layer 1 indicator",{type:"row_col"}],[dist.LightingValue.BACKLIGHT_LAYER_2_INDICATOR_COLOR,"Layer 2 indicator color",{type:"color"}],[dist.LightingValue.BACKLIGHT_LAYER_2_INDICATOR_ROW_COL,"Layer 2 indicator",{type:"row_col"}],[dist.LightingValue.BACKLIGHT_LAYER_3_INDICATOR_COLOR,"Layer 3 indicator color",{type:"color"}],[dist.LightingValue.BACKLIGHT_LAYER_3_INDICATOR_ROW_COL,"Layer 3 indicator",{type:"row_col"}]],AdvancedPane=()=>{const e=useAppSelector(getSelectedLightingData),o=useAppSelector(getSelectedDefinition);if(dist.isVIADefinitionV2(o)&&e){const{supportedLightingValues:n}=dist.getLightingDefinition(o.lighting);return jsx(Fragment,{children:RGBControls.filter(r=>n.indexOf(r[0])!==-1).map(r=>jsx(LightingControl,{meta:r}))})}return null},Category={General:{label:"General",Menu:GeneralPane},Layout:{label:"Layout",Menu:Pane$5},Advanced:{label:"Advanced",Menu:AdvancedPane}},LightingPane=styled(CenterPane)`
  height: 100%;
  background: var(--color_dark_grey);
`,Container$c=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;
`,MenuContainer$3=styled.div`
  padding: 15px 20px 20px 10px;
`,Pane$4=()=>{const e=useAppSelector(getSelectedDefinition),[o,n]=reactExports.useState(Category.General);return jsxs(Fragment,{children:[jsx(SubmenuCell,{children:jsx(MenuContainer$3,{children:(()=>{if(!dist.isVIADefinitionV2(e))throw new Error(t("This lighting component is only compatible with v2 definitions"));const s=LayoutConfigValues.some(i=>dist.getLightingDefinition(e.lighting).supportedLightingValues.indexOf(i)!==-1),a=AdvancedLightingValues.some(i=>dist.getLightingDefinition(e.lighting).supportedLightingValues.indexOf(i)!==-1);return[Category.General,...s?[Category.Layout]:[],...a?[Category.Advanced]:[]].filter(({Menu:i})=>!!i)})().map(s=>jsx(SubmenuRow,{$selected:o===s,onClick:()=>n(s),children:s.label},s.label))})}),jsx(OverflowCell,{children:jsx(LightingPane,{children:jsx(Container$c,{children:jsx(o.Menu,{})})})})]})},Icon$4=component$4,Title$4=title$4,Lighting=Object.freeze(Object.defineProperty({__proto__:null,Category,Icon:Icon$4,Pane:Pane$4,Title:Title$4},Symbol.toStringTag,{value:"Module"})),SvgIcAdjust24Px=e=>jsx("svg",{width:16.571,height:16.571,...e,children:jsx("path",{d:"M8.285 0a8.285 8.285 0 108.285 8.285A8.3 8.3 0 008.285 0zm0 14.914a6.628 6.628 0 116.628-6.628 6.637 6.637 0 01-6.628 6.628zm2.486-6.628A2.486 2.486 0 118.285 5.8a2.482 2.482 0 012.486 2.485z",fill:"currentColor"})}),title$2="Macros",component$2=SvgIcAdjust24Px,matrixKeycodes=[basicKeyToByte.KC_ESC,basicKeyToByte.KC_F1,basicKeyToByte.KC_F2,basicKeyToByte.KC_F3,basicKeyToByte.KC_F4,basicKeyToByte.KC_F5,basicKeyToByte.KC_F6,basicKeyToByte.KC_F7,basicKeyToByte.KC_F8,basicKeyToByte.KC_F9,basicKeyToByte.KC_F10,basicKeyToByte.KC_F11,basicKeyToByte.KC_F12,basicKeyToByte.KC_PSCR,basicKeyToByte.KC_SLCK,basicKeyToByte.KC_PAUS,basicKeyToByte.KC_SLEP,basicKeyToByte.KC_MUTE,basicKeyToByte.KC_VOLD,basicKeyToByte.KC_VOLU,basicKeyToByte.KC_GRV,basicKeyToByte.KC_1,basicKeyToByte.KC_2,basicKeyToByte.KC_3,basicKeyToByte.KC_4,basicKeyToByte.KC_5,basicKeyToByte.KC_6,basicKeyToByte.KC_7,basicKeyToByte.KC_8,basicKeyToByte.KC_9,basicKeyToByte.KC_0,basicKeyToByte.KC_MINS,basicKeyToByte.KC_EQL,basicKeyToByte.KC_BSPC,basicKeyToByte.KC_INS,basicKeyToByte.KC_HOME,basicKeyToByte.KC_PGUP,basicKeyToByte.KC_NLCK,basicKeyToByte.KC_PSLS,basicKeyToByte.KC_PAST,basicKeyToByte.KC_PMNS,basicKeyToByte.KC_TAB,basicKeyToByte.KC_Q,basicKeyToByte.KC_W,basicKeyToByte.KC_E,basicKeyToByte.KC_R,basicKeyToByte.KC_T,basicKeyToByte.KC_Y,basicKeyToByte.KC_U,basicKeyToByte.KC_I,basicKeyToByte.KC_O,basicKeyToByte.KC_P,basicKeyToByte.KC_LBRC,basicKeyToByte.KC_RBRC,basicKeyToByte.KC_BSLS,basicKeyToByte.KC_DEL,basicKeyToByte.KC_END,basicKeyToByte.KC_PGDN,basicKeyToByte.KC_P7,basicKeyToByte.KC_P8,basicKeyToByte.KC_P9,basicKeyToByte.KC_PPLS,basicKeyToByte.KC_CAPS,basicKeyToByte.KC_A,basicKeyToByte.KC_S,basicKeyToByte.KC_D,basicKeyToByte.KC_F,basicKeyToByte.KC_G,basicKeyToByte.KC_H,basicKeyToByte.KC_J,basicKeyToByte.KC_K,basicKeyToByte.KC_L,basicKeyToByte.KC_SCLN,basicKeyToByte.KC_QUOT,basicKeyToByte.KC_ENT,basicKeyToByte.KC_P4,basicKeyToByte.KC_P5,basicKeyToByte.KC_P6,basicKeyToByte.KC_LSFT,basicKeyToByte.KC_Z,basicKeyToByte.KC_X,basicKeyToByte.KC_C,basicKeyToByte.KC_V,basicKeyToByte.KC_B,basicKeyToByte.KC_N,basicKeyToByte.KC_M,basicKeyToByte.KC_COMM,basicKeyToByte.KC_DOT,basicKeyToByte.KC_SLSH,basicKeyToByte.KC_RSFT,basicKeyToByte.KC_UP,basicKeyToByte.KC_P1,basicKeyToByte.KC_P2,basicKeyToByte.KC_P3,basicKeyToByte.KC_PENT,basicKeyToByte.KC_LCTL,basicKeyToByte.KC_LGUI,basicKeyToByte.KC_LALT,basicKeyToByte.KC_SPC,basicKeyToByte.KC_RALT,basicKeyToByte.KC_RGUI,basicKeyToByte.KC_MENU,basicKeyToByte.KC_RCTL,basicKeyToByte.KC_LEFT,basicKeyToByte.KC_DOWN,basicKeyToByte.KC_RGHT,basicKeyToByte.KC_P0,basicKeyToByte.KC_PDOT],evtToKeyByte={Digit1:basicKeyToByte.KC_1,Digit2:basicKeyToByte.KC_2,Digit3:basicKeyToByte.KC_3,Digit4:basicKeyToByte.KC_4,Digit5:basicKeyToByte.KC_5,Digit6:basicKeyToByte.KC_6,Digit7:basicKeyToByte.KC_7,Digit8:basicKeyToByte.KC_8,Digit9:basicKeyToByte.KC_9,Digit0:basicKeyToByte.KC_0,KeyA:basicKeyToByte.KC_A,KeyB:basicKeyToByte.KC_B,KeyC:basicKeyToByte.KC_C,KeyD:basicKeyToByte.KC_D,KeyE:basicKeyToByte.KC_E,KeyF:basicKeyToByte.KC_F,KeyG:basicKeyToByte.KC_G,KeyH:basicKeyToByte.KC_H,KeyI:basicKeyToByte.KC_I,KeyJ:basicKeyToByte.KC_J,KeyK:basicKeyToByte.KC_K,KeyL:basicKeyToByte.KC_L,KeyM:basicKeyToByte.KC_M,KeyN:basicKeyToByte.KC_N,KeyO:basicKeyToByte.KC_O,KeyP:basicKeyToByte.KC_P,KeyQ:basicKeyToByte.KC_Q,KeyR:basicKeyToByte.KC_R,KeyS:basicKeyToByte.KC_S,KeyT:basicKeyToByte.KC_T,KeyU:basicKeyToByte.KC_U,KeyV:basicKeyToByte.KC_V,KeyW:basicKeyToByte.KC_W,KeyX:basicKeyToByte.KC_X,KeyY:basicKeyToByte.KC_Y,KeyZ:basicKeyToByte.KC_Z,Comma:basicKeyToByte.KC_COMM,Period:basicKeyToByte.KC_DOT,Semicolon:basicKeyToByte.KC_SCLN,Quote:basicKeyToByte.KC_QUOT,BracketLeft:basicKeyToByte.KC_LBRC,BracketRight:basicKeyToByte.KC_RBRC,Backspace:basicKeyToByte.KC_BSPC,Backquote:basicKeyToByte.KC_GRV,Slash:basicKeyToByte.KC_SLSH,Backslash:basicKeyToByte.KC_BSLS,Minus:basicKeyToByte.KC_MINS,Equal:basicKeyToByte.KC_EQL,IntlRo:basicKeyToByte.KC_RO,IntlYen:basicKeyToByte.KC_JYEN,AltLeft:basicKeyToByte.KC_LALT,AltRight:basicKeyToByte.KC_RALT,CapsLock:basicKeyToByte.KC_CAPS,ControlLeft:basicKeyToByte.KC_LCTL,ControlRight:basicKeyToByte.KC_RCTL,MetaLeft:basicKeyToByte.KC_LGUI,MetaRight:basicKeyToByte.KC_RGUI,OSLeft:basicKeyToByte.KC_LGUI,OSRight:basicKeyToByte.KC_RGUI,ShiftLeft:basicKeyToByte.KC_LSFT,ShiftRight:basicKeyToByte.KC_RSFT,ContextMenu:basicKeyToByte.KC_APP,Enter:basicKeyToByte.KC_ENT,Space:basicKeyToByte.KC_SPC,Tab:basicKeyToByte.KC_TAB,Delete:basicKeyToByte.KC_DEL,End:basicKeyToByte.KC_END,Help:basicKeyToByte.KC_HELP,Home:basicKeyToByte.KC_HOME,Insert:basicKeyToByte.KC_INS,PageDown:basicKeyToByte.KC_PGDN,PageUp:basicKeyToByte.KC_PGUP,ArrowDown:basicKeyToByte.KC_DOWN,ArrowLeft:basicKeyToByte.KC_LEFT,ArrowRight:basicKeyToByte.KC_RGHT,ArrowUp:basicKeyToByte.KC_UP,Escape:basicKeyToByte.KC_ESC,PrintScreen:basicKeyToByte.KC_PSCR,ScrollLock:basicKeyToByte.KC_SLCK,AudioVolumeUp:basicKeyToByte.KC_VOLU,AudioVolumeDown:basicKeyToByte.KC_VOLD,AudioVolumeMute:basicKeyToByte.KC_MUTE,Pause:basicKeyToByte.KC_PAUS,F1:basicKeyToByte.KC_F1,F2:basicKeyToByte.KC_F2,F3:basicKeyToByte.KC_F3,F4:basicKeyToByte.KC_F4,F5:basicKeyToByte.KC_F5,F6:basicKeyToByte.KC_F6,F7:basicKeyToByte.KC_F7,F8:basicKeyToByte.KC_F8,F9:basicKeyToByte.KC_F9,F10:basicKeyToByte.KC_F10,F11:basicKeyToByte.KC_F11,F12:basicKeyToByte.KC_F12,F13:basicKeyToByte.KC_F13,F14:basicKeyToByte.KC_F14,F15:basicKeyToByte.KC_F15,F16:basicKeyToByte.KC_F16,F17:basicKeyToByte.KC_F17,F18:basicKeyToByte.KC_F18,F19:basicKeyToByte.KC_F19,F20:basicKeyToByte.KC_F20,F21:basicKeyToByte.KC_F21,F22:basicKeyToByte.KC_F22,F23:basicKeyToByte.KC_F23,F24:basicKeyToByte.KC_F24,NumLock:basicKeyToByte.KC_NLCK,Numpad0:basicKeyToByte.KC_P0,Numpad1:basicKeyToByte.KC_P1,Numpad2:basicKeyToByte.KC_P2,Numpad3:basicKeyToByte.KC_P3,Numpad4:basicKeyToByte.KC_P4,Numpad5:basicKeyToByte.KC_P5,Numpad6:basicKeyToByte.KC_P6,Numpad7:basicKeyToByte.KC_P7,Numpad8:basicKeyToByte.KC_P8,Numpad9:basicKeyToByte.KC_P9,NumpadAdd:basicKeyToByte.KC_PPLS,NumpadComma:basicKeyToByte.KC_COMM,NumpadDecimal:basicKeyToByte.KC_PDOT,NumpadDivide:basicKeyToByte.KC_PSLS,NumpadEnter:basicKeyToByte.KC_PENT,NumpadEqual:basicKeyToByte.KC_PEQL,NumpadMultiply:basicKeyToByte.KC_PAST,NumpadSubtract:basicKeyToByte.KC_PMNS};function getIndexByEvent(e){const o=e.code,n=evtToKeyByte[o]||evtToKeyByte[e.key];return n?matrixKeycodes.indexOf(n):-1}function mapEvtToKeycode(e){switch(e.code){case"Digit1":return"KC_1";case"Digit2":return"KC_2";case"Digit3":return"KC_3";case"Digit4":return"KC_4";case"Digit5":return"KC_5";case"Digit6":return"KC_6";case"Digit7":return"KC_7";case"Digit8":return"KC_8";case"Digit9":return"KC_9";case"Digit0":return"KC_0";case"KeyA":return"KC_A";case"KeyB":return"KC_B";case"KeyC":return"KC_C";case"KeyD":return"KC_D";case"KeyE":return"KC_E";case"KeyF":return"KC_F";case"KeyG":return"KC_G";case"KeyH":return"KC_H";case"KeyI":return"KC_I";case"KeyJ":return"KC_J";case"KeyK":return"KC_K";case"KeyL":return"KC_L";case"KeyM":return"KC_M";case"KeyN":return"KC_N";case"KeyO":return"KC_O";case"KeyP":return"KC_P";case"KeyQ":return"KC_Q";case"KeyR":return"KC_R";case"KeyS":return"KC_S";case"KeyT":return"KC_T";case"KeyU":return"KC_U";case"KeyV":return"KC_V";case"KeyW":return"KC_W";case"KeyX":return"KC_X";case"KeyY":return"KC_Y";case"KeyZ":return"KC_Z";case"Comma":return"KC_COMM";case"Period":return"KC_DOT";case"Semicolon":return"KC_SCLN";case"Quote":return"KC_QUOT";case"BracketLeft":return"KC_LBRC";case"BracketRight":return"KC_RBRC";case"Backquote":return"KC_GRV";case"Slash":return"KC_SLSH";case"Backspace":return"KC_BSPC";case"Backslash":return"KC_BSLS";case"Minus":return"KC_MINS";case"Equal":return"KC_EQL";case"IntlRo":return"KC_RO";case"IntlYen":return"KC_JYEN";case"AltLeft":return"KC_LALT";case"AltRight":return"KC_RALT";case"CapsLock":return"KC_CAPS";case"ControlLeft":return"KC_LCTL";case"ControlRight":return"KC_RCTL";case"MetaLeft":return"KC_LGUI";case"MetaRight":return"KC_RGUI";case"OSLeft":return"KC_LGUI";case"OSRight":return"KC_RGUI";case"ShiftLeft":return"KC_LSFT";case"ShiftRight":return"KC_RSFT";case"ContextMenu":return"KC_APP";case"Apps":return"KC_APP";case"Enter":return"KC_ENT";case"Space":return"KC_SPC";case"Tab":return"KC_TAB";case"Delete":return"KC_DEL";case"End":return"KC_END";case"Help":return"KC_HELP";case"Home":return"KC_HOME";case"Insert":return"KC_INS";case"PageDown":return"KC_PGDN";case"PageUp":return"KC_PGUP";case"ArrowDown":return"KC_DOWN";case"ArrowLeft":return"KC_LEFT";case"ArrowRight":return"KC_RGHT";case"ArrowUp":return"KC_UP";case"Escape":return"KC_ESC";case"PrintScreen":return"KC_PSCR";case"ScrollLock":return"KC_SLCK";case"Pause":return"KC_PAUS";case"F1":return"KC_F1";case"F2":return"KC_F2";case"F3":return"KC_F3";case"F4":return"KC_F4";case"F5":return"KC_F5";case"F6":return"KC_F6";case"F7":return"KC_F7";case"F8":return"KC_F8";case"F9":return"KC_F9";case"F10":return"KC_F10";case"F11":return"KC_F11";case"F12":return"KC_F12";case"F13":return"KC_F13";case"F14":return"KC_F14";case"F15":return"KC_F15";case"F16":return"KC_F16";case"F17":return"KC_F17";case"F18":return"KC_F18";case"F19":return"KC_F19";case"F20":return"KC_F20";case"F21":return"KC_F21";case"F22":return"KC_F22";case"F23":return"KC_F23";case"F24":return"KC_F24";case"NumLock":return"KC_NLCK";case"Numpad0":return"KC_P0";case"Numpad1":return"KC_P1";case"Numpad2":return"KC_P2";case"Numpad3":return"KC_P3";case"Numpad4":return"KC_P4";case"Numpad5":return"KC_P5";case"Numpad6":return"KC_P6";case"Numpad7":return"KC_P7";case"Numpad8":return"KC_P8";case"Numpad9":return"KC_P9";case"NumpadAdd":return"KC_PPLS";case"NumpadComma":return"KC_COMM";case"NumpadDecimal":return"KC_PDOT";case"NumpadDivide":return"KC_PSLS";case"NumpadEnter":return"KC_PENT";case"NumpadEqual":return"KC_PEQL";case"NumpadMultiply":return"KC_PAST";case"NumpadSubtract":return"KC_PMNS";case"AudioVolumeUp":return"KC_VOLU";case"AudioVolumeDown":return"KC_VOLD";case"AudioVolumeMute":return"KC_MUTE";default:console.error("Unreacheable keydown code",e)}}let heldKeys={},lastEvtTime=0;const useKeycodeRecorder=(e,o)=>{const n=reactExports.useState([]),[,r]=n,s=reactExports.useMemo(()=>getKeycodes().flatMap(l=>l.keycodes),[]),a=reactExports.useCallback((l,d)=>{l.preventDefault(),e&&!l.repeat&&r(u=>{const _=s.find(K=>K.code===mapEvtToKeycode(l)),p=Date.now(),C=_==null?void 0:_.code;return u.length&&o&&u.push([RawKeycodeSequenceAction.Delay,p-lastEvtTime]),C&&u.push([d,C]),lastEvtTime=p,[...u]})},[e,o]),i=reactExports.useCallback(l=>{l.repeat||(heldKeys[l.code]=!0,a(l,RawKeycodeSequenceAction.Down))},[e]),c=reactExports.useCallback(l=>{heldKeys[l.code]=!1,a(l,RawKeycodeSequenceAction.Up)},[e]);return reactExports.useEffect(()=>(heldKeys={},e&&(window.addEventListener("keydown",i),window.addEventListener("keyup",c)),()=>{heldKeys={},window.removeEventListener("keydown",i),window.removeEventListener("keyup",c)}),[e]),n},IconButton=styled.button`
  appearance: none;
  width: 40px;
  position: relative;
  display: inline-block;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px 10px;
  line-height: initial;
  font-size: initial;
  color: ${e=>e.disabled?"var(--bg_control)":"var(--color_accent)"};
  border-color: ${e=>e.disabled?"var(--bg_control)":"var(--color_accent)"};
  &:disabled {
    cursor: not-allowed;
    border-right: 1px solid var(--border_color_icon);
    cursor: not-allowed;
    background: var(--bg_menu);
  }
  &:hover {
    color: ${e=>e.disabled?"var(--bg_control)":"var(--color_inside-accent)"};
    border-color: ${e=>e.disabled?"var(--bg_control)":"var(--color_accent)"};
    border-right: 1px solid var(--border_color_icon);
    background-color: ${e=>e.disabled?"var(--bg_menu)":"var(--color_accent)"};
  }

  svg {
    color: ${e=>e.disabled?"var(--bg_control)":"var(--color_accent)"};
  }
  &:hover {
    svg {
      color: ${e=>e.disabled?"var(--bg_control)":"var(--color_inside-accent)"};
    }

    color: var(--color_label-highlighted);
    & .tooltip {
      transform: scale(1) translateX(0px);
      opacity: 1;
    }
  }
  .tooltip {
    transform: translateX(-5px) scale(0.6);
    opacity: 0;
  }
`,IconButtonUnfilledContainer=styled(IconButton)`
  cursor: pointer;
  background: inherit;
  border: 1px solid var(--color_accent);
  width: 30px;
  height: 30px;
  justify-content: center;
  display: inline-flex;
  align-items: center;
`,IconButtonContainer=styled(IconButton)`
  cursor: pointer;
  background: var(--bg_control);
  border-right: 1px solid var(--border_color_icon);
`,IconToggleContainer=styled(IconButton)`
  cursor: pointer;
  transition: all 0.4s ease;
  background: ${e=>e.$selected?"var(--color_accent)":"var(--bg_menu)"};
  svg {
    color: ${e=>e.$selected?"var(--color_inside-accent)":"var(--bg_icon)"};
  }
  &:hover {
    background: ${e=>e.$selected?"var(--color_accent)":"var(--bg_menu)"};
    svg {
      color: ${e=>e.$selected?"var(--color_inside-accent)":"var(--bg_icon)"};
    }
  }
  border-right: 1px solid var(--border_color_icon);
`,Keycap2DTooltip=e=>{const o=reactExports.useMemo(()=>({containerStyles:{position:"absolute",left:"50%",transformOrigin:"left",transition:"all 0.1s ease-in-out",top:0,marginTop:-40,zIndex:4,pointerEvents:"none",filter:"drop-shadow(0px 0px 1px white)"},contentStyles:{padding:"5px 8px",borderRadius:10,background:"var(--color_accent)",color:"var(--color_inside-accent)",fontFamily:"'Fira Sans Condensed', Helvetica, Helvetica Neue, Arial, serif",fontSize:16,fontWeight:500,whiteSpace:"nowrap",display:"flex",justifyContent:"center",alignItems:"center",textTransform:"uppercase",zIndex:5,transform:"translateX(-50%)"},pointerStyles:{borderStyle:"solid",borderColor:"transparent",borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid var(--color_accent)",position:"absolute",marginLeft:-6,width:0}}),[]);return jsx(Tooltip,{...e,containerStyles:o.containerStyles,contentStyles:o.contentStyles,pointerStyles:o.pointerStyles})},KeycapTooltip=e=>{const o=reactExports.useMemo(()=>({containerStyles:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:-800},contentStyles:{padding:"70px 70px",background:"var(--color_accent)",color:"var(--color_inside-accent)",borderRadius:100,fontSize:200,fontFamily:"'Fira Sans', Helvetica, Helvetica Neue, Arial, serif",whiteSpace:"nowrap",letterSpacing:1,display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"},pointerStyles:{height:150,width:150,marginTop:-100,transform:"rotate(45deg)",background:"var(--color_accent)"}}),[]);return jsx(Tooltip,{...e,containerStyles:o.containerStyles,contentStyles:o.contentStyles,pointerStyles:o.pointerStyles})},CategoryMenuTooltip=e=>{const o=reactExports.useMemo(()=>({containerStyles:{position:"absolute",top:45,left:0,transformOrigin:"left",transition:"all 0.1s ease-in-out",marginTop:0,zIndex:4,pointerEvents:"none"},contentStyles:{padding:"5px 10px",borderRadius:10,background:"var(--color_accent)",color:"var(--color_inside-accent)",fontFamily:"'Fira Sans Condensed', Helvetica, Helvetica Neue, Arial, serif",fontSize:18,fontWeight:500,whiteSpace:"nowrap",display:"flex",justifyContent:"center",alignItems:"center",textTransform:"uppercase",zIndex:5,transform:"translateX(-50%)",marginLeft:18},pointerStyles:{borderStyle:"solid",borderColor:"transparent",borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderBottom:"6px solid var(--color_accent)",position:"absolute",marginLeft:15,marginTop:-41,width:0}}),[]);return jsx(Tooltip,{...e,containerStyles:o.containerStyles,contentStyles:o.contentStyles,pointerStyles:o.pointerStyles})},ProgressBarTooltip=e=>{const o=reactExports.useMemo(()=>({containerStyles:{position:"absolute",left:"50%",transformOrigin:"left",transition:"all 0.1s ease-in-out",top:0,marginTop:-40,zIndex:4,pointerEvents:"none"},contentStyles:{padding:"5px 10px",borderRadius:10,background:"var(--color_inside-accent)",color:"var(--color_accent)",fontFamily:"'Fira Sans Condensed', Helvetica, Helvetica Neue, Arial, serif",fontSize:18,fontWeight:500,whiteSpace:"nowrap",display:"flex",justifyContent:"center",alignItems:"center",textTransform:"uppercase",zIndex:5,transform:"translateX(-50%)"},pointerStyles:{borderStyle:"solid",borderColor:"transparent",borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid var(--color_inside-accent)",position:"absolute",marginLeft:-6,width:0}}),[]);return jsx(Tooltip,{...e,containerStyles:o.containerStyles,contentStyles:o.contentStyles,pointerStyles:o.pointerStyles})},IconButtonTooltip=e=>{const o=reactExports.useMemo(()=>({containerStyles:{position:"absolute",top:50,left:0,transformOrigin:"left",transition:"all 0.1s ease-in-out",marginTop:0,zIndex:4,pointerEvents:"none"},contentStyles:{padding:"5px 10px",borderRadius:10,background:"var(--color_inside-accent)",color:"var(--color_accent)",fontFamily:"'Fira Sans Condensed', Helvetica, Helvetica Neue, Arial, serif",fontSize:18,fontWeight:500,whiteSpace:"nowrap",display:"flex",justifyContent:"center",alignItems:"center",textTransform:"uppercase",zIndex:5,transform:"translateX(-50%)",marginLeft:18},pointerStyles:{borderStyle:"solid",borderColor:"transparent",borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderBottom:"6px solid var(--color_inside-accent)",position:"absolute",marginLeft:15,marginTop:-41,width:0}}),[]);return jsx(Tooltip,{...e,containerStyles:o.containerStyles,contentStyles:o.contentStyles,pointerStyles:o.pointerStyles})},MenuTooltip=e=>{const o=reactExports.useMemo(()=>({containerStyles:{position:"absolute",top:0,left:45,transformOrigin:"left",transition:"all 0.1s ease-in-out",marginTop:-5,zIndex:4,pointerEvents:"none"},contentStyles:{padding:"5px 5px",background:"var(--color_inside-accent)",color:"var(--color_accent)",borderRadius:10,fontFamily:"'Fira Sans Condensed', Helvetica, Helvetica Neue, Arial, serif",fontWeight:400,whiteSpace:"nowrap",display:"flex",justifyContent:"center",alignItems:"center",zIndex:5},pointerStyles:{borderStyle:"solid",borderColor:"transparent",borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderRight:"6px solid var(--color_inside-accent)",position:"absolute",marginLeft:-9,marginTop:-21,width:0}}),[]);return jsx(Tooltip,{...e,containerStyles:o.containerStyles,contentStyles:o.contentStyles,pointerStyles:o.pointerStyles})},Tooltip=e=>{const{containerStyles:o,contentStyles:n,pointerStyles:r}=e;return jsxs("div",{style:o,className:"tooltip",children:[jsx("div",{style:n,children:e.children}),jsx("div",{style:r})]})},MacroEditControlsContainer=styled.div`
  background: var(--bg_menu);
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
`,MacroControlGroupContainer=styled.div`
  border-radius: 2px;
  border: 1px solid var(--border_color_icon);
  display: inline-flex;
  > button:last-child {
    border: none;
  }
`,MacroControlGroupDivider=styled.div`
  background: var(--border_color_icon);
  width: 1px;
  height: 80%;
  margin: 0 10px;
`,MacroEditControls=({isFullscreen:e,isRecording:o,recordingToggleChange:n,hasUnsavedChanges:r,undoChanges:s,saveChanges:a,recordDelays:i,toggleRecordDelays:c,optimizeRecording:l,toggleOptimizeRecording:d,isEmpty:u,deleteMacro:_,toggleFullscreen:p,isDelaySupported:C})=>{const{t:K}=useTranslation(),h=jsxs(IconButtonContainer,{onClick:()=>{n(!o)},disabled:!e,children:[jsx(FontAwesomeIcon,{size:"sm",color:"var(--color_label)",icon:o?faSquare:faCircle}),jsx(IconButtonTooltip,{children:K(e?o?"Stop Recording":"Record Keystrokes":"Can only record when fullscreen")})]});return jsxs(MacroEditControlsContainer,{children:[r?jsx(Fragment,{children:o?null:jsxs(Fragment,{children:[jsxs(MacroControlGroupContainer,{children:[jsxs(IconButtonContainer,{disabled:!r||o,onClick:s,children:[jsx(FontAwesomeIcon,{size:"sm",color:"var(--color_label)",icon:faUndo}),jsx(IconButtonTooltip,{children:"Undo Changes"})]}),jsxs(IconButtonContainer,{disabled:!r||o,onClick:()=>a(),children:[jsx(FontAwesomeIcon,{size:"sm",color:"var(--color_label)",icon:faSave}),jsx(IconButtonTooltip,{children:"Save Changes"})]})]}),jsx(MacroControlGroupDivider,{})]})}):u?jsx(Fragment,{}):jsxs(Fragment,{children:[jsx(MacroControlGroupContainer,{children:jsxs(IconButtonContainer,{disabled:r||o,onClick:_,children:[jsx(FontAwesomeIcon,{size:"sm",color:"var(--color_label)",icon:faTrash}),jsx(IconButtonTooltip,{children:"Delete Macro"})]})}),jsx(MacroControlGroupDivider,{})]}),jsxs(MacroControlGroupContainer,{children:[h,jsxs(IconButtonContainer,{onClick:p,children:[jsx(FontAwesomeIcon,{size:"sm",color:"var(--color_label)",icon:e?faCompress:faExpand}),jsx(IconButtonTooltip,{children:K(e?"Exit Fullscreen":"Fullscreen")})]})]}),o?null:jsxs(Fragment,{children:[jsx(MacroControlGroupDivider,{}),jsxs(MacroControlGroupContainer,{children:[jsxs(IconToggleContainer,{$selected:l,onClick:d,children:[jsx(FontAwesomeIcon,{size:"sm",icon:faMagicWandSparkles}),jsx(IconButtonTooltip,{children:K(l?"Skip Smart Optimization":"Use Smart Optimization")})]}),jsxs(IconToggleContainer,{disabled:!C,$selected:i,onClick:c,children:[jsx(FontAwesomeIcon,{size:"sm",icon:faStopwatch,className:"fa-stack-1x"}),jsx(IconButtonTooltip,{children:K(C?i?"Skip Recording Delays":"Record Delays":"Upgrade firmware to use delays")})]})]})]})]})},DeletableContainer=styled.div`
  display: inline-flex;
  vertical-align: middle;
  position: relative;
  svg {
    color: var(--bg_icon-highlighted);
    position: absolute;
    right: -5px;
    top: 6px;
    opacity: 0;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    background: var(--bg_icon);
    border-radius: 50%;
    transform: scale(0.8);
  }
  &:hover svg {
    opacity: 1;
    transform: scale(1);
  }
`,Deletable=e=>jsxs(DeletableContainer,{style:{pointerEvents:e.disabled?"none":"all"},children:[e.children,jsx(FontAwesomeIcon,{icon:faXmarkCircle,size:"lg",onClick:()=>e.deleteItem(e.index)})]}),pipeline=(e,...o)=>o.reduce((n,r)=>r(n),e),NoMacroRecorded=styled.div`
  font-style: italic;
  color: var(--color_label-highlighted);
`,MacroSequenceContainer=styled.div`
  max-width: 960px;
  width: 100%;
  display: block;
  border: 1px solid var(--border_color_cell);
  border-style: ${e=>e.$isModified?"dashed":"solid"};
  padding: 30px 20px;
  border-radius: 15px;
  margin-top: 10px;
  box-sizing: border-box;
}
`,componentJoin=(e,o)=>e.reduce((n,r,s)=>(s&&n.push({...o,key:s.toString()}),n.push(r),n),[]),KeycodeMap=getKeycodes().flatMap(e=>e.keycodes).reduce((e,o)=>({...e,[o.code]:o}),{}),optimizeKeycodeSequence=e=>pipeline(e,convertCharacterTaps,trimLastWait,mergeConsecutiveWaits,foldKeydownKeyupKeys,convertToCharacterStreams),cleanKeycodeSequence=e=>pipeline(e,mergeConsecutiveWaits),MacroRecorder=({selectedMacro:e,setUnsavedMacro:o,saveMacro:n,undoMacro:r,isDelaySupported:s})=>{const{t:a}=useTranslation(),[i,c]=reactExports.useState(!0),[l,d]=reactExports.useState(!1),[u,_]=reactExports.useState(!1),[p,C]=reactExports.useState(!!document.fullscreenElement),{smartOptimizeEnabled:K,recordDelaysEnabled:h}=useAppSelector(getMacroEditorSettings),g=useDispatch(),[y,m]=useKeycodeRecorder(l,h),S=reactExports.useRef(null),x=reactExports.useCallback(async f=>{d(f),f?(await navigator.keyboard.lock(),m([]),c(!1),_(!0)):(navigator.keyboard.unlock(),K&&m(optimizeKeycodeSequence(y)),_(!1))},[y,d]),b=reactExports.useCallback(()=>{n(""),c(!0),_(!1)},[m,n]),w=reactExports.useCallback(()=>{r(),m([]),c(!0),_(!1)},[r]);reactExports.useEffect(()=>{c(!0),_(!1),m([])},[e]);const T=()=>[...i?e??[]:y],A=reactExports.useMemo(()=>{let f,R=T();return i||!u||!K?f=R:f=optimizeKeycodeSequence(R),f},[y,i,K,u,e]);reactExports.useEffect(()=>{A&&o(sequenceToExpression(A))},[A]);const v=reactExports.useCallback(()=>{i&&c(!1)},[i]),D=reactExports.useCallback(f=>{const R=T();R.splice(f,1),m(cleanKeycodeSequence(R)),v()},[A,e,y,i]),O=reactExports.useCallback((f,R)=>{const E=T();E.splice(f,1,[RawKeycodeSequenceAction.Delay,R]),m(cleanKeycodeSequence(E)),v()},[A,e,y,i]),I=reactExports.useMemo(()=>componentJoin(A.map(([f,R],E)=>{const L=getSequenceItemComponent(f);return jsx(Deletable,{index:E,deleteItem:D,disabled:l,children:RawKeycodeSequenceAction.Delay!==f?jsx(L,{children:f===RawKeycodeSequenceAction.CharacterStream?componentJoin(String(R).split(" ").map((B,F)=>jsx("span",{children:B},F)),jsx("span",{style:{fontFamily:"fantasy, cursive, monospace"},children:"␣"})):Array.isArray(R)?R.map(B=>getSequenceLabel(KeycodeMap[B])??B).join(" + "):getSequenceLabel(KeycodeMap[R])}):jsx(WaitInput,{index:E,value:Number(R),updateValue:O})},`${E}-${f}`)}),jsx(SequenceLabelSeparator,{})),[A]);reactExports.useEffect(()=>{const f=()=>{C(!!document.fullscreenElement)};return document.documentElement.addEventListener("fullscreenchange",f),()=>{x(!1),document.documentElement.removeEventListener("fullscreenchange",f)}},[C]);const P=reactExports.useCallback(()=>{document.fullscreenElement?document.exitFullscreen&&(x(!1),document.exitFullscreen()):document.documentElement.requestFullscreen()},[x]);return jsxs(Fragment,{children:[jsx(MacroSequenceContainer,{ref:S,$isModified:!i,children:I.length?I:jsx(NoMacroRecorded,{children:a("No macro recorded yet...")})}),jsx("div",{style:{border:"none",maxWidth:960,width:"100%",display:"flex",justifyContent:"center",transform:"translate(-0px, -21px)"},children:jsx(MacroEditControls,{isFullscreen:p,isEmpty:!e||!e.length,optimizeRecording:K,recordDelays:h,isRecording:l,addText:()=>{},deleteMacro:b,toggleOptimizeRecording:()=>{g(setMacroEditorSettings({smartOptimizeEnabled:!K}))},toggleRecordDelays:()=>{g(setMacroEditorSettings({recordDelaysEnabled:!h}))},toggleFullscreen:P,undoChanges:w,saveChanges:()=>n(),hasUnsavedChanges:!i,recordingToggleChange:x,isDelaySupported:s})})]})},TextArea=styled.textarea`
  box-sizing: border-box;
  background: var(--bg_control);
  padding: 5px 10px;
  border-color: var(--border_color_icon);
  color: var(--color_label);
  width: 100%;
  height: 200px;
  font-size: 16px;
  line-height: 18px;
  resize: none;
  font-family: 'Source Code Pro';
  font-weight: 500;
  &::placeholder {
    color: var(--color_label);
  }
  &:focus {
    color: var(--color_accent);
    outline-color: var(--color_accent);
  }
`,ToastErrorMessage=styled(ErrorMessage)`
  margin: 0;
  width: 100%;
  font-size: 14px;
  display: block;
  &:empty {
    display: none;
  }
`,Message=styled.div`
  color: var(--color_accent);
`,Link=styled.a`
  font-size: 18x !important;
  color: var(--color_accent);
  text-decoration: underline;
`,DescriptionLabel=styled(Label$1)`
  margin: 1em 0;
  font-size: 14px;
  line-height: 18px;
  font-style: oblique;
  padding-left: 5px;
`,AutoHeightRow=styled(ControlRow)`
  height: auto;
`,ScriptMode=({macro:e,protocol:o,setUnsavedMacro:n,saveMacros:r,macroIndex:s,isDelaySupported:a})=>{const{t:i}=useTranslation(),c=e.trimEnd(),[l,d]=React.useState(c),[u,_]=React.useState(void 0);reactExports.useEffect(()=>{n(l)},[l]);const p=()=>{const h=getMacroValidator(o)(l);h.isValid?(r(l),_(void 0)):_(h.errorMessage)};return jsxs(Fragment,{children:[jsx(AutoHeightRow,{children:jsx(ReactTextareaAutocomplete,{value:l,onChange:K=>d(K.target.value),loadingComponent:AutocompleteLoading,style:{fontSize:"16px",lineHeight:"18px",width:"100%",height:"140px",fontFamily:"monospace",resize:"none",borderColor:u!==void 0?"var(--color_error)":"var(--border_color_icon)"},containerStyle:{border:"none",lineHeight:"20px"},itemStyle:{borderColor:"var(--border_color_cell)",backgroundColor:"var(--bg_menu)"},dropdownStyle:{zIndex:999,backgroundColor:"var(--bg_menu)"},listStyle:{position:"fixed",backgroundColor:"var(--bg_menu)",maxHeight:"210px",overflow:"auto",border:"1px solid var(--border_color_cell)"},minChar:0,textAreaComponent:TextArea,movePopupAsYouType:!0,placeholder:`Enter the macro you want M${s} to execute...`,trigger:{"?":{dataProvider:findKeycodes,component:AutocompleteItem,output:K=>({text:K.code,caretPosition:"end"})},"{":{dataProvider:findKeycodes,component:AutocompleteItem,output:K=>({text:`{${K.code},`,caretPosition:"end"})},",":{dataProvider:findKeycodes,component:AutocompleteItem,output:K=>({text:`,${K.code},`,caretPosition:"end"})}}})}),jsxs(AutoHeightRow,{children:[jsxs(DescriptionLabel,{children:[jsx(ToastErrorMessage,{children:u}),jsxs(Message,{children:[i("Enter text directly, or wrap")," ",jsx(Link,{href:"https://docs.qmk.fm/#/keycodes_basic",target:"_blank",children:i("Basic Keycodes")})," ",i("in {}")]}),jsxs(Message,{children:[i("Single tap"),": ","{KC_XXX}"]}),jsxs(Message,{children:[i("Chord"),": ","{KC_XXX, KC_YYY, KC_ZZZ}"]}),jsxs(Message,{children:[i("Keydown"),": ","{+KC_XXX}"]}),jsxs(Message,{children:[i("Keyup"),": ","{-KC_XXX}"]}),a?jsxs(Message,{children:[i("Delay (ms)"),": ","{NNNN}"," "]}):jsx(Message,{children:i("Upgrade firmware to use delays")}),jsx(Message,{children:i("Type ? to search for keycodes")})]}),jsx(Detail,{children:jsx(AccentButton,{disabled:e===l,onClick:p,children:i("Save")})})]})]})},ProgressBarContainer=styled.div`
  position: relative;
  margin-top: 10px;
  &:hover {
    & .tooltip {
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
  }
  .tooltip {
    transform: translateY(5px) scale(0.6);
    opacity: 0;
  }
`,ProgressBar=styled.div`
  background: var(--bg_control);
  position: relative;
  padding: 5px;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
  cursor: pointer;
  width: 250px;

  > span {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background: var(--color_accent);
    height: 10px;
    width: 100%;
    transform: scaleX(0.1);
    transform-origin: left;
    transition: transform 0.4s ease-in-out;
  }
`,MacroTab=styled.span`
  display: inline-flex;
  border: 1px solid;
  line-height: initial;
  border-top: none;
  padding: 8px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  min-width: 38px;
  justify-content: center;
  box-sizing: border-box;
  color: ${e=>e.$selected?"var(--color_accent)":"var(--bg_icon)"};
  cursor: pointer;
  &:hover {
    color: ${e=>e.$selected?"var(--color_accent)":"var(--bg_icon-highlighted)"};
  }
`,TabBar=styled.div`
  display: flex;
  column-gap: 10px;
`,TabContainer=styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  max-width: 960px;
`,CenterTabContainer=styled(TabContainer)`
  justify-content: center;
`,printBytesUsed=(e,o)=>{const{t:n}=useTranslation(),r=["Bytes","kB","MB","GB"],s=Math.floor(Math.log10(o)/3),a=r[s],i=s===0?1:Math.pow(1e3,s),c=e/i,l=o/i;return`${c.toFixed(s)} / ${l.toFixed(s)} ${a} ${n("space used")}`},BufferSizeUsage=()=>{const e=useAppSelector(c=>c.macros.ast),o=useAppSelector(getMacroBufferSize),n=useAppSelector(getSelectedConnectedDevice),r=useAppSelector(getSelectedKeyboardAPI);if(!n||!r)return null;const{protocol:s}=n,i=getMacroAPI(s,r).rawKeycodeSequencesToMacroBytes(e).length;return jsxs(ProgressBarContainer,{children:[jsx(ProgressBar,{children:jsx("span",{style:{transform:`scaleX(${i/o})`}})}),jsx(ProgressBarTooltip,{children:printBytesUsed(i,o)})]})},MacroDetailPane=e=>{const o=e.macroExpressions[e.selectedMacro]||"",[n,r]=React.useState(!1),s=useAppSelector(u=>u.macros.ast),a=useAppSelector(getIsDelaySupported),[i,c]=reactExports.useState(o);reactExports.useEffect(()=>{c(o)},[o]);const l=reactExports.useCallback(()=>{c(o)},[o]),d=reactExports.useCallback(u=>{u!==void 0?(e.saveMacros(""),c("")):i!==o&&(e.saveMacros(i),c(i))},[i]);return jsxs(Fragment,{children:[jsx(CenterTabContainer,{children:jsxs(TabBar,{children:[jsx(MacroTab,{$selected:!n,onClick:()=>r(!1),children:jsx(FontAwesomeIcon,{icon:faClapperboard})}),jsx(MacroTab,{$selected:n,onClick:()=>r(!0),children:jsx(FontAwesomeIcon,{icon:faCode})})]})}),jsx(BufferSizeUsage,{}),n?jsx(ScriptMode,{macro:o,macroIndex:e.selectedMacro,protocol:e.protocol,isDelaySupported:a,setUnsavedMacro:c,saveMacros:e.saveMacros},e.selectedMacro):jsx(MacroRecorder,{selectedMacro:s[e.selectedMacro],setUnsavedMacro:c,undoMacro:l,saveMacro:d,isDelaySupported:a})]})},MacroPane=styled(CenterPane)`
  height: 100%;
  background: var(--color_dark_grey);
`,Container$b=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px;
  padding-top: 0;
`,MenuContainer$2=styled.div`
  padding: 15px 10px 20px 10px;
`,Pane$3=()=>{const e=useAppDispatch(),o=useAppSelector(getSelectedConnectedDevice),n=useAppSelector(getExpressions),r=useAppSelector(getMacroCount),[s,a]=reactExports.useState(0),i=reactExports.useCallback(async l=>{if(!o)return;const d=n.map((u,_)=>_===s?l:u);e(saveMacros(o,d))},[n,saveMacros,e,o,s]),c=reactExports.useMemo(()=>Array(r).fill(0).map((l,d)=>d).map(l=>jsx(SubmenuRow,{$selected:s===l,onClick:()=>a(l),style:{borderWidth:0,textAlign:"center"},children:`M${l}`},l)),[s,r]);return o?jsxs(Fragment,{children:[jsx(SubmenuOverflowCell,{children:jsx(MenuContainer$2,{children:c})}),jsx(OverflowCell,{children:jsx(MacroPane,{children:jsx(Container$b,{children:jsx(MacroDetailPane,{macroExpressions:n,selectedMacro:s,saveMacros:i,protocol:o?o.protocol:-1})})})})]}):null},Icon$3=component$2,Title$3=title$2,Macros=Object.freeze(Object.defineProperty({__proto__:null,Icon:Icon$3,Pane:Pane$3,Title:Title$3},Symbol.toStringTag,{value:"Module"}));function AccentUploadButton(e){const o=e.inputRef||React.useRef();function n(r){e.onLoad(r.target.files),o.current.value=null}return jsxs(AccentButton,{onClick:()=>o.current&&o.current.click(),children:[e.children,jsx("input",{ref:o,type:"file",multiple:e.multiple,accept:"application/json",style:{display:"none"},onChange:n})]})}const deprecatedKeycodes={KC_TILD:"S(KC_GRV)",KC_EXLM:"S(KC_1)",KC_AT:"S(KC_2)",KC_HASH:"S(KC_3)",KC_DLR:"S(KC_4)",KC_PERC:"S(KC_5)",KC_CIRC:"S(KC_6)",KC_AMPR:"S(KC_7)",KC_ASTR:"S(KC_8)",KC_LPRN:"S(KC_9)",KC_RPRN:"S(KC_0)",KC_UNDS:"S(KC_MINS)",KC_PLUS:"S(KC_EQL)",KC_LCBR:"S(KC_LBRC)",KC_RCBR:"S(KC_RBRC)",KC_PIPE:"S(KC_BSLS)",KC_COLN:"S(KC_SCLN)",KC_DQUO:"S(KC_QUOT)",KC_LT:"S(KC_COMM)",KC_GT:"S(KC_DOT)",KC_QUES:"S(KC_SLSH)",SPC_FN1:"LT(1,KC_SPC)",SPC_FN2:"LT(2,KC_SPC)",SPC_FN3:"LT(3,KC_SPC)",MACRO00:"MACRO(0)",MACRO01:"MACRO(1)",MACRO02:"MACRO(2)",MACRO03:"MACRO(3)",MACRO04:"MACRO(4)",MACRO05:"MACRO(5)",MACRO06:"MACRO(6)",MACRO07:"MACRO(7)",MACRO08:"MACRO(8)",MACRO09:"MACRO(9)",MACRO10:"MACRO(10)",MACRO11:"MACRO(11)",MACRO12:"MACRO(12)",MACRO13:"MACRO(13)",MACRO14:"MACRO(14)",MACRO15:"MACRO(15)",USER00:"CUSTOM(0)",USER01:"CUSTOM(1)",USER02:"CUSTOM(2)",USER03:"CUSTOM(3)",USER04:"CUSTOM(4)",USER05:"CUSTOM(5)",USER06:"CUSTOM(6)",USER07:"CUSTOM(7)",USER08:"CUSTOM(8)",USER09:"CUSTOM(9)",USER10:"CUSTOM(10)",USER11:"CUSTOM(11)",USER12:"CUSTOM(12)",USER13:"CUSTOM(13)",USER14:"CUSTOM(14)",USER15:"CUSTOM(15)"},title$1="Save + Load",component$1=()=>jsx(FontAwesomeIcon,{icon:faFloppyDisk}),isViaSaveFile=e=>e&&e.name&&e.layers&&e.vendorProductId,SaveLoadPane=styled(CenterPane)`
  height: 100%;
  background: var(--color_dark_grey);
`,Container$a=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;
`,Pane$2=()=>{const{t:e}=useTranslation(),o=useAppDispatch(),n=useAppSelector(getSelectedDefinition),r=useAppSelector(getSelectedConnectedDevice),s=useAppSelector(getSelectedKeyboardAPI),a=useAppSelector(getSelectedRawLayers),i=useAppSelector(y=>y.macros),c=useAppSelector(getExpressions),{basicKeyToByte:l,byteToKey:d}=useAppSelector(getBasicKeyToByte);if(!n||!r||!s)return null;const[u,_]=reactExports.useState(null),[p,C]=reactExports.useState(null),K=async()=>{const{layouts:y}=n,{keys:m,optionKeys:S}=y,x=[...m,...Object.values(S).flatMap(b=>Object.values(b)).flat()].filter(b=>"ei"in b).map(b=>b.ei);if(x.length>0){const b=Math.max(...x)+1,w=a.length;return await Promise.all(Array(b).fill(0).map((A,v)=>Promise.all(Array(w).fill(0).map((D,O)=>Promise.all([s.getEncoderValue(O,v,!1),s.getEncoderValue(O,v,!0)]).then(I=>I.map(P=>getCodeForByte(P,l,d)||""))))))}else return[]},h=async()=>{const{name:y,vendorProductId:m}=n,S=y.replace(/[^a-zA-Z0-9]/g,"_").toLowerCase()+".layout.json";try{const x=await window.showSaveFilePicker({suggestedName:S}),b=await K(),w={name:y,vendorProductId:m,macros:[...c],layers:a.map(D=>D.keymap.map(O=>getCodeForByte(O,l,d)||"")),encoders:b},T=stringify(w),A=new Blob([T],{type:"application/json"}),v=await x.createWritable();await v.write(A),await v.close()}catch{console.log("User cancelled save file request")}},g=([y])=>{_(null),C(null);const m=new FileReader;m.onabort=()=>_(e("File reading was cancelled.")),m.onerror=()=>_(e("Failed to read file.")),m.onload=async()=>{const S=JSON.parse(m.result.toString());if(!isViaSaveFile(S)){_(e("Could not load file: invalid data."));return}if(S.vendorProductId!==n.vendorProductId){_(e("Could not import layout. This file was created for a different keyboard: {{name}}",{name:S.name}));return}if(S.layers.findIndex((b,w)=>b.length!==a[w].keymap.length)>-1){_(e("Could not import layout: incorrect number of keys in one or more layers."));return}if(i.isFeatureSupported&&S.macros){if(S.macros.length!==c.length){_(e("Could not import layout: incorrect number of macros."));return}o(saveMacros(r,S.macros))}const x=S.layers.map(b=>b.map(w=>getByteForCode(`${deprecatedKeycodes[w]??w}`,l)));await o(saveRawKeymapToDevice(x,r)),S.encoders&&await Promise.all(S.encoders.map((b,w)=>Promise.all(b.map((T,A)=>Promise.all([s.setEncoderValue(A,w,!1,getByteForCode(`${deprecatedKeycodes[T[0]]??T[0]}`,l)),s.setEncoderValue(A,w,!0,getByteForCode(`${deprecatedKeycodes[T[1]]??T[1]}`,l))]))))),C(e("Successfully updated layout!"))},m.readAsBinaryString(y)};return jsx(SpanOverflowCell,{children:jsx(SaveLoadPane,{children:jsxs(Container$a,{children:[jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Save Current Layout")}),jsx(Detail,{children:jsx(AccentButton,{onClick:h,children:e("Save")})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Load Saved Layout")}),jsx(Detail,{children:jsx(AccentUploadButton,{onLoad:g,children:e("Load")})})]}),u?jsx(ErrorMessage,{children:u}):null,p?jsx(SuccessMessage,{children:p}):null]})})})},Icon$2=component$1,Title$2=title$1,SaveLoad=Object.freeze(Object.defineProperty({__proto__:null,Icon:Icon$2,Pane:Pane$2,Title:Title$2},Symbol.toStringTag,{value:"Module"})),SvgIcKeyboard24Px=e=>jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[jsx("path",{d:"M0 0h24v24H0z",fill:"none"}),jsx("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",fill:"currentColor"})]}),title="Layouts",component=SvgIcKeyboard24Px,LayoutControl=e=>{const{t:o}=useTranslation(),{onChange:n,meta:r}=e,{labels:s,selectedOption:a}=r;if(Array.isArray(s)){const[i,...c]=s,l=c.map((d,u)=>({label:o(d),value:`${u}`}));return jsxs(ControlRow,{children:[jsx(Label$1,{children:o(i)}),jsx(Detail,{children:jsx(AccentSelect,{value:l[a],options:l,onChange:d=>{d&&n(+d.value)}})})]})}else return jsxs(ControlRow,{children:[jsx(Label$1,{children:o(s)}),jsx(Detail,{children:jsx(AccentSlider,{isChecked:!!a,onChange:i=>n(+i)})})]})},ContainerPane=styled(CenterPane)`
  height: 100%;
  background: var(--color_dark_grey);
`,Container$9=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;
`,Pane$1=()=>{const e=useAppDispatch(),o=useAppSelector(getSelectedDefinition),n=useAppSelector(getSelectedLayoutOptions);if(!o||!n)return null;const{layouts:r}=o,s=r.labels||[];return jsx(SpanOverflowCell,{children:jsx(ContainerPane,{children:jsx(Container$9,{children:s.map((a,i)=>jsx(LayoutControl,{onChange:c=>e(updateLayoutOption(i,c)),meta:{labels:a,selectedOption:n[i]}},i))})})})},Title$1=title,Icon$1=component,Layouts$1=Object.freeze(Object.defineProperty({__proto__:null,Icon:Icon$1,Pane:Pane$1,Title:Title$1},Symbol.toStringTag,{value:"Module"})),GET_KEYBOARD_VALUE=2,SET_KEYBOARD_VALUE=3,KB_VALUES={ENABLED_ENCODER_MODES:128,OLED_DEFAULT_MODE:129,ENCODER_CUSTOM:130,OLED_MODE:131},getEncoderModes=async e=>{const o=[KB_VALUES.ENABLED_ENCODER_MODES],[,,n]=await e.hidCommand(GET_KEYBOARD_VALUE,o);return n},setEncoderModes=async(e,o)=>{const n=[KB_VALUES.ENABLED_ENCODER_MODES,o];await e.hidCommand(SET_KEYBOARD_VALUE,n)},getDefaultOLED=async e=>{const o=[KB_VALUES.OLED_DEFAULT_MODE],[,,n]=await e.hidCommand(GET_KEYBOARD_VALUE,o);return n},setDefaultOLED=async(e,o)=>{const n=[KB_VALUES.OLED_DEFAULT_MODE,o];await e.hidCommand(SET_KEYBOARD_VALUE,n)},getOLEDMode=async e=>{const o=[KB_VALUES.OLED_MODE],[,,n]=await e.hidCommand(GET_KEYBOARD_VALUE,o);return n},setOLEDMode=async(e,o)=>{const n=[KB_VALUES.OLED_MODE,o];await e.hidCommand(SET_KEYBOARD_VALUE,n)},getCustomEncoderConfig=async(e,o)=>{const n=[KB_VALUES.ENCODER_CUSTOM,o],r=await e.hidCommand(GET_KEYBOARD_VALUE,n),[,,,s,a,i,c,l,d]=r;return[s<<8|a,i<<8|c,l<<8|d]},setCustomEncoderConfig=async(e,o,n,r)=>{const s=(r&65280)>>8,a=r&255,i=[KB_VALUES.ENCODER_CUSTOM,o,n,s,a];await e.hidCommand(SET_KEYBOARD_VALUE,i)},MODES={ENC_MODE_VOLUME:0,ENC_MODE_MEDIA:1,ENC_MODE_SCROLL:2,ENC_MODE_BRIGHTNESS:3,ENC_MODE_BACKLIGHT:4,ENC_MODE_CUSTOM0:5,ENC_MODE_CUSTOM1:6,ENC_MODE_CUSTOM2:7},MODE_LABELS={ENC_MODE_VOLUME:"Volume",ENC_MODE_MEDIA:"Media",ENC_MODE_SCROLL:"Scroll",ENC_MODE_BRIGHTNESS:"Brightness",ENC_MODE_BACKLIGHT:"Backlight",ENC_MODE_CUSTOM0:"Custom 0",ENC_MODE_CUSTOM1:"Custom 1",ENC_MODE_CUSTOM2:"Custom 2"},CenteredColumnDiv=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ColumnDiv=styled.div`
  display: flex;
  flex-direction: column;
`;class EncoderModeToggle extends React.Component{constructor(){super(...arguments);M(this,"handleInputChange",n=>{const{enabledModes:r,onChange:s}=this.props,{target:{checked:a,name:i}}=n,c=1<<MODES[i],l=a?r|c:r&~c;s(l)});M(this,"isChecked",n=>(1<<n&this.props.enabledModes)>0)}render(){return jsxs(CenteredColumnDiv,{children:[jsx("h3",{children:"Enabled Encoder Modes:"}),jsx("p",{children:"Only the selected encoder modes will be available on the keyboard"}),jsx(ColumnDiv,{children:Object.entries(MODES).map(([n,r])=>jsxs("label",{htmlFor:MODE_LABELS[n],children:[jsx("input",{name:n,id:MODE_LABELS[n],type:"checkbox",checked:this.isChecked(r),onChange:this.handleInputChange},r),MODE_LABELS[n]]},r))})]})}}const NormalInput=styled.input`
  border: none;
  border-bottom: 1px solid var(--bg_control);
  color: var(--color_accent);
  background: var(--bg_menu);
  transition: all 0.4s ease-out;
  font-size: 18px;
  margin-bottom: 25px;
  height: 30px;
  padding: 0 5px;
  &:focus {
    outline: none;
    color: var(--color_accent);
    border-color: var(--color_accent);
  }
  &::placeholder {
    color: var(--bg_control);
  }
`,ErrorInput=styled(NormalInput)`
  border-color: #d15e5e;
  color: #d15e5e;
`;class KeycodeTextInput extends React.Component{constructor(n){super(n);M(this,"handleChange",n=>{const r=n.target.value;this.setState({currentValue:r})});M(this,"handleBlur",n=>{const{onBlur:r,basicKeyToByte:s}=this.props,{lastDefault:a}=this.state,i=n.target.value.trim().toUpperCase(),c=advancedStringToKeycode(i,s);Object.keys(s).includes(i)?(a!==s[i]&&r(s[i]),this.setState({isError:!1})):c!==0?(a!==c&&r(c),this.setState({isError:!1})):new RegExp(/^0x[0-9A-Fa-f]{1,4}$/g).test(n.target.value.trim())?(r(parseInt(n.target.value.trim(),16)),this.setState({isError:!1})):this.setState({isError:!0})});const{defaultValue:r,basicKeyToByte:s,byteToKey:a}=n;let i=anyKeycodeToString(r,s,a);this.state={lastDefault:r,defaultValueAsString:i,currentParsed:r,currentValue:i,isError:!1}}static getDerivedStateFromProps(n,r){return r.lastDefault!==n.defaultValue&&r.currentParsed!==n.defaultValue?{...r,currentValue:anyKeycodeToString(n.defaultValue,n.basicKeyToByte,n.byteToKey),currentParsed:n.defaultValue,lastDefault:n.defaultValue}:r}render(){const{currentValue:n,isError:r}=this.state;return jsx(r?ErrorInput:NormalInput,{type:"text",placeholder:this.props.defaultValue?this.state.defaultValueAsString:"KC_NO, 0xFF, etc.",value:n,onChange:this.handleChange,onBlur:this.handleBlur,className:this.props.className})}}const RowDiv=styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4px;
`,LabelText$1=styled.span`
  font-weight: 650;
  margin-right: 8px;
  width: 80px;
`,KeyInput=styled(KeycodeTextInput)`
  width: 64px;
  margin-right: 8px;
`,EncoderCustomConfig=e=>{const{encoderIdx:o,onChange:n,title:r,behaviors:[s,a,i]}=e,{basicKeyToByte:c,byteToKey:l}=useAppSelector(getBasicKeyToByte),d=(u,_)=>{n(o,_,u)};return jsxs(RowDiv,{children:[jsx(LabelText$1,{children:r}),jsx(KeyInput,{defaultValue:s,basicKeyToByte:c,byteToKey:l,onBlur:u=>d(u,0)}),jsx(KeyInput,{defaultValue:a,basicKeyToByte:c,byteToKey:l,onBlur:u=>d(u,1)}),jsx(KeyInput,{defaultValue:i,basicKeyToByte:c,byteToKey:l,onBlur:u=>d(u,2)})]})},MenuContainer$1=styled.div`
  display: flex;
  color: #717070;
  padding: 24px;
  font-family: GothamRounded;
  h3 {
    margin: 4px 0;
  }
  p {
    margin: 4px 0 8px 0;
    width: 288px;
    font-size: 13px;
    text-align: center;
  }
`,SectionContainer=styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`,OLEDSelectContainer=styled.div`
  width: 156px;
  margin-bottom: 12px;
`,CustomEncoderContainer=styled.div`
  padding-left: 112px;
  display: flex;
  flex-direction: row;
`,LabelText=styled.span`
  font-weight: 650;
  margin-right: 8px;
  width: 64px;
`,OLED_OPTIONS=[{value:0,label:"Default"},{value:1,label:"Time"},{value:2,label:"Off"}],SatisfactionMenu=()=>{const e=useAppSelector(getSelectedKeyboardAPI);return e?jsx(BaseSatisfactionMenu,{api:e}):null};class BaseSatisfactionMenu extends reactExports.Component{constructor(){super(...arguments);M(this,"state",{enabledModes:31,defaultOLEDMode:0,currOLEDMode:0,encoderBehaviors:[[0,0,0],[0,0,0],[0,0,0]]});M(this,"fetchDataAndSet",async()=>{const{api:n}=this.props,r=[getEncoderModes(n),getDefaultOLED(n),getOLEDMode(n),getCustomEncoderConfig(n,0),getCustomEncoderConfig(n,1),getCustomEncoderConfig(n,2)],[s,a,i,c,l,d]=await Promise.all(r);this.setState({enabledModes:s,defaultOLEDMode:a,currOLEDMode:i,encoderBehaviors:[c,l,d]})});M(this,"onEncoderModeChange",n=>{const{api:r}=this.props,{enabledModes:s}=this.state;s!==n&&(this.setState({enabledModes:n}),setEncoderModes(r,n))});M(this,"onEncoderCustomConfigChange",(n,r,s)=>{const{api:a}=this.props,i=[...this.state.encoderBehaviors];i[n][r]=s,this.setState({encoderBehaviors:i}),setCustomEncoderConfig(a,n,r,s)});M(this,"onOLEDDefaultChange",n=>{const{value:r}=n,{api:s}=this.props,{defaultOLEDMode:a}=this.state;a!==r&&(this.setState({defaultOLEDMode:r}),setDefaultOLED(s,r))});M(this,"onOLEDChange",n=>{const{value:r}=n,{api:s}=this.props,{currOLEDMode:a}=this.state;a!==r&&(this.setState({currOLEDMode:r}),setOLEDMode(s,r))})}componentDidMount(){this.fetchDataAndSet()}render(){const{api:n}=this.props,{enabledModes:r,defaultOLEDMode:s,currOLEDMode:a,encoderBehaviors:i}=this.state;return n?jsxs(MenuContainer$1,{children:[jsx(SectionContainer,{children:jsx(EncoderModeToggle,{onChange:this.onEncoderModeChange,enabledModes:r})}),jsxs(SectionContainer,{children:[jsx("h3",{children:"Default OLED Mode:"}),jsx("p",{children:"This is the OLED mode that will be selected by default when you plug in your keyboard."}),jsx(OLEDSelectContainer,{children:jsx(StateManagedSelect$1,{value:OLED_OPTIONS.find(c=>c.value===s),onChange:this.onOLEDDefaultChange,options:OLED_OPTIONS})}),jsx("h3",{children:"Current OLED Mode:"}),jsxs("p",{children:["Change your ","keyboard's"," current OLED mode"]}),jsx(OLEDSelectContainer,{children:jsx(StateManagedSelect$1,{value:OLED_OPTIONS.find(c=>c.value===a),onChange:this.onOLEDChange,options:OLED_OPTIONS,menuPlacement:"top"})})]}),jsxs(SectionContainer,{children:[jsx("h3",{children:"Custom Encoder Configuration:"}),jsx("p",{children:"Configure the behavior of encoder custom modes"}),jsxs(CustomEncoderContainer,{children:[jsx(LabelText,{children:"CW"}),jsx(LabelText,{children:"CCW"}),jsx(LabelText,{children:"Press"})]}),jsx(EncoderCustomConfig,{title:"Custom 0",encoderIdx:0,behaviors:i[0],onChange:this.onEncoderCustomConfigChange}),jsx(EncoderCustomConfig,{title:"Custom 1",encoderIdx:1,behaviors:i[1],onChange:this.onEncoderCustomConfigChange}),jsx(EncoderCustomConfig,{title:"Custom 2",encoderIdx:2,behaviors:i[2],onChange:this.onEncoderCustomConfigChange})]})]}):null}}const size=16.187,SvgIcMemory24Px=e=>jsx("svg",{width:size,height:size,...e,children:jsx("path",{d:"M10.791 5.4H5.4v5.4h5.4zM8.991 9h-1.8V7.2h1.8zm7.194-1.8V5.4h-1.8V3.6a1.8 1.8 0 00-1.8-1.8h-1.8V0h-1.8v1.8h-1.8V0H5.4v1.8H3.6a1.8 1.8 0 00-1.8 1.8v1.8H0v1.8h1.8V9H0v1.8h1.8v1.8a1.8 1.8 0 001.8 1.8h1.8v1.8h1.8v-1.8H9v1.8h1.8v-1.8h1.8a1.8 1.8 0 001.8-1.8v-1.8h1.8V9h-1.8V7.2zm-3.6 5.4H3.6v-9h8.99z",fill:"currentColor"})}),Pane=SatisfactionMenu,Title="Custom Features",Icon=SvgIcMemory24Px,RotaryEncoder=Object.freeze(Object.defineProperty({__proto__:null,Icon,Pane,Title},Symbol.toStringTag,{value:"Module"})),Container$8=styled.div`
  position: absolute;
  left: 15px;
  font-weight: 400;
  top: 10px;
`,Label=styled.label`
  font-size: 20px;
  text-transform: uppercase;
  color: var(--color_label-highlighted);
  margin-right: 6px;
`,LayerButton=styled.button`
  outline: none;
  font-variant-numeric: tabular-nums;
  border: none;
  background: ${e=>e.$selected?"var(--color_accent)":"transparent"};
  color: ${e=>e.$selected?"var(--color_inside-accent)":"var(--color_label-highlighted)"};
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  &:hover {
    border: none;
    background: ${e=>e.$selected?"auto":"var(--bg_menu)"};
    color: ${e=>e.$selected?"auto":"var(--color_label-highlighted)"};
  }
`,LayerControl=()=>{const{t:e}=useTranslation(),o=useDispatch(),n=useAppSelector(getNumberOfLayers),r=useAppSelector(getSelectedLayerIndex),s=reactExports.useMemo(()=>new Array(n).fill(0).map((a,i)=>i).map(a=>jsx(LayerButton,{$selected:a===r,onClick:()=>o(setLayer(a)),children:a},a)),[n,r]);return jsxs(Container$8,{children:[jsx(Label,{children:e("Layer")}),s]})},createRetry=(e,o)=>{const n={retriesLeft:e,timeoutWait:o};return{retry:i=>{n.retriesLeft=n.retriesLeft-1,n.retriesLeft<=0?console.error("Exhausted all retries"):(console.log(`Retrying after waiting ${n.timeoutWait}`),setTimeout(i,n.timeoutWait),n.timeoutWait=n.timeoutWait*2)},clear:()=>{console.log("Clearing retries back to:",e),n.retriesLeft=e,n.timeoutWait=o},retriesLeft:()=>n.retriesLeft>=1}},selectConnectedDeviceRetry=createRetry(8,100),selectConnectedDeviceByPath=e=>async(o,n)=>{await o(reloadConnectedDevices());const r=getConnectedDevices(n())[e];r&&o(selectConnectedDevice(r))},selectConnectedDevice=e=>async o=>{const n=extractDeviceInfo(e);try{o(selectDevice(e)),await o(loadMacros(e)),await o(loadLayoutOptions());const{protocol:r}=e;try{r<11?await o(updateLightingData(e)):r>=11&&(await o(loadFirmwareVersion(e)),await o(updateV3MenuData(e)))}catch{o(logAppError({message:"Loading lighting/menu data failed",deviceInfo:n}))}await o(loadKeymapFromDevice(e)),selectConnectedDeviceRetry.clear()}catch(r){selectConnectedDeviceRetry.retriesLeft()?(o(logAppError({message:"Loading device failed - retrying",deviceInfo:n})),selectConnectedDeviceRetry.retry(()=>{o(selectConnectedDevice(e))})):(o(logAppError({message:"All retries failed for attempting connection with device",deviceInfo:n})),console.log("Hard resetting device store:",r),o(clearAllDevices()))}},reloadConnectedDevices=()=>async(e,o)=>{const n=o(),r=getSelectedDevicePath(n),s=getForceAuthorize(n),a=getSupportedIds(n),i=await getRecognisedDevices(a,s),c=await Promise.all(i.map(C=>new KeyboardAPI(C.path).getProtocolVersion())),l=i.filter((C,K)=>c[K]===-1);l.length&&l.forEach(C=>{const K=extractDeviceInfo(C);e(logAppError({message:"Received invalid protocol version from device",deviceInfo:K}))});const d=i.filter((C,K)=>c[K]!==-1).map((C,K)=>{const{path:h,productId:g,vendorId:y,productName:m}=C,S=c[K];return{path:h,productId:g,vendorId:y,protocol:S,productName:m,hasResolvedDefinition:!1,requiredDefinitionVersion:S>=11?"v3":"v2",vendorProductId:getVendorProductId(C.vendorId,C.productId)}});await e(reloadDefinitions(d));const u=getDefinitions(o()),_=d.filter((C,K)=>isAuthorizedDeviceConnected(C,u)).reduce((C,K,h)=>(C[K.path]={...K,hasResolvedDefinition:!0},C),{});d.filter(C=>!isAuthorizedDeviceConnected(C,u)).forEach(tryForgetDevice);const p=Object.entries(_);if(p.forEach(([C,K])=>{console.info("Setting connected device:",K.protocol,C,K)}),e(updateConnectedDevices(_)),(!r||!_[r])&&p.length>0){const C=p[0][1];e(selectConnectedDevice(C))}else p.length===0&&(e(selectDevice(null)),e(setForceAuthorize(!0)))},loadSupportedIds=()=>async e=>{await syncStore(),e(updateSupportedIds(getSupportedIdsFromStore())),await e(updateDefinitions(getDefinitionsFromStore())),e(loadStoredCustomDefinitions()),e(reloadConnectedDevices())},isElectron=/Electron/.test(navigator.userAgent),Container$7=styled.div`
  position: absolute;
  right: 15px;
  top: 0px;
  font-size: 18px;
  pointer-events: none;
  font-weight: 400;
`,KeyboardTitle=styled.label`
  pointer-events: all;
  display: inline-block;
  background: var(--color_accent);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  font-size: 18px;
  text-transform: uppercase;
  color: var(--color_inside-accent);
  padding: 1px 10px;
  margin-right: 10px;
  border: solid 1px var(--bg_control);
  border-top: none;
  cursor: pointer;
  transition: all 0.1s ease-out;
  &:hover {
    filter: brightness(0.7);
  }
`,KeyboardList=styled.ul`
  padding: 0;
  border: 1px solid var(--bg_control);
  width: 160px;
  border-radius: 6px;
  background-color: var(--bg_menu);
  margin: 0;
  margin-top: 5px;
  right: 10px;
  position: absolute;
  pointer-events: ${e=>e.$show?"all":"none"};
  transition: all 0.2s ease-out;
  z-index: 11;
  opacity: ${e=>e.$show?1:0};
  overflow: hidden;
  transform: ${e=>e.$show?0:"translateY(-5px)"};
`,KeyboardButton=styled.button`
  display: block;
  text-align: center;
  outline: none;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  border: none;
  background: ${e=>e.$selected?"var(--bg_icon-highlighted)":"transparent"};
  color: ${e=>e.$selected?"var(--color_icon_highlighted)":"var(--color_label-highlighted)"};
  cursor: pointer;
  text-align: left;
  font-size: 14px;
  text-transform: uppercase;
  padding: 5px 10px;
  &:hover {
    border: none;
    background: ${e=>e.$selected?"var(--bg_icon-highlighted)":"var(--bg_control)"};
    color: ${e=>e.$selected?"var(--color_control-highlighted)":"var(--color_label-highlighted)"};
  }
`,ClickCover$1=styled.div`
  position: fixed;
  z-index: 10;
  pointer-events: all;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.4;
  background: rgba(0, 0, 0, 0.75);
`,KeyboardSelectors=e=>{const{t:o}=useTranslation(),n=async()=>{const r=await HID.requestDevice();r&&e.selectKeyboard(r.__path)};return jsxs(Fragment,{children:[e.show&&jsx(ClickCover$1,{onClick:e.onClickOut}),jsxs(KeyboardList,{$show:e.show,children:[e.keyboards.map(([r,s])=>jsx(KeyboardButton,{$selected:r===e.selectedPath,onClick:()=>e.selectKeyboard(r),children:s.name},r)),!isElectron&&jsxs(KeyboardButton,{onClick:n,children:[o("Authorize New"),jsx(FontAwesomeIcon,{icon:faPlus,style:{marginLeft:"10px"}})]})]})]})},Badge=()=>{const e=useAppDispatch(),o=useAppSelector(getDefinitions),n=useAppSelector(getSelectedDefinition),r=useAppSelector(getConnectedDevices),s=useAppSelector(getSelectedDevicePath),[a,i]=reactExports.useState(!1),c=reactExports.useMemo(()=>Object.entries(r).map(([l,d])=>[l,o[d.vendorProductId]&&o[d.vendorProductId][d.requiredDefinitionVersion]]).filter(l=>l[1]),[r,o]);return!n||!s?null:jsx(Fragment,{children:jsxs(Container$7,{children:[jsxs(KeyboardTitle,{onClick:()=>i(!a),children:[n.name,jsx(FontAwesomeIcon,{icon:faAngleDown,style:{transform:a?"rotate(180deg)":"",transition:"transform 0.2s ease-out",marginLeft:"5px"}})]}),jsx(KeyboardSelectors,{show:a,selectedPath:s,keyboards:c,onClickOut:()=>i(!1),selectKeyboard:l=>{e(selectConnectedDeviceByPath(l)),i(!1)}})]})})},MenuContainer=styled.div`
  padding: 15px 10px 20px 10px;
`;[...makeCustomMenus([])];function getCustomPanes(e){return e.find(o=>o===dist.CustomFeaturesV2.RotaryEncoder)?[RotaryEncoder]:[]}const getRowsForKeyboard=()=>{const e=useAppSelector(getIsMacroFeatureSupported),o=useAppSelector(getV3MenuComponents),n=useAppSelector(getSelectedDefinition),r=useAppSelector(getNumberOfLayers);return n?dist.isVIADefinitionV2(n)?getRowsForKeyboardV2(n,e,r):dist.isVIADefinitionV3(n)?[...filterInferredRows(n,e,r,[Keycode$1,Layouts$1,Macros,SaveLoad]),...o]:[]:[]},filterInferredRows=(e,o,n,r)=>{const{layouts:s}=e;let a=[];return s.optionKeys&&Object.entries(s.optionKeys).length!==0||(a=[...a,Layouts$1]),n===0&&(a=[...a,Keycode$1,SaveLoad]),o||(a=[...a,Macros]),r.filter(c=>!a.includes(c))},getRowsForKeyboardV2=(e,o,n)=>{let r=[Keycode$1,Layouts$1,Macros,SaveLoad];if(dist.isVIADefinitionV2(e)){const{lighting:s,customFeatures:a}=e,{supportedLightingValues:i}=dist.getLightingDefinition(s);i.length!==0&&(r=[...r,Lighting]),a&&(r=[...r,...getCustomPanes(a)])}return filterInferredRows(e,o,n,r)},Loader=e=>{const{t:o}=useTranslation(),{loadProgress:n,selectedDefinition:r}=e,s=useAppDispatch(),a=useAppSelector(getSelectedTheme),i=useAppSelector(getConnectedDevices),c=useAppSelector(getSupportedIds),l=!Object.values(c).length,d=!Object.values(i).length,[u,_]=reactExports.useState(!1);return reactExports.useEffect(()=>{const p=setTimeout(()=>{r||_(!0)},3e3);return()=>clearTimeout(p)},[r]),jsxs(LoaderPane,{children:[jsx(ChippyLoader,{theme:a,progress:n||null}),(u||d)&&!l&&!isElectron?jsxs(AccentButtonLarge,{onClick:()=>s(reloadConnectedDevices()),children:[o("Authorize device"),jsx(FontAwesomeIcon,{style:{marginLeft:"10px"},icon:faPlus})]}):jsx(LoadingText$1,{isSearching:!r})]})},LoaderPane=styled(CenterPane)`
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 50px;
  position: absolute;
  bottom: 50px;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 4;
`,ConfigurePane=()=>{const e=useAppSelector(getSelectedDefinition),o=useAppSelector(getLoadProgress),n=useAppSelector(getRenderMode);return!e||o!==1?n==="2D"?jsx(Loader,{selectedDefinition:e||null,loadProgress:o}):null:jsx(ConfigureBasePane,{children:jsx(ConfigureGrid,{})})},ConfigureGrid=()=>{var c,l;const{t:e}=useTranslation(),o=useDispatch(),[n,r]=reactExports.useState(0),s=getRowsForKeyboard(),a=(c=s[n])==null?void 0:c.Pane,i=(l=s[n])==null?void 0:l.Title;return reactExports.useEffect(()=>{o(setConfigureKeyboardIsSelectable(i==="Keymap"))},[i]),jsxs(Fragment,{children:[jsx(ConfigureFlexCell,{onClick:d=>{d.target.nodeName!=="CANVAS"&&o(clearSelectedKey())},style:{pointerEvents:"none",position:"absolute",top:50,left:0,right:0},children:jsxs("div",{style:{pointerEvents:"all"},children:[jsx(LayerControl,{}),jsx(Badge,{})]})}),jsxs(Grid,{style:{pointerEvents:"none"},children:[jsx(MenuCell,{style:{pointerEvents:"all"},children:jsx(MenuContainer,{children:(s||[]).map(({Icon:d,Title:u},_)=>jsx(Row,{onClick:p=>r(_),$selected:n===_,children:jsxs(IconContainer,{children:[jsx(d,{}),jsx(MenuTooltip,{children:e(u)})]})},_))})}),a&&jsx(a,{})]})]})};function Layouts({definition:e,onLayoutChange:o,RowComponent:n=IndentedControlRow}){const r=useAppSelector(getDesignSelectedOptionKeys),s=useDispatch();if(React.useEffect(()=>{s(updateSelectedOptionKeys([]))},[e]),React.useEffect(()=>{o(r)},[r]),!e.layouts.labels)return null;const a=e.layouts.labels.map((i,c)=>{const l=e.layouts.optionKeys[c];if(Array.isArray(i)){const d=i[0],u=i.slice(1),_=u.map((p,C)=>({label:p,value:l[C]}));return jsxs(n,{children:[jsx(Label$1,{children:d}),jsx(Detail,{children:jsx(AccentSelect,{onChange:p=>{if(p&&p.label){const C=u.indexOf(p.label),K=Array.from(r).map(h=>h||0);K[c]=C,s(updateSelectedOptionKeys(K))}},value:r[c]?_[r[c]]:_[0],options:_})})]},`${c}-${d}`)}return typeof i=="string"?jsxs(n,{children:[jsx(Label$1,{children:i}),jsx(Detail,{children:jsx(AccentSlider,{isChecked:Boolean(r[c]),onChange:d=>{const u=Array.from(r).map(_=>_||0);u[c]=Number(d),s(updateSelectedOptionKeys(u))}})})]},`${c}-${i}`):null});return jsx(Fragment,{children:a})}const Container$6=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;
`,ControlGroup=styled.div`
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  width: 100%;

  max-width: 960px;
  &:last-child {
    padding-bottom: 0;
  }
`,ControlGroupHeader=styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5rem;
`,TestControls=()=>{const[e,o]=reactExports.useState(!0),[n,r]=reactExports.useState(0),[s,a]=reactExports.useState([0,0]),[i,c]=reactExports.useState(0),[l,d]=reactExports.useState(0),{basicKeyToByte:u,byteToKey:_}=useAppSelector(getBasicKeyToByte),p=useAppSelector(getSelected256PaletteColor),C=useDispatch(),K=[{label:"Option 1",value:"0"},{label:"Option 2",value:"1"}];return jsxs(ControlGroup,{children:[jsx(ControlGroupHeader,{children:"Controls"}),jsxs(ControlRow,{children:[jsx(Label$1,{children:"Button"}),jsx(Detail,{children:jsx(AccentButton,{children:"Click"})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:"Disabled Button"}),jsx(Detail,{children:jsx(AccentButton,{disabled:!0,children:"Disabled"})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:"Text Input"}),jsx(Detail,{children:jsx(TextInput,{})})]}),jsxs(ControlRow,{children:[jsxs(Label$1,{children:[l," / ",anyKeycodeToString(l,u,_)]}),jsx(Detail,{children:jsx(PelpiKeycodeInput,{value:l,setValue:d,meta:{}})})]}),jsxs(ControlRow,{children:[jsxs(Label$1,{children:[s[0],", ",s[1]]}),jsx(Detail,{children:jsx(ArrayColorPicker,{color:s,setColor:(h,g)=>a([h,g])})})]}),jsxs(ControlRow,{children:[jsxs(Label$1,{children:[p[0],", ",p[1]]}),jsx(Detail,{children:jsx(ColorPalettePicker,{color:p,setColor:(h,g)=>C(setSelectedPaletteColor([h,g]))})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:n}),jsx(Detail,{children:jsx(AccentRange,{max:100,min:0,defaultValue:n,onChange:r})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:+e}),jsx(Detail,{children:jsx(AccentSlider,{isChecked:e,onChange:o})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:+i}),jsx(Detail,{children:jsx(AccentSelect,{value:K[i],options:K,onChange:h=>{h&&c(+h.value)}})})]}),jsx(MacroRecorder,{selectedMacro:[[RawKeycodeSequenceAction.Delay,4]],setUnsavedMacro:h=>h,undoMacro:()=>null,saveMacro:()=>null,isDelaySupported:!0}),jsx(MacroRecorder,{setUnsavedMacro:h=>h,undoMacro:()=>null,saveMacro:()=>null,isDelaySupported:!0})]})},Debug=()=>{const e=useAppSelector(getSelectedKeyboardAPI),o=useAppSelector(getConnectedDevices),n=Object.entries(useAppSelector(getDefinitions)).flatMap(([h,g])=>[[h,g.v2],[h,g.v3]]).filter(([h,g])=>g!==void 0),r=Object.entries(useAppSelector(getBaseDefinitions)).flatMap(([h,g])=>[[h,g.v2],[h,g.v3]]).filter(([h,g])=>g!==void 0),s=Object.entries(useAppSelector(getCustomDefinitions)).flatMap(([h,g])=>[[h,g.v2],[h,g.v3]]).filter(([h,g])=>g!==void 0),[a,i]=reactExports.useState(0),[c,l]=reactExports.useState([]),[d,u]=reactExports.useState(0),[_,p]=reactExports.useState(!1),C=n.map(([,h],g)=>({label:h.name,value:`${g}`})),K=n[a];return jsx(Pane$9,{children:jsx(OverflowCell,{children:jsxs(Container$6,{children:[jsxs(ControlGroup,{children:[jsx(ControlGroupHeader,{children:"Key Testing"}),jsxs(ControlRow,{children:[jsx(Label$1,{children:"Show Matrix"}),jsx(Detail,{children:jsx(AccentSlider,{isChecked:_,onChange:h=>p(h)})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:"Set next key"}),jsx(Detail,{children:jsx(AccentButton,{onClick:()=>{const{keys:h,optionKeys:g}=K[1].layouts,y=g?Object.entries(g).flatMap(([S,x])=>x[0]):[],m=[...h,...y];d!==void 0&&u(getNextKey(d,m)||0)},children:"Next"})})]})]}),C&&jsxs(ControlGroup,{children:[jsx(ControlGroupHeader,{children:"Layout Testing"}),jsxs(ControlRow,{children:[jsx(Label$1,{children:"Dummy Keyboard"}),jsx(Detail,{children:jsx(AccentSelect,{onChange:h=>h&&i(+h.value),defaultValue:C[0],options:C})})]})]}),K&&jsx(Layouts,{definition:K[1],onLayoutChange:h=>{l(h)}}),e&&jsxs(ControlGroup,{children:[jsx(ControlGroupHeader,{children:"Connected Device Debugging"}),jsxs(ControlRow,{children:[jsx(Label$1,{children:"EEPROM Reset"}),jsx(Detail,{children:jsx(AccentButton,{onClick:()=>e.resetEEPROM(),children:"Reset"})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:"Bootloader Jump"}),jsx(Detail,{children:jsx(AccentButton,{onClick:()=>e.jumpToBootloader(),children:"Jump"})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:"Clear all macros"}),jsx(Detail,{children:jsx(AccentButton,{onClick:()=>e.resetMacros(),children:"Clear"})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:"Benchmark Switch State Query Speed"}),jsx(Detail,{children:jsx(AccentButton,{onClick:async()=>{const h=performance.now();await Array(1e3).fill(0).map(g=>e.getKeyboardValue(KeyboardValue.SWITCH_MATRIX_STATE,[],20)),console.info("1000 commands in ",performance.now()-h,"ms")},children:"Benchmark"})})]})]}),jsxs(ControlGroup,{children:[jsx(ControlGroupHeader,{children:"Device IDs"}),jsxs(ControlRow,{children:[jsx(Label$1,{children:"Connected Devices"}),jsxs(Detail,{children:[Object.values(o).length," Devices"]})]}),Object.values(o).map(h=>{const g=n.find(([y])=>y===h.vendorProductId.toString());return g?jsxs(IndentedControlRow,{children:[jsx(SubLabel,{children:g[1].name}),jsxs(Detail,{children:["0x",h.vendorProductId.toString(16).toUpperCase()]})]},h.path):null}),jsxs(ControlRow,{children:[jsx(Label$1,{children:"Local definitions"}),jsxs(Detail,{children:[Object.values(s).length," Definitions"]})]}),Object.values(s).map(([h,g],y)=>jsxs(IndentedControlRow,{children:[jsx(SubLabel,{children:g.name}),jsxs(Detail,{children:["0x",parseInt(h).toString(16).toUpperCase()]})]},y)),jsx(ControlRow,{children:jsxs("details",{children:[jsxs("summary",{children:[jsx(Label$1,{children:"Remote definitions"}),jsxs(Detail,{children:[Object.values(r).length," Definitions"]})]}),Object.values(r).map(([h,g],y)=>jsxs(IndentedControlRow,{children:[jsx(SubLabel,{children:g.name}),jsxs(Detail,{children:["0x",parseInt(h).toString(16).toUpperCase()]})]},y))]})})]}),jsx(TestControls,{})]})})})},MessageDialogContainer=styled.dialog`
  padding: 0;
  border-width: 0;

  background: transparent;
  &::backdrop {
    background: rgba(0, 0, 0, 0.75);
  }

  & > div {
    transition: transform 0.2s ease-out;
    transform: translateY(-20px);
  }

  &[open] > div {
    transform: translateY(0px);
  }
`,Controls=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,MessageDialog=e=>{const o=reactExports.useRef(null),n=reactExports.useCallback(()=>{o.current&&o.current.close(),e.onClose&&e.onClose()},[o.current,e.onClose]);return reactExports.useEffect(()=>(o.current&&(e.isOpen?o.current.showModal():o.current.close()),()=>{n()}),[e.isOpen]),jsx(MessageDialogContainer,{ref:o,children:jsxs(ModalContainer,{children:[jsx(PromptText,{children:e.children}),jsx(Controls,{children:jsx(AccentButton,{onClick:n,children:"Confirm"})})]})})};let designWarningSeen=Number(localStorage.getItem("designWarningSeen")||0),hideDesignWarning=sessionStorage.getItem("hideDesignWarning")||designWarningSeen>4;const DesignErrorMessage=styled(ErrorMessage)`
  margin: 0;
  font-style: italic;
`,Container$5=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;
`,DesignPane=styled(Pane$9)`
  display: grid;
  max-width: 100vw;
  grid-template-columns: 100vw;
  grid-template-rows: min-content;
`,UploadIcon=styled.div`
  height: 200px;
  width: 50%;
  cursor: pointer;
  max-width: 560px;
  border-radius: 6px;
  margin: 50px 10px;
  animation-duration: 1.5s;
  animation-name: border-glow;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: transparent;
    stroke-width: 8px;
    animation-duration: 1.5s;
    animation-name: text-glow;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    font-size: 100px;
  }
`,makeReaderPromise=e=>new Promise((o,n)=>{const r=new FileReader;r.onload=()=>{if(!r.result)return n();o([e.name,r.result.toString()])},r.onerror=n,r.onabort=n,r.readAsBinaryString(e)}),isVIADefinition=e=>dist.isVIADefinitionV2(e)||dist.isVIADefinitionV3(e);function importDefinitions(e,o,n,r){Promise.all(e.map(makeReaderPromise)).then(s=>{let a=[];r([]);const i=s.map(([c,l])=>{if(a.length>0)return null;try{const d=JSON.parse(l.toString());if(o==="v2"?dist.isKeyboardDefinitionV2(d)||dist.isVIADefinitionV2(d):dist.isKeyboardDefinitionV3(d)||dist.isVIADefinitionV3(d))return o==="v2"?dist.isVIADefinitionV2(d)?d:dist.keyboardDefinitionV2ToVIADefinitionV2(d):dist.isVIADefinitionV3(d)?d:dist.keyboardDefinitionV3ToVIADefinitionV3(d);a=(o==="v2"?dist.isKeyboardDefinitionV2.errors||dist.isVIADefinitionV2.errors||[]:dist.isKeyboardDefinitionV3.errors||dist.isVIADefinitionV3.errors||[]).map(_=>`${c} ${_.dataPath?_.dataPath+": ":"Object: "}${_.message}`)}catch(d){d.name?a.push(`${d.name}: ${d.message}`):a.push(`${d}`)}}).filter(isVIADefinition);a.length?r(a):(n(loadCustomDefinitions({definitions:i,version:o})),n(storeCustomDefinitions({definitions:i,version:o})),n(ensureSupportedIds({productIds:i.map(c=>c.vendorProductId),version:o})),n(selectDevice(null)),n(reloadConnectedDevices()))})}function onDrop(e,o,n,r){e.preventDefault();const{dataTransfer:s}=e;if(s!=null&&s.items){const a=Array.from(s.items).filter(i=>i.kind==="file"&&i.type==="application/json").map(i=>i.getAsFile()).filter(i=>i!==null);a.length&&importDefinitions(a,o,n,r)}}const DesignTab=()=>{const{t:e}=useTranslation(),o=useDispatch(),n=Object.values(useAppSelector(getCustomDefinitions)),r=useAppSelector(getDesignDefinitionVersion),s=useAppSelector(getSelectedDefinitionIndex),a=useAppSelector(getShowMatrix),[i,c]=reactExports.useState([]),l=reactExports.useMemo(()=>n.filter(C=>C[r]),[n,r]),d=l.map((C,K)=>({label:C[r].name,value:K.toString()})),u=reactExports.useRef(null),_=l[s]&&l[s][r],p=reactExports.useRef();return jsxs(DesignPane,{onDragOver:C=>{C.dataTransfer.effectAllowed="copyMove",C.dataTransfer.dropEffect="none",C.preventDefault(),C.stopPropagation()},children:[jsx(MessageDialog,{isOpen:!hideDesignWarning,onClose:()=>{sessionStorage.setItem("hideDesignWarning","1"),hideDesignWarning="1",designWarningSeen=designWarningSeen+1,localStorage.setItem("designWarningSeen",`${designWarningSeen}`)},children:"This feature is intended for development purposes. If your keyboard is not recognized automatically by VIA, please contact your keyboard's manufacturer or vendor."}),jsx(SinglePaneFlexCell,{ref:u,children:!_&&jsx(UploadIcon,{onClick:()=>{p.current&&p.current.click()},onDrop:C=>onDrop(C,r,o,c),onDragOver:C=>{C.dataTransfer.effectAllowed="copyMove",C.dataTransfer.dropEffect="copy",C.preventDefault(),C.stopPropagation()},children:jsx(FontAwesomeIcon,{icon:faUpload})})}),jsxs(Grid,{style:{overflow:"hidden"},children:[jsx(MenuCell,{style:{pointerEvents:"all"},children:jsx(MenuContainer$5,{children:jsx(Row,{$selected:!0,children:jsxs(IconContainer,{children:[jsx(FontAwesomeIcon,{icon:faBook}),jsx(MenuTooltip,{children:e("Add Definition")})]})})})}),jsx(SpanOverflowCell,{children:jsxs(Container$5,{children:[jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Load Draft Definition")}),jsx(Detail,{children:jsx(AccentUploadButton,{multiple:!0,inputRef:p,onLoad:C=>{importDefinitions(Array.from(C),r,o,c)},children:e("Load")})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Use V2 definitions (deprecated)")}),jsx(Detail,{children:jsx(AccentSlider,{isChecked:r==="v2",onChange:C=>o(updateDesignDefinitionVersion(C?"v2":"v3"))})})]}),_&&jsx(Fragment,{children:jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Shown Keyboard Definition")}),jsx(Detail,{children:jsx(AccentSelect,{onChange:C=>{o(updateSelectedOptionKeys([])),C&&o(updateSelectedDefinitionIndex(+C.value))},value:d[s],options:d})})]})}),_&&jsx(Layouts,{definition:_,onLayoutChange:C=>{o(updateSelectedOptionKeys(C))}}),_&&jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Show Matrix")}),jsx(Detail,{children:jsx(AccentSlider,{isChecked:a,onChange:C=>{o(updateShowMatrix(C))}})})]}),i.map(C=>jsx(IndentedControlRow,{children:jsx(DesignErrorMessage,{children:C})})),jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Draft Definitions")}),jsxs(Detail,{children:[Object.values(l).length," ",e("Definitions")]})]}),l.map(C=>jsxs(IndentedControlRow,{children:[jsx(SubLabel,{children:C[r].name}),jsxs(Detail,{children:[formatNumberAsHex(C[r].vendorProductId,8),jsx(IconButtonUnfilledContainer,{onClick:()=>{o(unloadCustomDefinition({id:C[r].vendorProductId,version:r}))},style:{marginLeft:10,borderRadius:4},children:jsx(FontAwesomeIcon,{icon:faXmark,size:"lg"})})]})]},`${r}-${C[r].vendorProductId}`))]})})]})]})},Container$4=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;
`,DiagnosticContainer=styled(Container$4)`
  margin-top: 20px;
  padding-top: 20px;
`,SettingsErrorMessage=styled(ErrorMessage)`
  margin: 0;
  font-style: italic;
`,Settings=()=>{const{t:e}=useTranslation(),o=useDispatch(),n=useAppSelector(getShowDesignTab),r=useAppSelector(getDisableFastRemap),s=useAppSelector(getShowSliderValuesMode),a=useAppSelector(getThemeMode),i=useAppSelector(getThemeName),c=useAppSelector(getRenderMode),l=useAppSelector(getSelectedConnectedDevice),[d,u]=reactExports.useState(!1),_=Object.keys(THEMES).map(y=>({label:y.replaceAll("_"," "),value:y})),p=_.find(y=>y.value===i),C=webGLIsAvailable?[{label:e("Slider Only"),value:"Slider Only"},{label:e("Slider & Show Value"),value:"Slider & Show Value"},{label:e("Slider & Input Field"),value:"Slider & Input Field"}]:[{label:e("Slider Only"),value:"Slider Only"}],K=C.find(y=>y.value===s),h=webGLIsAvailable?[{label:"2D",value:"2D"},{label:"3D",value:"3D"}]:[{label:"2D",value:"2D"}],g=h.find(y=>y.value===c);return jsx(Pane$9,{children:jsxs(Grid,{style:{overflow:"hidden"},children:[jsx(MenuCell,{style:{pointerEvents:"all",borderTop:"none"},children:jsx(MenuContainer$5,{children:jsx(Row,{$selected:!0,children:jsxs(IconContainer,{children:[jsx(FontAwesomeIcon,{icon:faToolbox}),jsx(MenuTooltip,{children:e("General")})]})})})}),jsxs(SpanOverflowCell,{style:{flex:1,borderWidth:0},children:[jsxs(Container$4,{children:[jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Show Design tab")}),jsx(Detail,{children:jsx(AccentSlider,{onChange:()=>o(toggleCreatorMode()),isChecked:n})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Fast Key Mapping")}),jsx(Detail,{children:jsx(AccentSlider,{onChange:()=>o(toggleFastRemap()),isChecked:!r})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Slider Mode")}),jsx(Detail,{children:jsx(AccentSelect,{defaultValue:K,options:C,onChange:y=>{y&&o(updateShowSliderValuesMode(y.value))}})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Light Mode")}),jsx(Detail,{children:jsx(AccentSlider,{onChange:()=>o(toggleThemeMode()),isChecked:a==="light"})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Keycap Theme")}),jsx(Detail,{children:jsx(AccentSelect,{defaultValue:p,options:_,onChange:y=>{y&&o(updateThemeName(y.value))}})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Render Mode")}),jsx(Detail,{children:jsx(AccentSelect,{defaultValue:g,options:h,onChange:y=>{y&&o(updateRenderMode(y.value))}})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Show Diagnostic Information")}),jsx(Detail,{children:l?jsx(AccentSlider,{onChange:()=>u(!d),isChecked:d}):jsx(SettingsErrorMessage,{children:e("Requires connected device")})})]})]}),d&&l?jsx(DiagnosticContainer,{children:jsxs(ControlRow,{children:[jsx(Label$1,{children:e("VIA Firmware Protocol")}),jsx(Detail,{children:l.protocol})]})}):null]})]})})},name="Tester",lighting="none",layouts={width:22.5,height:6.25,optionKeys:{},keys:[{row:0,col:0,x:0,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"accent"},{row:0,col:1,x:2,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:2,x:3,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:3,x:4,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:4,x:5,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:5,x:6.5,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:6,x:7.5,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:7,x:8.5,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:8,x:9.5,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:9,x:11,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:10,x:12,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:11,x:13,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:12,x:14,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:13,x:15.25,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:14,x:16.25,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:15,x:17.25,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:16,x:18.5,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:17,x:19.5,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:18,x:20.5,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:19,x:21.5,y:0,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:20,x:0,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:21,x:1,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:22,x:2,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:23,x:3,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:24,x:4,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:25,x:5,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:26,x:6,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:27,x:7,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:28,x:8,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:29,x:9,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:30,x:10,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:31,x:11,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:32,x:12,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:33,x:13,y:1.25,r:0,rx:0,ry:0,h:1,w:2,color:"mod"},{row:0,col:34,x:15.25,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:35,x:16.25,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:36,x:17.25,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:37,x:18.5,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:38,x:19.5,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:39,x:20.5,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:40,x:21.5,y:1.25,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:41,x:0,y:2.25,r:0,rx:0,ry:0,h:1,w:1.5,color:"mod"},{row:0,col:42,x:1.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:43,x:2.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:44,x:3.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:45,x:4.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:46,x:5.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:47,x:6.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:48,x:7.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:49,x:8.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:50,x:9.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:51,x:10.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:52,x:11.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:53,x:12.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:54,x:13.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1.5,color:"alpha"},{row:0,col:55,x:15.25,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:56,x:16.25,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:57,x:17.25,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:58,x:18.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:59,x:19.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:60,x:20.5,y:2.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:61,x:21.5,y:2.25,r:0,rx:0,ry:0,h:2,w:1,color:"mod"},{row:0,col:62,x:0,y:3.25,r:0,rx:0,ry:0,h:1,w:1.75,color:"mod"},{row:0,col:63,x:1.75,y:3.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:64,x:2.75,y:3.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:65,x:3.75,y:3.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:66,x:4.75,y:3.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:67,x:5.75,y:3.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:68,x:6.75,y:3.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:69,x:7.75,y:3.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:70,x:8.75,y:3.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:71,x:9.75,y:3.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:72,x:10.75,y:3.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:73,x:11.75,y:3.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:74,x:12.75,y:3.25,r:0,rx:0,ry:0,h:1,w:2.25,color:"accent"},{row:0,col:75,x:18.5,y:3.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:76,x:19.5,y:3.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:77,x:20.5,y:3.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:78,x:0,y:4.25,r:0,rx:0,ry:0,h:1,w:2.25,color:"mod"},{row:0,col:79,x:2.25,y:4.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:80,x:3.25,y:4.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:81,x:4.25,y:4.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:82,x:5.25,y:4.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:83,x:6.25,y:4.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:84,x:7.25,y:4.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:85,x:8.25,y:4.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:86,x:9.25,y:4.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:87,x:10.25,y:4.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:88,x:11.25,y:4.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:89,x:12.25,y:4.25,r:0,rx:0,ry:0,h:1,w:2.75,color:"mod"},{row:0,col:90,x:16.25,y:4.25,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:91,x:18.5,y:4.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:92,x:19.5,y:4.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:93,x:20.5,y:4.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"},{row:0,col:94,x:21.5,y:4.25,r:0,rx:0,ry:0,h:2,w:1,color:"accent"},{row:0,col:95,x:0,y:5.25,r:0,rx:0,ry:0,h:1,w:1.25,color:"mod"},{row:0,col:96,x:1.25,y:5.25,r:0,rx:0,ry:0,h:1,w:1.25,color:"mod"},{row:0,col:97,x:2.5,y:5.25,r:0,rx:0,ry:0,h:1,w:1.25,color:"mod"},{row:0,col:98,x:3.75,y:5.25,r:0,rx:0,ry:0,h:1,w:6.25,color:"alpha"},{row:0,col:99,x:10,y:5.25,r:0,rx:0,ry:0,h:1,w:1.25,color:"mod"},{row:0,col:100,x:11.25,y:5.25,r:0,rx:0,ry:0,h:1,w:1.25,color:"mod"},{row:0,col:101,x:12.5,y:5.25,r:0,rx:0,ry:0,h:1,w:1.25,color:"mod"},{row:0,col:102,x:13.75,y:5.25,r:0,rx:0,ry:0,h:1,w:1.25,color:"mod"},{row:0,col:103,x:15.25,y:5.25,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:104,x:16.25,y:5.25,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:105,x:17.25,y:5.25,r:0,rx:0,ry:0,h:1,w:1,color:"mod"},{row:0,col:106,x:18.5,y:5.25,r:0,rx:0,ry:0,h:1,w:2,color:"alpha"},{row:0,col:107,x:20.5,y:5.25,r:0,rx:0,ry:0,h:1,w:1,color:"alpha"}]},matrix={rows:1,cols:108},vendorProductId=0,fullKeyboardDefinition={name,lighting,layouts,matrix,vendorProductId},Container$3=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;
`,TestPane=styled(Pane$9)`
  display: flex;
  height: 100%;
  max-width: 100vw;
  flex-direction: column;
`,TestContext=React.createContext([{clearTestKeys:()=>{}},(...e)=>{}]),Test$1=()=>{const{t:e}=useTranslation(),o=useDispatch(),n=useAppSelector(getSelectedConnectedDevice),r=useAppSelector(getSelectedDefinition),s=useAppSelector(getSelectedKeyDefinitions),a=useAppSelector(getIsTestMatrixEnabled),i=useAppSelector(getTestKeyboardSoundsSettings),[c]=reactExports.useContext(TestContext),{progress:l}=useProgress(),u=n&&r&&s&&PROTOCOL_GAMMA<=n.protocol,_=a?r:fullKeyboardDefinition;if(!_||typeof _=="string")return null;const p=[{label:"Sine",value:"sine"},{label:"Triangle",value:"triangle"},{label:"Sawtooth",value:"sawtooth"},{label:"Square",value:"square"}],C=p.find(g=>g.value===i.waveform),K=[{label:"Wicki-Hayden",value:TestKeyboardSoundsMode.WickiHayden},{label:"Chromatic",value:TestKeyboardSoundsMode.Chromatic},{label:"Random",value:TestKeyboardSoundsMode.Random}],h=K.find(g=>g.value===i.mode);return l!==100?null:jsx(TestPane,{children:jsxs(Grid,{children:[jsx(MenuCell,{style:{pointerEvents:"all"},children:jsx(MenuContainer$5,{children:jsx(Row,{$selected:!0,children:jsxs(IconContainer,{children:[jsx(FontAwesomeIcon,{icon:faCircleQuestion}),jsx(MenuTooltip,{children:e("Check Key")})]})})})}),jsx(SpanOverflowCell,{children:jsxs(Container$3,{children:[jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Reset Keyboard")}),jsx(Detail,{children:jsx(AccentButton,{onClick:c.clearTestKeys,children:e("Reset")})})]}),u&&r?jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Test Matrix")}),jsx(Detail,{children:jsx(AccentSlider,{isChecked:a,onChange:g=>{o(setTestMatrixEnabled(g)),c.clearTestKeys()}})})]}):null,jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Key Sounds")}),jsx(Detail,{children:jsx(AccentSlider,{isChecked:i.isEnabled,onChange:g=>{o(setTestKeyboardSoundsSettings({isEnabled:g}))}})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Volume")}),jsx(Detail,{children:jsx(AccentRange,{max:100,min:0,defaultValue:i.volume,onChange:g=>{o(setTestKeyboardSoundsSettings({volume:g}))}})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Transpose")}),jsx(Detail,{children:jsx(AccentRange,{max:24,min:-24,defaultValue:i.transpose,onChange:g=>{o(setTestKeyboardSoundsSettings({transpose:g}))}})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Waveform")}),jsx(Detail,{children:jsx(AccentSelect,{isSearchable:!1,value:C,options:p,onChange:g=>{g&&o(setTestKeyboardSoundsSettings({waveform:g.value}))}})})]}),jsxs(ControlRow,{children:[jsx(Label$1,{children:e("Mode")}),jsx(Detail,{children:jsx(AccentSelect,{isSearchable:!1,defaultValue:h,options:K,onChange:g=>{g&&o(setTestKeyboardSoundsSettings({mode:g.value}))}})})]})]})})]})})},Container$2=styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  user-select: text;
  border-top: 1px solid var(--color_accent);
  &:last-of-type {
    border-bottom: 1px solid var(--color_accent);
  }
`,printId=e=>formatNumberAsHex(e,4),ErrorListContainer=e=>{const{t:o}=useTranslation(),{clear:n,save:r,hasErrors:s}=e;return jsxs(Fragment,{children:[jsxs(IconButtonGroupContainer,{style:{margin:"10px 15px"},children:[jsxs(IconButtonContainer,{onClick:n,disabled:!s,children:[jsx(FontAwesomeIcon,{size:"sm",color:"var(--color_label)",icon:faCancel}),jsx(IconButtonTooltip,{children:o("Clear")})]}),jsxs(IconButtonContainer,{onClick:r,disabled:!s,children:[jsx(FontAwesomeIcon,{size:"sm",color:"var(--color_label)",icon:faDownload}),jsx(IconButtonTooltip,{children:o("Download")})]})]}),e.children]})},AppErrors=({})=>{const e=useAppSelector(getAppErrors),o=useDispatch();return jsx(ErrorListContainer,{clear:()=>o(clearAppErrors()),save:()=>saveAppErrors(e),hasErrors:!!e.length,children:e.map(({timestamp:n,deviceInfo:{productId:r,productName:s,vendorId:a},message:i})=>jsxs(Container$2,{children:[n,jsx("ul",{children:i==null?void 0:i.split(`
`).map(c=>jsx("li",{children:c}))}),jsxs("ul",{children:[jsxs("li",{children:["Device: ",s]}),jsxs("li",{children:["Vid: ",printId(a)]}),jsxs("li",{children:["Pid: ",printId(r)]})]})]},n))})};async function saveErrors(e,o,n,r){try{const s=await window.showSaveFilePicker({suggestedName:`${n}.csv`}),a=[o.join(", ")],i=e.map(r),c=a.concat(...i).join(`
`),l=new Blob([c],{type:"text/csv"}),d=await s.createWritable();await d.write(l),await d.close()}catch{console.log("User cancelled save errors request")}}const saveAppErrors=async e=>saveErrors(e,["timestamp","productName","vendorId","productId","message"],"VIA-app-errors",({timestamp:o,deviceInfo:{productName:n,vendorId:r,productId:s},message:a})=>`${o}, ${n}, ${printId(r)}, ${printId(s)}, "${a}"`),IconButtonGroupContainer=styled.div`
  border-radius: 2px;
  border: 1px solid var(--border_color_icon);
  display: inline-flex;
  > button:last-child {
    border: none;
  }
`,ErrorPanes=[[1,AppErrors,faComputer,"App"]],Errors=()=>{const[e,o]=reactExports.useState(0),n=(ErrorPanes.find(([r])=>e===r)||ErrorPanes[0])[1];return jsx(Pane$9,{children:jsxs(Grid,{style:{overflow:"hidden"},children:[jsx(MenuCell,{style:{pointerEvents:"all",borderTop:"none"},children:jsx(MenuContainer$5,{children:ErrorPanes.map(([r,s,a,i])=>jsx(Row,{$selected:e===r,onClick:()=>{o(r)},children:jsxs(IconContainer,{children:[jsx(FontAwesomeIcon,{icon:a}),jsx(MenuTooltip,{children:i})]})},r))})}),jsx(SpanOverflowCell,{style:{flex:1,borderWidth:0},children:jsx(n,{})})]})})},ErrorLink=()=>{const e=useAppSelector(getAppErrors),[o]=useLocation(),n=o==="/errors";return e.length?jsx(Link$1,{to:"/errors",children:jsxs(CategoryIconContainer,{$selected:n,children:[jsx(FontAwesomeIcon,{size:"xl",icon:ErrorsPaneConfig.icon,color:n?"inherit":"gold"}),jsxs(CategoryMenuTooltip,{children:[e.length," error",e.length>1?"s":""]})]})}):null},ErrorsPaneConfig={component:Errors,path:"/errors",icon:faWarning,key:"errors",title:"Errors"},PANES=[{key:"default",component:ConfigurePane,icon:faKeyboard,title:"Configure",path:"/"},{key:"test",component:Test$1,icon:faStethoscope,path:"/test",title:"Key Tester"},{key:"design",component:DesignTab,icon:faBrush,path:"/design",title:"Design"},{key:"settings",component:Settings,icon:faGear,path:"/settings",title:"Settings"},{key:"debug",icon:faBug,component:Debug,path:"/debug",title:"Debug"},ErrorsPaneConfig],VIALogo=e=>jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 525.74 268.41",...e,children:[jsx("defs",{children:jsx("style",{children:".cls-1{fill:currentColor}"})}),jsx("g",{id:"Layer_2","data-name":"Layer 2",children:jsx("g",{id:"Layer_2-2","data-name":"Layer 2",children:jsx("path",{className:"cls-1",d:"M524.6 237.33 459.25 37.88C451.73 14.93 432.81.12 411 .12h-.13c-21.87.06-40.79 15-48.21 38.11l-64 199.23a22.93 22.93 0 0 0 43.66 14l18.74-58.35h100.81l19.13 58.5a22.93 22.93 0 0 0 43.58-14.28Zm-145-90a2.78 2.78 0 0 1-2.65-3.63l29.37-91.41C407.82 47.68 410 46 411 46c1 0 3.17 1.68 4.65 6.19l30 91.49a2.78 2.78 0 0 1-2.64 3.64ZM212.25 1.21A22.93 22.93 0 0 0 183.41 16l-64 199.23c-1.47 4.57-3.66 6.28-4.69 6.29-1 0-3.17-1.68-4.64-6.19L44.72 15.91A22.92 22.92 0 1 0 1.15 30.18l65.34 199.45c7.52 23 26.44 37.77 48.22 37.77h.14c21.86-.06 40.78-15 48.2-38.11l64-199.23a22.93 22.93 0 0 0-14.8-28.85ZM306.09 1.1a22.93 22.93 0 0 0-28.84 14.82l-71.5 222.54a22.93 22.93 0 1 0 43.66 14l71.5-222.55A22.93 22.93 0 0 0 306.09 1.1Zm-78.17 255.45a12.5 12.5 0 1 1 12.5-12.5 12.5 12.5 0 0 1-12.5 12.5Zm70.7-220.91a12.5 12.5 0 1 1 12.5-12.5 12.5 12.5 0 0 1-12.5 12.5Z"})})})]}),ExternalLinkContainer=styled.span`
  position: absolute;
  right: 1em;
  display: flex;
  gap: 1em;
`,ExternalLinks=()=>jsxs(ExternalLinkContainer,{children:[jsx("a",{href:"https://caniusevia.com/",target:"_blank",children:jsxs(CategoryIconContainer,{children:[jsx(VIALogo,{height:"25px",fill:"currentColor"}),jsx(CategoryMenuTooltip,{children:"Firmware + Docs"})]})}),jsx("a",{href:"https://discord.gg/NStTR5YaPB",target:"_blank",children:jsxs(CategoryIconContainer,{children:[jsx(FontAwesomeIcon,{size:"xl",icon:faDiscord}),jsx(CategoryMenuTooltip,{children:"Discord"})]})}),jsx("a",{href:"https://github.com/the-via/app",target:"_blank",children:jsxs(CategoryIconContainer,{children:[jsx(FontAwesomeIcon,{size:"xl",icon:faGithub}),jsx(CategoryMenuTooltip,{children:"Github"})]})})]}),Container$1=styled.div`
  position: absolute;
  right: 200px;
  font-size: 18px;
`,LanguageList=styled.ul`
  padding: 0;
  border: 1px solid var(--bg_control);
  width: 160px;
  border-radius: 6px;
  background-color: var(--bg_menu);
  margin: 0;
  margin-top: 5px;
  top: 30px;
  right: 0px;
  position: absolute;
  pointer-events: ${e=>e.$show?"all":"none"};
  transition: all 0.2s ease-out;
  z-index: 11;
  opacity: ${e=>e.$show?1:0};
  overflow: hidden;
  transform: ${e=>e.$show?0:"translateY(-5px)"};
`,LanugaeButton=styled.button`
  display: block;
  text-align: center;
  outline: none;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  border: none;
  background: ${e=>e.$selected?"var(--bg_icon-highlighted)":"transparent"};
  color: ${e=>e.$selected?"var(--color_icon_highlighted)":"var(--color_label-highlighted)"};
  cursor: pointer;
  text-align: left;
  font-size: 14px;
  text-transform: uppercase;
  padding: 5px 10px;
  &:hover {
    border: none;
    background: ${e=>e.$selected?"var(--bg_icon-highlighted)":"var(--bg_control)"};
    color: ${e=>e.$selected?"var(--color_control-highlighted)":"var(--color_label-highlighted)"};
  }
`,ClickCover=styled.div`
  position: fixed;
  z-index: 10;
  pointer-events: all;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.4;
  background: rgba(0, 0, 0, 0.75);
`,LanguageSelectors=e=>{const o=[{code:"en",lang:"English"},{code:"zh",lang:"中文"},{code:"ko",lang:"한국어"},{code:"ja",lang:"日本語"},{code:"es",lang:"Español"},{code:"de",lang:"Deutsch"}],{i18n:n}=useTranslation(),r=a=>{n.changeLanguage(a),e.onClickOut()},s=reactExports.useMemo(()=>n.resolvedLanguage?n.resolvedLanguage:n.languages[n.languages.length-1],[n.resolvedLanguage,n.languages]);return jsxs(Fragment,{children:[e.show&&jsx(ClickCover,{onClick:e.onClickOut}),jsx(LanguageList,{$show:e.show,children:o.map(({lang:a,code:i})=>jsx(LanugaeButton,{$selected:i===s,onClick:()=>r(i),children:a},i))})]})},LanguageSelect=()=>{const[e,o]=reactExports.useState(!1);return jsxs(Container$1,{children:[jsx(CategoryIconContainer,{children:jsx(FontAwesomeIcon,{size:"xl",icon:faLanguage,onClick:()=>o(!0)})}),jsx(LanguageSelectors,{show:e,onClickOut:()=>o(!1)})]})},Container=styled.div`
  width: 100vw;
  height: 25px;
  padding: 12px 0;
  border-bottom: 1px solid var(--border_color_cell);
  display: flex;
  align-items: center;
  justify-content: center;
`,{DEBUG_PROD,MODE,DEV}={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},showDebugPane=MODE==="development"||DEBUG_PROD==="true"||DEV,GlobalContainer=styled(Container)`
  background: var(--bg_outside-accent);
  column-gap: 20px;
`,UnconnectedGlobalMenu=()=>{const{t:e,i18n:o}=useTranslation(),n=useAppSelector(getShowDesignTab),[r]=useLocation(),s=reactExports.useMemo(()=>PANES.filter(a=>a.key!==ErrorsPaneConfig.key).map(a=>a.key==="design"&&!n||a.key==="debug"&&!showDebugPane?null:jsx(Link$1,{to:a.path,children:jsxs(CategoryIconContainer,{$selected:a.path===r,children:[jsx(FontAwesomeIcon,{size:"xl",icon:a.icon}),jsx(CategoryMenuTooltip,{children:e(a.title)})]})},a.key)),[r,n]);return jsx(React.Fragment,{children:jsxs(GlobalContainer,{children:[jsx(ErrorLink,{}),s,jsx(LanguageSelect,{}),jsx(ExternalLinks,{})]})})},overrideParam=new URL(window.location.href).searchParams.get("override_hid_check");overrideParam!==null&&localStorage.setItem("override_hid_check",overrideParam);const overrideHidCheck=localStorage.getItem("override_hid_check")||"false",OVERRIDE_HID_CHECK=!!JSON.parse(overrideHidCheck),ErrorHome=styled.div`
  background: var(--bg_gradient);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  overflow: hidden;
  height: auto;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 24px;
  position: absolute;
  border-top: 1px solid var(--border_color_cell);
`,UsbError=styled.div`
  align-items: center;
  display: flex;
  color: var(--color_label);
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 650px;
  text-align: center;
`,UsbErrorIcon=styled.div`
  font-size: 2rem;
`,UsbErrorHeading=styled.h1`
  margin: 1rem 0 0;
`,UsbErrorWebHIDLink=styled.a`
  text-decoration: underline;
  color: var(--color_label-highlighted);
`,timeoutRepeater=(e,o,n=0)=>()=>setTimeout(()=>{e(),n>0&&timeoutRepeater(e,o,n-1)()},o),Home=e=>{const{t:o}=useTranslation(),{hasHIDSupport:n}=e,r=useAppDispatch();useAppSelector(getSelectedKey),useAppSelector(getSelectedDefinition),useAppSelector(getConnectedDevices),useAppSelector(getSelectedLayerIndex),useAppSelector(getSelectedKeyDefinitions),useAppSelector(getDisableFastRemap),useAppSelector(getBasicKeyToByte);const s=useAppSelector(getSelectedKeyboardAPI),a=timeoutRepeater(()=>{r(reloadConnectedDevices())},500,1),i=reactExports.createRef();return reactExports.useEffect(()=>{if(n)return i.current&&i.current.focus(),startMonitoring(),usbDetect.on("change",a),r(loadSupportedIds()),()=>{usbDetect.off("change",a)}},[]),reactExports.useEffect(()=>{r(updateSelectedKey(null))},[s]),!n&&!OVERRIDE_HID_CHECK?jsx(ErrorHome,{ref:i,tabIndex:0,children:jsxs(UsbError,{children:[jsx(UsbErrorIcon,{children:"❌"}),jsx(UsbErrorHeading,{children:o("USB Detection Error")}),jsxs("p",{children:["Looks like there was a problem getting USB detection working. Right now, we only support"," ",jsx(UsbErrorWebHIDLink,{href:"https://caniuse.com/?search=webhid",target:"_blank",children:"browsers that have WebHID enabled"}),", so make sure yours is compatible before trying again."]})]})}):jsx(Fragment,{children:e.children})},cubeySrc="/assets/cubey-495d68a6.glb",glbSrc="/assets/keyboard_components-1a09821a.glb",useSize=e=>{const[o,n]=reactExports.useState();return reactExports.useLayoutEffect(()=>{e.current&&n(e.current.getBoundingClientRect())},[e]),useResizeObserver(e,r=>n(r.contentRect)),o};var DisplayMode=(e=>(e[e.Test=1]="Test",e[e.Configure=2]="Configure",e[e.Design=3]="Design",e[e.ConfigureColors=4]="ConfigureColors",e))(DisplayMode||{}),KeycapState=(e=>(e[e.Pressed=1]="Pressed",e[e.Unpressed=2]="Unpressed",e))(KeycapState||{});const useColorPainter=(e,o)=>{const n=useAppSelector(getSelectedConnectedDevice),r=useAppSelector(getSelectedKeyboardAPI),s=useAppSelector(getSelectedCustomMenuData)||{__perKeyRGB:[]},[a,i]=reactExports.useState([]);reactExports.useEffect(()=>{const l=s.__perKeyRGB??[],u=(e.find(_=>"li"in _)?e.map(_=>_.li??-1):[]).map(_=>{const p=l[_??-1];if(p)return getHSVFrom256(p)});i(u)},[s.__perKeyRGB&&s.__perKeyRGB.length,e]);const c=reactExports.useCallback((l,d)=>{if(l.buttons===1&&r){const u=Math.round(o[0]*255/360),_=Math.round(o[1]*255),p=e[d].li;p!==void 0&&(r.setPerKeyRGBMatrix(p,u,_),r.commitCustomMenu(0),i(C=>(C[d]=o,[...C])))}},[i,o,e,n]);return{keyColors:a,onKeycapPointerDown:c,onKeycapPointerOver:c}},Heart=React.memo(e=>{const o=Math.atan(2/e.caseWidth),n=(80+-30)/2,r=2,s=1,i=-(-e.caseWidth-s*2-r*2)/Math.cos(o),c=.1*i/22,l=95,d=95*c,u=(i-d)/2,_=reactExports.useMemo(()=>{const C=new Shape;return C.moveTo(c*(25-n),c*(25-l)),C.bezierCurveTo(c*(25-n),c*(25-l),c*(20-n),c*(0-l),c*(0-n),c*(0-l)),C.bezierCurveTo(c*(-30-n),c*(0-l),c*(-30-n),c*(35-l),c*(-30-n),c*(35-l)),C.bezierCurveTo(c*(-30-n),c*(55-l),c*(-10-n),c*(77-l),c*(25-n),c*(95-l)),C.bezierCurveTo(c*(60-n),c*(77-l),c*(80-n),c*(55-l),c*(80-n),c*(35-l)),C.bezierCurveTo(c*(80-n),c*(35-l),c*(80-n),c*(0-l),c*(50-n),c*(0-l)),C.bezierCurveTo(c*(35-n),c*(0-l),c*(25-n),c*(25-l),c*(25-n),c*(25-l)),C},[e.caseWidth,e.caseHeight,e.color]),p={depth:4,bevelEnabled:!0,bevelSegments:10,bevelSize:1,bevelThickness:1};return jsxs("mesh",{position:[-i+u,r*2+s*2+e.caseHeight/2,0],scale:1,rotation:[Math.PI/2,o,Math.PI/2],children:[jsx("extrudeGeometry",{attach:"geometry",args:[_,p]}),jsx("meshPhongMaterial",{color:e.color,transparent:!0,opacity:1})]})},shallowEqual),makeShape2=e=>{const o=Math.tan(Math.PI*7.5/180),n=10,r=n+o*e,s=e/2,a=new Shape;let i=2,c=Math.PI/2;return a.moveTo(-r,s),a.absarc(-r-i,s-i,i,c*1+c,c*1,!0),a.absarc(-i,s,i,c*1,c*1-c,!0),a.absarc(-i,-s,i,c*3+c,c*3,!0),a.absarc(-n-i,-s-i,i,c*2+c,c*2,!0),a},Case$1=React.memo(e=>{const o=useAppSelector(getSelectedTheme),n=reactExports.useMemo(()=>o[dist.KeyColorType.Accent].c,[o]),r="#212020",s=reactExports.useMemo(()=>o[dist.KeyColorType.Accent].t,[o]),a=e.width*KeycapMetric.keyXPos-KeycapMetric.keyXSpacing,i=KeycapMetric.keyYPos*e.height-KeycapMetric.keyYSpacing,c=4,l=a+c*1,d=a+c*2.5,[u,_]=reactExports.useMemo(()=>[i+c,i+c*2].map(makeShape2),[i]),p=1,C=10,g=10+Math.tan(Math.PI*7.5/180)*(i+c*2);return jsxs("group",{scale:1,"position-z":-p*2,"rotation-y":-Math.PI/2,children:[jsx(Heart,{caseWidth:g,caseHeight:i,color:s}),jsxs("mesh",{position:[-p,0,-d/2],castShadow:!0,children:[jsx("extrudeGeometry",{attach:"geometry",args:[_,{depth:d,bevelEnabled:!0,bevelSize:p,bevelThickness:p,bevelSegments:C}]}),jsx("meshPhongMaterial",{color:n,shininess:100,reflectivity:1,specular:getDarkenedColor(n,.2)})]}),jsxs("mesh",{position:[0,0,-l/2],castShadow:!0,children:[jsx("extrudeGeometry",{attach:"geometry",args:[u,{depth:l,bevelEnabled:!0,bevelSize:p/2,bevelThickness:p,bevelSegments:C}]}),jsx("meshPhongMaterial",{color:r,shininess:100,reflectivity:1,specular:getDarkenedColor(n,.2)})]})]})});function useSkipFontCheck(){const[e,o]=reactExports.useState(!1),n=reactExports.useCallback(()=>{o(!1)},[]),r=reactExports.useCallback(()=>{o(!0)},[]);return reactExports.useEffect(()=>{document.fonts.load("Fira Sans").then(n,r)},[]),e}function getKeycapSharedProps(e,o,n,r,s,a,i){const{position:c,rotation:l,scale:d,color:u,idx:_,onClick:p,onPointerDown:C,onPointerOver:K}=r.coords[o],h=e.ei!==void 0;return{mode:n.mode,position:c,rotation:l,scale:getScale(e,d),textureWidth:e.w,textureHeight:e.h,textureOffsetX:e.w2?Math.abs(e.w2-e.w):0,color:u,shouldRotate:h,onPointerDown:C,onPointerOver:K,keyState:n.pressedKeys?n.pressedKeys[o]:-1,disabled:!n.selectable,selected:o===s,idx:_,label:a[o],onClick:p,key:r.indices[o],skipFontCheck:i}}const getKeysKeysIndices=e=>(o,n)=>{const r=o.ei!==void 0;return`${e}-${n}-${o.w}-${o.h}-${r}`};function getLabels(e,o,n,r){return e.matrixKeycodes.length?e.keys.map((s,a)=>getLabel(e.matrixKeycodes[a],s.w,o,e.definition,n,r)):[]}function getKeysKeys(e,o,n,r){const{keys:s}=e,{rowMap:a}=getKeyboardRowPartitions(s),i=s.map(dist.getBoundingBox),[c,l]=[Math.min(...i.map(u=>u.xStart)),Math.min(...i.map(u=>u.yStart))],d=s.map(u=>{const _={...u};return c<0&&(_.x=_.x-c),l<0&&(_.y=_.y-l),_}).map(calculatePointPosition);return{indices:s.map(getKeysKeysIndices(e.definition.vendorProductId)),coords:s.map((u,_)=>{const[p,C]=d[_],K=u.r*(2*Math.PI)/360,h=KeycapMetric.keyXSpacing/KeycapMetric.keyWidth,g=KeycapMetric.keyYSpacing/KeycapMetric.keyHeight,y=(1+h)*(u.w2||u.w)-h,m=u.h*(1+g)-g,S=getMeshName(u,a[getKeyId(u)],!1),x=e.keyColors?_:u.color,b=o[x];return{position:r(p+c,C+l),rotation:[0,0,-K],scale:[y,m,1],color:b,meshKey:S,idx:_,onClick:(w,T)=>{w.stopPropagation(),n(updateSelectedKey(T))},onPointerDown:e.onKeycapPointerDown,onPointerOver:e.onKeycapPointerOver}})}}const getMacroData$1=({macroExpression:e,label:o})=>o&&o.length>15?o:e&&e.length?e:null,paintEncoder=(e,[o,n],r,s)=>{const[c,l]=[512*o,512*n];e.width=c,e.height=l;const d=e.getContext("2d"),u=2.6;if(d){d.fillStyle=r,d.clearRect(0,0,e.width,e.height),d.fillRect(0,0,e.width,e.height),d.fill(),d.fillStyle=s;const _=.4*c/u;d.ellipse(.5*c/u,2.1*l/u,_,_,Math.PI/4,0,2*Math.PI),d.fill()}},paintKeycapLabel$1=(e,o,n,r)=>{const s=e.getContext("2d");if(s==null)return;const a="Fira Sans, Arial Rounded MT, Arial Rounded MT Bold, Arial",i={x:.015,y:.02},c={x:.01,y:-.01},l={x:.01,y:.02};if(s.beginPath(),s.moveTo(o.bl.x*e.width,(1-o.bl.y)*e.height),s.lineTo(o.bl.x*e.width,(1-o.tr.y)*e.height),s.lineTo(o.tr.x*e.width,(1-o.tr.y)*e.height),s.lineTo(o.tr.x*e.width,(1-o.bl.y)*e.height),s.lineTo(o.bl.x*e.width,(1-o.bl.y)*e.height),s.clip(),s.fillStyle=n,r!==void 0){if(r.topLabel&&r.bottomLabel){let d=52,u=.75*d/e.height,_=r.offset[0]*u,p=r.offset[1]*u;s.font=`bold ${d}px ${a}`,s.fillText(r.topLabel,(o.bl.x+i.x)*e.width,(1-(o.tr.y-u-i.y-_))*e.height),s.fillText(r.bottomLabel,(o.bl.x+i.x)*e.width,(1-(o.bl.y+i.y+p))*e.height)}else if(r.centerLabel){let d=37.5*r.size,u=.75*d/e.height,_=(o.tr.y+o.bl.y)/2;return s.font=`bold ${d}px ${a}`,s.fillText(r.label,(o.bl.x+c.x)*e.width,(1-(_-.5*u-c.y))*e.height),s.measureText(r.centerLabel).width>(o.tr.x-(o.bl.x+c.x))*e.width}else if(typeof r.label=="string"){let d=75,u=.75*d/e.height;s.font=`bold ${d}px ${a}`,s.fillText(r.label,(o.bl.x+l.x)*e.width,(1-(o.tr.y-u-l.y))*e.height)}}},calculateTextureRects=(e,o,n,r,s)=>{const a=.3846153846153846,l=.445/19.05*a;let d=Math.min(2.75,n),u=Math.min(2.75,r);(e>1||o>1)&&(d=1,u=1);let _={bl:{x:l,y:l},tr:{x:d*a-l,y:u*a-l}},p={bl:{x:_.bl.x+.07,y:_.bl.y+.08},tr:{x:_.tr.x-.07,y:_.tr.y-.0146}};return s>0&&(p.bl.x+=s*a,p.tr.x+=s*a,_.bl.x+=s*a,_.tr.x+=s*a),{keycapRect:_,faceRect:p}},paintKeycap$1=(e,[o,n],r,s,a,i,c,l)=>{const d=calculateTextureRects(o,n,r,s,l),u=512;e.width=u*o,e.height=u*n;const _=e.getContext("2d");if(_!=null)return _.fillStyle=a,_.fillRect(0,0,e.width,e.height),paintKeycapLabel$1(e,d.faceRect,i,c)},Keycap$1=React.memo(e=>{const{label:o,scale:n,color:r,onClick:s,selected:a,disabled:i,mode:c,rotation:l,keyState:d,shouldRotate:u,keycapGeometry:_,textureOffsetX:p,textureWidth:C,textureHeight:K,onPointerOver:h,onPointerDown:g,idx:y}=e,m=reactExports.useRef(),S=o&&getMacroData$1(o),[x,b]=reactExports.useState(!1),[w,T]=reactExports.useState(!1),A=reactExports.useRef(),v=reactExports.useRef(document.createElement("canvas")),D=React.useCallback(()=>{if(v.current&&r){if(u)paintEncoder(v.current,[n[0],n[1]],r.c,r.t);else{const N=paintKeycap$1(v.current,[n[0],n[1]],C,K,r.c,r.t,o,p);b(!!N)}A.current.needsUpdate=!0}},[v.current,C,o&&o.key,n[0],n[1],r&&r.t,r&&r.c,u]);reactExports.useEffect(D,[o&&o.key,r&&r.c,r&&r.t]);const O=useSpring({config:{duration:800},from:{x:0,y:"#f4a0a0"},loop:a?{reverse:!0}:!1,to:{x:100,y:"#b49999"}});let I=_.boundingBox.max.z;const[P,f]=[I,I+8],R=DisplayMode.Test===c?TestKeyState.KeyDown===d?KeycapState.Pressed:KeycapState.Unpressed:w||a?KeycapState.Unpressed:KeycapState.Pressed,[E,L]=R===KeycapState.Pressed?[P,l[2]]:[f,l[2]+Math.PI*Number(u)],B=d===TestKeyState.KeyUp,F=DisplayMode.Test===c?R===KeycapState.Unpressed?B?"palevioletred":"lightgrey":"pink":(R===KeycapState.Unpressed,"lightgrey"),{z:G,b:V,rotateZ:H,tooltipScale:U}=useSpring({config:{duration:100},z:E,b:F,rotateZ:L,tooltipScale:w?1:0}),[$,Y,W,Q]=reactExports.useMemo(()=>{const N=()=>{};return i?[N,N,N,N]:e.mode===DisplayMode.ConfigureColors?[N,j=>{h&&h(j,y)},N,j=>{g&&g(j,y)}]:[j=>s(j,y),j=>{h&&h(j,y),T(!0)},()=>T(!1),j=>{g&&g(j,y)}]},[i,s,g,h,T,y,c]),z=animated.meshPhongMaterial;return jsxs(Fragment,{children:[jsx(animated.mesh,{...e,ref:m,"position-z":G,"rotation-z":H,onClick:$,onPointerDown:Q,onPointerOver:Y,onPointerOut:W,geometry:_,children:jsx(z,{attach:"material",color:a?O.y:V,children:jsx("canvasTexture",{ref:A,attach:"map",image:v.current})})}),(S||x)&&jsx(React.Suspense,{fallback:null,children:jsx(animated.group,{position:e.position,"position-z":20,scale:U,children:jsx(Html,{transform:!0,style:{pointerEvents:"none"},children:jsx(KeycapTooltip,{children:S||o&&o.tooltipLabel})})})})]})},shallowEqual),getSRGBArray=e=>e.map(([o,n])=>{const r=getRGB({hue:Math.round(255*o/360),sat:Math.round(255*n)}),s=`#${new Color(r).convertSRGBToLinear().getHexString()}`;return{c:s,t:s}}),getPosition$1=(e,o)=>[KeycapMetric.keyXPos*e/CSSVarObject.keyXPos,-o*KeycapMetric.keyYPos/CSSVarObject.keyYPos,0],KeyGroup$1=e=>{const o=useAppDispatch(),n=useGLTF(glbSrc,!0).scene,r=useAppSelector(getSelectedKey),s=useAppSelector(getSelectedSRGBTheme),a=useAppSelector(getExpressions),i=useSkipFontCheck(),c=e.keyColors?getSRGBArray(e.keyColors):s,{basicKeyToByte:l,byteToKey:d}=useAppSelector(getBasicKeyToByte),u=useAppSelector(S=>S.macros),{keys:_,selectedKey:p}=e,C=p===void 0?r:p,K=reactExports.useMemo(()=>getKeysKeys(e,c,o,getPosition$1),[_,c,e.onKeycapPointerDown,e.onKeycapPointerOver]),h=reactExports.useMemo(()=>getLabels(e,a,l,d),[_,e.matrixKeycodes,u,e.definition]),{width:g,height:y}=calculateKeyboardFrameDimensions(_),m=reactExports.useMemo(()=>e.keys.map((S,x)=>{const{meshKey:b}=K.coords[x],{key:w,...T}=getKeycapSharedProps(S,x,e,K,C,h,i);return S.d?null:jsx(Keycap$1,{keycapGeometry:(n.getObjectByName(b)||n.getObjectByName("K-R1-100")).geometry,...T},w)}),[_,C,h,e.pressedKeys,e.selectable,c,e.definition.vendorProductId,i]);return jsx("group",{scale:1,position:[(-g*KeycapMetric.keyXPos+KeycapMetric.keyXSpacing)/2,(KeycapMetric.keyYPos*y-KeycapMetric.keyYSpacing)/2,0],children:m})},generateRowColArray=(e,o,n)=>{const r=e.filter(i=>i.ei===void 0&&!i.d),s=r.reduce((i,c)=>(i[c.row][c.col]=calculatePointPosition(c),i),Array(o).fill(0).map(()=>Array(n).fill(0))).map(i=>i.sort((c,l)=>c[0]-l[0])),a=r.reduce((i,c)=>(i[c.col][c.row]=calculatePointPosition(c),i),Array(n).fill(0).map(()=>Array(o).fill(0))).map(i=>i.sort((c,l)=>c[1]-l[1]));return{rowKeys:s,colKeys:a}},MatrixLines$1=({keys:e,rows:o,cols:n,width:r,height:s})=>{const[a,i]=["lightpink","lightgrey"],{rowKeys:c,colKeys:l}=generateRowColArray(e,o,n);return jsx("group",{scale:.35,rotation:[Math.PI,0,0],position:[-r*KeycapMetric.keyXPos/2,(s+.4)*KeycapMetric.keyYPos/2,11],children:jsxs(Segments,{lineWidth:1,children:[c.flatMap(d=>{const u=d.filter(_=>_);return u.length>=2?u.reduce((_,p,C)=>_.prev===null?{res:[],prev:p}:{res:[..._.res,jsx(Segment,{start:[_.prev[0],_.prev[1],0],end:[p[0],p[1],0],color:a},`row-${C}`)],prev:p},{res:[],prev:null}).res:[]}),l.flatMap(d=>{const u=d.filter(_=>_);return u.length>=2?u.reduce((_,p,C)=>_.prev===null?{res:[],prev:p}:{res:[..._.res,jsx(Segment,{start:[_.prev[0],_.prev[1],0],end:[p[0],p[1],0],color:i},`col-${C}`)],prev:p},{res:[],prev:null}).res:[]})]})},`${o}-${n}-${r}-${s}`)},KeyboardCanvas$1=e=>{const{containerDimensions:o,shouldHide:n,...r}=e,{width:s,height:a}=reactExports.useMemo(()=>calculateKeyboardFrameDimensions(r.keys),[r.keys]),[i,c]=reactExports.useState(!1),{verticalPostion:l,tilt:d}=useSpring({config:{tension:35,friction:5,mass:.3},verticalPostion:i?1:-3,tilt:i?-.15:0});reactExports.useEffect(()=>{const _=document.querySelector("canvas");_&&(_.addEventListener("mouseenter",()=>{c(!0)}),_.addEventListener("mouseleave",()=>{c(!1)}))},[]);const u=Math.min(Math.min(1,o&&o.width/((CSSVarObject.keyWidth+CSSVarObject.keyXSpacing)*s-CSSVarObject.keyXSpacing+70)),500/((CSSVarObject.keyHeight+CSSVarObject.keyYSpacing)*a-CSSVarObject.keyYSpacing+70))||1;return jsx("group",{position:[0,-0,-19],scale:.015*u,visible:!n,children:jsx(KeyboardCanvasContent$1,{...r,width:s,height:a,verticalPostion:l,tilt:d})})},KeyboardCanvasContent$1=React.memo(e=>{const{matrixKeycodes:o,keys:n,definition:r,pressedKeys:s,mode:a,showMatrix:i,selectable:c,width:l,height:d,verticalPostion:u,tilt:_}=e;return jsx(animated.group,{"position-y":u,"rotation-x":_,children:jsxs(PresentationControls,{enabled:e.mode!==DisplayMode.ConfigureColors,global:!0,snap:!0,speed:1,zoom:1,polar:[-Math.PI/10,Math.PI/10],azimuth:[-Math.PI/16,Math.PI/16],config:{mass:1,tension:170,friction:26},children:[jsx(Case$1,{width:l,height:d}),jsx(KeyGroup$1,{...e,keys:n,mode:a,matrixKeycodes:o,selectable:c,definition:r,pressedKeys:s}),i&&jsx(MatrixLines$1,{keys:n,rows:r.matrix.rows,cols:r.matrix.cols,width:l,height:d})]})})},shallowEqual),CaseGroup=styled.div``,OuterCase=styled.div`
  background: ${e=>e.background};
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
`,InnerCase=styled.div`
  background: ${e=>e.background};
  top: 0;
  left: 0;
  position: absolute;
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
`,CaseInsideBorder=10,Case=React.memo(e=>{const o=useAppSelector(getSelectedTheme),n=reactExports.useMemo(()=>o[dist.KeyColorType.Accent].c,[o]),r=e.width*CSSVarObject.keyXPos-CSSVarObject.keyXSpacing,s=CSSVarObject.keyYPos*e.height-CSSVarObject.keyYSpacing,a=CSSVarObject.insideBorder,i=r+a*1,c=r+a*3,[l,d]=[s+a,s+a*3],[u,_,p]=[.15,.25,.2].map(C=>getDarkenedColor(n,C));return jsxs(CaseGroup,{children:[jsx(OuterCase,{background:n,width:c,height:d,style:{borderRadius:8,boxShadow:"var(--box-shadow-keyboard)"}}),jsx(InnerCase,{background:`linear-gradient(200deg,${u} 40%,${_},${p} 80%)`,width:i,height:l,style:{transform:`translate( ${i-r}px,
           ${l-s}px)`,boxShadow:"var(--box-shadow-keyboard)",borderRadius:8}})]})},shallowEqual),KeycapContainer=styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 52px;
  height: 54px;
  &:hover {
    z-index: 1;
    & .tooltip {
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
  }
  .tooltip {
    transform: translateY(5px) scale(0.6);
    opacity: 0;
  }
`,TooltipContainer=styled.div`
  position: absolute;
  transform: rotate(${e=>e.$rotate}rad);
  width: 100%;
  height: 100%;
  bottom: 0;
`,TestOverlay=styled.div`
  transition: all 0.2s ease-out;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`,CanvasContainerBG=styled.div``,CanvasContainer=styled.div`
  box-shadow: inset -1px -1px 0 rgb(0 0 0 / 20%),
    inset 1px 1px 0 rgb(255 255 255 / 10%);
`,ComboKeycap=e=>{const{normalizedRects:o,clipPath:n,overflowsTexture:r,macroData:s,label:a,canvasRef:i,onClick:c,onPointerDown:l,onPointerOver:d,onPointerOut:u,disabled:_,...p}=e,[C,K]=o;return jsx(Fragment,{children:jsxs(KeycapContainer,{...p,children:[jsxs(ComboKeyBoundingContainer,{$selected:e.selected,onClick:c,onPointerDown:l,onPointerOver:d,onPointerOut:u,style:{cursor:_?"initial":"pointer",position:"relative",animation:e.disabled?"initial":e.selected?".75s infinite alternate select-glow":"",transform:`translateX(${-Math.abs(C[0]-K[0])*CSSVarObject.keyXPos/2}px) perspective(100px) translateZ(${e.keycapZ}px)`,width:Math.max(C[2],K[2])*CSSVarObject.keyXPos-CSSVarObject.keyXSpacing,height:Math.max(C[3],K[3])*CSSVarObject.keyYPos-CSSVarObject.keyYSpacing,clipPath:n},children:[jsx(ComboKeyRectContainer,{style:{position:"absolute",borderRadius:3,background:getDarkenedColor(e.color.c,.8),transform:`translate(${CSSVarObject.keyXPos*C[0]}px,${CSSVarObject.keyYPos*C[1]}px)`,width:C[2]*CSSVarObject.keyXPos-CSSVarObject.keyXSpacing,height:C[3]*CSSVarObject.keyYPos-CSSVarObject.keyYSpacing}}),jsx(ComboKeyRectContainer,{style:{position:"absolute",borderRadius:3,transform:`translate(${CSSVarObject.keyXPos*K[0]}px,${CSSVarObject.keyYPos*K[1]}px)`,background:getDarkenedColor(e.color.c,.8),width:K[2]*CSSVarObject.keyXPos-CSSVarObject.keyXSpacing,height:K[3]*CSSVarObject.keyYPos-CSSVarObject.keyYSpacing}}),jsx(ComboKeyBGContainer,{style:{position:"absolute",borderRadius:3,background:getDarkenedColor(e.color.c,.8),transform:`translate(${CSSVarObject.keyXPos*C[0]+1}px,${1+CSSVarObject.keyYPos*C[1]}px)`,width:C[2]*CSSVarObject.keyXPos-CSSVarObject.keyXSpacing-2,height:C[3]*CSSVarObject.keyYPos-CSSVarObject.keyYSpacing-2}}),jsx(CanvasContainer,{style:{borderRadius:4,background:e.color.c,position:"absolute",transform:`translate(${CSSVarObject.keyXPos*C[0]+CSSVarObject.faceXPadding[0]}px,${CSSVarObject.faceYPadding[0]+CSSVarObject.keyYPos*C[1]}px)`,width:C[2]*CSSVarObject.keyXPos-CSSVarObject.keyXSpacing-CSSVarObject.faceXPadding[0]-CSSVarObject.faceXPadding[1],height:C[3]*CSSVarObject.keyYPos-CSSVarObject.keyYSpacing-CSSVarObject.faceYPadding[0]-CSSVarObject.faceYPadding[1]}}),jsx(CanvasContainer,{style:{borderRadius:4,background:e.color.c,position:"absolute",transform:`translate(${CSSVarObject.keyXPos*K[0]+CSSVarObject.faceXPadding[0]}px,${CSSVarObject.faceYPadding[0]+CSSVarObject.keyYPos*K[1]}px)`,width:K[2]*CSSVarObject.keyXPos-CSSVarObject.keyXSpacing-CSSVarObject.faceXPadding[0]-CSSVarObject.faceXPadding[1],height:K[3]*CSSVarObject.keyYPos-CSSVarObject.keyYSpacing-CSSVarObject.faceYPadding[0]-CSSVarObject.faceYPadding[1]}}),jsx(CanvasContainerBG,{style:{borderRadius:4,background:e.color.c,position:"absolute",transform:`translate(${1+CSSVarObject.keyXPos*C[0]+CSSVarObject.faceXPadding[0]}px,${1+CSSVarObject.faceYPadding[0]+CSSVarObject.keyYPos*C[1]}px)`,width:C[2]*CSSVarObject.keyXPos-CSSVarObject.keyXSpacing-CSSVarObject.faceXPadding[0]-CSSVarObject.faceXPadding[1]-2,height:C[3]*CSSVarObject.keyYPos-CSSVarObject.keyYSpacing-CSSVarObject.faceYPadding[0]-CSSVarObject.faceYPadding[1]-2},children:jsx("canvas",{ref:i,style:{}})}),DisplayMode.Test===e.mode?jsx(TestOverlay,{style:{background:e.keycapColor,opacity:e.keycapOpacity}}):null]}),(e.macroData||e.overflowsTexture)&&jsx(TooltipContainer,{$rotate:e.rotation[2],children:jsx(Keycap2DTooltip,{children:e.macroData||e.label&&e.label.tooltipLabel})})]})})},ComboKeyBoundingContainer=styled.div`
  box-sizing: border-box;
  transition: transform 0.2s ease-out;
  animation: ${e=>e.$selected?".75s infinite alternate select-glow":"initial"};
  &:hover {
    transform: perspective(100px) translateZ(-5px);
    animation: 0.5s 1 forwards select-glow;
  }
`,ComboKeyRectContainer=styled.div`
  box-sizing: border-box;
  padding: 2px 6px 10px 6px;
  box-shadow: inset -1px -1px 0 rgb(0 0 0 / 20%),
    inset 1px 1px 0 rgb(255 255 255 / 20%);
`,ComboKeyBGContainer=styled.div`
  box-sizing: border-box;
  padding: 3px 7px 10px 6px;
`,EncoderKeyContainer=styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 52px;
  opacity: 1;
  height: 52px;
  &:hover {
    z-index: 1;
    animation: 0.75s infinite alternate select-glow;
  }
`,EncoderKeyContent2=styled.div`
  --inner-padding: ${e=>e.$innerPadding}px;
  --size: ${e=>e.$size}px;
  --inner-size: ${e=>e.$size-e.$innerPadding*2}px;
  --half-size: ${e=>(e.$size-e.$innerPadding*2)/2}px;
  --half-size-p1: ${e=>1+(e.$size-e.$innerPadding*2)/2}px;
  --half-size-p05p: ${e=>e.$innerPadding/2+(e.$size-e.$innerPadding*2)/2}px;
  background-color: currentColor;
  padding: var(--inner-padding);
  min-width: var(--size);
  min-height: var(--size);
  clip-path: polygon(
    50% 0%,
    46.93% 3.1%,
    43.47% 0.43%,
    40.83% 3.9%,
    37.06% 1.7%,
    34.89% 5.49%,
    30.87% 3.81%,
    29.21% 7.85%,
    25% 6.7%,
    23.89% 10.92%,
    19.56% 10.33%,
    19.01% 14.66%,
    14.64% 14.64%,
    14.66% 19.01%,
    10.33% 19.56%,
    10.92% 23.89%,
    6.7% 25%,
    7.85% 29.21%,
    3.81% 30.87%,
    5.49% 34.89%,
    1.7% 37.06%,
    3.9% 40.83%,
    0.43% 43.47%,
    3.1% 46.93%,
    0% 50%,
    3.1% 53.07%,
    0.43% 56.53%,
    3.9% 59.17%,
    1.7% 62.94%,
    5.49% 65.11%,
    3.81% 69.13%,
    7.85% 70.79%,
    6.7% 75%,
    10.92% 76.11%,
    10.33% 80.44%,
    14.66% 80.99%,
    14.64% 85.36%,
    19.01% 85.34%,
    19.56% 89.67%,
    23.89% 89.08%,
    25% 93.3%,
    29.21% 92.15%,
    30.87% 96.19%,
    34.89% 94.51%,
    37.06% 98.3%,
    40.83% 96.1%,
    43.47% 99.57%,
    46.93% 96.9%,
    50% 100%,
    53.07% 96.9%,
    56.53% 99.57%,
    59.17% 96.1%,
    62.94% 98.3%,
    65.11% 94.51%,
    69.13% 96.19%,
    70.79% 92.15%,
    75% 93.3%,
    76.11% 89.08%,
    80.44% 89.67%,
    80.99% 85.34%,
    85.36% 85.36%,
    85.34% 80.99%,
    89.67% 80.44%,
    89.08% 76.11%,
    93.3% 75%,
    92.15% 70.79%,
    96.19% 69.13%,
    94.51% 65.11%,
    98.3% 62.94%,
    96.1% 59.17%,
    99.57% 56.53%,
    96.9% 53.07%,
    100% 50%,
    96.9% 46.93%,
    99.57% 43.47%,
    96.1% 40.83%,
    98.3% 37.06%,
    94.51% 34.89%,
    96.19% 30.87%,
    92.15% 29.21%,
    93.3% 25%,
    89.08% 23.89%,
    89.67% 19.56%,
    85.34% 19.01%,
    85.36% 14.64%,
    80.99% 14.66%,
    80.44% 10.33%,
    76.11% 10.92%,
    75% 6.7%,
    70.79% 7.85%,
    69.13% 3.81%,
    65.11% 5.49%,
    62.94% 1.7%,
    59.17% 3.9%,
    56.53% 0.43%,
    53.07% 3.1%
  );

  background-image: radial-gradient(
      currentColor var(--half-size),
      transparent var(--half-size-p1)
    ),
    radial-gradient(
      rgba(255, 255, 255, 0.6) var(--half-size),
      transparent var(--half-size-p1)
    ),
    radial-gradient(
      rgba(0, 0, 0, 0.2) var(--half-size),
      transparent var(--half-size-p05p)
    ),
    radial-gradient(
      rgba(0, 0, 0, 0.2) var(--half-size),
      transparent var(--half-size-p05p)
    );
  background-size: var(--size) var(--size);
  background-position: 0px 0px, -0.5px -0.5px, 0px 0px,
    calc(var(--inner-padding) / 2) calc(var(--inner-padding) / 2);
  background-repeat: repeat;

  transition: transform 0.5s ease-out;
  transform: rotate(0);
  box-sizing: border-box;
  &:hover {
    transform: rotate(450deg);
  }
`,EncoderKey=e=>jsx(EncoderKeyContainer,{onClick:e.onClick,style:e.style,children:jsx(EncoderKeyContent2,{$size:e.size&&+e.size,$innerPadding:5*e.size/52})}),getMacroData=({macroExpression:e,label:o})=>o&&o.length>15?o:e&&e.length?e:null,paintKeycapLabel=(e,o,n)=>{const r=e.getContext("2d");if(r==null)return;const s=devicePixelRatio,[a,i]=[e.width,e.height];e.width=a*s,e.height=i*s,e.style.width=`${a}px`,e.style.height=`${i}px`,r.scale(s,s);const c="Fira Sans, Arial Rounded MT, Arial Rounded MT Bold, Arial",l={x:4,y:4},d={x:4,y:4},u={x:3,y:0},_={x:4,y:4};if(r.beginPath(),r.moveTo(0,0),r.lineTo(e.width,0),r.lineTo(e.width,e.height),r.lineTo(0,e.height),r.lineTo(0,0),r.clip(),r.fillStyle=o,n!==void 0){if(n.topLabel&&n.bottomLabel){let p=16,C=.75*p,K=n.offset[0]*C,h=n.offset[1]*C;r.font=`bold ${p}px ${c}`,r.fillText(n.topLabel,l.x,l.y+K+C),r.fillText(n.bottomLabel,d.x,i-d.y-h)}else if(n.centerLabel){let p=13*n.size,C=.75*p,K=i/2;return r.font=`bold ${p}px ${c}`,r.fillText(n.label,u.x,K+.5*C),r.measureText(n.centerLabel).width>a-u.x}else if(typeof n.label=="string"){let p=22,C=.75*p;r.font=`bold ${p}px ${c}`,r.fillText(n.label,_.x,_.y+C)}}},paintKeycap=(e,o,n,r,s)=>{const[a,i]=[CSSVarObject.keyWidth,CSSVarObject.keyHeight];if(e.width=a*o-CSSVarObject.faceXPadding.reduce((l,d)=>l+d,0),e.height=i*n-CSSVarObject.faceYPadding.reduce((l,d)=>l+d,0),e.getContext("2d")!=null)return paintKeycapLabel(e,r,s)},Keycap=React.memo(e=>{const{label:o,scale:n,color:r,selected:s,disabled:a,mode:i,rotation:c,keyState:l,shouldRotate:d,textureWidth:u,textureHeight:_,skipFontCheck:p,idx:C}=e,K=o&&getMacroData(o),[h,g]=reactExports.useState(!1),[y,m]=reactExports.useState(!1),S=reactExports.useRef(null),x=React.useCallback(()=>{if(S.current&&r&&o&&(document.fonts.check('bold 16px "Fira Sans"',o.label)||p)){const E=paintKeycap(S.current,u,_,r.t,o);g(!!E)}},[S.current,u,o&&o.key,n[0],n[1],r&&r.t,r&&r.c,d]);reactExports.useEffect(x,[o&&o.key,p,r&&r.c,r&&r.t]),reactExports.useEffect(()=>(document.fonts.addEventListener("loadingdone",x),()=>{document.fonts.removeEventListener("loadingdone",x)}),[]);const[b,w]=[-8,0],T=DisplayMode.Test===i?TestKeyState.KeyDown===l?KeycapState.Pressed:KeycapState.Unpressed:y||s?KeycapState.Pressed:KeycapState.Unpressed,[A]=T===KeycapState.Pressed?[b,c[2]]:[w,c[2]+Math.PI*Number(d)],v=l===TestKeyState.KeyUp,D=DisplayMode.Test===i?T===KeycapState.Unpressed?v?"mediumvioletred":"lightgrey":"mediumvioletred":(T===KeycapState.Unpressed,"lightgrey"),O=T===KeycapState.Unpressed?v?.4:0:.6,[I,P,f,R]=reactExports.useMemo(()=>{const E=()=>{};return a?[E,E,E,E]:e.mode===DisplayMode.ConfigureColors?[E,L=>{e.onPointerOver&&e.onPointerOver(L,C)},E,L=>{e.onPointerDown&&e.onPointerDown(L,C)}]:[L=>e.onClick(L,C),L=>{e.onPointerOver&&e.onPointerOver(L,C),m(!0)},()=>m(!1),L=>{e.onPointerDown&&e.onPointerDown(L,C)}]},[a,e.onClick,e.onPointerDown,e.onPointerOver,m,C,i]);return d?jsx(EncoderKey,{onClick:I,size:u*CSSVarObject.keyWidth,style:{transform:`translate(${e.position[0]-(CSSVarObject.keyWidth*u-CSSVarObject.keyWidth)/2}px,${u*(CSSVarObject.keyHeight-CSSVarObject.keyWidth)/2+e.position[1]-(CSSVarObject.keyHeight*_-CSSVarObject.keyHeight)/2}px) rotate(${-e.rotation[2]}rad)`,borderRadius:3,color:e.color.c}}):e.clipPath?jsx(ComboKeycap,{...e,onClick:I,onPointerDown:R,onPointerOver:P,onPointerOut:f,keycapZ:A,keycapOpacity:O,keycapColor:D,canvasRef:S,macroData:K,overflowsTexture:h,style:{transform:`translate(${CSSVarObject.keyWidth/2+e.position[0]-(CSSVarObject.keyXPos*u-CSSVarObject.keyXSpacing)/2}px,${CSSVarObject.keyHeight/2+e.position[1]-(CSSVarObject.keyYPos*_-CSSVarObject.keyYSpacing)/2}px) rotate(${-e.rotation[2]}rad)`,width:u*CSSVarObject.keyXPos-CSSVarObject.keyXSpacing,height:_*CSSVarObject.keyYPos-CSSVarObject.keyYSpacing}}):jsx(Fragment,{children:jsxs(KeycapContainer,{onClick:I,onPointerDown:R,onPointerOver:P,onPointerOut:f,style:{transform:`translate(${CSSVarObject.keyWidth/2+e.position[0]-(CSSVarObject.keyXPos*u-CSSVarObject.keyXSpacing)/2}px,${CSSVarObject.keyHeight/2+e.position[1]-(CSSVarObject.keyYPos*_-CSSVarObject.keyYSpacing)/2}px) rotate(${-e.rotation[2]}rad)`,width:u*CSSVarObject.keyXPos-CSSVarObject.keyXSpacing,height:_*CSSVarObject.keyYPos-CSSVarObject.keyYSpacing,cursor:a?"initial":"pointer"},children:[jsxs(GlowContainer,{$selected:s,style:{animation:a?"initial":s?".75s infinite alternate select-glow":"",background:getDarkenedColor(e.color.c,.8),transform:`perspective(100px) translateZ(${A}px)`,borderRadius:3,width:u*CSSVarObject.keyXPos-CSSVarObject.keyXSpacing,height:_*CSSVarObject.keyYPos-CSSVarObject.keyYSpacing},children:[DisplayMode.Test===i?jsx(TestOverlay,{style:{background:D,opacity:O}}):null,jsx(CanvasContainer,{style:{borderRadius:4,background:e.color.c,height:"100%"},children:jsx("canvas",{ref:S,style:{}})})]}),(K||h)&&jsx(TooltipContainer,{$rotate:c[2],children:jsx(Keycap2DTooltip,{children:K||o&&o.tooltipLabel})})]})})},shallowEqual),GlowContainer=styled.div`
  box-sizing: border-box;
  padding: 2px 6px 10px 6px;
  transition: transform 0.2s ease-out;
  box-shadow: inset -1px -1px 0 rgb(0 0 0 / 20%),
    inset 1px 1px 0 rgb(255 255 255 / 20%);
  animation: ${e=>e.$selected?".75s infinite alternate select-glow":"initial"};
  &:hover {
    transform: perspective(100px) translateZ(-5px);
    animation: 0.5s 1 forwards select-glow;
  }
`,KeyGroupContainer=styled.div`
  position: absolute;
  top: ${e=>CaseInsideBorder*1.5}px;
  left: ${e=>CaseInsideBorder*1.5}px;
`,getPosition=(e,o)=>[e-CSSVarObject.keyWidth/2,o-CSSVarObject.keyHeight/2,0],getRGBArray=e=>e.map(([o,n])=>{const r=getRGB({hue:Math.round(255*o/360),sat:Math.round(255*n)}),s=`#${new Color(r).getHexString()}`;return{c:s,t:s}}),KeyGroup=e=>{const o=useAppDispatch(),n=useAppSelector(getSelectedKey),r=useAppSelector(getSelectedTheme),s=useAppSelector(getExpressions),a=useSkipFontCheck(),i=e.keyColors?getRGBArray(e.keyColors):r,{basicKeyToByte:c,byteToKey:l}=useAppSelector(getBasicKeyToByte),d=useAppSelector(m=>m.macros),{keys:u,selectedKey:_}=e,p=_===void 0?n:_,C=reactExports.useMemo(()=>getKeysKeys(e,i,o,getPosition),[u,i,e.onKeycapPointerDown,e.onKeycapPointerOver]),K=reactExports.useMemo(()=>getLabels(e,s,c,l),[u,e.matrixKeycodes,d,e.definition]),{width:h,height:g}=calculateKeyboardFrameDimensions(u),y=reactExports.useMemo(()=>e.keys.map((m,S)=>m.d?null:jsx(Keycap,{...getComboKeyProps(m),...getKeycapSharedProps(m,S,e,C,p,K,a)})),[u,p,K,e.pressedKeys,e.selectable,i,e.definition.vendorProductId,a]);return jsx(KeyGroupContainer,{height:g,width:h,style:{pointerEvents:e.selectable?"all":"none"},children:y})},Matrix=({rowKeys:e,colKeys:o})=>jsxs(SVG,{style:{position:"absolute",top:CSSVarObject.insideBorder,left:CSSVarObject.insideBorder},children:[e.map((n,r)=>jsx(RowLine,{points:n.map(s=>(s||[]).join(",")).join(" ")},r)),o.map((n,r)=>jsx(ColLine,{points:n.map(s=>(s||[]).join(",")).join(" ")},r))]}),SVG=styled.svg`
  transform: rotateZ(0);
  width: 100%;
  height: 100%;
`,RowLine=styled.polyline`
  stroke: var(--color_accent);
  stroke-width: 3;
  fill-opacity: 0;
  stroke-opacity: 0.4;
  stroke-linecap: round;
`,ColLine=styled.polyline`
  stroke: var(--color_light-grey);
  stroke-width: 3;
  fill-opacity: 0;
  stroke-opacity: 0.4;
  stroke-linecap: round;
`,MatrixLines=({keys:e,rows:o,cols:n,width:r,height:s})=>{const{rowKeys:a,colKeys:i}=generateRowColArray(e,o,n);return jsx(Matrix,{rowKeys:a,colKeys:i})},KeyboardCanvas=e=>{const{containerDimensions:o,shouldHide:n,...r}=e,{width:s,height:a}=reactExports.useMemo(()=>calculateKeyboardFrameDimensions(r.keys),[r.keys]),i=o.height,c=35,l=Math.min(Math.min(1,o&&o.width/((CSSVarObject.keyWidth+CSSVarObject.keyXSpacing)*s-CSSVarObject.keyXSpacing+c*2)),i/((CSSVarObject.keyHeight+CSSVarObject.keyYSpacing)*a-CSSVarObject.keyYSpacing+c*2))||1;return jsx("div",{style:{transform:`scale(${l}, ${l})`,opacity:n?0:1,position:"absolute",pointerEvents:n?"none":"all"},children:jsx(KeyboardCanvasContent,{...r,width:s,height:a})})},KeyboardGroup$2=styled.div`
  position: relative;
`,KeyboardCanvasContent=React.memo(e=>{const{matrixKeycodes:o,keys:n,definition:r,pressedKeys:s,mode:a,showMatrix:i,selectable:c,width:l,height:d}=e;return jsxs(KeyboardGroup$2,{children:[jsx(Case,{width:l,height:d}),jsx(KeyGroup,{...e,keys:n,mode:a,matrixKeycodes:o,selectable:c,definition:r,pressedKeys:s}),i&&jsx(MatrixLines,{keys:n,rows:r.matrix.rows,cols:r.matrix.cols,width:l,height:d})]})},shallowEqual),getKeyboardCanvas=e=>e==="2D"?KeyboardCanvas:KeyboardCanvas$1,ConfigureKeyboard=e=>{const{selectable:o,dimensions:n}=e,r=useAppSelector(h=>getSelectedKeymap(h)||[]),s=useAppSelector(getSelectedKeyDefinitions),a=useAppSelector(getSelectedDefinition),i=useAppSelector(getShowKeyPainter),c=useAppSelector(getSelectedPaletteColor),{keyColors:l,onKeycapPointerDown:d,onKeycapPointerOver:u}=useColorPainter(s,c),[_,p]=reactExports.useMemo(()=>l&&s?[s.filter((h,g)=>l[g]&&l[g].length),l.filter(h=>h&&h.length)]:[null,null],[s,l]);if(!a||!n)return null;const C=(_==null?void 0:_.length)&&(p==null?void 0:p.length),K=getKeyboardCanvas(e.nDimension);return jsxs(Fragment,{children:[jsx(K,{matrixKeycodes:r,keys:s,selectable:!!o,definition:a,containerDimensions:n,mode:DisplayMode.Configure,shouldHide:i}),C?jsx(K,{matrixKeycodes:r,keys:_,selectable:i,definition:a,containerDimensions:n,mode:DisplayMode.ConfigureColors,keyColors:p,onKeycapPointerDown:d,onKeycapPointerOver:u,shouldHide:!i}):null]})},EMPTY_ARR$1=[],DesignKeyboard=e=>{const{containerDimensions:o,showMatrix:n,definition:r,selectedOptionKeys:s}=e,{keys:a,optionKeys:i}=r.layouts;if(!o)return null;const c=reactExports.useMemo(()=>i?Object.entries(i).flatMap(([u,_])=>{const p=parseInt(u);return s[p]?_[s[p]]:_[0]}):[],[i,s]),l=reactExports.useMemo(()=>[...a,...c],[a,c]),d=getKeyboardCanvas(e.nDimension);return jsx(d,{matrixKeycodes:EMPTY_ARR$1,keys:l,selectable:!1,definition:r,containerDimensions:o,mode:DisplayMode.Design,showMatrix:n})},Design=e=>{const o=Object.values(useAppSelector(getCustomDefinitions)),n=useAppSelector(getDesignDefinitionVersion),r=useAppSelector(getSelectedDefinitionIndex),s=useAppSelector(getDesignSelectedOptionKeys),a=useAppSelector(getShowMatrix),i=reactExports.useMemo(()=>o.filter(l=>l[n]),[o,n]),c=i[r]&&i[r][n];return c&&jsx(DesignKeyboard,{containerDimensions:e.dimensions,definition:c,selectedOptionKeys:s,showMatrix:a,nDimension:e.nDimension})},useGlobalKeys=e=>{const o=!e,n=reactExports.useState({}),[r,s]=n;function a(c){c.preventDefault(),!o&&!c.repeat&&r[getIndexByEvent(c)??-1]!==TestKeyState.KeyDown&&s(l=>({...l,[getIndexByEvent(c)]:TestKeyState.KeyDown}))}const i=c=>{c.preventDefault(),!o&&r[getIndexByEvent(c)]!==TestKeyState.KeyUp&&s(l=>({...l,[getIndexByEvent(c)]:TestKeyState.KeyUp}))};return reactExports.useEffect(()=>(e&&(window.addEventListener("keydown",a),window.addEventListener("keyup",i)),()=>{window.removeEventListener("keydown",a),window.removeEventListener("keyup",i)}),[e]),n},invertTestKeyState=e=>e===TestKeyState.KeyDown?TestKeyState.KeyUp:TestKeyState.KeyDown,useMatrixTest=(e,o,n,r)=>{const s=reactExports.useState([]),[,a]=s,i=useDispatch(),c=reactExports.useRef(e);reactExports.useEffect(()=>{let u=[];const _=()=>{c.current=!1},p=async(C,K,h,g)=>{if(e&&C&&h){const{cols:y,rows:m}=h.matrix,S=Math.ceil(y/8),x=Math.floor(28/S);try{let b=[];for(let T=0;T<m;T+=x){const A=Math.min(m*S-b.length,S*x);b.push(...await C.getKeyboardValue(KeyboardValue.SWITCH_MATRIX_STATE,K>=12?[T]:[],A))}if(!b.some((T,A)=>T^(g[A]||0))){await C.timeout(20),c.current&&p(C,K,h,g);return}a(T=>b.reduce((A,v,D)=>{const O=v^(g[D]||0);if(O===0)return A;const I=~~(D/S),P=8*(S-1-D%S);return Array(Math.max(0,Math.min(8,y-P))).fill(0).reduce((f,R,E)=>{const L=y*I+E+P;return f[L]=(O>>E&1)===1?invertTestKeyState(f[L]):f[L],f},A)},Array.isArray(T)&&T.length===m*y?[...T]:Array(m*y).fill(TestKeyState.Initial))),await C.timeout(20),c.current&&p(C,K,h,b)}catch{c.current=!1,i(setTestMatrixEnabled(!1))}}};return e&&o&&n&&r&&(c.current=!0,p(o,n.protocol,r,u)),()=>{_()}},[e,r,o]);const l=u=>{u.preventDefault()},d=u=>{u.preventDefault()};return reactExports.useEffect(()=>(e&&(window.addEventListener("keydown",l),window.addEventListener("keyup",d)),()=>{window.removeEventListener("keydown",l),window.removeEventListener("keyup",d)}),[e]),s},EMPTY_ARR=[],Test=e=>{const o=useAppDispatch(),[n]=useLocation(),r=n==="/test",s=useAppSelector(getSelectedKeyboardAPI),a=useAppSelector(getSelectedConnectedDevice),i=useAppSelector(getSelectedDefinition),c=useAppSelector(getSelectedKeyDefinitions),l=useAppSelector(getIsTestMatrixEnabled),d=useAppSelector(getTestKeyboardSoundsSettings),u=useAppSelector(A=>getSelectedKeymap(A)||[]),[_,p]=useGlobalKeys(!l&&r),[C,K]=useMatrixTest(l&&r,s,a,i),h=reactExports.useCallback(()=>{p(EMPTY_ARR),K(EMPTY_ARR)},[p,K]),g=reactExports.useContext(TestContext);reactExports.useEffect(()=>{g[0].clearTestKeys!==h&&g[1]({clearTestKeys:h})},[g,h]),reactExports.useEffect(()=>{n!=="/test"&&(o(setTestMatrixEnabled(!1)),g[0].clearTestKeys()),n!=="/"&&o(setLayer(0))},[n]);const y=l&&c?c.map(({row:A,col:v})=>i&&C[A*i.matrix.cols+v]):[],m=l?i:fullKeyboardDefinition,S=l?c:fullKeyboardDefinition.layouts.keys;if(!m||typeof m=="string")return null;const x=l?y:_,{partitionedKeys:b}=reactExports.useMemo(()=>getKeyboardRowPartitions(S),[S]),w=l?C:_,T=b.map(A=>A.map(({row:v,col:D})=>w[v*m.matrix.cols+D]));return jsxs(Fragment,{children:[jsx(TestKeyboard,{definition:m,keys:S,pressedKeys:x,matrixKeycodes:l?u:matrixKeycodes,containerDimensions:e.dimensions,nDimension:e.nDimension}),T&&d.isEnabled&&jsx(TestKeyboardSounds,{pressedKeys:T})]})},TestKeyboard=e=>{const{selectable:o,containerDimensions:n,matrixKeycodes:r,keys:s,pressedKeys:a,definition:i,nDimension:c}=e;if(!n)return null;const l=getKeyboardCanvas(c);return jsx(l,{matrixKeycodes:r,keys:s,selectable:!!o,definition:i,pressedKeys:a,containerDimensions:n,mode:DisplayMode.Test})},ZOOM=5.5*.8,Camera=()=>{const{progress:e}=useProgress(),o=useThree(a=>a.camera),[n,r]=[7,7],s=useSpring({config:{duration:800},from:{x:n}});return React.useEffect(()=>{e===100&&(console.debug("lets animate"),s.x.start(r))},[e]),React.useEffect(()=>(console.debug("mounting"),()=>{console.debug("unmounting")}),[]),useFrame(()=>{s.x.isAnimating&&(o.position.setZ(s.x.get()),o.position.setY(.4*Math.pow(s.x.get()-r,1)),o.updateProjectionMatrix()),o.zoom!==ZOOM&&(o.zoom=ZOOM,o.updateProjectionMatrix())}),jsx(PerspectiveCamera,{"position-z":n,makeDefault:!0,fov:25})},LoaderCubey=React.memo(({visible:e,theme:o})=>{const n=useGLTF(cubeySrc);console.debug(n,"cubey");const r=reactExports.useRef(),s=e?-.3:10,a=getDarkenedColor(o.accent.c,.8),i={"upper-body":new Color(o.mod.c),"lower-body":new Color(o.mod.t),accent:new Color(a),bowtie:new Color(a)};return n.scene.children.forEach(c=>{const l=c.name.split("_")[0],d=i[l];d&&(c.material.color=d)}),useFrame(({clock:c})=>{e&&(r.current.rotation.z=Math.sin(c.elapsedTime)*(Math.PI/40),r.current.rotation.y=Math.PI+Math.sin(.6*c.elapsedTime)*(Math.PI/16),r.current.position.y=s+.2*Math.sin(c.elapsedTime))}),jsx(Fragment,{children:jsx("group",{scale:.6,position:[0,s,-19],children:jsx(PresentationControls,{enabled:!0,global:!0,snap:!0,speed:1,zoom:1,rotation:[0,0,0],polar:[-Math.PI/3,Math.PI/3],config:{mass:2,tension:200,friction:14},children:jsx("group",{ref:r,children:jsx("primitive",{object:n.scene})})})})})},shallowEqual),UpdateUVMaps=()=>{const e=useGLTF(glbSrc,!0).scene;return reactExports.useEffect(()=>{Object.values(e.children).forEach(o=>{if(o.isGroup)return;const n=o,r=1/2.6,s=n.geometry,{min:a}=s.boundingBox,i=19.05,c=.445,l=n.geometry.attributes.position;n.geometry.attributes.uv||n.geometry.setAttribute("uv",new BufferAttribute(new Float32Array(l.count*2),2,!1));const d=n.geometry.attributes.uv,u=new Float32Array(d.count*2);for(let _=0;_<n.geometry.attributes.uv.count;_++)u[2*_]=r*(l.array[_*3]-a.x+c)/i,u[2*_+1]=r*(l.array[_*3+1]-a.y+c)/i;d.copyArray(u),s.center(),d.needsUpdate=!0})},[e]),null};useGLTF.preload(cubeySrc,!0,!0);useGLTF.preload(glbSrc,!0,!0);const KeyboardBG$1=React.memo(e=>{const{onClick:o,visible:n,color:r}=e;return jsxs("mesh",{receiveShadow:!0,position:[0,-5.75,0],rotation:[-Math.PI/2+Math.PI/14,0,0],onClick:o,visible:n,children:[jsx("planeGeometry",{args:[100,100]}),jsx("meshStandardMaterial",{color:r})]})},shallowEqual),CanvasRouter$1=()=>jsx(reactExports.Suspense,{fallback:null,children:jsx(LazyRouter,{})}),LazyRouter=React.lazy(async()=>(await document.fonts.load("bold 16px Fira Sans").finally(),{default:NonSuspenseCanvasRouter})),NonSuspenseCanvasRouter=()=>{const[e]=useLocation(),o=reactExports.useRef(document.body),n=reactExports.useRef(null),r=useAppSelector(getLoadProgress),{progress:s}=useProgress(),a=useAppDispatch(),i=useSize(o),c=Object.values(useAppSelector(getCustomDefinitions)),l=useAppSelector(getSelectedDefinition),d=useAppSelector(getDesignDefinitionVersion),u=useAppSelector(getSelectedTheme),_=reactExports.useMemo(()=>u[dist.KeyColorType.Accent].c,[u]),p=e==="/"&&(!l||r!==1);useGLTF(glbSrc,!0,!0);const C=reactExports.useMemo(()=>c.filter(b=>b[d]),[c,d]),K=e==="/design"&&!C.length,h=e==="/"&&(!l||(r+s/100)/2!==1),g=reactExports.useCallback(()=>{a(updateSelectedKey(null))},[a]),y="hid"in navigator||OVERRIDE_HID_CHECK,m=!y||["/settings","/errors"].includes(e)||K||h,S=useAppSelector(getConfigureKeyboardIsSelectable),x=p;return jsx(Fragment,{children:jsx("div",{style:{height:500,width:"100%",top:0,transform:m?x?i?`translateY(${-300+i.height/2}px)`:"":"translateY(-500px)":"",position:m&&!x?"absolute":"relative",overflow:"visible",zIndex:0,visibility:m&&!x?"hidden":"visible"},ref:n,children:jsxs(Canvas,{flat:!0,shadows:!0,style:{overflow:"visible"},children:[jsx(UpdateUVMaps,{}),jsx(Lights,{}),jsx(KeyboardBG$1,{onClick:g,color:_,visible:!x}),jsx(OrbitControls,{enabled:!1}),jsx(Camera,{}),jsx(LoaderCubey,{theme:u,visible:x&&!l}),jsx(Html,{center:!0,position:[0,x?l?0:-1:10,-19],children:y?l?jsx(Fragment,{children:jsx("div",{style:{textAlign:"center",color:"var(--color_accent)",fontSize:60},children:jsx(FontAwesomeIcon,{spinPulse:!0,icon:faSpinner})})}):jsxs(AccentButtonLarge,{onClick:()=>a(reloadConnectedDevices()),style:{width:"max-content"},children:["Authorize device",jsx(FontAwesomeIcon,{style:{marginLeft:"10px"},icon:faUnlock})]}):null}),jsx(KeyboardGroup$1,{containerRef:n,configureKeyboardIsSelectable:S,loadProgress:r})]})})})},Lights=React.memo(()=>{const a=reactExports.useRef(null);reactExports.useEffect(()=>{a.current&&(a.current.shadow.mapSize.width=2048,a.current.shadow.mapSize.height=2048)},[a.current]);const i=React.useMemo(()=>{const c=new Object3D;return c.position.set(0,0,-19),c.updateMatrixWorld(),c},[]);return jsxs(Fragment,{children:[jsx("ambientLight",{intensity:.8}),jsx(SpotLight,{ref:a,distance:12+3,position:[0,12,-19+2],angle:Math.PI/5,attenuation:5,target:i,intensity:10,castShadow:!0,anglePower:5}),jsx("pointLight",{position:[2,.25,-16],intensity:20}),jsx("pointLight",{position:[-2,.25,-16],intensity:20})]})},shallowEqual),getRouteX$1=e=>{switch(e){case"/debug":return-60;case"/design":return-40;case"/test":return-20;case"/":return 0;default:return-60}},KeyboardGroup$1=React.memo(e=>{const{loadProgress:o,configureKeyboardIsSelectable:n}=e,[r]=useLocation(),s=getRouteX$1(r),a=useSpring({config:config.stiff,x:s}),i=useSize(e.containerRef);return jsx(animated.group,{"position-x":a.x,children:jsx(Keyboards$1,{configureKeyboardIsSelectable:n,loadProgress:o,dimensions:i})})},shallowEqual),Keyboards$1=React.memo(e=>{const{loadProgress:o,dimensions:n,configureKeyboardIsSelectable:r}=e,s=-getRouteX$1("/test"),a=-getRouteX$1("/design"),i=-getRouteX$1("/debug");return jsxs(Fragment,{children:[jsx("group",{visible:o===1,children:jsx(ConfigureKeyboard,{dimensions:n,selectable:r,nDimension:"3D"})}),jsx("group",{"position-x":s,children:jsx(Test,{dimensions:n,nDimension:"3D"})}),jsx("group",{"position-x":a,children:jsx(Design,{dimensions:n,nDimension:"3D"})}),jsx("group",{"position-x":i})]})},shallowEqual),KeyboardBG=styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${e=>`linear-gradient(30deg, rgba(150,150,150,1) 10%,${getDarkenedColor(e.$color)} 50%, rgba(150,150,150,1) 90%)`};
  opacity: ${e=>e.$visible?1:0};
`,KeyboardRouteGroup=styled.div`
  position: absolute;
  left: 0;
  transform: translateX(${e=>e.$position*100}vw);
  height: 100%;
  width: 100vw;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,CanvasRouter=()=>{const[e]=useLocation(),o=reactExports.useRef(document.body),n=reactExports.useRef(null),r=useAppSelector(getLoadProgress),{progress:s}=useProgress(),a=useAppDispatch(),i=useSize(n),c=useSize(o),l=Object.values(useAppSelector(getCustomDefinitions)),d=useAppSelector(getSelectedDefinition),u=useAppSelector(getDesignDefinitionVersion),_=useAppSelector(getSelectedTheme),p=reactExports.useMemo(()=>_[dist.KeyColorType.Accent].c,[_]),C=e==="/"&&(!d||r!==1),K=reactExports.useMemo(()=>l.filter(w=>w[u]),[l,u]),h=e==="/design"&&!K.length,g=e==="/"&&(!d||(r+s/100)/2!==1),y=reactExports.useCallback(()=>{a(updateSelectedKey(null))},[a]),S=!("hid"in navigator||OVERRIDE_HID_CHECK)||["/settings","/errors"].includes(e)||h||g,x=useAppSelector(getConfigureKeyboardIsSelectable),b=C;return jsx(Fragment,{children:jsx("div",{style:{height:500,width:"100%",top:0,transform:S?b?c?`translateY(${-300+c.height/2}px)`:"":"translateY(-500px)":"",position:S&&!b?"absolute":"relative",overflow:"visible",zIndex:2,visibility:S&&!b?"hidden":"visible"},onClick:w=>{w.target.nodeName!=="CANVAS"&&a(clearSelectedKey())},ref:n,children:S?null:jsxs(Fragment,{children:[jsx(KeyboardBG,{onClick:y,$color:p,$visible:!b}),jsx(KeyboardGroup,{containerDimensions:i,configureKeyboardIsSelectable:x,loadProgress:r})]})})})},getRouteX=e=>{switch(e){case"/debug":return-300;case"/design":return-200;case"/test":return-100;case"/":return 0;default:return-300}},KeyboardGroupContainer=styled.div`
  z-index: 2;
  display: block;
  white-space: nowrap;
  height: 100%;
  background: linear-gradient(90deg, red, blue);
  width: max-content;
  position: absolute;
  top: 0;
  left: 0;
`,KeyboardGroup=React.memo(e=>{const{loadProgress:o,configureKeyboardIsSelectable:n,containerDimensions:r}=e,[s]=useLocation(),a=reactExports.useRef(null),i=getRouteX(s),c={transition:"transform 0.25s ease-in-out",transform:`translate(${i}vw, 0px)`},l=reactExports.useCallback(()=>{a.current&&(a.current.style.transition=c.transition)},[a.current]),d=reactExports.useCallback(()=>{a.current&&(a.current.style.transition="")},[a.current]);return reactExports.useEffect(()=>(a.current&&(a.current.addEventListener("transitionend",d),a.current.style.transform=c.transform),()=>{var u;a.current&&((u=a.current)==null||u.removeEventListener("transitionend",d))}),[]),reactExports.useEffect(()=>{a.current&&a.current.style.transform!==c.transform&&(l(),a.current.style.transform=c.transform)},[i]),jsx(KeyboardGroupContainer,{ref:a,children:jsx(Keyboards,{configureKeyboardIsSelectable:n,loadProgress:o,dimensions:r})})},shallowEqual),Keyboards=React.memo(e=>{const{dimensions:o,configureKeyboardIsSelectable:n}=e;return jsxs(Fragment,{children:[jsx(KeyboardRouteGroup,{$position:0,children:jsx(ConfigureKeyboard,{dimensions:o,selectable:n,nDimension:"2D"})}),jsx(KeyboardRouteGroup,{$position:1,children:jsx(Test,{dimensions:o,nDimension:"2D"})}),jsx(KeyboardRouteGroup,{$position:2,children:jsx(Design,{dimensions:o,nDimension:"2D"})}),jsx(KeyboardRouteGroup,{$position:3})]})},shallowEqual),GlobalStyle=createGlobalStyle`
  *:focus {
    outline: none;
  }
`,Routes=()=>{const e="hid"in navigator||OVERRIDE_HID_CHECK,o=useAppSelector(getRenderMode),n=reactExports.useMemo(()=>PANES.map(a=>jsx(Route,{component:a.component,path:a.path},a.key)),[]),r=o==="2D"?CanvasRouter:CanvasRouter$1,s=reactExports.useState({clearTestKeys:()=>{}});return jsx(Fragment,{children:jsxs(TestContext.Provider,{value:s,children:[jsx(GlobalStyle,{}),e&&jsx(UnconnectedGlobalMenu,{}),jsx(r,{}),jsx(Home,{hasHIDSupport:e,children:n})]})})},Root=()=>jsx(Provider_default,{store,children:jsx(Routes,{})});instance.use(Browser).use(initReactI18next).use(resourcesToBackend(e=>__variableDynamicImportRuntimeHelper(Object.assign({"./locales/de.json":()=>__vitePreload(()=>import("./de-17dcdff5.js"),[]),"./locales/en.json":()=>__vitePreload(()=>import("./en-b25bb000.js"),[]),"./locales/es.json":()=>__vitePreload(()=>import("./es-20cda9e5.js"),[]),"./locales/ja.json":()=>__vitePreload(()=>import("./ja-47c4b842.js"),[]),"./locales/ko.json":()=>__vitePreload(()=>import("./ko-3857ce50.js"),[]),"./locales/zh.json":()=>__vitePreload(()=>import("./zh-efceabb4.js"),[])}),`./locales/${e}.json`))).init({fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}});const elem=document.getElementById("root");elem&&(createRoot(elem).render(jsx(Root,{})),document.documentElement.dataset.themeMode=getThemeModeFromStore(),updateCSSVariables(getThemeNameFromStore()));
