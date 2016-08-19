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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(16);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _percentInput = __webpack_require__(17);
	
	var _inputFormat = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by littlestone on 16-8-18.
	 */
	
	var MODULE_NAME = 'ng-input';
	
	
	_angular2.default.module(MODULE_NAME, []).component('percentInput', _percentInput.PercentInputComponent).directive('input-format', _inputFormat.InputFormat).controller('IndexController', function ($scope) {
	  'ngInject';
	
	  var $ctrl = this;
	  $scope.inputPercent = '80';
	  //console.log(inputPercent);
	});
	
	exports.default = MODULE_NAME;

/***/ },

/***/ 16:
/***/ function(module, exports) {

	module.exports = angular;

/***/ },

/***/ 17:
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

/***/ 18:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by littlestone on 16-8-19.
	 */
	function InputFormat($parse, $timeout) {
	  'ngInject';
	
	  /*let rules = {
	    integer(viewValue, ngModel, options){
	      let integer = parseInt(viewValue);
	       if (isNaN(integer)) {
	        integer = '';
	      }
	       return integer;
	    },
	    float(viewValue, ngModel, options){
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
	       let float = parseFloat(viewValue);
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
	       return isNaN(+float) ? viewValue : (+float) + '';
	    },
	    number(viewValue, ngModel, options){
	       if (+viewValue === 0) return viewValue;
	       let number = +viewValue;
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
	    percent(viewValue, ngModel, options){
	      if (+viewValue === 0) return viewValue;
	      let num = +viewValue;
	      console.log(viewValue);
	      if (isNaN(num)) {
	        number = 0;
	      }
	      return num
	    },
	    email(viewValue, ngModel, options = {}){
	      return viewValue;
	    },
	    phone(viewValue, ngModel, options = {}){
	      return viewValue;
	    },
	    '': viewValue=>viewValue,
	    [void 0]: viewValue=>viewValue,
	    [null]: viewValue=>viewValue
	  };*/
	
	  var tpl = '\n\t\t <div style=\'width: 80\'>\n       <input type=\'text\' ng-model=\'num\' />\n       <select ng-model=\'unit\'>\n         <option value=\'seconds\'>Seconds</option>\n         <option value=\'minutes\'>Minutes</option>\n         <option value=\'hours\'>Hours</option>\n         <option value=\'days\'>Days</option>\n       </select>\n     </div>';
	  return {
	    template: tpl,
	    restrict: 'EA',
	    replace: true,
	    require: 'ngModel', //启用所有NgModelController功能。
	    scope: {
	      ngModel: '='
	    },
	    link: function link(scope, iElement, iAttrs, ngModelCtrl) {
	      var multiplierMap = { seconds: 1, minutes: 60, hours: 3600, days: 86400 };
	      var multiplierTypes = ['seconds', 'minutes', 'hours', 'days'];
	
	      // $formatters接受一个数组，数组是一系列方法，用于将modelValue转化成viewValue
	      ngModelCtrl.$formatters.push(function (modelValue) {
	        var unit = 'minutes',
	            num = 0,
	            i,
	            unitName;
	
	        modelValue = parseInt(modelValue || 0);
	
	        // Figure out the largest unit of time the model value
	        // fits into. For example, 3600 is 1 hour, but 1800 is 30 minutes.
	        for (i = multiplierTypes.length - 1; i >= 0; i--) {
	          unitName = multiplierTypes[i];
	          if (modelValue % multiplierMap[unitName] === 0) {
	            unit = unitName;
	            break;
	          }
	        }
	
	        if (modelValue) {
	          num = modelValue / multiplierMap[unit];
	        }
	
	        return {
	          unit: unit,
	          num: num
	        };
	      });
	
	      // $parsers接受一个数组，数组是一系列方法，用于将viewValue转化成modelValue
	      ngModelCtrl.$parsers.push(function (viewValue) {
	        var unit = viewValue.unit,
	            num = viewValue.num,
	            multiplier;
	        multiplier = multiplierMap[unit];
	        return num * multiplier;
	      });
	
	      scope.$watch('unit + num', function () {
	        // $setViewValue用于更新viewValue
	        ngModelCtrl.$setViewValue({ unit: scope.unit, num: scope.num });
	      });
	
	      // $render用于将viewValue渲染到指令的模板中
	      ngModelCtrl.$render = function () {
	        scope.unit = ngModelCtrl.$viewValue.unit;
	        scope.num = ngModelCtrl.$viewValue.num;
	      };
	    }
	  };
	}
	
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
	/*link: function ($scope, $ele, $attr, ngModelCtrl) {
	   let options = $attr.inputSmartOpts ? $parse($attr.inputSmartOpts)($scope) : {};
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
	     let parser = rules[$attr.inputSmart] || rules[''];
	    viewValue = parser(viewValue, ngModelCtrl, options) || viewValue;
	     ngModelCtrl.$setViewValue(viewValue);
	    ngModelCtrl.$render();
	     return viewValue;
	   })
	 }*/
	//};
	//}
	
	exports.InputFormat = InputFormat;

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWM1NGVhNzZhOWYwYjY1YWZkODk/OGEzZiIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIj8xMWQyIiwid2VicGFjazovLy8uL3NyYy9wZXJjZW50LWlucHV0LmpzPzAxMTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LWZvcm1hdC5qcz8zNTVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFQQTs7OztBQUlBLEtBQU0sY0FBYyxVQUFwQjs7O0FBS0EsbUJBQVEsTUFBUixDQUFlLFdBQWYsRUFBNEIsRUFBNUIsRUFDRyxTQURILENBQ2EsY0FEYix1Q0FFRyxTQUZILENBRWEsY0FGYiw0QkFHRyxVQUhILENBR2MsaUJBSGQsRUFHaUMsVUFBUyxNQUFULEVBQWdCO0FBQzdDOztBQUNBLE9BQUksUUFBUSxJQUFaO0FBQ0EsVUFBTyxZQUFQLEdBQXNCLElBQXRCO0FBQ0E7QUFDRCxFQVJIOzttQkFXZSxXOzs7Ozs7O0FDcEJmLDBCOzs7Ozs7Ozs7Ozs7QUNBQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsS0FBSSx3QkFBd0I7QUFDMUIsZ0JBQWEseUJBRGE7QUFFMUIsYUFGMEIsd0JBRWQ7QUFDVjs7QUFDQSxTQUFJLFFBQVEsSUFBWjtBQUNBLFdBQU0sT0FBTixHQUFnQixHQUFoQjtBQUNBLFdBQU0sVUFBTixHQUFtQixHQUFuQjtBQUNBLFdBQU0sV0FBTixHQUFvQixH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b0IsS0FBSyxNQUFNLEdBQS9CLEVBQTFCO0FBQ0QsUUFIRDs7QUFLQTtBQUNBLG1CQUFZLE9BQVosR0FBc0IsWUFBVztBQUMvQixlQUFNLElBQU4sR0FBYSxZQUFZLFVBQVosQ0FBdUIsSUFBcEM7QUFDQSxlQUFNLEdBQU4sR0FBYSxZQUFZLFVBQVosQ0FBdUIsR0FBcEM7QUFDRCxRQUhEO0FBSUQ7QUF2REksSUFBUDtBQXlERDs7QUFFRzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDRjtBQUNGOztTQUVRLFcsR0FBQSxXIiwiZmlsZSI6Im5nLWlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA1YzU0ZWE3NmE5ZjBiNjVhZmQ4OVxuICoqL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDVjNTRlYTc2YTlmMGI2NWFmZDg5XG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpdHRsZXN0b25lIG9uIDE2LTgtMTguXG4gKi9cblxuY29uc3QgTU9EVUxFX05BTUUgPSAnbmctaW5wdXQnO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBQZXJjZW50SW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3NyYy9wZXJjZW50LWlucHV0JztcbmltcG9ydCB7IElucHV0Rm9ybWF0IH0gZnJvbSAnLi9zcmMvaW5wdXQtZm9ybWF0JztcblxuYW5ndWxhci5tb2R1bGUoTU9EVUxFX05BTUUsIFtdKVxuICAuY29tcG9uZW50KCdwZXJjZW50SW5wdXQnLCBQZXJjZW50SW5wdXRDb21wb25lbnQpXG4gIC5kaXJlY3RpdmUoJ2lucHV0LWZvcm1hdCcsIElucHV0Rm9ybWF0KVxuICAuY29udHJvbGxlcignSW5kZXhDb250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlKXtcbiAgICAnbmdJbmplY3QnO1xuICAgIGxldCAkY3RybCA9IHRoaXM7XG4gICAgJHNjb3BlLmlucHV0UGVyY2VudCA9ICc4MCc7XG4gICAgLy9jb25zb2xlLmxvZyhpbnB1dFBlcmNlbnQpO1xuICB9KTtcblxuXG5leHBvcnQgZGVmYXVsdCBNT0RVTEVfTkFNRTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2luZGV4LmpzXG4gKiovXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhclwiXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpdHRsZXN0b25lIG9uIDE2LTgtMTguXG4gKi9cbi8qXG5sZXQgcGVyY2VudElucHV0ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlVXJsOiAnL3NyYy9wZXJjZW50LWlucHV0Lmh0bWwnLFxuICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgIGNvbnRyb2xsZXIoKXtcbiAgICAgIGNvbnN0IHJtYlNpZ24gPSAn77+lJztcbiAgICAgIGNvbnN0IGRvbGxhclNpZ24gPSAnJCc7XG4gICAgICBjb25zdCBlbXB0eVN0ciA9ICcnO1xuXG5cblxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGVyY2VudElucHV0O1xuKi9cblxubGV0IFBlcmNlbnRJbnB1dENvbXBvbmVudCA9IHtcbiAgdGVtcGxhdGVVcmw6ICcvc3JjL3BlcmNlbnQtaW5wdXQuaHRtbCcsXG4gIGNvbnRyb2xsZXIoKXtcbiAgICAnbmdJbmplY3QnO1xuICAgIGxldCAkY3RybCA9IHRoaXM7XG4gICAgJGN0cmwucm1iU2lnbiA9ICfvv6UnO1xuICAgICRjdHJsLmRvbGxhclNpZ24gPSAnJCc7XG4gICAgJGN0cmwucGVyY2VudFNpZ24gPSAnJSc7XG4gICAgJGN0cmwuaW5wdXRTdHIgPSAnJztcbiAgICAkY3RybC5lbXB0eVN0ciA9ICcnO1xuICAgICRjdHJsLm1haWwgPSAnODg4QDEyNi5jb20nO1xuICAgICRjdHJsLm1haWxBcnIgPSBbXCJAcXEuY29tXCIsXCJAcXEyLmNvbVwiLFwiQGdtYWlsLmNvbVwiLFwiQDEyNi5jb21cIixcIkAxNjMuY29tXCIsXCJAaG90bWFpbC5jb21cIixcIkB5YWhvby5jb21cIixcIkB5YWhvby5jb20uY25cIixcIkBsaXZlLmNvbVwiLFwiQHNvaHUuY29tXCIsXCJAc2luYS5jb21cIl07XG5cbiAgICAkY3RybC5tb2RpZnlJbnB1dCA9IChpcHQpID0+IHtcbiAgICAgIGxldCBpbml0ID0gaXB0O1xuICAgICAgY29uc29sZS5sb2coXCJpbml0OlwiK2luaXQpO1xuICAgICAgY29uc29sZS5sb2coXCJpbml0LWxlbjpcIitpbml0Lmxlbmd0aCk7XG4gICAgICBpZihpbml0Lmxlbmd0aCA9PSAxKXtcbiAgICAgICAgJGN0cmwuaW5pdGlhbFBlcmNlbnQgPSBpbml0LmNvbmNhdCgkY3RybC5wZXJjZW50U2lnbik7XG4gICAgICB9ZWxzZSBpZihpcHQubGVuZ3RoID4gMSl7XG4gICAgICAgIC8v5Zyo5pyA5pyr5bC+5o+S5YWlJVxuICAgICAgICAkY3RybC5pbml0aWFsUGVyY2VudENvcHkgPSBpbml0LnJlcGxhY2UoJyUnLCcnKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb3B5OlwiKyRjdHJsLmluaXRpYWxQZXJjZW50Q29weSk7XG4gICAgICAgICRjdHJsLmluaXRpYWxQZXJjZW50ID0gJGN0cmwuaW5pdGlhbFBlcmNlbnRDb3B5LnN1YnN0cmluZygwLGlwdC5sZW5ndGgtMSkuY29uY2F0KCRjdHJsLnBlcmNlbnRTaWduKTtcbiAgICAgICAgY29uc29sZS5sb2coJGN0cmwuaW5pdGlhbFBlcmNlbnQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpcHQubGVuZ3RoKTtcbiAgICAgICAgaWYoaXB0ID09ICcnKXtcbiAgICAgICAgICRjdHJsLmluaXRpYWxQZXJjZW50ID0gJydcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgICRjdHJsLmFkZFByZWZpeCA9IChzdHIpID0+IHtcbiAgICAgIGxldCBwcmVmaXggPSAkY3RybC5kb2xsYXJTaWduO1xuICAgICAgaWYoc3RyLmxlbmd0aCA+PSAxKXtcbiAgICAgICAgLy/lnKjliY3pnaLmj5LlhaUkXG4gICAgICAgICRjdHJsLmFtb3VudENvcHkgPSBzdHIucmVwbGFjZShwcmVmaXgsJycpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvcHk6XCIrJGN0cmwuYW1vdW50Q29weSk7XG4gICAgICAgICRjdHJsLmluaXRpYWxBbW91bnQgPSBwcmVmaXguY29uY2F0KCRjdHJsLmFtb3VudENvcHkpO1xuICAgICAgICBjb25zb2xlLmxvZygkY3RybC5pbml0aWFsQW1vdW50KTtcblxuICAgICAgfVxuXG4gICAgfTtcbiAgICAkY3RybC5hZGRTdWZmaXggPSAoc3RyKSA9PiB7XG4gICAgICBhbmd1bGFyLmZvckVhY2goJGN0cmwubWFpbEFyciwgKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGtleStcIj0+XCIrc3RyK3ZhbHVlKTtcbiAgICAgICAgJGN0cmwubWFpbEFyciA9IFtdO1xuICAgICAgICAvKiRjdHJsLm1haWxUaXBzLnB1c2goc3RyK3ZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coJGN0cmwubWFpbFRpcHMpKi9cbiAgICAgICAgdmFsdWUgPSBzdHIgKyB2YWx1ZTtcbiAgICAgICAgJGN0cmwubWFpbEFyci5wdXNoKHZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coJGN0cmwubWFpbEFycik7XG4gICAgICB9KTtcbiAgICB9O1xuICAgICRjdHJsLmFkZE1haWxTdWZmaXggPSAoKSA9PiB7XG5cbiAgICB9XG4gIH1cbn07XG5leHBvcnQgeyBQZXJjZW50SW5wdXRDb21wb25lbnQgfVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3BlcmNlbnQtaW5wdXQuanNcbiAqKi9cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wZXJjZW50LWlucHV0LmpzXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpdHRsZXN0b25lIG9uIDE2LTgtMTkuXG4gKi9cbmZ1bmN0aW9uIElucHV0Rm9ybWF0KCRwYXJzZSwgJHRpbWVvdXQpIHtcbiAgJ25nSW5qZWN0JztcblxuICAvKmxldCBydWxlcyA9IHtcbiAgICBpbnRlZ2VyKHZpZXdWYWx1ZSwgbmdNb2RlbCwgb3B0aW9ucyl7XG4gICAgICBsZXQgaW50ZWdlciA9IHBhcnNlSW50KHZpZXdWYWx1ZSk7XG5cbiAgICAgIGlmIChpc05hTihpbnRlZ2VyKSkge1xuICAgICAgICBpbnRlZ2VyID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnRlZ2VyO1xuICAgIH0sXG4gICAgZmxvYXQodmlld1ZhbHVlLCBuZ01vZGVsLCBvcHRpb25zKXtcblxuICAgICAgaWYgKF8uaXNOYU4oK3ZpZXdWYWx1ZSkpIHtcbiAgICAgICAgdmlld1ZhbHVlICs9ICcnO1xuICAgICAgICByZXR1cm4gdmlld1ZhbHVlID8gdmlld1ZhbHVlLnNsaWNlKDAsIHZpZXdWYWx1ZS5sZW5ndGggLSAxKSA6ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoL15cXGQrXFwuKFxcZCowKT8kLy50ZXN0KHZpZXdWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZpZXdWYWx1ZSArICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoK3ZpZXdWYWx1ZSA9PT0gMCkge1xuICAgICAgICBuZ01vZGVsLl91cGRhdGVNb2RlbCgwKTtcbiAgICAgICAgcmV0dXJuIHZpZXdWYWx1ZSArICcnO1xuICAgICAgfVxuXG4gICAgICBsZXQgZmxvYXQgPSBwYXJzZUZsb2F0KHZpZXdWYWx1ZSk7XG5cbiAgICAgIC8vIG1pbiB2YWx1ZVxuICAgICAgLy92b2lkIDAgIOS4uuS6huW+l+WIsOe6r+ato+eahCB1bmRlZmluZWRcbiAgICAgIGlmIChvcHRpb25zLm1pbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGlmIChmbG9hdCA8IG9wdGlvbnMubWluKSB7XG4gICAgICAgICAgZmxvYXQgPSBvcHRpb25zLm1pbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBtYXggdmFsdWVcbiAgICAgIGlmIChvcHRpb25zLm1heCkge1xuICAgICAgICBpZiAoZmxvYXQgPiBvcHRpb25zLm1heCkge1xuICAgICAgICAgIGZsb2F0ID0gb3B0aW9ucy5tYXg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuZGlnaXRzKSB7XG4gICAgICAgIGZsb2F0ID0gKCtmbG9hdCkudG9GaXhlZChvcHRpb25zLmRpZ2l0cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpc05hTigrZmxvYXQpID8gdmlld1ZhbHVlIDogKCtmbG9hdCkgKyAnJztcbiAgICB9LFxuICAgIG51bWJlcih2aWV3VmFsdWUsIG5nTW9kZWwsIG9wdGlvbnMpe1xuXG4gICAgICBpZiAoK3ZpZXdWYWx1ZSA9PT0gMCkgcmV0dXJuIHZpZXdWYWx1ZTtcblxuICAgICAgbGV0IG51bWJlciA9ICt2aWV3VmFsdWU7XG5cbiAgICAgIC8vIG1pbiB2YWx1ZSBUT0RPOm5vdCBwZXJmZWN0IGFuZCBmaXhlZCBpdCBwbGVhc2VcbiAgICAgIGlmIChvcHRpb25zLm1pbikge1xuICAgICAgICBpZiAobnVtYmVyIDwgb3B0aW9ucy5taW4pIHtcbiAgICAgICAgICBudW1iZXIgPSBvcHRpb25zLm1pbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBtYXggdmFsdWVcbiAgICAgIGlmIChvcHRpb25zLm1heCkge1xuICAgICAgICBpZiAobnVtYmVyID4gb3B0aW9ucy5tYXgpIHtcbiAgICAgICAgICBudW1iZXIgPSBvcHRpb25zLm1heDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBOYU5cbiAgICAgIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgICAgIG51bWJlciA9IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfSxcbiAgICBwZXJjZW50KHZpZXdWYWx1ZSwgbmdNb2RlbCwgb3B0aW9ucyl7XG4gICAgICBpZiAoK3ZpZXdWYWx1ZSA9PT0gMCkgcmV0dXJuIHZpZXdWYWx1ZTtcbiAgICAgIGxldCBudW0gPSArdmlld1ZhbHVlO1xuICAgICAgY29uc29sZS5sb2codmlld1ZhbHVlKTtcbiAgICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIG51bWJlciA9IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtXG4gICAgfSxcbiAgICBlbWFpbCh2aWV3VmFsdWUsIG5nTW9kZWwsIG9wdGlvbnMgPSB7fSl7XG4gICAgICByZXR1cm4gdmlld1ZhbHVlO1xuICAgIH0sXG4gICAgcGhvbmUodmlld1ZhbHVlLCBuZ01vZGVsLCBvcHRpb25zID0ge30pe1xuICAgICAgcmV0dXJuIHZpZXdWYWx1ZTtcbiAgICB9LFxuICAgICcnOiB2aWV3VmFsdWU9PnZpZXdWYWx1ZSxcbiAgICBbdm9pZCAwXTogdmlld1ZhbHVlPT52aWV3VmFsdWUsXG4gICAgW251bGxdOiB2aWV3VmFsdWU9PnZpZXdWYWx1ZVxuICB9OyovXG4gIGxldCB0cGwgPSBgXG5cdFx0IDxkaXYgc3R5bGU9J3dpZHRoOiA4MCc+XG4gICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5nLW1vZGVsPSdudW0nIC8+XG4gICAgICAgPHNlbGVjdCBuZy1tb2RlbD0ndW5pdCc+XG4gICAgICAgICA8b3B0aW9uIHZhbHVlPSdzZWNvbmRzJz5TZWNvbmRzPC9vcHRpb24+XG4gICAgICAgICA8b3B0aW9uIHZhbHVlPSdtaW51dGVzJz5NaW51dGVzPC9vcHRpb24+XG4gICAgICAgICA8b3B0aW9uIHZhbHVlPSdob3Vycyc+SG91cnM8L29wdGlvbj5cbiAgICAgICAgIDxvcHRpb24gdmFsdWU9J2RheXMnPkRheXM8L29wdGlvbj5cbiAgICAgICA8L3NlbGVjdD5cbiAgICAgPC9kaXY+YDtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZTogdHBsLFxuICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLC8v5ZCv55So5omA5pyJTmdNb2RlbENvbnRyb2xsZXLlip/og73jgIJcbiAgICBzY29wZToge1xuICAgICAgbmdNb2RlbDogJz0nXG4gICAgfSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgaUVsZW1lbnQsIGlBdHRycywgbmdNb2RlbEN0cmwpIHtcbiAgICAgIHZhciBtdWx0aXBsaWVyTWFwID0ge3NlY29uZHM6IDEsIG1pbnV0ZXM6IDYwLCBob3VyczogMzYwMCwgZGF5czogODY0MDB9O1xuICAgICAgdmFyIG11bHRpcGxpZXJUeXBlcyA9IFsnc2Vjb25kcycsICdtaW51dGVzJywgJ2hvdXJzJywgJ2RheXMnXVxuXG4gICAgICAvLyAkZm9ybWF0dGVyc+aOpeWPl+S4gOS4quaVsOe7hO+8jOaVsOe7hOaYr+S4gOezu+WIl+aWueazle+8jOeUqOS6juWwhm1vZGVsVmFsdWXovazljJbmiJB2aWV3VmFsdWVcbiAgICAgIG5nTW9kZWxDdHJsLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24obW9kZWxWYWx1ZSkge1xuICAgICAgICB2YXIgdW5pdCA9ICdtaW51dGVzJywgbnVtID0gMCwgaSwgdW5pdE5hbWU7XG5cbiAgICAgICAgbW9kZWxWYWx1ZSA9IHBhcnNlSW50KG1vZGVsVmFsdWUgfHwgMCk7XG5cbiAgICAgICAgLy8gRmlndXJlIG91dCB0aGUgbGFyZ2VzdCB1bml0IG9mIHRpbWUgdGhlIG1vZGVsIHZhbHVlXG4gICAgICAgIC8vIGZpdHMgaW50by4gRm9yIGV4YW1wbGUsIDM2MDAgaXMgMSBob3VyLCBidXQgMTgwMCBpcyAzMCBtaW51dGVzLlxuICAgICAgICBmb3IgKGkgPSBtdWx0aXBsaWVyVHlwZXMubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdW5pdE5hbWUgPSBtdWx0aXBsaWVyVHlwZXNbaV07XG4gICAgICAgICAgaWYgKG1vZGVsVmFsdWUgJSBtdWx0aXBsaWVyTWFwW3VuaXROYW1lXSA9PT0gMCkge1xuICAgICAgICAgICAgdW5pdCA9IHVuaXROYW1lO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGVsVmFsdWUpIHtcbiAgICAgICAgICBudW0gPSBtb2RlbFZhbHVlIC8gbXVsdGlwbGllck1hcFt1bml0XVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bml0OiB1bml0LFxuICAgICAgICAgIG51bTogIG51bVxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIC8vICRwYXJzZXJz5o6l5Y+X5LiA5Liq5pWw57uE77yM5pWw57uE5piv5LiA57O75YiX5pa55rOV77yM55So5LqO5bCGdmlld1ZhbHVl6L2s5YyW5oiQbW9kZWxWYWx1ZVxuICAgICAgbmdNb2RlbEN0cmwuJHBhcnNlcnMucHVzaChmdW5jdGlvbih2aWV3VmFsdWUpIHtcbiAgICAgICAgdmFyIHVuaXQgPSB2aWV3VmFsdWUudW5pdCwgbnVtID0gdmlld1ZhbHVlLm51bSwgbXVsdGlwbGllcjtcbiAgICAgICAgbXVsdGlwbGllciA9IG11bHRpcGxpZXJNYXBbdW5pdF07XG4gICAgICAgIHJldHVybiBudW0gKiBtdWx0aXBsaWVyO1xuICAgICAgfSk7XG5cbiAgICAgIHNjb3BlLiR3YXRjaCgndW5pdCArIG51bScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAkc2V0Vmlld1ZhbHVl55So5LqO5pu05pawdmlld1ZhbHVlXG4gICAgICAgIG5nTW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUoeyB1bml0OiBzY29wZS51bml0LCBudW06IHNjb3BlLm51bSB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyAkcmVuZGVy55So5LqO5bCGdmlld1ZhbHVl5riy5p+T5Yiw5oyH5Luk55qE5qih5p2/5LitXG4gICAgICBuZ01vZGVsQ3RybC4kcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNjb3BlLnVuaXQgPSBuZ01vZGVsQ3RybC4kdmlld1ZhbHVlLnVuaXQ7XG4gICAgICAgIHNjb3BlLm51bSAgPSBuZ01vZGVsQ3RybC4kdmlld1ZhbHVlLm51bTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gJHNjb3BlICAgICDnlKjmnaXlsIbmlbDmja7nu5HlrprliLBkaXJlY3RpdmXvvIzpgJrluLjmmK9OZ01vZGVsQ29udHJvbGxlci4kdmlld1ZhbHVl55qE5Ymv5pysXG4gICAgICogQHBhcmFtICRlbGVcbiAgICAgKiBAcGFyYW0gJGF0dHJcbiAgICAgKiBAcGFyYW0gbmdNb2RlbEN0cmwgICAgbGlua+WHveaVsOWwhk5nTW9kZWxDb250cm9sbGVy5rOo5YWl5Yiw5Y+Y6YePbmdNb2RlbEN0cmxcbiAgICAgKiBAcGFyYW0gTmdNb2RlbENvbnRyb2xsZXIuJHZpZXdWYWx1ZSDigJMgJG1vZGVsVmFsdWXovazmjaLmiJDnmoTlj5jph49cbiAgICAgKiBAcGFyYW0gTmdNb2RlbENvbnRyb2xsZXIuJG1vZGVsVmFsdWUg4oCTIOWGhemDqOeUqOadpeWSjOecn+WunuWPmOmHj+i/m+ihjOWQjOatpeeahOWPmOmHj++8jOi/m+iAjOi/nuaOpeWIsG5nLW1vZGVsXG4gICAgICogQHBhcmFtIE5nTW9kZWxDb250cm9sbGVyLiRyZW5kZXIg4oCTIOWwhiR2aWV3VmFsdWXmuLLmn5PliLBkaXJlY3RpdmUgdGVtcGxhdGXkuK1cbiAgICAgKi9cbiAgICAvKmxpbms6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGUsICRhdHRyLCBuZ01vZGVsQ3RybCkge1xuXG4gICAgICBsZXQgb3B0aW9ucyA9ICRhdHRyLmlucHV0U21hcnRPcHRzID8gJHBhcnNlKCRhdHRyLmlucHV0U21hcnRPcHRzKSgkc2NvcGUpIDoge307XG5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXcodmFsdWUpIHtcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG5nTW9kZWxDdHJsLiR2aWV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICBuZ01vZGVsQ3RybC4kcmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsKHZhbHVlKSB7XG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBuZ01vZGVsQ3RybC4kbW9kZWxWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICRzY29wZS5uZ01vZGVsID0gdmFsdWU7IC8vIG92ZXJ3cml0ZXMgbmdNb2RlbCB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbmdNb2RlbEN0cmwuX3VwZGF0ZVZpZXcgPSB1cGRhdGVWaWV3O1xuICAgICAgbmdNb2RlbEN0cmwuX3VwZGF0ZU1vZGVsID0gdXBkYXRlTW9kZWw7XG5cbiAgICAgIC8v5bCGdmlldyB2YWx1Zei9rOaNouaIkG1vZGVsIHZhbHVlXG4gICAgICBuZ01vZGVsQ3RybC4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uICh2aWV3VmFsdWUpIHtcblxuICAgICAgICBpZiAoIXZpZXdWYWx1ZSkgcmV0dXJuIHZpZXdWYWx1ZTtcblxuICAgICAgICBsZXQgcGFyc2VyID0gcnVsZXNbJGF0dHIuaW5wdXRTbWFydF0gfHwgcnVsZXNbJyddO1xuICAgICAgICB2aWV3VmFsdWUgPSBwYXJzZXIodmlld1ZhbHVlLCBuZ01vZGVsQ3RybCwgb3B0aW9ucykgfHwgdmlld1ZhbHVlO1xuXG4gICAgICAgIG5nTW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUodmlld1ZhbHVlKTtcbiAgICAgICAgbmdNb2RlbEN0cmwuJHJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiB2aWV3VmFsdWU7XG5cbiAgICAgIH0pXG5cbiAgICB9Ki9cbiAgLy99O1xuLy99XG5cbmV4cG9ydCB7SW5wdXRGb3JtYXR9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lucHV0LWZvcm1hdC5qc1xuICoqL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lucHV0LWZvcm1hdC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=