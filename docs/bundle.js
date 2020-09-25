/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actors/battleMode/EnemyUnit.js":
/*!********************************************!*\
  !*** ./src/actors/battleMode/EnemyUnit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UnitBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitBase */ \"./src/actors/battleMode/UnitBase.js\");\n\n\n\nclass EnemyUnit extends _UnitBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scene, x, y, hp, damage, name) {\n    super(scene, x, y, 'dragonblue', null, 'EnemyUnit', hp, damage);\n    this.name = name;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EnemyUnit);\n\n//# sourceURL=webpack:///./src/actors/battleMode/EnemyUnit.js?");

/***/ }),

/***/ "./src/actors/battleMode/PlayerUnit.js":
/*!*********************************************!*\
  !*** ./src/actors/battleMode/PlayerUnit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UnitBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitBase */ \"./src/actors/battleMode/UnitBase.js\");\n\n\n\nclass PlayerUnit extends _UnitBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scene, x, y, frame, hp, damage, unitClass) {\n    super(scene, x, y, 'player', frame, 'PlayerUnit', hp, damage);\n    this.unitClass = unitClass;\n  }\n\n  initialize() {\n    super.initialize();\n    this.flipX = true;\n    this.setScale(2);\n  }\n\n  getUnitClass() {\n    return this.unitClass;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerUnit);\n\n//# sourceURL=webpack:///./src/actors/battleMode/PlayerUnit.js?");

/***/ }),

/***/ "./src/actors/battleMode/UnitBase.js":
/*!*******************************************!*\
  !*** ./src/actors/battleMode/UnitBase.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass UnitBase extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Sprite {\n  constructor(scene, x, y, texture, frame, type, hp, damage) {\n    super(scene, x, y, texture, frame);\n    this.scene = scene;\n    this.type = type;\n    this.hp = hp;\n    this.maxHp = hp;\n    this.damage = damage;\n    this.isAlive = true;\n    this.onDeathCallback = null;\n  }\n\n  initialize() {\n    this.scene.add.existing(this);\n  }\n\n  attack(target) {\n    target.takeDamage(this.damage);\n    return this.damage;\n  }\n\n  onDeath(callback) {\n    this.onDeathCallback = callback;\n  }\n\n  takeDamage(damage) {\n    this.hp -= damage;\n\n    if (this.hp <= 0) {\n      this.hp = 0;\n      this.isAlive = false;\n      this.visible = false;\n      if (this.onDeathCallback) this.onDeathCallback();\n    }\n\n    return damage;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UnitBase);\n\n//# sourceURL=webpack:///./src/actors/battleMode/UnitBase.js?");

/***/ }),

/***/ "./src/actors/worldMode/ActorBase.js":
/*!*******************************************!*\
  !*** ./src/actors/worldMode/ActorBase.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass ActorBase extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Sprite {\n  constructor(scene, x, y, spriteKey, type) {\n    super(scene, x, y, spriteKey);\n    this.scene = scene;\n    this.type = type;\n  }\n\n  initialize() {\n    this.scene.add.existing(this);\n    this.scene.physics.world.enableBody(this, 0);\n    this.body.setCollideWorldBounds(true);\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActorBase);\n\n//# sourceURL=webpack:///./src/actors/worldMode/ActorBase.js?");

/***/ }),

/***/ "./src/actors/worldMode/Player.js":
/*!****************************************!*\
  !*** ./src/actors/worldMode/Player.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ActorBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActorBase */ \"./src/actors/worldMode/ActorBase.js\");\n\n\n\nclass Player extends _ActorBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scene, x, y, spriteKey) {\n    super(scene, x, y, spriteKey, 'Player');\n    this.movementSpeed = 80;\n  }\n\n  moveLeft() {\n    this.body.setVelocityY(0);\n    this.body.setVelocityX(-this.movementSpeed);\n    this.flipX = true;\n    this.anims.play('left', true);\n  }\n\n  moveRight() {\n    this.body.setVelocityY(0);\n    this.body.setVelocityX(this.movementSpeed);\n    this.flipX = false;\n    this.anims.play('right', true);\n  }\n\n  moveUp() {\n    this.body.setVelocityX(0);\n    this.body.setVelocityY(-this.movementSpeed);\n    this.anims.play('up', true);\n  }\n\n  moveDown() {\n    this.body.setVelocityX(0);\n    this.body.setVelocityY(this.movementSpeed);\n    this.anims.play('down', true);\n  }\n\n  idle() {\n    this.body.setVelocityY(0);\n    this.body.setVelocityX(0);\n    this.anims.stop();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/actors/worldMode/Player.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes */ \"./src/scenes/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.AUTO,\n  pixelArt: true,\n  scale: {\n    mode: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scale.FIT,\n    autoCenter: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.DOM.CENTER_BOTH,\n    width: 320,\n    height: 240,\n    parent: 'content'\n  },\n  physics: {\n    default: 'arcade',\n    arcade: {\n      debug: false\n    }\n  },\n  localStorageName: 'phaseres6webpack',\n  scene: _scenes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/controls/Controls.js":
/*!**********************************!*\
  !*** ./src/controls/Controls.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Controls {\n  constructor(scene) {\n    this.keyW = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.W);\n    this.keyS = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.S);\n    this.keyA = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.A);\n    this.keyD = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.D);\n  }\n\n  isMoveLeftActive() {\n    return this.keyA.isDown;\n  }\n\n  isMoveRightActive() {\n    return this.keyD.isDown;\n  }\n\n  isMoveUpActive() {\n    return this.keyW.isDown;\n  }\n\n  isMoveDownActive() {\n    return this.keyS.isDown;\n  }\n\n  reset() {\n    this.keyA.isDown = false;\n    this.keyD.isDown = false;\n    this.keyW.isDown = false;\n    this.keyS.isDown = false;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controls);\n\n//# sourceURL=webpack:///./src/controls/Controls.js?");

/***/ }),

/***/ "./src/environment/EnemySpawns.js":
/*!****************************************!*\
  !*** ./src/environment/EnemySpawns.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass EnemySpawns {\n  constructor(scene, numberOfSpawns) {\n    this.scene = scene;\n    this.spawns = null;\n    this.numberOfSpawns = numberOfSpawns;\n    this.spawnWidth = 20;\n    this.spawnHeight = 20;\n  }\n\n  initialize(player) {\n    this.spawns = this.scene.physics.add.group({\n      classType: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Zone\n    });\n\n    for (let i = 0; i < this.numberOfSpawns; i++) {\n      const x = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.RND.between(0, this.scene.physics.world.bounds.width);\n      const y = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.RND.between(0, this.scene.physics.world.bounds.height);\n      this.spawns.create(x, y, this.spawnWidth, this.spawnHeight);\n    }\n\n    this.scene.physics.add.overlap(player, this.spawns, this.onMeetEnemy, null, this);\n  }\n\n  onMeetEnemy(player, zone) {\n    // move spawn zone somewhere else\n    zone.x = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.RND.between(0, this.scene.physics.world.bounds.width);\n    zone.y = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.RND.between(0, this.scene.physics.world.bounds.height);\n\n    if (this.scene.hasBattleBeenTriggered) {\n      return;\n    } // transition to next scene\n\n\n    this.scene.hasBattleBeenTriggered = true;\n    this.scene.cameras.main.fade(300);\n    this.scene.time.addEvent({\n      delay: 300,\n      callback: () => {\n        this.scene.scene.sleep();\n        this.scene.scene.launch('BattleScene');\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EnemySpawns);\n\n//# sourceURL=webpack:///./src/environment/EnemySpawns.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n\n\nclass Game extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game {\n  constructor() {\n    super(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n\n}\n\nwindow.game = new Game();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/scenes/BattleInterfaceScene.js":
/*!********************************************!*\
  !*** ./src/scenes/BattleInterfaceScene.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_BattleModeMenuContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/BattleModeMenuContainer */ \"./src/ui/BattleModeMenuContainer.js\");\n/* harmony import */ var _ui_BattleModeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/BattleModeMessage */ \"./src/ui/BattleModeMessage.js\");\n\n\n\n\nclass BattleInterfaceScene extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super({\n      key: 'BattleInterfaceScene'\n    });\n    this.ownerScene = null;\n  }\n\n  preload() {}\n\n  init(ownerScene) {\n    // this pattern allows UI scenes to be decoupled from the scenes that use them\n    this.ownerScene = ownerScene;\n  }\n\n  create() {\n    // the scene constructor is only called once during game execution (even if the scene is shut down and started again).\n    // so, any properties that contain scene state need to be initialized in the create method.\n    this.initProperties();\n    this.drawMenuBackgrounds();\n    this.menus = new _ui_BattleModeMenuContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, 0, 153);\n    this.menus.initialize();\n    this.remapPlayerUnits(this.ownerScene.getPlayerUnits());\n    this.remapEnemyUnits(this.ownerScene.getEnemyUnits());\n    this.menus.activateCurrentMenu();\n    this.ownerScene.events.on('battleEnding', outcome => {\n      const {\n        isPlayerDefeated,\n        isPlayerVictorious\n      } = outcome;\n      const message = isPlayerDefeated ? 'Defeat!' : 'Victory!';\n      this.events.emit('message', message);\n    });\n    this.ownerScene.events.on('playerTurnBegin', this.menus.onPlayerTurnBegin, this.menus);\n    this.ownerScene.events.on('unitActionTaken', data => {\n      const {\n        action,\n        sourceUnitName,\n        targetUnitName,\n        damage\n      } = data;\n      let messageText = null;\n\n      switch (action) {\n        case \"attack\":\n          messageText = `${sourceUnitName} attacks ${targetUnitName} for ${damage} damage!`;\n          break;\n\n        default:\n          throw Error(`unsupported action ${action}`);\n      }\n\n      this.events.emit('message', messageText);\n    });\n    this.events.on('playerActionSelected', this.menus.onPlayerActionSelected, this.menus);\n    this.events.on('enemySelected', enemyUnitIndex => {\n      this.menus.deactivateAll();\n      this.ownerScene.handlePlayerAction('attack', enemyUnitIndex);\n    });\n    this.message = new _ui_BattleModeMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, 160, 30);\n    this.message.initialize();\n    setTimeout(() => {\n      this.ownerScene.onInterfaceCreated();\n    }, 0);\n    this.events.on('shutdown', () => {\n      /* \n        There is a lesson in this mess...  and it is:\n           Manage event subscription and event unsubscription in one place.\n         Do not subscribe objects directly to scene management events.  Instead, pass in callbacks\n        as constructor parameters.  These callbacks will be created in the scene, and it\n        will be clear what events need to be cleaned up before the scene is shut down.\n      */\n      this.ownerScene.events.off('playerTurnBegin');\n      this.ownerScene.events.off('unitActionTaken');\n      this.ownerScene.events.off('battleEnding');\n      this.events.off('playerActionSelected');\n      this.events.off('enemySelected');\n      this.events.off('message');\n      this.events.off('shutdown');\n    });\n  }\n\n  update() {}\n\n  initProperties() {\n    this.menus = null;\n    this.menuBackgrounds = null;\n    this.message = null;\n  }\n\n  remapPlayerUnits(units) {\n    this.menus.getPlayerUnitsMenu().remap(units.map(u => {\n      return {\n        text: u.getUnitClass(),\n        boundObject: u\n      };\n    }));\n  }\n\n  remapEnemyUnits(units) {\n    this.menus.getEnemiesMenu().remap(units.map(u => {\n      return {\n        text: u.name,\n        boundObject: u\n      };\n    }));\n  }\n\n  drawMenuBackgrounds() {\n    this.menuBackgrounds = this.add.graphics();\n    this.menuBackgrounds.lineStyle(1, 0xffffff);\n    this.menuBackgrounds.fillStyle(0x031f4c, 1);\n    this.menuBackgrounds.strokeRect(2, 150, 90, 100);\n    this.menuBackgrounds.fillRect(2, 150, 90, 100);\n    this.menuBackgrounds.strokeRect(95, 150, 90, 100);\n    this.menuBackgrounds.fillRect(95, 150, 90, 100);\n    this.menuBackgrounds.strokeRect(188, 150, 130, 100);\n    this.menuBackgrounds.fillRect(188, 150, 130, 100);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BattleInterfaceScene);\n\n//# sourceURL=webpack:///./src/scenes/BattleInterfaceScene.js?");

/***/ }),

/***/ "./src/scenes/BattleScene.js":
/*!***********************************!*\
  !*** ./src/scenes/BattleScene.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actors_battleMode_PlayerUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actors/battleMode/PlayerUnit */ \"./src/actors/battleMode/PlayerUnit.js\");\n/* harmony import */ var _actors_battleMode_EnemyUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actors/battleMode/EnemyUnit */ \"./src/actors/battleMode/EnemyUnit.js\");\n\n\n\n\nclass BattleScene extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super({\n      key: 'BattleScene'\n    });\n  }\n  /* Public interface */\n\n\n  getPlayerUnits() {\n    return this.playerUnits;\n  }\n\n  getEnemyUnits() {\n    return this.enemyUnits;\n  }\n\n  handlePlayerAction(action, targetIndex) {\n    const units = this.getAllUnits();\n\n    switch (action) {\n      case 'attack':\n        const damageDone = units[this.turnIndex].attack(this.enemyUnits[targetIndex]);\n        this.events.emit('unitActionTaken', {\n          action: 'attack',\n          sourceUnitName: units[this.turnIndex].unitClass,\n          targetUnitName: this.enemyUnits[targetIndex].name,\n          damage: damageDone\n        });\n        break;\n\n      default:\n        throw Error(`unsupported player action ${action}`);\n    }\n\n    this.turnIndex++;\n    this.time.addEvent({\n      delay: 3000,\n      callback: this.nextTurn,\n      callbackScope: this\n    });\n  }\n\n  onInterfaceCreated() {\n    this.nextTurn();\n  }\n  /* Phaser hooks */\n\n\n  preload() {}\n\n  create() {\n    // the scene constructor is only called once during game execution (even if the scene is shut down and started again).\n    // so, any properties that contain scene state need to be initialized in the create method.\n    this.initProperties();\n    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');\n    this.playerUnits = [this.createPlayerUnit(250, 50, 'Warrior'), this.createPlayerUnit(250, 100, 'Mage')];\n    this.enemyUnits = [this.createEnemyUnit(50, 50), this.createEnemyUnit(50, 100)]; // run the interface scene at the same time as this one\n\n    this.scene.launch('BattleInterfaceScene', this);\n  }\n\n  update() {}\n  /* Private methods */\n\n\n  initProperties() {\n    this.playerUnits = null;\n    this.enemyUnits = null;\n    this.uiScene = null;\n    this.turnIndex = 0;\n  }\n\n  getAllUnits() {\n    return this.playerUnits.concat(this.enemyUnits);\n  }\n\n  createEnemyUnit(x, y) {\n    const unit = new _actors_battleMode_EnemyUnit__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, x, y, 50, 3, 'Dragon');\n    unit.initialize();\n    return unit;\n  }\n\n  createPlayerUnit(x, y, unitClass) {\n    const hp = unitClass === 'Warrior' ? 100 : 80;\n    const damage = unitClass === 'Warrior' ? 20 : 8;\n    const frame = unitClass === 'Warrior' ? 1 : 4;\n    const unit = new _actors_battleMode_PlayerUnit__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, x, y, frame, hp, damage, unitClass);\n    unit.initialize();\n    return unit;\n  }\n\n  nextTurn() {\n    const isPlayerVictorious = this.enemyUnits.every(u => !u.isAlive);\n    const isPlayerDefeated = this.playerUnits.every(u => !u.isAlive);\n\n    if (isPlayerVictorious || isPlayerDefeated) {\n      this.events.emit('battleEnding', {\n        isPlayerDefeated,\n        isPlayerVictorious\n      });\n      this.time.addEvent({\n        delay: 3000,\n        callback: this.exitBattle,\n        callbackScope: this\n      });\n      return;\n    }\n\n    const allUnits = this.getAllUnits(); // if there are no more units, we start again from the first one\n\n    if (this.turnIndex >= allUnits.length) {\n      this.turnIndex = 0;\n    }\n\n    const unitForTurn = allUnits[this.turnIndex];\n\n    if (unitForTurn.isAlive) {\n      if (unitForTurn instanceof _actors_battleMode_PlayerUnit__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        this.events.emit('playerTurnBegin', this.turnIndex);\n      } else if (unitForTurn instanceof _actors_battleMode_EnemyUnit__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n        // attack a random player unit\n        var randomIndex = Math.floor(Math.random() * this.playerUnits.length);\n        const damageDone = unitForTurn.attack(this.playerUnits[randomIndex]);\n        this.events.emit('unitActionTaken', {\n          action: 'attack',\n          sourceUnitName: unitForTurn.name,\n          targetUnitName: this.playerUnits[randomIndex].unitClass,\n          damage: damageDone\n        });\n        this.turnIndex++;\n        this.time.addEvent({\n          delay: 3000,\n          callback: this.nextTurn,\n          callbackScope: this\n        });\n      } else {\n        throw Error(`unsupported unit type`);\n      }\n    } else {\n      this.turnIndex++;\n      this.nextTurn();\n    }\n  }\n\n  exitBattle() {\n    this.scene.stop();\n    this.scene.stop('BattleInterfaceScene');\n    this.scene.wake('WorldScene');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BattleScene);\n\n//# sourceURL=webpack:///./src/scenes/BattleScene.js?");

/***/ }),

/***/ "./src/scenes/BootScene.js":
/*!*********************************!*\
  !*** ./src/scenes/BootScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass BootScene extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super({\n      key: 'BootScene'\n    });\n  }\n\n  preload() {\n    // map tiles\n    this.load.image('tiles', 'assets/map/extruded-tileset.png'); // map JSON\n\n    this.load.tilemapTiledJSON('map', 'assets/map/map.json');\n    this.load.spritesheet('player', 'assets/RPG_assets.png', {\n      frameWidth: 16,\n      frameHeight: 16\n    });\n    this.load.image('dragonblue', 'assets/dragonblue.png');\n    this.load.image('dragonorrange', 'assets/dragonorrange.png');\n  }\n\n  create() {\n    this.scene.start('WorldScene');\n  }\n\n  update() {}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BootScene);\n\n//# sourceURL=webpack:///./src/scenes/BootScene.js?");

/***/ }),

/***/ "./src/scenes/WorldScene.js":
/*!**********************************!*\
  !*** ./src/scenes/WorldScene.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actors_worldMode_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actors/worldMode/Player */ \"./src/actors/worldMode/Player.js\");\n/* harmony import */ var _controls_Controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controls/Controls */ \"./src/controls/Controls.js\");\n/* harmony import */ var _environment_EnemySpawns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment/EnemySpawns */ \"./src/environment/EnemySpawns.js\");\n\n\n\n\n\nclass WorldScene extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super({\n      key: 'WorldScene'\n    });\n    this.map = null;\n    this.tiles = null;\n    this.grass = null;\n    this.obstacles = null;\n    this.enemySpawns = null;\n    this.player = null;\n    this.controls = null;\n    this.hasBattleBeenTriggered = false;\n  }\n\n  preload() {}\n\n  create() {\n    this.createAnimations();\n    this.map = this.make.tilemap({\n      key: 'map'\n    });\n    this.tiles = this.map.addTilesetImage('spritesheet', 'tiles');\n    this.grass = this.map.createStaticLayer('Grass', this.tiles, 0, 0);\n    this.obstacles = this.map.createStaticLayer('Obstacles', this.tiles, 0, 0); // enable collision for all obstacles\n\n    this.obstacles.setCollisionByExclusion([-1]);\n    this.player = new _actors_worldMode_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, 50, 100, 'player');\n    this.player.initialize();\n    this.controls = new _controls_Controls__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    this.enemySpawns = new _environment_EnemySpawns__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 20);\n    this.enemySpawns.initialize(this.player); // colliders\n\n    this.physics.add.collider(this.player, this.obstacles); // set world bounds equal to map dimensions\n\n    this.physics.world.bounds.width = this.map.widthInPixels;\n    this.physics.world.bounds.height = this.map.heightInPixels;\n    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);\n    this.cameras.main.startFollow(this.player, true);\n    this.cameras.main.roundPixels = true;\n    this.sys.events.on('wake', () => {\n      this.cameras.main.resetFX();\n      this.hasBattleBeenTriggered = false; // necessary because control state gets stuck between scene switches\n\n      this.controls.reset();\n    });\n  }\n\n  update() {\n    if (this.controls.isMoveDownActive()) {\n      this.player.moveDown();\n    } else if (this.controls.isMoveUpActive()) {\n      this.player.moveUp();\n    } else if (this.controls.isMoveLeftActive()) {\n      this.player.moveLeft();\n    } else if (this.controls.isMoveRightActive()) {\n      this.player.moveRight();\n    } else {\n      this.player.idle();\n    }\n  }\n\n  createAnimations() {\n    this.anims.create({\n      key: 'left',\n      frames: this.anims.generateFrameNumbers('player', {\n        frames: [1, 7, 1, 13]\n      }),\n      frameRate: 10,\n      repeat: -1\n    });\n    this.anims.create({\n      key: 'right',\n      frames: this.anims.generateFrameNumbers('player', {\n        frames: [1, 7, 1, 13]\n      }),\n      frameRate: 10,\n      repeat: -1\n    });\n    this.anims.create({\n      key: 'up',\n      frames: this.anims.generateFrameNumbers('player', {\n        frames: [2, 8, 2, 14]\n      }),\n      frameRate: 10,\n      repeat: -1\n    });\n    this.anims.create({\n      key: 'down',\n      frames: this.anims.generateFrameNumbers('player', {\n        frames: [0, 6, 0, 12]\n      }),\n      frameRate: 10,\n      repeat: -1\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorldScene);\n\n//# sourceURL=webpack:///./src/scenes/WorldScene.js?");

/***/ }),

/***/ "./src/scenes/index.js":
/*!*****************************!*\
  !*** ./src/scenes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BootScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BootScene */ \"./src/scenes/BootScene.js\");\n/* harmony import */ var _WorldScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorldScene */ \"./src/scenes/WorldScene.js\");\n/* harmony import */ var _BattleScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BattleScene */ \"./src/scenes/BattleScene.js\");\n/* harmony import */ var _BattleInterfaceScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BattleInterfaceScene */ \"./src/scenes/BattleInterfaceScene.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_BootScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _WorldScene__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _BattleScene__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _BattleInterfaceScene__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/scenes/index.js?");

/***/ }),

/***/ "./src/ui/ActionsMenu.js":
/*!*******************************!*\
  !*** ./src/ui/ActionsMenu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BattleModeMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BattleModeMenu */ \"./src/ui/BattleModeMenu.js\");\n\n\n\nclass ActionsMenu extends _BattleModeMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scene, x, y) {\n    super(scene, x, y);\n    this.scene = scene;\n  }\n\n  initialize() {\n    super.initialize();\n    this.addMenuItem('Attack');\n  }\n\n  confirm() {\n    super.confirm();\n    this.scene.events.emit('playerActionSelected');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActionsMenu);\n\n//# sourceURL=webpack:///./src/ui/ActionsMenu.js?");

/***/ }),

/***/ "./src/ui/BattleModeMenu.js":
/*!**********************************!*\
  !*** ./src/ui/BattleModeMenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BattleModeMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BattleModeMenuItem */ \"./src/ui/BattleModeMenuItem.js\");\n\n\n\nclass BattleModeMenu extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Container {\n  constructor(scene, x, y) {\n    super(scene, x, y);\n    this.scene = scene;\n    this.menuItems = [];\n    this.currentMenuItemIndex = 0;\n    this.x = x;\n    this.y = y;\n  }\n\n  initialize() {\n    this.scene.add.existing(this);\n  }\n\n  addMenuItem(menuItemText, boundObject) {\n    const item = new _BattleModeMenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, 0, this.menuItems.length * 20, menuItemText, boundObject);\n    item.initialize();\n    this.menuItems.push(item); // add to container\n\n    this.add(item);\n    this.onMenuItemAdded(item, boundObject);\n  }\n\n  onMenuItemAdded(menuItem, boundObject) {}\n\n  activate() {\n    const activeMenuItems = this.menuItems.filter(i => i.active);\n    if (activeMenuItems.length === 0) throw Error('no items in activated menu');\n    activeMenuItems[0].select();\n    this.currentMenuItemIndex = this.menuItems.indexOf(activeMenuItems[0]);\n  }\n\n  selectNext() {\n    this.changeSelection(() => {\n      do {\n        this.currentMenuItemIndex--;\n        if (this.currentMenuItemIndex < 0) this.currentMenuItemIndex = this.menuItems.length - 1;\n      } while (!this.menuItems[this.currentMenuItemIndex].active);\n    });\n  }\n\n  selectPrevious() {\n    this.changeSelection(() => {\n      do {\n        this.currentMenuItemIndex++;\n        if (this.currentMenuItemIndex >= this.menuItems.length) this.currentMenuItemIndex = 0;\n      } while (!this.menuItems[this.currentMenuItemIndex].active);\n    });\n  }\n\n  selectItem(index) {\n    this.changeSelection(() => {\n      if (!this.menuItems[index].active) throw Error(`item at index ${index} is inactive`);\n      this.currentMenuItemIndex = index;\n    });\n  }\n\n  deselect() {\n    this.menuItems[this.currentMenuItemIndex].deselect();\n    this.currentMenuItemIndex = 0;\n  }\n\n  confirm() {}\n\n  clear() {\n    this.menuItems.forEach(i => i.destroy());\n    this.menuItems = [];\n    this.currentMenuItemIndex = 0;\n  }\n\n  remap(options) {\n    this.clear();\n    options.forEach(o => this.addMenuItem(o.text, o.boundObject));\n  }\n\n  changeSelection(updateIndexFunc) {\n    this.menuItems[this.currentMenuItemIndex].deselect();\n    updateIndexFunc();\n    this.menuItems[this.currentMenuItemIndex].select();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BattleModeMenu);\n\n//# sourceURL=webpack:///./src/ui/BattleModeMenu.js?");

/***/ }),

/***/ "./src/ui/BattleModeMenuContainer.js":
/*!*******************************************!*\
  !*** ./src/ui/BattleModeMenuContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ActionsMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionsMenu */ \"./src/ui/ActionsMenu.js\");\n/* harmony import */ var _EnemiesMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnemiesMenu */ \"./src/ui/EnemiesMenu.js\");\n/* harmony import */ var _PlayerUnitsMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerUnitsMenu */ \"./src/ui/PlayerUnitsMenu.js\");\n\n\n\n\n\nclass BattleModeMenuContainer extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Container {\n  constructor(scene, x, y) {\n    super(scene, x, y);\n    this.scene = scene;\n    this.playerUnitsMenu = null;\n    this.actionsMenu = null;\n    this.enemiesMenu = null;\n    this.currentMenu = null;\n  }\n\n  initialize() {\n    this.playerUnitsMenu = new _PlayerUnitsMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.scene, 195, 0);\n    this.actionsMenu = new _ActionsMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, 100, 0);\n    this.enemiesMenu = new _EnemiesMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.scene, 8, 0);\n    this.playerUnitsMenu.initialize();\n    this.actionsMenu.initialize();\n    this.enemiesMenu.initialize();\n    this.currentMenu = this.playerUnitsMenu;\n    this.add(this.playerUnitsMenu);\n    this.add(this.actionsMenu);\n    this.add(this.enemiesMenu);\n    this.scene.add.existing(this);\n    this.scene.input.keyboard.on('keydown', this.onKeyInput, this);\n  }\n\n  activateCurrentMenu() {\n    this.currentMenu.activate();\n  }\n\n  deactivateAll() {\n    this.playerUnitsMenu.deselect();\n    this.actionsMenu.deselect();\n    this.enemiesMenu.deselect();\n    this.currentMenu = null;\n  }\n\n  onPlayerTurnBegin(unitIndex) {\n    this.playerUnitsMenu.selectItem(unitIndex);\n    this.actionsMenu.selectItem(0);\n    this.currentMenu = this.actionsMenu;\n    this.activateCurrentMenu();\n  }\n\n  onPlayerActionSelected() {\n    this.currentMenu = this.enemiesMenu;\n    this.enemiesMenu.activate();\n  }\n\n  onKeyInput(event) {\n    if (this.currentMenu) {\n      if (event.code === \"ArrowUp\") {\n        this.currentMenu.selectNext();\n      } else if (event.code === \"ArrowDown\") {\n        this.currentMenu.selectPrevious();\n      } else if (event.code === \"ArrowRight\" || event.code === \"Shift\") {} else if (event.code === \"Space\" || event.code === \"Enter\" || event.code === \"ArrowLeft\") {\n        this.currentMenu.confirm();\n      }\n    }\n  }\n\n  getCurrentMenu() {\n    return this.currentMenu;\n  }\n\n  getPlayerUnitsMenu() {\n    return this.playerUnitsMenu;\n  }\n\n  getActionsMenu() {\n    return this.actionsMenu;\n  }\n\n  getEnemiesMenu() {\n    return this.enemiesMenu;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BattleModeMenuContainer);\n\n//# sourceURL=webpack:///./src/ui/BattleModeMenuContainer.js?");

/***/ }),

/***/ "./src/ui/BattleModeMenuItem.js":
/*!**************************************!*\
  !*** ./src/ui/BattleModeMenuItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass BattleModeMenuItem extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Text {\n  constructor(scene, x, y, text, boundObject) {\n    super(scene, x, y, text, {\n      color: '#ffffff',\n      align: 'left',\n      fontSize: 15\n    });\n    this.scene = scene;\n    this.boundObject = boundObject;\n  }\n\n  initialize() {\n    this.scene.add.existing(this);\n  }\n\n  select() {\n    if (!this.active) throw Error(`selected menu item is not active`);\n    this.setColor('#f8ff38');\n  }\n\n  deselect() {\n    this.setColor('#ffffff');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BattleModeMenuItem);\n\n//# sourceURL=webpack:///./src/ui/BattleModeMenuItem.js?");

/***/ }),

/***/ "./src/ui/BattleModeMessage.js":
/*!*************************************!*\
  !*** ./src/ui/BattleModeMessage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass BattleModeMessage extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Container {\n  constructor(scene, x, y) {\n    super(scene, x, y);\n    this.scene = scene;\n    this.text = null;\n    this.hideTimer = null;\n  }\n\n  initialize() {\n    const graphics = this.scene.add.graphics();\n    this.add(graphics);\n    graphics.lineStyle(1, 0xffffff, 0.8);\n    graphics.fillStyle(0x031f4c, 0.3);\n    graphics.strokeRect(-90, -15, 180, 30);\n    graphics.fillRect(-90, -15, 180, 30);\n    this.text = new phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Text(this.scene, 0, 0, \"\", {\n      color: '#ffffff',\n      align: 'center',\n      fontSize: 13,\n      wordWrap: {\n        width: 160,\n        useAdvancedWrap: true\n      }\n    });\n    this.add(this.text);\n    this.text.setOrigin(0.5);\n    this.scene.events.on(\"message\", this.showMessage, this);\n    this.visible = false;\n    this.scene.add.existing(this);\n  }\n\n  showMessage(text) {\n    this.text.setText(text);\n    this.visible = true;\n    if (this.hideTimer) this.hideTimer.remove(false);\n    this.hideTimer = this.scene.time.addEvent({\n      delay: 2000,\n      callback: this.hideMessage,\n      callbackScope: this\n    });\n  }\n\n  hideMessage() {\n    this.hideTimer.remove(false);\n    this.hideTimer = null;\n    this.visible = false;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BattleModeMessage);\n\n//# sourceURL=webpack:///./src/ui/BattleModeMessage.js?");

/***/ }),

/***/ "./src/ui/EnemiesMenu.js":
/*!*******************************!*\
  !*** ./src/ui/EnemiesMenu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BattleModeMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BattleModeMenu */ \"./src/ui/BattleModeMenu.js\");\n\n\n\nclass EnemiesMenu extends _BattleModeMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scene, x, y) {\n    super(scene, x, y);\n    this.scene = scene;\n  }\n\n  onMenuItemAdded(menuItem, enemyUnit) {\n    enemyUnit.onDeath(() => {\n      menuItem.visible = false;\n      menuItem.active = false;\n    });\n  }\n\n  confirm() {\n    super.confirm();\n    this.scene.events.emit('enemySelected', this.currentMenuItemIndex);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EnemiesMenu);\n\n//# sourceURL=webpack:///./src/ui/EnemiesMenu.js?");

/***/ }),

/***/ "./src/ui/PlayerUnitsMenu.js":
/*!***********************************!*\
  !*** ./src/ui/PlayerUnitsMenu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BattleModeMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BattleModeMenu */ \"./src/ui/BattleModeMenu.js\");\n\n\n\nclass PlayerUnitsMenu extends _BattleModeMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scene, x, y) {\n    super(scene, x, y);\n    this.playerUnits = [];\n  }\n\n  initialize(playerUnits) {\n    super.initialize();\n    this.playerUnits = playerUnits;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerUnitsMenu);\n\n//# sourceURL=webpack:///./src/ui/PlayerUnitsMenu.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/ken/code/github/phaser-turn-based-rpg/src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });