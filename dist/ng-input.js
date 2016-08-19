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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(2);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _percentInput = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by littlestone on 16-8-18.
	 */
	
	var MODULE_NAME = 'ng-input';
	//import percentInput from './src/percent-input';
	
	
	_angular2.default.module(MODULE_NAME, [])
	//.directive('percentInput', percentInput);
	.component('percentInput', _percentInput.PercentInputComponent);
	
	exports.default = MODULE_NAME;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 3 */
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
	
	    $ctrl.modifyInput = function (ipt) {
	      if (ipt.length > 0) {
	        //在最末尾插入%
	        $ctrl.initialPercent1 = $ctrl.initialPercent.substring(0, ipt.length + 1).concat($ctrl.percentSign);
	        console.log($ctrl.initialPercent1);
	        //$ctrl.data = + $ctrl.initialPercent.substring(1,$ctrl.initialPercent.length+1);
	        //console.log($ctrl.initialPercent);
	        //console.log(typeof $ctrl.data);
	      }
	    };
	  }
	};
	exports.PercentInputComponent = PercentInputComponent;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA1MzA5NTg1ZmU4NDYyZTk1MWIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL3NyYy9wZXJjZW50LWlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTs7OztBQUVBOzs7O0FBUEE7Ozs7QUFJQSxLQUFNLGNBQWMsVUFBcEI7QUFFQTs7O0FBR0EsbUJBQVEsTUFBUixDQUFlLFdBQWYsRUFBNEIsRUFBNUI7QUFDRTtBQURGLEVBRUcsU0FGSCxDQUVhLGNBRmI7O21CQUllLFc7Ozs7OztBQ2JmLDBCOzs7Ozs7Ozs7OztBQ0FBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxLQUFJLHdCQUF3QjtBQUMxQixnQkFBYSx5QkFEYTtBQUUxQixhQUYwQix3QkFFZDtBQUNWOztBQUNBLFNBQUksUUFBUSxJQUFaO0FBQ0EsV0FBTSxPQUFOLEdBQWdCLEdBQWhCO0FBQ0EsV0FBTSxVQUFOLEdBQW1CLEdBQW5CO0FBQ0EsV0FBTSxXQUFOLEdBQW9CLEdBQXBCO0FBQ0EsV0FBTSxRQUFOLEdBQWlCLEVBQWpCO0FBQ0EsV0FBTSxRQUFOLEdBQWlCLEVBQWpCOztBQUVBLFdBQU0sV0FBTixHQUFvQixVQUFDLEdBQUQsRUFBUztBQUMzQixXQUFHLElBQUksTUFBSixHQUFhLENBQWhCLEVBQWtCO0FBQ2hCO0FBQ0EsZUFBTSxlQUFOLEdBQXdCLE1BQU0sY0FBTixDQUFxQixTQUFyQixDQUErQixDQUEvQixFQUFpQyxJQUFJLE1BQUosR0FBVyxDQUE1QyxFQUErQyxNQUEvQyxDQUFzRCxNQUFNLFdBQTVELENBQXhCO0FBQ0EsaUJBQVEsR0FBUixDQUFZLE1BQU0sZUFBbEI7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNGLE1BVEQ7QUFVRDtBQXJCeUIsRUFBNUI7U0F1QlMscUIsR0FBQSxxQiIsImZpbGUiOiJuZy1pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNTA1MzA5NTg1ZmU4NDYyZTk1MWJcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSBsaXR0bGVzdG9uZSBvbiAxNi04LTE4LlxyXG4gKi9cclxuXHJcbmNvbnN0IE1PRFVMRV9OQU1FID0gJ25nLWlucHV0JztcclxuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcbi8vaW1wb3J0IHBlcmNlbnRJbnB1dCBmcm9tICcuL3NyYy9wZXJjZW50LWlucHV0JztcclxuaW1wb3J0IHsgUGVyY2VudElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9zcmMvcGVyY2VudC1pbnB1dCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZShNT0RVTEVfTkFNRSwgW10pXHJcbiAgLy8uZGlyZWN0aXZlKCdwZXJjZW50SW5wdXQnLCBwZXJjZW50SW5wdXQpO1xyXG4gIC5jb21wb25lbnQoJ3BlcmNlbnRJbnB1dCcsIFBlcmNlbnRJbnB1dENvbXBvbmVudCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNT0RVTEVfTkFNRTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSBsaXR0bGVzdG9uZSBvbiAxNi04LTE4LlxyXG4gKi9cclxuLypcclxubGV0IHBlcmNlbnRJbnB1dCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdGVtcGxhdGVVcmw6ICcvc3JjL3BlcmNlbnQtaW5wdXQuaHRtbCcsXHJcbiAgICByZXN0cmljdDogJ0VBJyxcclxuICAgIGNvbnRyb2xsZXIoKXtcclxuICAgICAgY29uc3Qgcm1iU2lnbiA9ICfvv6UnO1xyXG4gICAgICBjb25zdCBkb2xsYXJTaWduID0gJyQnO1xyXG4gICAgICBjb25zdCBlbXB0eVN0ciA9ICcnO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcmNlbnRJbnB1dDtcclxuKi9cclxuXHJcbmxldCBQZXJjZW50SW5wdXRDb21wb25lbnQgPSB7XHJcbiAgdGVtcGxhdGVVcmw6ICcvc3JjL3BlcmNlbnQtaW5wdXQuaHRtbCcsXHJcbiAgY29udHJvbGxlcigpe1xyXG4gICAgJ25nSW5qZWN0JztcclxuICAgIGxldCAkY3RybCA9IHRoaXM7XHJcbiAgICAkY3RybC5ybWJTaWduID0gJ++/pSc7XHJcbiAgICAkY3RybC5kb2xsYXJTaWduID0gJyQnO1xyXG4gICAgJGN0cmwucGVyY2VudFNpZ24gPSAnJSc7XHJcbiAgICAkY3RybC5pbnB1dFN0ciA9ICcnO1xyXG4gICAgJGN0cmwuZW1wdHlTdHIgPSAnJztcclxuXHJcbiAgICAkY3RybC5tb2RpZnlJbnB1dCA9IChpcHQpID0+IHtcclxuICAgICAgaWYoaXB0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgIC8v5Zyo5pyA5pyr5bC+5o+S5YWlJVxyXG4gICAgICAgICRjdHJsLmluaXRpYWxQZXJjZW50MSA9ICRjdHJsLmluaXRpYWxQZXJjZW50LnN1YnN0cmluZygwLGlwdC5sZW5ndGgrMSkuY29uY2F0KCRjdHJsLnBlcmNlbnRTaWduKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkY3RybC5pbml0aWFsUGVyY2VudDEpO1xyXG4gICAgICAgIC8vJGN0cmwuZGF0YSA9ICsgJGN0cmwuaW5pdGlhbFBlcmNlbnQuc3Vic3RyaW5nKDEsJGN0cmwuaW5pdGlhbFBlcmNlbnQubGVuZ3RoKzEpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJGN0cmwuaW5pdGlhbFBlcmNlbnQpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codHlwZW9mICRjdHJsLmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgeyBQZXJjZW50SW5wdXRDb21wb25lbnQgfVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3BlcmNlbnQtaW5wdXQuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9