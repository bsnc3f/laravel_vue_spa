/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Add.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Add.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      message: "",
      books: {},
      weekday: "7",
      program: "おはよう",
      name: "",
      nca: true,
      ncb: false,
      ncc: false,
      func: "注意喚起",
      startTime: "10:00:00",
      duration: 60,
      endTime: "10:03:00",
      blink: "45",
      isValid: true,
      msg1: "msgA",
      msg2: "msgB",
      msg3: "msgC",
      bgColor: "#008080",
      textColor: "#ffffff",
      isDone: false,
      isShow: true,
      list: [{
        val: "7",
        txt: "平日"
      }, {
        val: "8",
        txt: "土日祝"
      }, {
        val: "1",
        txt: "月"
      }, {
        val: "2",
        txt: "火"
      }, {
        val: "3",
        txt: "水"
      }, {
        val: "4",
        txt: "木"
      }, {
        val: "5",
        txt: "金"
      }, {
        val: "6",
        txt: "土"
      }, {
        val: "0",
        txt: "日"
      }, {
        val: "9",
        txt: "祝"
      }],
      lists: [{
        val: "おはよう",
        txt: "おはよう"
      }, {
        val: "news",
        txt: "news"
      }, {
        val: "首都圏",
        txt: "首都圏"
      }, {
        val: "シブ5時",
        txt: "シブ5時"
      }, {
        val: "N7",
        txt: "N7"
      }, {
        val: "NW9",
        txt: "NW9"
      }, {
        val: "きょう一日",
        txt: "きょう一日"
      }]
    };
  },
  methods: {
    addBook: function addBook() {
      var _this = this;

      axios.post("/api/books/", {
        weekday: this.weekday,
        program: this.program,
        name: this.name,
        nca: this.nca,
        ncb: this.ncb,
        ncc: this.ncc,
        func: this.func,
        startTime: this.startTime,
        duration: this.duration,
        endTime: this.endTime,
        blink: this.blink,
        isValid: this.isValid,
        msg1: this.msg1,
        msg2: this.msg2,
        msg3: this.msg3,
        bgColor: this.bgColor,
        textColor: this.textColor,
        isDone: this.isDone,
        isShow: this.isShow
      }).then(function (response) {
        _this.$router.push({
          name: "index"
        });
      })["catch"](function (erorr) {
        _this.message = erorr;
      });
    },
    toggle: function toggle(e) {
      this.isValid = !this.isValid;
    },
    onChangeColor: function onChangeColor(hexcolor) {
      var r = parseInt(hexcolor.substr(1, 2), 16);
      var g = parseInt(hexcolor.substr(3, 2), 16);
      var b = parseInt(hexcolor.substr(5, 2), 16);
      this.textColor = (r * 299 + g * 587 + b * 114) / 1000 < 128 ? "#ffffff" : "#000000"; // return (this.textColor =
      //   (r * 299 + g * 587 + b * 114) / 1000 < 128 ? "#ffffff" : "#000000");
    }
  },
  mounted: function mounted() {
    // セレクトボックスが1つだけの場合 (id管理)
    //プルダウンリストをループ処理で値を取り出してセレクトボックスにセットする
    for (var i = 0; i < this.list.length; i++) {
      var _opt = document.createElement("option");

      _opt.value = this.list[i].val; //value値

      _opt.text = this.list[i].txt; //テキスト値

      document.getElementById("weekday").appendChild(_opt); // document.getElementById("PullDownList").appendChild(opt);
    } // セレクトボックスが複数の場合 (class管理)


    var opt = document.createElement("option");
    var tmp = document.getElementsByClassName("PullDownList2");

    for (var i = 0; i < this.lists.length; i++) {
      for (var j = 0; j < tmp.length; j++) {
        opt = document.createElement("option");
        opt.value = this.lists[i].val; //value値

        opt.text = this.lists[i].txt; //テキスト値

        tmp[j].appendChild(opt);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      message: "",
      book: {}
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/books/" + this.$route.params.id).then(function (response) {
      return _this.book = response.data;
    })["catch"](function (erorr) {
      return console.log(error);
    });
  },
  methods: {
    updateCancel: function updateCancel() {
      this.$router.push({
        name: "index"
      });
    },
    updateBook: function updateBook() {
      var _this2 = this;

      axios.put("/api/books/" + this.book.id, {
        weekday: this.book.weekday,
        program: this.book.program,
        name: this.book.name,
        nca: this.book.nca,
        ncb: this.book.ncb,
        ncc: this.book.ncc,
        func: this.book.func,
        startTime: this.book.startTime,
        duration: this.book.duration,
        endTime: this.book.endTime,
        blink: this.book.blink,
        isValid: this.book.isValid,
        msg1: this.book.msg1,
        msg2: this.book.msg2,
        msg3: this.book.msg3,
        bgColor: this.book.bgColor,
        textColor: this.book.textColor,
        isDone: this.book.isDone,
        isShow: this.book.isShow
      }).then(function (response) {
        _this2.$router.push({
          name: "index"
        });
      })["catch"](function (erorr) {
        _this2.message = erorr;
      });
    },
    onChangeColor: function onChangeColor(hexcolor) {
      var r = parseInt(hexcolor.substr(1, 2), 16);
      var g = parseInt(hexcolor.substr(3, 2), 16);
      var b = parseInt(hexcolor.substr(5, 2), 16);
      this.book.textColor = (r * 299 + g * 587 + b * 114) / 1000 < 128 ? "#ffffff" : "#000000"; // return (this.textColor =
      //   (r * 299 + g * 587 + b * 114) / 1000 < 128 ? "#ffffff" : "#000000");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: c:\\laravel\\vue_spa\\resources\\js\\components\\Index.vue: Unexpected token, expected \")\" (278:67)\n\n\u001b[0m \u001b[90m 276 |\u001b[39m     isShow\u001b[33m:\u001b[39m \u001b[36mfunction\u001b[39m() {\u001b[0m\n\u001b[0m \u001b[90m 277 |\u001b[39m       \u001b[36mreturn\u001b[39m \u001b[36mfunction\u001b[39m(id) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 278 |\u001b[39m       \u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mbooks[id]\u001b[33m.\u001b[39mstartTime \u001b[33m<\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtest_set \u001b[33m&&\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtest_set \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mbooks[id]\u001b[33m.\u001b[39mendTime) {\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m                                                                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 279 |\u001b[39m       \u001b[90m// if(this.books[id].startTime > this.test_set && this.test_now < this.books[id].endTime) {\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 280 |\u001b[39m         \u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcaution2 \u001b[33m=\u001b[39m \u001b[36mtrue\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 281 |\u001b[39m       }\u001b[0m\n    at Parser._raise (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:776:17)\n    at Parser.raiseWithData (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:769:17)\n    at Parser.raise (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:737:17)\n    at Parser.unexpected (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:9686:16)\n    at Parser.expect (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:9672:28)\n    at Parser.parseHeaderExpression (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12474:10)\n    at Parser.parseIfStatement (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12555:22)\n    at Parser.parseStatementContent (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12247:21)\n    at Parser.parseStatement (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12202:17)\n    at Parser.parseBlockOrModuleBlockBody (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12782:25)\n    at Parser.parseBlockBody (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12773:10)\n    at Parser.parseBlock (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12757:10)\n    at Parser.parseFunctionBody (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:11724:24)\n    at Parser.parseFunctionBodyAndFinish (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:11708:10)\n    at c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12915:12\n    at Parser.withTopicForbiddingContext (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12020:14)\n    at Parser.parseFunction (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12914:10)\n    at Parser.parseFunctionOrFunctionSent (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:11162:17)\n    at Parser.parseExprAtom (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:10998:21)\n    at Parser.parseExprSubscripts (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:10655:23)\n    at Parser.parseUpdate (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:10635:21)\n    at Parser.parseMaybeUnary (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:10613:23)\n    at Parser.parseExprOps (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:10474:23)\n    at Parser.parseMaybeConditional (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:10448:23)\n    at Parser.parseMaybeAssign (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:10411:21)\n    at Parser.parseExpressionBase (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:10356:23)\n    at c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:10350:39\n    at Parser.allowInAnd (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12045:16)\n    at Parser.parseExpression (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:10350:17)\n    at Parser.parseReturnStatement (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12571:28)\n    at Parser.parseStatementContent (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12250:21)\n    at Parser.parseStatement (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12202:17)\n    at Parser.parseBlockOrModuleBlockBody (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12782:25)\n    at Parser.parseBlockBody (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12773:10)\n    at Parser.parseBlock (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:12757:10)\n    at Parser.parseFunctionBody (c:\\laravel\\vue_spa\\node_modules\\@babel\\parser\\lib\\index.js:11724:24)");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index.vue?vue&type=style&index=0&id=bb962f12&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index.vue?vue&type=style&index=0&id=bb962f12&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n*[data-v-bb962f12] {\r\n  box-sizing: border-box;\n}\n#app[data-v-bb962f12] {\r\n  width: 100%;\n}\n.caution[data-v-bb962f12] {\r\n  display: flex;\r\n  width: 90%;\r\n  height: 80px;\r\n  margin: 20px 0;\r\n  border: 10px solid #800000;\r\n  background-color: red;\n}\n.container[data-v-bb962f12] {\r\n  margin: 10px 0;\n}\nli[data-v-bb962f12] {\r\n  list-style-type: none;\n}\n[v-cloak][data-v-bb962f12] {\r\n  display: none;\n}\ntable.tableList[data-v-bb962f12]{\r\n  width: 100%;\r\n  table-layout: fixed;\r\n  /* border-collapse:separate; */\r\n  /* border-spacing: 0; */\r\n  counter-reset: ranking;  /* ※A */\n}\ntable th[data-v-bb962f12]:first-child{\r\n  border-radius: 5px 0 0 0;\n}\ntable th[data-v-bb962f12]:last-child{\r\n  border-radius: 0 5px 0 0;\r\n  border-right: 1px solid #3c6690;\n}\ntable th[data-v-bb962f12]{\r\n  text-align: center;\r\n  color:white;\r\n  background: linear-gradient(#829ebc,#225588);\r\n  border-left: 1px solid #3c6690;\r\n  border-top: 1px solid #3c6690;\r\n  border-bottom: 1px solid #3c6690;\r\n  box-shadow: 0px 1px 1px rgba(255,255,255,0.3) inset;\n}\ntable.tableList tbody th[data-v-bb962f12]:before {\r\n   counter-increment: ranking;         /* ※B */\r\n   content: counter(ranking) ; /* ※C */\n}\ntable td[data-v-bb962f12]{\r\n  text-align: center;\r\n  border-left: 1px solid #a8b7c5;\r\n  border-bottom: 1px solid #a8b7c5;\r\n  border-top:none;\r\n  box-shadow: 0px -3px 5px 1px #eee inset;\n}\ntable td[data-v-bb962f12]:last-child{\r\n  border-right: 1px solid #a8b7c5;\n}\ntable tr:last-child td[data-v-bb962f12]:first-child {\r\n  border-radius: 0 0 0 5px;\n}\ntable tr:last-child td[data-v-bb962f12]:last-child {\r\n  border-radius: 0 0 5px 0;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index.vue?vue&type=style&index=0&id=bb962f12&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index.vue?vue&type=style&index=0&id=bb962f12&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=bb962f12&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index.vue?vue&type=style&index=0&id=bb962f12&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Add.vue?vue&type=template&id=5d764ff4&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Add.vue?vue&type=template&id=5d764ff4& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("router-link", { attrs: { to: { name: "index" } } }, [
        _vm._v("トップ")
      ]),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.addBook($event)
            }
          }
        },
        [
          _c("select", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.weekday,
                expression: "weekday"
              }
            ],
            staticClass: "PullDownList",
            staticStyle: { width: "70px" },
            attrs: { id: "weekday", type: "text" },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.weekday = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          }),
          _vm._v(" "),
          _c("select", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.program,
                expression: "program"
              }
            ],
            staticClass: "PullDownList2",
            staticStyle: { width: "80px" },
            attrs: { id: "program" },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.program = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.name,
                expression: "name"
              }
            ],
            staticStyle: { width: "120px" },
            attrs: {
              type: "text",
              placeholder: "識別名(必須)",
              maxlength: "12"
            },
            domProps: { value: _vm.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.name = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "nca" } }, [_vm._v("A卓")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.nca,
                expression: "nca"
              }
            ],
            staticStyle: { width: "20px" },
            attrs: { type: "checkbox", id: "nca" },
            domProps: {
              checked: Array.isArray(_vm.nca)
                ? _vm._i(_vm.nca, null) > -1
                : _vm.nca
            },
            on: {
              change: function($event) {
                var $$a = _vm.nca,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.nca = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.nca = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.nca = $$c
                }
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "ncb" } }, [_vm._v("B卓")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.ncb,
                expression: "ncb"
              }
            ],
            staticStyle: { width: "20px" },
            attrs: { type: "checkbox", id: "ncb" },
            domProps: {
              checked: Array.isArray(_vm.ncb)
                ? _vm._i(_vm.ncb, null) > -1
                : _vm.ncb
            },
            on: {
              change: function($event) {
                var $$a = _vm.ncb,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.ncb = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.ncb = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.ncb = $$c
                }
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "ncc" } }, [_vm._v("C卓")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.ncc,
                expression: "ncc"
              }
            ],
            staticStyle: { width: "20px" },
            attrs: { type: "checkbox", id: "ncc" },
            domProps: {
              checked: Array.isArray(_vm.ncc)
                ? _vm._i(_vm.ncc, null) > -1
                : _vm.ncc
            },
            on: {
              change: function($event) {
                var $$a = _vm.ncc,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.ncc = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.ncc = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.ncc = $$c
                }
              }
            }
          }),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.func,
                  expression: "func"
                }
              ],
              staticStyle: { width: "130px" },
              attrs: { type: "selectbox", placeholder: "機能" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.func = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c(
                "option",
                {
                  staticStyle: { display: "none" },
                  attrs: { value: "", disabled: "", selected: "" }
                },
                [_vm._v("\n      機能を選択\n    ")]
              ),
              _vm._v(" "),
              _c("option", { attrs: { value: "注意喚起" } }, [
                _vm._v("注意喚起")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "カウントダウン" } }, [
                _vm._v("カウントダウン")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "実線" } }, [_vm._v("実線")])
            ]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.startTime,
                expression: "startTime"
              }
            ],
            staticStyle: { width: "70px" },
            attrs: { type: "text", placeholder: "開始" },
            domProps: { value: _vm.startTime },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.startTime = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.duration,
                expression: "duration"
              }
            ],
            staticStyle: { width: "30px" },
            attrs: { type: "text", placeholder: "尺" },
            domProps: { value: _vm.duration },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.duration = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.endTime,
                expression: "endTime"
              }
            ],
            staticStyle: { width: "70px" },
            attrs: { type: "text", placeholder: "終了" },
            domProps: { value: _vm.endTime },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.endTime = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("label", [_vm._v("点滅時間")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.blink,
                  expression: "blink"
                }
              ],
              staticStyle: { width: "70px" },
              attrs: {
                type: "selectbox",
                id: "blink",
                placeholder: "点滅時間"
              },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.blink = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", { attrs: { value: "15" } }, [_vm._v("15秒")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "30" } }, [_vm._v("30秒")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "45" } }, [_vm._v("45秒")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "60" } }, [_vm._v("60秒")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "90" } }, [_vm._v("90秒")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "120" } }, [_vm._v("120秒")])
            ]
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("label", { attrs: { for: "isValid" } }, [_vm._v("有効／無効")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.isValid,
                expression: "isValid"
              }
            ],
            staticStyle: { width: "20px" },
            attrs: { type: "checkbox", id: "isValid" },
            domProps: {
              checked: Array.isArray(_vm.isValid)
                ? _vm._i(_vm.isValid, null) > -1
                : _vm.isValid
            },
            on: {
              change: function($event) {
                var $$a = _vm.isValid,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.isValid = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.isValid = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.isValid = $$c
                }
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.msg1,
                expression: "msg1"
              }
            ],
            staticStyle: { width: "120px" },
            attrs: { type: "text", placeholder: "msg1", maxlength: "12" },
            domProps: { value: _vm.msg1 },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.msg1 = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.msg2,
                expression: "msg2"
              }
            ],
            staticStyle: { width: "120px" },
            attrs: { type: "text", placeholder: "msg2", maxlength: "12" },
            domProps: { value: _vm.msg2 },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.msg2 = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.msg3,
                expression: "msg3"
              }
            ],
            staticStyle: { width: "120px" },
            attrs: { type: "text", placeholder: "msg3", maxlength: "12" },
            domProps: { value: _vm.msg3 },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.msg3 = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "bgColor" } }, [_vm._v("背景色")]),
          _vm._v(" "),
          _c("span", { staticClass: "colorset" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.bgColor,
                  expression: "bgColor"
                }
              ],
              staticStyle: { width: "60px" },
              attrs: { type: "color", id: "bgColor", list: "colors" },
              domProps: { value: _vm.bgColor },
              on: {
                change: function($event) {
                  return _vm.onChangeColor(_vm.bgColor)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.bgColor = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "colorset" }, [
            _c("label", { attrs: { for: "textColor" } }, [_vm._v("文字色")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.textColor,
                  expression: "textColor"
                }
              ],
              staticStyle: { width: "60px" },
              attrs: { type: "color", id: "textColor", list: "txtcolors" },
              domProps: { value: _vm.textColor },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.textColor = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.isDone,
                expression: "isDone"
              }
            ],
            staticStyle: { width: "20px" },
            attrs: { type: "checkbox", id: "isDone" },
            domProps: {
              checked: Array.isArray(_vm.isDone)
                ? _vm._i(_vm.isDone, null) > -1
                : _vm.isDone
            },
            on: {
              change: function($event) {
                var $$a = _vm.isDone,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.isDone = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.isDone = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.isDone = $$c
                }
              }
            }
          }),
          _vm._v(" "),
          _c("input", { attrs: { type: "button", value: "追加" } })
        ]
      ),
      _vm._v(" "),
      _vm.message ? _c("p", [_vm._v(_vm._s(_vm.message))]) : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("datalist", { attrs: { id: "colors" } }, [
      _c("option", { attrs: { value: "#000000" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#ffffff" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#ff0000" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#ffff00" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#c0c0c0" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#0000ff" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#008000" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#800080" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#000080" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#008080" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Edit.vue?vue&type=template&id=031ccff5&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Edit.vue?vue&type=template&id=031ccff5& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.debug
      ? _c("p", [_vm._v("idが" + _vm._s(_vm.book.id) + "の編集フォーム")])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.updateBook($event)
          }
        }
      },
      [
        _c("div", [
          _c("label", [_vm._v("曜日")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.book.weekday,
                  expression: "book.weekday"
                }
              ],
              staticClass: "PullDownList",
              staticStyle: { width: "70px" },
              attrs: { id: "weekday", type: "text" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.book,
                    "weekday",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c(
                "option",
                {
                  staticStyle: { display: "none" },
                  attrs: { value: "", disabled: "", selected: "" }
                },
                [_vm._v("曜日")]
              ),
              _vm._v(" "),
              _c("option", { attrs: { value: "7" } }, [_vm._v("平日")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "8" } }, [_vm._v("土日祝")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("月")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "2" } }, [_vm._v("火")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "3" } }, [_vm._v("水")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "4" } }, [_vm._v("木")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "5" } }, [_vm._v("金")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "6" } }, [_vm._v("土")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "0" } }, [_vm._v("日")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "9" } }, [_vm._v("祝")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("番組")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.book.program,
                  expression: "book.program"
                }
              ],
              staticClass: "PullDownList2",
              staticStyle: { width: "80px" },
              attrs: { id: "program" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.book,
                    "program",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c(
                "option",
                {
                  staticStyle: { display: "none" },
                  attrs: { value: "", disabled: "", selected: "" }
                },
                [_vm._v("番組選択")]
              ),
              _vm._v(" "),
              _c("option", { attrs: { value: "おはよう" } }, [
                _vm._v("おはよう")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "news" } }, [_vm._v("News")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "首都圏" } }, [_vm._v("首都圏")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "シブ5時" } }, [_vm._v("シブ5時")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("識別名")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.name,
                expression: "book.name"
              }
            ],
            staticStyle: { width: "120px" },
            attrs: {
              type: "text",
              placeholder: "識別名(必須)",
              maxlength: "12"
            },
            domProps: { value: _vm.book.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("A卓")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.nca,
                expression: "book.nca"
              }
            ],
            staticStyle: { width: "20px" },
            attrs: { type: "checkbox", id: "nca" },
            domProps: {
              checked: Array.isArray(_vm.book.nca)
                ? _vm._i(_vm.book.nca, null) > -1
                : _vm.book.nca
            },
            on: {
              change: function($event) {
                var $$a = _vm.book.nca,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && _vm.$set(_vm.book, "nca", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.book,
                        "nca",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.book, "nca", $$c)
                }
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("B卓")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.ncb,
                expression: "book.ncb"
              }
            ],
            staticStyle: { width: "20px" },
            attrs: { type: "checkbox", id: "ncb" },
            domProps: {
              checked: Array.isArray(_vm.book.ncb)
                ? _vm._i(_vm.book.ncb, null) > -1
                : _vm.book.ncb
            },
            on: {
              change: function($event) {
                var $$a = _vm.book.ncb,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && _vm.$set(_vm.book, "ncb", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.book,
                        "ncb",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.book, "ncb", $$c)
                }
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("C卓")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.ncc,
                expression: "book.ncc"
              }
            ],
            staticStyle: { width: "20px" },
            attrs: { type: "checkbox", id: "ncc" },
            domProps: {
              checked: Array.isArray(_vm.book.ncc)
                ? _vm._i(_vm.book.ncc, null) > -1
                : _vm.book.ncc
            },
            on: {
              change: function($event) {
                var $$a = _vm.book.ncc,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && _vm.$set(_vm.book, "ncc", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.book,
                        "ncc",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.book, "ncc", $$c)
                }
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("機能")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.book.func,
                  expression: "book.func"
                }
              ],
              staticStyle: { width: "130px" },
              attrs: { type: "selectbox", placeholder: "機能" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.book,
                    "func",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c(
                "option",
                {
                  staticStyle: { display: "none" },
                  attrs: { value: "", disabled: "", selected: "" }
                },
                [_vm._v("\n      機能を選択\n    ")]
              ),
              _vm._v(" "),
              _c("option", { attrs: { value: "注意喚起" } }, [
                _vm._v("注意喚起")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "カウントダウン" } }, [
                _vm._v("カウントダウン")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "実線" } }, [_vm._v("実線")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("開始時間")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.startTime,
                expression: "book.startTime"
              }
            ],
            staticStyle: { width: "70px" },
            attrs: { type: "text", placeholder: "開始" },
            domProps: { value: _vm.book.startTime },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "startTime", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("尺")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.duration,
                expression: "book.duration"
              }
            ],
            staticStyle: { width: "60px" },
            attrs: { type: "text", placeholder: "尺" },
            domProps: { value: _vm.book.duration },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "duration", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("終了時間")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.endTime,
                expression: "book.endTime"
              }
            ],
            staticStyle: { width: "70px" },
            attrs: { type: "text", placeholder: "終了" },
            domProps: { value: _vm.book.endTime },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "endTime", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("点滅時間")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.book.blink,
                  expression: "book.blink"
                }
              ],
              staticStyle: { width: "70px" },
              attrs: {
                type: "selectbox",
                id: "blink",
                placeholder: "点滅時間"
              },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.book,
                    "blink",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "15" } }, [_vm._v("15秒")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "30" } }, [_vm._v("30秒")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "45" } }, [_vm._v("45秒")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "60" } }, [_vm._v("60秒")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "90" } }, [_vm._v("90秒")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "120" } }, [_vm._v("120秒")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("有効／無効")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.isValid,
                expression: "book.isValid"
              }
            ],
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.book.isValid)
                ? _vm._i(_vm.book.isValid, null) > -1
                : _vm.book.isValid
            },
            on: {
              change: function($event) {
                var $$a = _vm.book.isValid,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && _vm.$set(_vm.book, "isValid", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.book,
                        "isValid",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.book, "isValid", $$c)
                }
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("メッセージ１")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.msg1,
                expression: "book.msg1"
              }
            ],
            staticStyle: { width: "120px" },
            attrs: { type: "text", maxlength: "12" },
            domProps: { value: _vm.book.msg1 },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "msg1", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("メッセージ２")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.msg2,
                expression: "book.msg2"
              }
            ],
            staticStyle: { width: "120px" },
            attrs: { type: "text", maxlength: "12" },
            domProps: { value: _vm.book.msg2 },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "msg2", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("メッセージ３")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.msg3,
                expression: "book.msg3"
              }
            ],
            staticStyle: { width: "120px" },
            attrs: { type: "text", maxlength: "12" },
            domProps: { value: _vm.book.msg3 },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "msg3", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("label", { attrs: { for: "bgColor" } }, [_vm._v("背景色")]),
        _vm._v(" "),
        _c("span", { staticClass: "colorset" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.bgColor,
                expression: "book.bgColor"
              }
            ],
            staticStyle: { width: "60px" },
            attrs: { type: "color", id: "bgColor", list: "colors" },
            domProps: { value: _vm.book.bgColor },
            on: {
              change: function($event) {
                return _vm.onChangeColor(_vm.book.bgColor)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "bgColor", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "colorset" }, [
          _c("label", { attrs: { for: "textColor" } }, [_vm._v("文字色")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.textColor,
                expression: "book.textColor"
              }
            ],
            staticStyle: { width: "60px" },
            attrs: { type: "color", id: "textColor", list: "txtcolors" },
            domProps: { value: _vm.book.textColor },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "textColor", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("label", [_vm._v("実行済み")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.isDone,
                expression: "book.isDone"
              }
            ],
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.book.isDone)
                ? _vm._i(_vm.book.isDone, null) > -1
                : _vm.book.isDone
            },
            on: {
              change: function($event) {
                var $$a = _vm.book.isDone,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && _vm.$set(_vm.book, "isDone", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.book,
                        "isDone",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.book, "isDone", $$c)
                }
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("button", [_vm._v("上書きする")]),
        _vm._v(" "),
        _c("button", { on: { click: _vm.updateCancel } }, [
          _vm._v("キャンセル")
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v("\n          " + _vm._s(_vm.book) + "\n\n  ")
      ]
    ),
    _vm._v(" "),
    _vm.message ? _c("p", [_vm._v(_vm._s(_vm.message))]) : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("datalist", { attrs: { id: "colors" } }, [
      _c("option", { attrs: { value: "#000000" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#ffffff" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#ff0000" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#ffff00" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#c0c0c0" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#0000ff" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#008000" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#800080" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#000080" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "#008080" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index.vue?vue&type=template&id=bb962f12&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index.vue?vue&type=template&id=bb962f12&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app" }, [
    _vm.errored ? _c("p", {}, [_vm._v(_vm._s(_vm.error))]) : _vm._e(),
    _vm._v(" "),
    _vm.loading
      ? _c("p", {}, [_vm._v("Loading... データベースを読み込み中")])
      : _c(
          "div",
          { staticClass: "container" },
          [
            _c("span", [
              _vm._v(
                "絞り込み検索 (番組, 識別名, 機能, メッセージ1, メッセージ2, メッセージ3)"
              ),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.keyword,
                    expression: "keyword"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.keyword },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.keyword = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "button", value: "クリア" },
                on: {
                  click: function($event) {
                    return _vm.clear()
                  }
                }
              })
            ]),
            _vm._v("\r\n          " + _vm._s(_vm.message) + "\r\n      "),
            _c("h2", [
              _vm._v(
                "sort_Key = " +
                  _vm._s(_vm.sort_key) +
                  ": " +
                  _vm._s(_vm.sort_asc ? "昇順" : "降順")
              )
            ]),
            _vm._v(" "),
            _c("table", { ref: "table", staticClass: "tableList" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { attrs: { width: "40" } }),
                  _vm._v(" "),
                  _vm.debug
                    ? _c(
                        "th",
                        {
                          attrs: { width: "60" },
                          on: {
                            click: function($event) {
                              return _vm.sortBy("id")
                            }
                          }
                        },
                        [_vm._v("No.")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "60" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("weekday")
                        }
                      }
                    },
                    [_c("span", [_vm._v("曜日")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "110" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("program")
                        }
                      }
                    },
                    [_vm._v("番組")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "110" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("name")
                        }
                      }
                    },
                    [_vm._v("識別名")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "35" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("nca")
                        }
                      }
                    },
                    [_vm._v("A卓")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "35" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("ncb")
                        }
                      }
                    },
                    [_vm._v("B卓")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "35" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("ncc")
                        }
                      }
                    },
                    [_vm._v("C卓")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "90" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("func")
                        }
                      }
                    },
                    [_vm._v("機能")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "75" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("startTime")
                        }
                      }
                    },
                    [_vm._v("開始")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "35" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("duration")
                        }
                      }
                    },
                    [_vm._v("尺")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "75" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("endTime")
                        }
                      }
                    },
                    [_vm._v("終了")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "40" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("blink")
                        }
                      }
                    },
                    [_vm._v("点滅")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "120" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("msg1")
                        }
                      }
                    },
                    [_vm._v("メッセージ１")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "120" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("msg2")
                        }
                      }
                    },
                    [_vm._v("メッセージ２")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "120" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("msg3")
                        }
                      }
                    },
                    [_vm._v("メッセージ３")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "60" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("isValid")
                        }
                      }
                    },
                    [_vm._v("有効無効")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "80" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("bgColor")
                        }
                      }
                    },
                    [_vm._v("背景色／文字色")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { width: "45" },
                      on: {
                        click: function($event) {
                          return _vm.sortBy("isDone")
                        }
                      }
                    },
                    [_vm._v("実行済")]
                  ),
                  _vm._v(" "),
                  _c("th", { attrs: { width: "55" } }, [_vm._v("編集")]),
                  _vm._v(" "),
                  _c("th", { attrs: { width: "70" } }, [_vm._v("削除")])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.filterdValue, function(book, index) {
                  return _vm.isShow(index)
                    ? _c("tr", { key: book.id }, [
                        _c("th"),
                        _vm._v(" "),
                        _vm.debug
                          ? _c("td", [_vm._v(_vm._s(book.id))])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(book.weekday))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(book.program))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(book.name))]),
                        _vm._v(" "),
                        _c("td", [
                          book.nca === 1
                            ? _c("span", [_vm._v("〇")])
                            : _vm._e(),
                          book.nca === 0
                            ? _c("span", { style: _vm.styles }, [_vm._v("×")])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          book.ncb === 1
                            ? _c("span", [_vm._v("〇")])
                            : _vm._e(),
                          book.ncb === 0
                            ? _c("span", { style: _vm.styles }, [_vm._v("×")])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          book.ncc === 1
                            ? _c("span", [_vm._v("〇")])
                            : _vm._e(),
                          book.ncc === 0
                            ? _c("span", { style: _vm.styles }, [_vm._v("×")])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { align: "center" } }, [
                          _vm._v(_vm._s(book.func))
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(book.startTime))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(book.duration))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(book.endTime))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(book.blink))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(book.msg1))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(book.msg2))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(book.msg3))]),
                        _vm._v(" "),
                        _c("td", [
                          book.isValid == true
                            ? _c("span", [_vm._v("〇")])
                            : _vm._e(),
                          book.isValid == false
                            ? _c("span", { style: _vm.styles }, [_vm._v("×")])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            style: {
                              backgroundColor: book.bgColor,
                              color: book.textColor,
                              fontSize: "16px"
                            }
                          },
                          [_vm._v("文字色")]
                        ),
                        _vm._v(" "),
                        _c("td", [
                          book.isDone == true
                            ? _c("span", [_vm._v("済み")])
                            : _vm._e(),
                          book.isDone == false
                            ? _c("span", [_vm._v("未")])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: { name: "edit", params: { id: book.id } }
                                }
                              },
                              [_vm._v("編集")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            attrs: { type: "button", value: "削除" },
                            on: {
                              click: function($event) {
                                return _vm.deleteBook(book.id)
                              }
                            }
                          })
                        ]),
                        _vm._v(
                          "\r\n              " +
                            _vm._s(book.isDone) +
                            "\r\n          "
                        )
                      ])
                    : _vm._e()
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("button", { on: { click: _vm.toggle } }, [_vm._v("リスト表示")]),
            _vm._v(" "),
            _vm.show
              ? _c(
                  "ul",
                  _vm._l(_vm.books, function(book, index) {
                    return _c("li", { key: index }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.books[index].isDone,
                            expression: "books[index].isDone"
                          }
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(_vm.books[index].isDone)
                            ? _vm._i(_vm.books[index].isDone, null) > -1
                            : _vm.books[index].isDone
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.books[index].isDone,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.books[index],
                                    "isDone",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.books[index],
                                    "isDone",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.books[index], "isDone", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      !_vm.books[index].isDone
                        ? _c("span", [
                            _vm._v(
                              "\r\n          " +
                                _vm._s(book.weekday) +
                                _vm._s(book.nca) +
                                _vm._s(book.ncb) +
                                _vm._s(book.ncc) +
                                _vm._s(book.func) +
                                _vm._s(book.startTime) +
                                "\r\n          " +
                                _vm._s(book.duration) +
                                " " +
                                _vm._s(book.endTime) +
                                " " +
                                _vm._s(book.blink) +
                                " " +
                                _vm._s(book.msg1) +
                                " " +
                                _vm._s(book.msg2) +
                                "\r\n          " +
                                _vm._s(book.msg3) +
                                " " +
                                _vm._s(book.isValid) +
                                " " +
                                _vm._s(book.bgColor) +
                                "\r\n          " +
                                _vm._s(book.textColor) +
                                "  " +
                                _vm._s(book.isDone) +
                                " " +
                                _vm._s(book.isShow) +
                                "\r\n          "
                            )
                          ])
                        : _vm._e()
                    ])
                  }),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            _c("router-link", { attrs: { to: { name: "add" } } }, [
              _vm._v("新規追加")
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "button", value: "addCount" },
              on: {
                click: function($event) {
                  return _vm.addCount()
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.count,
                  expression: "count"
                }
              ],
              attrs: { type: "number" },
              domProps: { value: _vm.count },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.count = $event.target.value
                }
              }
            }),
            _vm._v("\r\n\r\n      test_now"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.test_now,
                  expression: "test_now"
                }
              ],
              attrs: { type: "time", step: "1" },
              domProps: { value: _vm.test_now },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.test_now = $event.target.value
                }
              }
            }),
            _vm._v("\r\n      test_set"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.test_set,
                  expression: "test_set"
                }
              ],
              attrs: { type: "time", step: "1" },
              domProps: { value: _vm.test_set },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.test_set = $event.target.value
                }
              }
            }),
            _vm._v("\r\n      test_end"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.test_end,
                  expression: "test_end"
                }
              ],
              attrs: { type: "time", step: "1" },
              domProps: { value: _vm.test_end },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.test_end = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _vm.caution
              ? _c("div", { staticClass: "caution" }, [
                  _vm._v("時間になりました")
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("br"),
            _vm._v("\r\n      " + _vm._s(_vm.caution) + "\r\n      "),
            _c("br")
          ],
          1
        ),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", [
      _c(
        "ul",
        _vm._l(_vm.books, function(book) {
          return _c(
            "li",
            { key: book.id },
            [
              _vm._v(
                "\r\n        " +
                  _vm._s(book.id) +
                  "/曜日" +
                  _vm._s(book.weekday) +
                  "/" +
                  _vm._s(book.program) +
                  "/識別名" +
                  _vm._s(book.name) +
                  "/A卓" +
                  _vm._s(book.nca) +
                  "/B卓" +
                  _vm._s(book.ncb) +
                  "/C卓" +
                  _vm._s(book.ncc) +
                  "/" +
                  _vm._s(book.func) +
                  "/開始" +
                  _vm._s(book.startTime) +
                  "/尺" +
                  _vm._s(book.duration) +
                  "/終了" +
                  _vm._s(book.endTime) +
                  "/点滅" +
                  _vm._s(book.blink) +
                  "/有効" +
                  _vm._s(book.isValid) +
                  "/msg1" +
                  _vm._s(book.msg1) +
                  "/msg2" +
                  _vm._s(book.msg2) +
                  "/msg3" +
                  _vm._s(book.msg3) +
                  "/背景" +
                  _vm._s(book.bgColor) +
                  "/文字" +
                  _vm._s(book.textColor) +
                  "/実行済み" +
                  _vm._s(book.isDone) +
                  "\r\n        "
              ),
              _c(
                "router-link",
                { attrs: { to: { name: "edit", params: { id: book.id } } } },
                [_vm._v("編集")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      return _vm.deleteBook(book.id)
                    }
                  }
                },
                [_vm._v("削除")]
              )
            ],
            1
          )
        }),
        0
      ),
      _vm._v(" "),
      _vm.message ? _c("p", [_vm._v(_vm._s(_vm.message))]) : _vm._e(),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v("BookController.phpでindex / store / editの動きを規定")
      ]),
      _vm._v(" "),
      _c("li", [_vm._v("StoreBook.php　バリデーション")]),
      _vm._v(" "),
      _c("li", [_vm._v("Book.php　ホワイトリスト・ブラックリスト登録")]),
      _vm._v(" "),
      _c("li", [_vm._v("migrationファイル")]),
      _vm._v(" "),
      _c("li", [_vm._v("add.vue")]),
      _vm._v(" "),
      _c("li", [_vm._v("edit.vue")]),
      _vm._v(" "),
      _c("li", [_vm._v("index.vue")]),
      _vm._v(" "),
      _c("li")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("h1", [_vm._v("Home (RouterView)")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
  * vue-router v3.5.1
  * (c) 2021 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ( true && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
    .replace(encodeReserveRE, encodeReserveReplacer)
    .replace(commaRE, ','); };

function decode (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    if (true) {
      warn(false, ("Error decoding \"" + str + "\". Leaving it intact."));
    }
  }
  return str
}

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     true && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var value = extraQuery[key];
    parsedQuery[key] = Array.isArray(value)
      ? value.map(castQueryParamValue)
      : castQueryParamValue(value);
  }
  return parsedQuery
}

var castQueryParamValue = function (value) { return (value == null || typeof value === 'object' ? value : String(value)); };

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj
    ? Object.keys(obj)
      .map(function (key) {
        var val = obj[key];

        if (val === undefined) {
          return ''
        }

        if (val === null) {
          return encode(key)
        }

        if (Array.isArray(val)) {
          var result = [];
          val.forEach(function (val2) {
            if (val2 === undefined) {
              return
            }
            if (val2 === null) {
              result.push(encode(key));
            } else {
              result.push(encode(key) + '=' + encode(val2));
            }
          });
          return result.join('&')
        }

        return encode(key) + '=' + encode(val)
      })
      .filter(function (x) { return x.length > 0; })
      .join('&')
    : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b, onlyPath) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && (onlyPath ||
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query))
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      (onlyPath || (
        a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params))
      )
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key, i) {
    var aVal = a[key];
    var bKey = bKeys[i];
    if (bKey !== key) { return false }
    var bVal = b[key];
    // query values can be null and undefined
    if (aVal == null || bVal == null) { return aVal === bVal }
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

function handleRouteEntered (route) {
  for (var i = 0; i < route.matched.length; i++) {
    var record = route.matched[i];
    for (var name in record.instances) {
      var instance = record.instances[name];
      var cbs = record.enteredCbs[name];
      if (!instance || !cbs) { continue }
      delete record.enteredCbs[name];
      for (var i$1 = 0; i$1 < cbs.length; i$1++) {
        if (!instance._isBeingDestroyed) { cbs[i$1](instance); }
      }
    }
  }
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data, children)
      } else {
        // render previous empty view
        return h()
      }
    }

    var matched = route.matched[depth];
    var component = matched && matched.components[name];

    // render empty node if no matched route or no config component
    if (!matched || !component) {
      cache[name] = null;
      return h()
    }

    // cache component
    cache[name] = { component: component };

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
      ) {
        matched.instances[name] = vnode.componentInstance;
      }

      // if the route transition has already been confirmed then we weren't
      // able to call the cbs during confirmation as the component was not
      // registered yet, so we call it here.
      handleRouteEntered(route);
    };

    var configProps = matched.props && matched.props[name];
    // save route and configProps in cache
    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }

    return h(component, data, children)
  }
};

function fillPropsinData (component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);
  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass);
    // pass non-declared props as attrs
    var attrs = data.attrs = data.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  params = params || {};
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
    if (typeof params.pathMatch === 'string') { params[0] = params.pathMatch; }

    return filler(params, { pretty: true })
  } catch (e) {
    if (true) {
      // Fix #3072 no warn if `pathMatch` is string
      warn(typeof params.pathMatch === 'string', ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next._normalized) {
    return next
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var noop = function () {};

var warnedCustomSlot;
var warnedTagProp;
var warnedEventProp;

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    custom: Boolean,
    exact: Boolean,
    exactPath: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    },
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(
      this.to,
      current,
      this.append
    );
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass;
    var activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass;

    var compareTarget = route.redirectedFrom
      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget, this.exactPath);
    classes[activeClass] = this.exact || this.exactPath
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = { class: classes };

    var scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href: href,
        route: route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      });

    if (scopedSlot) {
      if ( true && !this.custom) {
        !warnedCustomSlot && warn(false, 'In Vue Router 4, the v-slot API will by default wrap its content with an <a> element. Use the custom prop to remove this warning:\n<router-link v-slot="{ navigate, href }" custom></router-link>\n');
        warnedCustomSlot = true;
      }
      if (scopedSlot.length === 1) {
        return scopedSlot[0]
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (true) {
          warn(
            false,
            ("<router-link> with to=\"" + (this.to) + "\" is trying to use a scoped slot but it didn't provide exactly one child. Wrapping the content with a span element.")
          );
        }
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
      }
    }

    if (true) {
      if ('tag' in this.$options.propsData && !warnedTagProp) {
        warn(
          false,
          "<router-link>'s tag prop is deprecated and has been removed in Vue Router 4. Use the v-slot API to remove this warning: https://next.router.vuejs.org/guide/migration/#removal-of-event-and-tag-props-in-router-link."
        );
        warnedTagProp = true;
      }
      if ('event' in this.$options.propsData && !warnedEventProp) {
        warn(
          false,
          "<router-link>'s event prop is deprecated and has been removed in Vue Router 4. Use the v-slot API to remove this warning: https://next.router.vuejs.org/guide/migration/#removal-of-event-and-tag-props-in-router-link."
        );
        warnedEventProp = true;
      }
    }

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href, 'aria-current': ariaCurrentValue };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = (a.data = extend({}, a.data));
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }

        var aAttrs = (a.data.attrs = extend({}, a.data.attrs));
        aAttrs.href = href;
        aAttrs['aria-current'] = ariaCurrentValue;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap,
  parentRoute
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route, parentRoute);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  if (true) {
    // warn if routes do not include leading slashes
    var found = pathList
    // check for missing leading slash
      .filter(function (path) { return path && path.charAt(0) !== '*' && path.charAt(0) !== '/'; });

    if (found.length > 0) {
      var pathNames = found.map(function (path) { return ("- " + path); }).join('\n');
      warn(false, ("Non-nested routes must include a leading slash character. Fix the following routes: \n" + pathNames));
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(
        path || name
      )) + " cannot be a " + "string id. Use an actual component instead."
    );

    warn(
      // eslint-disable-next-line no-control-regex
      !/[^\u0000-\u007F]+/.test(path),
      "Route with path \"" + path + "\" contains unencoded characters, make sure " +
        "your path is correctly encoded before passing it to the router. Use " +
        "encodeURI to encode static segments of your path."
    );
  }

  var pathToRegexpOptions =
    route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    alias: route.alias
      ? typeof route.alias === 'string'
        ? [route.alias]
        : route.alias
      : [],
    instances: {},
    enteredCbs: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (
        route.name &&
        !route.redirect &&
        route.children.some(function (child) { return /^\/?$/.test(child.path); })
      ) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
            "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
            "the default child route will not be rendered. Remove the name from " +
            "this route and use the name of the default child route for named " +
            "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      if ( true && alias === path) {
        warn(
          false,
          ("Found an alias with the same value as the path: \"" + path + "\". You have to remove that alias. It will be ignored in development.")
        );
        // skip in dev to make it work
        continue
      }

      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ( true && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
          "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (
  path,
  pathToRegexpOptions
) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(
        !keys[key.name],
        ("Duplicate param keys in route with path: \"" + path + "\"")
      );
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (
  path,
  parent,
  strict
) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function addRoute (parentOrRoute, route) {
    var parent = (typeof parentOrRoute !== 'object') ? nameMap[parentOrRoute] : undefined;
    // $flow-disable-line
    createRouteMap([route || parentOrRoute], pathList, pathMap, nameMap, parent);

    // add aliases of parent
    if (parent) {
      createRouteMap(
        // $flow-disable-line route is defined if parent is
        parent.alias.map(function (alias) { return ({ path: alias, children: [route] }); }),
        pathList,
        pathMap,
        nameMap,
        parent
      );
    }
  }

  function getRoutes () {
    return pathList.map(function (path) { return pathMap[path]; })
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
      return _createRoute(record, location, redirectedFrom)
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoute: addRoute,
    getRoutes: getRoutes,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = typeof m[i] === 'string' ? decode(m[i]) : m[i];
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time =
  inBrowser && window.performance && window.performance.now
    ? window.performance
    : Date;

function genStateKey () {
  return Time.now().toFixed(3)
}

var _key = genStateKey();

function getStateKey () {
  return _key
}

function setStateKey (key) {
  return (_key = key)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Prevent browser scroll behavior on History popstate
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
  // window.location.protocol + '//' + window.location.host
  // location.host contains the port and location.hostname doesn't
  var protocolAndPath = window.location.protocol + '//' + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, '');
  // preserve existing history state as it could be overriden by the user
  var stateCopy = extend({}, window.history.state);
  stateCopy.key = getStateKey();
  window.history.replaceState(stateCopy, '', absolutePath);
  window.addEventListener('popstate', handlePopState);
  return function () {
    window.removeEventListener('popstate', handlePopState);
  }
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(
      router,
      to,
      from,
      isPop ? position : null
    );

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll
        .then(function (shouldScroll) {
          scrollToPosition((shouldScroll), position);
        })
        .catch(function (err) {
          if (true) {
            assert(false, err.toString());
          }
        });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function handlePopState (e) {
  saveScrollPosition();
  if (e.state && e.state.key) {
    setStateKey(e.state.key);
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

var hashStartsWithNumberRE = /^#\d/;

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
      ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
      : document.querySelector(shouldScroll.selector);

    if (el) {
      var offset =
        shouldScroll.offset && typeof shouldScroll.offset === 'object'
          ? shouldScroll.offset
          : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    // $flow-disable-line
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        left: position.x,
        top: position.y,
        // $flow-disable-line
        behavior: shouldScroll.behavior
      });
    } else {
      window.scrollTo(position.x, position.y);
    }
  }
}

/*  */

var supportsPushState =
  inBrowser &&
  (function () {
    var ua = window.navigator.userAgent;

    if (
      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1
    ) {
      return false
    }

    return window.history && typeof window.history.pushState === 'function'
  })();

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

// When changing thing, also edit router.d.ts
var NavigationFailureType = {
  redirected: 2,
  aborted: 4,
  cancelled: 8,
  duplicated: 16
};

function createNavigationRedirectedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.redirected,
    ("Redirected when going from \"" + (from.fullPath) + "\" to \"" + (stringifyRoute(
      to
    )) + "\" via a navigation guard.")
  )
}

function createNavigationDuplicatedError (from, to) {
  var error = createRouterError(
    from,
    to,
    NavigationFailureType.duplicated,
    ("Avoided redundant navigation to current location: \"" + (from.fullPath) + "\".")
  );
  // backwards compatible with the first introduction of Errors
  error.name = 'NavigationDuplicated';
  return error
}

function createNavigationCancelledError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.cancelled,
    ("Navigation cancelled from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" with a new navigation.")
  )
}

function createNavigationAbortedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.aborted,
    ("Navigation aborted from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" via a navigation guard.")
  )
}

function createRouterError (from, to, type, message) {
  var error = new Error(message);
  error._isRouter = true;
  error.from = from;
  error.to = to;
  error.type = type;

  return error
}

var propertiesToLog = ['params', 'query', 'hash'];

function stringifyRoute (to) {
  if (typeof to === 'string') { return to }
  if ('path' in to) { return to.path }
  var location = {};
  propertiesToLog.forEach(function (key) {
    if (key in to) { location[key] = to[key]; }
  });
  return JSON.stringify(location, null, 2)
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function isNavigationFailure (err, errorType) {
  return (
    isError(err) &&
    err._isRouter &&
    (errorType == null || err.type === errorType)
  )
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           true && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
  this.listeners = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (
  location,
  onComplete,
  onAbort
) {
    var this$1 = this;

  var route;
  // catch redirect option https://github.com/vuejs/vue-router/issues/3201
  try {
    route = this.router.match(location, this.current);
  } catch (e) {
    this.errorCbs.forEach(function (cb) {
      cb(e);
    });
    // Exception should still be thrown
    throw e
  }
  var prev = this.current;
  this.confirmTransition(
    route,
    function () {
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();
      this$1.router.afterHooks.forEach(function (hook) {
        hook && hook(route, prev);
      });

      // fire ready cbs once
      if (!this$1.ready) {
        this$1.ready = true;
        this$1.readyCbs.forEach(function (cb) {
          cb(route);
        });
      }
    },
    function (err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1.ready) {
        // Initial redirection should not mark the history as ready yet
        // because it's triggered by the redirection instead
        // https://github.com/vuejs/vue-router/issues/3225
        // https://github.com/vuejs/vue-router/issues/3331
        if (!isNavigationFailure(err, NavigationFailureType.redirected) || prev !== START) {
          this$1.ready = true;
          this$1.readyErrorCbs.forEach(function (cb) {
            cb(err);
          });
        }
      }
    }
  );
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  this.pending = route;
  var abort = function (err) {
    // changed after adding errors with
    // https://github.com/vuejs/vue-router/pull/3047 before that change,
    // redirect and aborted navigation would produce an err == null
    if (!isNavigationFailure(err) && isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  var lastRouteIndex = route.matched.length - 1;
  var lastCurrentIndex = current.matched.length - 1;
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    lastRouteIndex === lastCurrentIndex &&
    route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]
  ) {
    this.ensureURL();
    return abort(createNavigationDuplicatedError(current, route))
  }

  var ref = resolveQueue(
    this.current.matched,
    route.matched
  );
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort(createNavigationCancelledError(current, route))
    }
    try {
      hook(route, current, function (to) {
        if (to === false) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(createNavigationAbortedError(current, route));
        } else if (isError(to)) {
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort(createNavigationRedirectedError(current, route));
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort(createNavigationCancelledError(current, route))
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          handleRouteEntered(route);
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  this.current = route;
  this.cb && this.cb(route);
};

History.prototype.setupListeners = function setupListeners () {
  // Default implementation is empty
};

History.prototype.teardown = function teardown () {
  // clean up event listeners
  // https://github.com/vuejs/vue-router/issues/2341
  this.listeners.forEach(function (cleanupListener) {
    cleanupListener();
  });
  this.listeners = [];

  // reset current history route
  // https://github.com/vuejs/vue-router/issues/3294
  this.current = START;
  this.pending = null;
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated
) {
  return extractGuards(
    activated,
    'beforeRouteEnter',
    function (guard, _, match, key) {
      return bindEnterGuard(guard, match, key)
    }
  )
}

function bindEnterGuard (
  guard,
  match,
  key
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        if (!match.enteredCbs[key]) {
          match.enteredCbs[key] = [];
        }
        match.enteredCbs[key].push(cb);
      }
      next(cb);
    })
  }
}

/*  */

var HTML5History = /*@__PURE__*/(function (History) {
  function HTML5History (router, base) {
    History.call(this, router, base);

    this._startLocation = getLocation(this.base);
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === this$1._startLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    };
    window.addEventListener('popstate', handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener('popstate', handleRoutingEvent);
    });
  };

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.toLowerCase().indexOf(base.toLowerCase()) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = /*@__PURE__*/(function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    };
    var eventType = supportsPushState ? 'popstate' : 'hashchange';
    window.addEventListener(
      eventType,
      handleRoutingEvent
    );
    this.listeners.push(function () {
      window.removeEventListener(eventType, handleRoutingEvent);
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        pushHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        replaceHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) { return '' }

  href = href.slice(index + 1);

  return href
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/(function (History) {
  function AbstractHistory (router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
        this$1.index++;
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(
      route,
      function () {
        var prev = this$1.current;
        this$1.index = targetIndex;
        this$1.updateRoute(route);
        this$1.router.afterHooks.forEach(function (hook) {
          hook && hook(route, prev);
        });
      },
      function (err) {
        if (isNavigationFailure(err, NavigationFailureType.duplicated)) {
          this$1.index = targetIndex;
        }
      }
    );
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback =
    mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

   true &&
    assert(
      install.installed,
      "not installed. Make sure to call `Vue.use(VueRouter)` " +
        "before creating root instance."
    );

  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1.apps.indexOf(app);
    if (index > -1) { this$1.apps.splice(index, 1); }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1.app === app) { this$1.app = this$1.apps[0] || null; }

    if (!this$1.app) { this$1.history.teardown(); }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History || history instanceof HashHistory) {
    var handleInitialScroll = function (routeOrError) {
      var from = history.current;
      var expectScroll = this$1.options.scrollBehavior;
      var supportsScroll = supportsPushState && expectScroll;

      if (supportsScroll && 'fullPath' in routeOrError) {
        handleScroll(this$1, routeOrError, from, false);
      }
    };
    var setupListeners = function (routeOrError) {
      history.setupListeners();
      handleInitialScroll(routeOrError);
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupListeners,
      setupListeners
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.push(location, resolve, reject);
    })
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.replace(location, resolve, reject);
    })
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply(
    [],
    route.matched.map(function (m) {
      return Object.keys(m.components).map(function (key) {
        return m.components[key]
      })
    })
  )
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  current = current || this.history.current;
  var location = normalizeLocation(to, current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.getRoutes = function getRoutes () {
  return this.matcher.getRoutes()
};

VueRouter.prototype.addRoute = function addRoute (parentOrRoute, route) {
  this.matcher.addRoute(parentOrRoute, route);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  if (true) {
    warn(false, 'router.addRoutes() is deprecated and has been removed in Vue Router 4. Use router.addRoute() instead.');
  }
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.5.1';
VueRouter.isNavigationFailure = isNavigationFailure;
VueRouter.NavigationFailureType = NavigationFailureType;
VueRouter.START_LOCATION = START;

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),

/***/ "./resources/js/components/Add.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/Add.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_5d764ff4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=5d764ff4& */ "./resources/js/components/Add.vue?vue&type=template&id=5d764ff4&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_5d764ff4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_5d764ff4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Add.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/Add.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Add.vue?vue&type=template&id=5d764ff4&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Add.vue?vue&type=template&id=5d764ff4& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_5d764ff4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=5d764ff4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Add.vue?vue&type=template&id=5d764ff4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_5d764ff4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_5d764ff4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Edit.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Edit.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_031ccff5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=031ccff5& */ "./resources/js/components/Edit.vue?vue&type=template&id=031ccff5&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_031ccff5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_031ccff5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Edit.vue?vue&type=template&id=031ccff5&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Edit.vue?vue&type=template&id=031ccff5& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_031ccff5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=031ccff5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Edit.vue?vue&type=template&id=031ccff5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_031ccff5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_031ccff5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_bb962f12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=bb962f12&scoped=true& */ "./resources/js/components/Index.vue?vue&type=template&id=bb962f12&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_bb962f12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=bb962f12&scoped=true&lang=css& */ "./resources/js/components/Index.vue?vue&type=style&index=0&id=bb962f12&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_bb962f12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_bb962f12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bb962f12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Index.vue?vue&type=style&index=0&id=bb962f12&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Index.vue?vue&type=style&index=0&id=bb962f12&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_bb962f12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=bb962f12&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index.vue?vue&type=style&index=0&id=bb962f12&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_bb962f12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_bb962f12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_bb962f12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_bb962f12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Index.vue?vue&type=template&id=bb962f12&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Index.vue?vue&type=template&id=bb962f12&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bb962f12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=bb962f12&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index.vue?vue&type=template&id=bb962f12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bb962f12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bb962f12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/router.js":
/*!********************************!*\
  !*** ./resources/js/router.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/Home.vue */ "./resources/js/views/Home.vue");
/* harmony import */ var _components_Index_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Index.vue */ "./resources/js/components/Index.vue");
/* harmony import */ var _components_Add_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Add.vue */ "./resources/js/components/Add.vue");
/* harmony import */ var _components_Edit_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Edit.vue */ "./resources/js/components/Edit.vue");





/* harmony default export */ __webpack_exports__["default"] = (new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, {
    path: "/books",
    name: "index",
    component: _components_Index_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    path: "/books/add",
    name: "add",
    component: _components_Add_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    path: "/books/:id/edit",
    name: "edit",
    component: _components_Edit_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }]
}));

/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/router.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\laravel\vue_spa\resources\js\router.js */"./resources/js/router.js");


/***/ })

/******/ });