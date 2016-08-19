/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(16);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _percentInput = __webpack_require__(17);
	
	var _emailInput = __webpack_require__(18);
	
	var _emailInput2 = _interopRequireDefault(_emailInput);
	
	var _inputFormat = __webpack_require__(19);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by littlestone on 16-8-18.
	 */
	
	var MODULE_NAME = 'ng-input';
	
	
	_angular2.default.module(MODULE_NAME, []).component('percentInput', _percentInput.PercentInputComponent).directive('input-format', _inputFormat.InputFormat).directive('email-input', _emailInput2.default).controller('IndexController', function ($scope) {
	  'ngInject';
	
	  var $ctrl = this;
	  $scope.inputPercent = '80';
	  $scope.inputPhone = '15677383502';
	
	  $scope.handlePhone = function (viewValue) {
	    if (/^1[3|4|5|7|8]\d{9}$/.test(viewValue)) {
	      viewValue = viewValue.substr(0, 3) + "-" + viewValue.substr(3, 4) + "-" + viewValue.substr(7, 4);
	    }
	    console.log(viewValue);
	    return viewValue;
	  };
	  //console.log(inputPercent);
	});
	
	exports.default = MODULE_NAME;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by littlestone on 16-8-18.
	 */
	/*
	let percentInput = () => {
	  return {
	    templateUrl: '/src/percent-input.html',
	    restrict: 'EA',
	    controller(){
	      const rmbSign = '￥';
	      const dollarSign = '$';
	      const emptyStr = '';
	
	
	
	    }
	  }
	};
	
	export default percentInput;
	*/
	
	var PercentInputComponent = {
	  templateUrl: '/src/percent-input.html',
	  controller: function controller() {
	    'ngInject';
	
	    var $ctrl = this;
	    $ctrl.rmbSign = '￥';
	    $ctrl.dollarSign = '$';
	    $ctrl.percentSign = '%';
	    $ctrl.inputStr = '';
	    $ctrl.emptyStr = '';
	    $ctrl.mail = '888@126.com';
	    $ctrl.mailArr = ["@qq.com", "@qq2.com", "@gmail.com", "@126.com", "@163.com", "@hotmail.com", "@yahoo.com", "@yahoo.com.cn", "@live.com", "@sohu.com", "@sina.com"];
	
	    $ctrl.modifyInput = function (ipt) {
	      var init = ipt;
	      console.log("init:" + init);
	      console.log("init-len:" + init.length);
	      if (init.length == 1) {
	        $ctrl.initialPercent = init.concat($ctrl.percentSign);
	      } else if (ipt.length > 1) {
	        //在最末尾插入%
	        $ctrl.initialPercentCopy = init.replace('%', '');
	        console.log("copy:" + $ctrl.initialPercentCopy);
	        $ctrl.initialPercent = $ctrl.initialPercentCopy.substring(0, ipt.length - 1).concat($ctrl.percentSign);
	        console.log($ctrl.initialPercent);
	        // console.log(ipt.length);
	        if (ipt == '') {
	          $ctrl.initialPercent = '';
	        }
	      }
	    };
	    $ctrl.addPrefix = function (str) {
	      var prefix = $ctrl.dollarSign;
	      if (str.length >= 1) {
	        //在前面插入$
	        $ctrl.amountCopy = str.replace(prefix, '');
	        console.log("copy:" + $ctrl.amountCopy);
	        $ctrl.initialAmount = prefix.concat($ctrl.amountCopy);
	        console.log($ctrl.initialAmount);
	      }
	    };
	    $ctrl.addSuffix = function (str) {
	      angular.forEach($ctrl.mailArr, function (value) {
	        // console.log(key+"=>"+str+value);
	        $ctrl.mailArr = [];
	        /*$ctrl.mailTips.push(str+value);
	        console.log($ctrl.mailTips)*/
	        value = str + value;
	        $ctrl.mailArr.push(value);
	        console.log($ctrl.mailArr);
	      });
	    };
	    $ctrl.addMailSuffix = function () {};
	  }
	};
	exports.PercentInputComponent = PercentInputComponent;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by littlestone on 16-8-19.
	 */
	
	function EmailInput($parse, $timeout) {
	  'ngInject';
	
	  return {
	    template: 'qqqqqqqqqq',
	    restrict: 'EA',
	    link: function link($scope, $ele, $attrs) {}
	  };
	}
	exports.default = EmailInput;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.InputFormat = undefined;
	
	var _defineProperty2 = __webpack_require__(20);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by littlestone on 16-8-19.
	 */
	function InputFormat($parse, $timeout) {
	  'ngInject';
	
	  var _rules;
	
	  var rules = (_rules = {
	    integer: function integer(viewValue, ngModel, options) {
	      var integer = parseInt(viewValue);
	
	      if (isNaN(integer)) {
	        integer = '';
	      }
	
	      return integer;
	    },
	    float: function float(viewValue, ngModel, options) {
	
	      if (_.isNaN(+viewValue)) {
	        viewValue += '';
	        return viewValue ? viewValue.slice(0, viewValue.length - 1) : '';
	      }
	
	      if (/^\d+\.(\d*0)?$/.test(viewValue)) {
	        return viewValue + '';
	      }
	
	      if (+viewValue === 0) {
	        ngModel._updateModel(0);
	        return viewValue + '';
	      }
	
	      var float = parseFloat(viewValue);
	
	      // min value
	      //void 0  为了得到纯正的 undefined
	      if (options.min !== void 0) {
	        if (float < options.min) {
	          float = options.min;
	        }
	      }
	
	      // max value
	      if (options.max) {
	        if (float > options.max) {
	          float = options.max;
	        }
	      }
	
	      if (options.digits) {
	        float = (+float).toFixed(options.digits);
	      }
	
	      return isNaN(+float) ? viewValue : +float + '';
	    },
	    number: function number(viewValue, ngModel, options) {
	
	      if (+viewValue === 0) return viewValue;
	
	      var number = +viewValue;
	
	      // min value TODO:not perfect and fixed it please
	      if (options.min) {
	        if (number < options.min) {
	          number = options.min;
	        }
	      }
	
	      // max value
	      if (options.max) {
	        if (number > options.max) {
	          number = options.max;
	        }
	      }
	
	      // NaN
	      if (isNaN(number)) {
	        number = 0;
	      }
	
	      return number;
	    },
	    percent: function percent(viewValue, ngModel, options) {
	      if (+viewValue === 0) return viewValue;
	      var num = +viewValue;
	      if (isNaN(num)) {
	        number = 0;
	      }
	      return num;
	    },
	    email: function email(viewValue, ngModel) {
	      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	      viewValue;
	      return viewValue;
	    },
	    phone: function phone(viewValue, ngModel) {
	      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	      if (/^1[3|4|5|7|8]\d{9}$/.test(viewValue)) {
	        viewValue = viewValue.substr(0, 3) + "-" + viewValue.substr(3, 4) + "-" + viewValue.substr(7, 4);
	      }
	      return viewValue;
	    },
	    prefix: function prefix(viewValue, ngModel, options) {},
	
	    '': function _(viewValue) {
	      return viewValue;
	    }
	  }, (0, _defineProperty3.default)(_rules, void 0, function (viewValue) {
	    return viewValue;
	  }), (0, _defineProperty3.default)(_rules, null, function undefined(viewValue) {
	    return viewValue;
	  }), _rules);
	
	  return {
	    restrict: 'A',
	    require: 'ngModel', //启用所有NgModelController功能。
	    scope: {
	      ngModel: '='
	    },
	    /**
	     *
	     * @param $scope     用来将数据绑定到directive，通常是NgModelController.$viewValue的副本
	     * @param $ele
	     * @param $attr
	     * @param ngModelCtrl    link函数将NgModelController注入到变量ngModelCtrl
	     * @param NgModelController.$viewValue – $modelValue转换成的变量
	     * @param NgModelController.$modelValue – 内部用来和真实变量进行同步的变量，进而连接到ng-model
	     * @param NgModelController.$render – 将$viewValue渲染到directive template中
	     */
	    link: function link($scope, $ele, $attr, ngModelCtrl) {
	      var options = $attr.inputSmartOpts ? $parse($attr.inputSmartOpts)($scope) : {};
	
	      function updateView(value) {
	        $timeout(function () {
	          ngModelCtrl.$viewValue = value;
	          ngModelCtrl.$render();
	        });
	      }
	
	      function updateModel(value) {
	        $timeout(function () {
	          ngModelCtrl.$modelValue = value;
	          $scope.ngModel = value; // overwrites ngModel value
	        });
	      }
	
	      ngModelCtrl._updateView = updateView;
	      ngModelCtrl._updateModel = updateModel;
	
	      //将view value转换成model value
	      ngModelCtrl.$parsers.push(function (viewValue) {
	
	        if (!viewValue) return viewValue;
	
	        var parser = rules[$attr.inputSmart] || rules[''];
	        viewValue = parser(viewValue, ngModelCtrl, options) || viewValue;
	
	        ngModelCtrl.$setViewValue(viewValue);
	        ngModelCtrl.$render();
	
	        return viewValue;
	      });
	    }
	  };
	}
	
	exports.InputFormat = InputFormat;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(21);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(22), __esModule: true };

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(23);
	var $Object = __webpack_require__(26).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(24);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(34), 'Object', {defineProperty: __webpack_require__(30).f});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(25)
	  , core      = __webpack_require__(26)
	  , ctx       = __webpack_require__(27)
	  , hide      = __webpack_require__(29)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 25 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 26 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(28);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(30)
	  , createDesc = __webpack_require__(38);
	module.exports = __webpack_require__(34) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(31)
	  , IE8_DOM_DEFINE = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(37)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(34) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(34) && !__webpack_require__(35)(function(){
	  return Object.defineProperty(__webpack_require__(36)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(35)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32)
	  , document = __webpack_require__(25).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(32);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmE0N2E1N2U3OTI1ZTRiZDMyNjI/ODMyZCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIj8xMWQyIiwid2VicGFjazovLy8uL3NyYy9wZXJjZW50LWlucHV0LmpzPzAxMTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtYWlsLWlucHV0LmpzPzNmMDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LWZvcm1hdC5qcz8zNTVlIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzPzE3MmUiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcz81ZjcwIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanM/YjdkOCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzP2M4MmMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzP2VjZTIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzPzc3YWEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcz8xYjYyIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcz9jZTAwIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanM/ZDUzZSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzP2E2ZGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzPzQxMTYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzPzBkYTMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzPzI0YzgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanM/YmQxZiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcz83MDUxIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzPzkzNWQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcz9hYjQ0Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcz80OWE0Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanM/MWU4NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFSQTs7OztBQUlBLEtBQU0sY0FBYyxVQUFwQjs7O0FBTUEsbUJBQVEsTUFBUixDQUFlLFdBQWYsRUFBNEIsRUFBNUIsRUFDRyxTQURILENBQ2EsY0FEYix1Q0FFRyxTQUZILENBRWEsY0FGYiw0QkFHRyxTQUhI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O0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsRzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRyxVQUFVO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDRkE7QUFDQSxzRUFBc0UsZ0JBQWdCLFVBQVUsR0FBRztBQUNuRyxFQUFDLEU7Ozs7OztBQ0ZEO0FBQ0E7QUFDQSxrQ0FBaUMsUUFBUSxnQkFBZ0IsVUFBVSxHQUFHO0FBQ3RFLEVBQUMsRTs7Ozs7O0FDSEQ7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxHOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6Im5nLWlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA2YTQ3YTU3ZTc5MjVlNGJkMzI2MlxuICoqL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDZhNDdhNTdlNzkyNWU0YmQzMjYyXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbGl0dGxlc3RvbmUgb24gMTYtOC0xOC5cclxuICovXHJcblxyXG5jb25zdCBNT0RVTEVfTkFNRSA9ICduZy1pbnB1dCc7XHJcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBQZXJjZW50SW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3NyYy9wZXJjZW50LWlucHV0JztcclxuaW1wb3J0IEVtYWlsSW5wdXQgZnJvbSAnLi9zcmMvZW1haWwtaW5wdXQnO1xyXG5pbXBvcnQgeyBJbnB1dEZvcm1hdCB9IGZyb20gJy4vc3JjL2lucHV0LWZvcm1hdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZShNT0RVTEVfTkFNRSwgW10pXHJcbiAgLmNvbXBvbmVudCgncGVyY2VudElucHV0JywgUGVyY2VudElucHV0Q29tcG9uZW50KVxyXG4gIC5kaXJlY3RpdmUoJ2lucHV0LWZvcm1hdCcsIElucHV0Rm9ybWF0KVxyXG4gIC5kaXJlY3RpdmUoJ2VtYWlsLWlucHV0JywgRW1haWxJbnB1dClcclxuICAuY29udHJvbGxlcignSW5kZXhDb250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlKXtcclxuICAgICduZ0luamVjdCc7XHJcbiAgICBsZXQgJGN0cmwgPSB0aGlzO1xyXG4gICAgJHNjb3BlLmlucHV0UGVyY2VudCA9ICc4MCc7XHJcbiAgICAkc2NvcGUuaW5wdXRQaG9uZSA9ICcxNTY3NzM4MzUwMic7XHJcblxyXG4gICAgJHNjb3BlLmhhbmRsZVBob25lID0gZnVuY3Rpb24odmlld1ZhbHVlKXtcclxuICAgICAgaWYoKC9eMVszfDR8NXw3fDhdXFxkezl9JC8udGVzdCh2aWV3VmFsdWUpKSl7XHJcbiAgICAgICAgdmlld1ZhbHVlID0gdmlld1ZhbHVlLnN1YnN0cigwLDMpK1wiLVwiK3ZpZXdWYWx1ZS5zdWJzdHIoMyw0KStcIi1cIit2aWV3VmFsdWUuc3Vic3RyKDcsNCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2codmlld1ZhbHVlKTtcclxuICAgICAgcmV0dXJuIHZpZXdWYWx1ZTtcclxuICAgIH07XHJcbiAgICAvL2NvbnNvbGUubG9nKGlucHV0UGVyY2VudCk7XHJcbiAgfSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTU9EVUxFX05BTUU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi9cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhclwiXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGxpdHRsZXN0b25lIG9uIDE2LTgtMTguXHJcbiAqL1xyXG4vKlxyXG5sZXQgcGVyY2VudElucHV0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy9zcmMvcGVyY2VudC1pbnB1dC5odG1sJyxcclxuICAgIHJlc3RyaWN0OiAnRUEnLFxyXG4gICAgY29udHJvbGxlcigpe1xyXG4gICAgICBjb25zdCBybWJTaWduID0gJ++/pSc7XHJcbiAgICAgIGNvbnN0IGRvbGxhclNpZ24gPSAnJCc7XHJcbiAgICAgIGNvbnN0IGVtcHR5U3RyID0gJyc7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyY2VudElucHV0O1xyXG4qL1xyXG5cclxubGV0IFBlcmNlbnRJbnB1dENvbXBvbmVudCA9IHtcclxuICB0ZW1wbGF0ZVVybDogJy9zcmMvcGVyY2VudC1pbnB1dC5odG1sJyxcclxuICBjb250cm9sbGVyKCl7XHJcbiAgICAnbmdJbmplY3QnO1xyXG4gICAgbGV0ICRjdHJsID0gdGhpcztcclxuICAgICRjdHJsLnJtYlNpZ24gPSAn77+lJztcclxuICAgICRjdHJsLmRvbGxhclNpZ24gPSAnJCc7XHJcbiAgICAkY3RybC5wZXJjZW50U2lnbiA9ICclJztcclxuICAgICRjdHJsLmlucHV0U3RyID0gJyc7XHJcbiAgICAkY3RybC5lbXB0eVN0ciA9ICcnO1xyXG4gICAgJGN0cmwubWFpbCA9ICc4ODhAMTI2LmNvbSc7XHJcbiAgICAkY3RybC5tYWlsQXJyID0gW1wiQHFxLmNvbVwiLFwiQHFxMi5jb21cIixcIkBnbWFpbC5jb21cIixcIkAxMjYuY29tXCIsXCJAMTYzLmNvbVwiLFwiQGhvdG1haWwuY29tXCIsXCJAeWFob28uY29tXCIsXCJAeWFob28uY29tLmNuXCIsXCJAbGl2ZS5jb21cIixcIkBzb2h1LmNvbVwiLFwiQHNpbmEuY29tXCJdO1xyXG5cclxuICAgICRjdHJsLm1vZGlmeUlucHV0ID0gKGlwdCkgPT4ge1xyXG4gICAgICBsZXQgaW5pdCA9IGlwdDtcclxuICAgICAgY29uc29sZS5sb2coXCJpbml0OlwiK2luaXQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImluaXQtbGVuOlwiK2luaXQubGVuZ3RoKTtcclxuICAgICAgaWYoaW5pdC5sZW5ndGggPT0gMSl7XHJcbiAgICAgICAgJGN0cmwuaW5pdGlhbFBlcmNlbnQgPSBpbml0LmNvbmNhdCgkY3RybC5wZXJjZW50U2lnbik7XHJcbiAgICAgIH1lbHNlIGlmKGlwdC5sZW5ndGggPiAxKXtcclxuICAgICAgICAvL+WcqOacgOacq+WwvuaPkuWFpSVcclxuICAgICAgICAkY3RybC5pbml0aWFsUGVyY2VudENvcHkgPSBpbml0LnJlcGxhY2UoJyUnLCcnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvcHk6XCIrJGN0cmwuaW5pdGlhbFBlcmNlbnRDb3B5KTtcclxuICAgICAgICAkY3RybC5pbml0aWFsUGVyY2VudCA9ICRjdHJsLmluaXRpYWxQZXJjZW50Q29weS5zdWJzdHJpbmcoMCxpcHQubGVuZ3RoLTEpLmNvbmNhdCgkY3RybC5wZXJjZW50U2lnbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGN0cmwuaW5pdGlhbFBlcmNlbnQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlwdC5sZW5ndGgpO1xyXG4gICAgICAgIGlmKGlwdCA9PSAnJyl7XHJcbiAgICAgICAgICRjdHJsLmluaXRpYWxQZXJjZW50ID0gJydcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgJGN0cmwuYWRkUHJlZml4ID0gKHN0cikgPT4ge1xyXG4gICAgICBsZXQgcHJlZml4ID0gJGN0cmwuZG9sbGFyU2lnbjtcclxuICAgICAgaWYoc3RyLmxlbmd0aCA+PSAxKXtcclxuICAgICAgICAvL+WcqOWJjemdouaPkuWFpSRcclxuICAgICAgICAkY3RybC5hbW91bnRDb3B5ID0gc3RyLnJlcGxhY2UocHJlZml4LCcnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvcHk6XCIrJGN0cmwuYW1vdW50Q29weSk7XHJcbiAgICAgICAgJGN0cmwuaW5pdGlhbEFtb3VudCA9IHByZWZpeC5jb25jYXQoJGN0cmwuYW1vdW50Q29weSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGN0cmwuaW5pdGlhbEFtb3VudCk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfTtcclxuICAgICRjdHJsLmFkZFN1ZmZpeCA9IChzdHIpID0+IHtcclxuICAgICAgYW5ndWxhci5mb3JFYWNoKCRjdHJsLm1haWxBcnIsICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGtleStcIj0+XCIrc3RyK3ZhbHVlKTtcclxuICAgICAgICAkY3RybC5tYWlsQXJyID0gW107XHJcbiAgICAgICAgLyokY3RybC5tYWlsVGlwcy5wdXNoKHN0cit2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGN0cmwubWFpbFRpcHMpKi9cclxuICAgICAgICB2YWx1ZSA9IHN0ciArIHZhbHVlO1xyXG4gICAgICAgICRjdHJsLm1haWxBcnIucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGN0cmwubWFpbEFycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgICRjdHJsLmFkZE1haWxTdWZmaXggPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuZXhwb3J0IHsgUGVyY2VudElucHV0Q29tcG9uZW50IH1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wZXJjZW50LWlucHV0LmpzXG4gKiovXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcGVyY2VudC1pbnB1dC5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGxpdHRsZXN0b25lIG9uIDE2LTgtMTkuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gRW1haWxJbnB1dCgkcGFyc2UsICR0aW1lb3V0KSB7XHJcbiAgJ25nSW5qZWN0JztcclxuICByZXR1cm57XHJcbiAgICB0ZW1wbGF0ZTogJ3FxcXFxcXFxcXEnLFxyXG4gICAgcmVzdHJpY3Q6ICdFQScsXHJcbiAgICBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlLCAkYXR0cnMpIHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsSW5wdXQ7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lbWFpbC1pbnB1dC5qc1xuICoqL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VtYWlsLWlucHV0LmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbGl0dGxlc3RvbmUgb24gMTYtOC0xOS5cclxuICovXHJcbmZ1bmN0aW9uIElucHV0Rm9ybWF0KCRwYXJzZSwgJHRpbWVvdXQpIHtcclxuICAnbmdJbmplY3QnO1xyXG5cclxuICBsZXQgcnVsZXMgPSB7XHJcbiAgICBpbnRlZ2VyKHZpZXdWYWx1ZSwgbmdNb2RlbCwgb3B0aW9ucyl7XHJcbiAgICAgIGxldCBpbnRlZ2VyID0gcGFyc2VJbnQodmlld1ZhbHVlKTtcclxuXHJcbiAgICAgIGlmIChpc05hTihpbnRlZ2VyKSkge1xyXG4gICAgICAgIGludGVnZXIgPSAnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGludGVnZXI7XHJcbiAgICB9LFxyXG4gICAgZmxvYXQodmlld1ZhbHVlLCBuZ01vZGVsLCBvcHRpb25zKXtcclxuXHJcbiAgICAgIGlmIChfLmlzTmFOKCt2aWV3VmFsdWUpKSB7XHJcbiAgICAgICAgdmlld1ZhbHVlICs9ICcnO1xyXG4gICAgICAgIHJldHVybiB2aWV3VmFsdWUgPyB2aWV3VmFsdWUuc2xpY2UoMCwgdmlld1ZhbHVlLmxlbmd0aCAtIDEpIDogJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgvXlxcZCtcXC4oXFxkKjApPyQvLnRlc3Qodmlld1ZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB2aWV3VmFsdWUgKyAnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCt2aWV3VmFsdWUgPT09IDApIHtcclxuICAgICAgICBuZ01vZGVsLl91cGRhdGVNb2RlbCgwKTtcclxuICAgICAgICByZXR1cm4gdmlld1ZhbHVlICsgJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBmbG9hdCA9IHBhcnNlRmxvYXQodmlld1ZhbHVlKTtcclxuXHJcbiAgICAgIC8vIG1pbiB2YWx1ZVxyXG4gICAgICAvL3ZvaWQgMCAg5Li65LqG5b6X5Yiw57qv5q2j55qEIHVuZGVmaW5lZFxyXG4gICAgICBpZiAob3B0aW9ucy5taW4gIT09IHZvaWQgMCkge1xyXG4gICAgICAgIGlmIChmbG9hdCA8IG9wdGlvbnMubWluKSB7XHJcbiAgICAgICAgICBmbG9hdCA9IG9wdGlvbnMubWluO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbWF4IHZhbHVlXHJcbiAgICAgIGlmIChvcHRpb25zLm1heCkge1xyXG4gICAgICAgIGlmIChmbG9hdCA+IG9wdGlvbnMubWF4KSB7XHJcbiAgICAgICAgICBmbG9hdCA9IG9wdGlvbnMubWF4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9wdGlvbnMuZGlnaXRzKSB7XHJcbiAgICAgICAgZmxvYXQgPSAoK2Zsb2F0KS50b0ZpeGVkKG9wdGlvbnMuZGlnaXRzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGlzTmFOKCtmbG9hdCkgPyB2aWV3VmFsdWUgOiAoK2Zsb2F0KSArICcnO1xyXG4gICAgfSxcclxuICAgIG51bWJlcih2aWV3VmFsdWUsIG5nTW9kZWwsIG9wdGlvbnMpe1xyXG5cclxuICAgICAgaWYgKCt2aWV3VmFsdWUgPT09IDApIHJldHVybiB2aWV3VmFsdWU7XHJcblxyXG4gICAgICBsZXQgbnVtYmVyID0gK3ZpZXdWYWx1ZTtcclxuXHJcbiAgICAgIC8vIG1pbiB2YWx1ZSBUT0RPOm5vdCBwZXJmZWN0IGFuZCBmaXhlZCBpdCBwbGVhc2VcclxuICAgICAgaWYgKG9wdGlvbnMubWluKSB7XHJcbiAgICAgICAgaWYgKG51bWJlciA8IG9wdGlvbnMubWluKSB7XHJcbiAgICAgICAgICBudW1iZXIgPSBvcHRpb25zLm1pbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIG1heCB2YWx1ZVxyXG4gICAgICBpZiAob3B0aW9ucy5tYXgpIHtcclxuICAgICAgICBpZiAobnVtYmVyID4gb3B0aW9ucy5tYXgpIHtcclxuICAgICAgICAgIG51bWJlciA9IG9wdGlvbnMubWF4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTmFOXHJcbiAgICAgIGlmIChpc05hTihudW1iZXIpKSB7XHJcbiAgICAgICAgbnVtYmVyID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bWJlcjtcclxuICAgIH0sXHJcbiAgICBwZXJjZW50KHZpZXdWYWx1ZSwgbmdNb2RlbCwgb3B0aW9ucyl7XHJcbiAgICAgIGlmICgrdmlld1ZhbHVlID09PSAwKSByZXR1cm4gdmlld1ZhbHVlO1xyXG4gICAgICBsZXQgbnVtID0gK3ZpZXdWYWx1ZTtcclxuICAgICAgaWYgKGlzTmFOKG51bSkpIHtcclxuICAgICAgICBudW1iZXIgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudW1cclxuICAgIH0sXHJcbiAgICBlbWFpbCh2aWV3VmFsdWUsIG5nTW9kZWwsIG9wdGlvbnMgPSB7fSl7XHJcbiAgICAgIHZpZXdWYWx1ZVxyXG4gICAgICByZXR1cm4gdmlld1ZhbHVlO1xyXG4gICAgfSxcclxuICAgIHBob25lKHZpZXdWYWx1ZSwgbmdNb2RlbCwgb3B0aW9ucyA9IHt9KXtcclxuICAgICAgICBpZigoL14xWzN8NHw1fDd8OF1cXGR7OX0kLy50ZXN0KHZpZXdWYWx1ZSkpKXtcclxuICAgICAgICAgIHZpZXdWYWx1ZSA9IHZpZXdWYWx1ZS5zdWJzdHIoMCwzKStcIi1cIit2aWV3VmFsdWUuc3Vic3RyKDMsNCkrXCItXCIrdmlld1ZhbHVlLnN1YnN0cig3LDQpO1xyXG4gICAgICAgIH1cclxuICAgICAgcmV0dXJuIHZpZXdWYWx1ZTtcclxuICAgIH0sXHJcbiAgICBwcmVmaXgodmlld1ZhbHVlLCBuZ01vZGVsLCBvcHRpb25zKXtcclxuXHJcbiAgICB9LFxyXG4gICAgJyc6IHZpZXdWYWx1ZT0+dmlld1ZhbHVlLFxyXG4gICAgW3ZvaWQgMF06IHZpZXdWYWx1ZT0+dmlld1ZhbHVlLFxyXG4gICAgW251bGxdOiB2aWV3VmFsdWU9PnZpZXdWYWx1ZVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLC8v5ZCv55So5omA5pyJTmdNb2RlbENvbnRyb2xsZXLlip/og73jgIJcclxuICAgIHNjb3BlOiB7XHJcbiAgICAgIG5nTW9kZWw6ICc9J1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAkc2NvcGUgICAgIOeUqOadpeWwhuaVsOaNrue7keWumuWIsGRpcmVjdGl2Ze+8jOmAmuW4uOaYr05nTW9kZWxDb250cm9sbGVyLiR2aWV3VmFsdWXnmoTlia/mnKxcclxuICAgICAqIEBwYXJhbSAkZWxlXHJcbiAgICAgKiBAcGFyYW0gJGF0dHJcclxuICAgICAqIEBwYXJhbSBuZ01vZGVsQ3RybCAgICBsaW5r5Ye95pWw5bCGTmdNb2RlbENvbnRyb2xsZXLms6jlhaXliLDlj5jph49uZ01vZGVsQ3RybFxyXG4gICAgICogQHBhcmFtIE5nTW9kZWxDb250cm9sbGVyLiR2aWV3VmFsdWUg4oCTICRtb2RlbFZhbHVl6L2s5o2i5oiQ55qE5Y+Y6YePXHJcbiAgICAgKiBAcGFyYW0gTmdNb2RlbENvbnRyb2xsZXIuJG1vZGVsVmFsdWUg4oCTIOWGhemDqOeUqOadpeWSjOecn+WunuWPmOmHj+i/m+ihjOWQjOatpeeahOWPmOmHj++8jOi/m+iAjOi/nuaOpeWIsG5nLW1vZGVsXHJcbiAgICAgKiBAcGFyYW0gTmdNb2RlbENvbnRyb2xsZXIuJHJlbmRlciDigJMg5bCGJHZpZXdWYWx1Zea4suafk+WIsGRpcmVjdGl2ZSB0ZW1wbGF0ZeS4rVxyXG4gICAgICovXHJcbiAgICBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlLCAkYXR0ciwgbmdNb2RlbEN0cmwpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSAkYXR0ci5pbnB1dFNtYXJ0T3B0cyA/ICRwYXJzZSgkYXR0ci5pbnB1dFNtYXJ0T3B0cykoJHNjb3BlKSA6IHt9O1xyXG5cclxuICAgICAgZnVuY3Rpb24gdXBkYXRlVmlldyh2YWx1ZSkge1xyXG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIG5nTW9kZWxDdHJsLiR2aWV3VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgIG5nTW9kZWxDdHJsLiRyZW5kZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsKHZhbHVlKSB7XHJcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgbmdNb2RlbEN0cmwuJG1vZGVsVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICRzY29wZS5uZ01vZGVsID0gdmFsdWU7IC8vIG92ZXJ3cml0ZXMgbmdNb2RlbCB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuZ01vZGVsQ3RybC5fdXBkYXRlVmlldyA9IHVwZGF0ZVZpZXc7XHJcbiAgICAgIG5nTW9kZWxDdHJsLl91cGRhdGVNb2RlbCA9IHVwZGF0ZU1vZGVsO1xyXG5cclxuICAgICAgLy/lsIZ2aWV3IHZhbHVl6L2s5o2i5oiQbW9kZWwgdmFsdWVcclxuICAgICAgbmdNb2RlbEN0cmwuJHBhcnNlcnMucHVzaChmdW5jdGlvbiAodmlld1ZhbHVlKSB7XHJcblxyXG4gICAgICAgIGlmICghdmlld1ZhbHVlKSByZXR1cm4gdmlld1ZhbHVlO1xyXG5cclxuICAgICAgICBsZXQgcGFyc2VyID0gcnVsZXNbJGF0dHIuaW5wdXRTbWFydF0gfHwgcnVsZXNbJyddO1xyXG4gICAgICAgIHZpZXdWYWx1ZSA9IHBhcnNlcih2aWV3VmFsdWUsIG5nTW9kZWxDdHJsLCBvcHRpb25zKSB8fCB2aWV3VmFsdWU7XHJcblxyXG4gICAgICAgIG5nTW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUodmlld1ZhbHVlKTtcclxuICAgICAgICBuZ01vZGVsQ3RybC4kcmVuZGVyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB2aWV3VmFsdWU7XHJcblxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQge0lucHV0Rm9ybWF0fTtcclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbnB1dC1mb3JtYXQuanNcbiAqKi9cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbnB1dC1mb3JtYXQuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi9cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi9cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi9cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi9cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi9cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=