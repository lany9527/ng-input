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
	        $ctrl.initialPercent = $ctrl.initialPercent.substr(0, ipt.length).concat($ctrl.percentSign);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODE0OTFkZDM1YzAxYzIxMTNkNTUiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL3NyYy9wZXJjZW50LWlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTs7OztBQUVBOzs7O0FBUEE7Ozs7QUFJQSxLQUFNLGNBQWMsVUFBcEI7QUFFQTs7O0FBR0EsbUJBQVEsTUFBUixDQUFlLFdBQWYsRUFBNEIsRUFBNUI7QUFDRTtBQURGLEVBRUcsU0FGSCxDQUVhLGNBRmI7O21CQUllLFc7Ozs7OztBQ2JmLDBCOzs7Ozs7Ozs7OztBQ0FBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxLQUFJLHdCQUF3QjtBQUMxQixnQkFBYSx5QkFEYTtBQUUxQixhQUYwQix3QkFFZDtBQUNWOztBQUNBLFNBQUksUUFBUSxJQUFaO0FBQ0EsV0FBTSxPQUFOLEdBQWdCLEdBQWhCO0FBQ0EsV0FBTSxVQUFOLEdBQW1CLEdBQW5CO0FBQ0EsV0FBTSxXQUFOLEdBQW9CLEdBQXBCO0FBQ0EsV0FBTSxRQUFOLEdBQWlCLEVBQWpCO0FBQ0EsV0FBTSxRQUFOLEdBQWlCLEVBQWpCOztBQUVBLFdBQU0sV0FBTixHQUFvQixVQUFDLEdBQUQsRUFBUztBQUMzQixXQUFHLElBQUksTUFBSixHQUFhLENBQWhCLEVBQWtCO0FBQ2hCO0FBQ0EsZUFBTSxjQUFOLEdBQXVCLE1BQU0sY0FBTixDQUFxQixNQUFyQixDQUE0QixDQUE1QixFQUE4QixJQUFJLE1BQWxDLEVBQTBDLE1BQTFDLENBQWlELE1BQU0sV0FBdkQsQ0FBdkI7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNGLE1BUkQ7QUFTRDtBQXBCeUIsRUFBNUI7U0FzQlMscUIsR0FBQSxxQiIsImZpbGUiOiJuZy1pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgODE0OTFkZDM1YzAxYzIxMTNkNTVcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGl0dGxlc3RvbmUgb24gMTYtOC0xOC5cbiAqL1xuXG5jb25zdCBNT0RVTEVfTkFNRSA9ICduZy1pbnB1dCc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbi8vaW1wb3J0IHBlcmNlbnRJbnB1dCBmcm9tICcuL3NyYy9wZXJjZW50LWlucHV0JztcbmltcG9ydCB7IFBlcmNlbnRJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vc3JjL3BlcmNlbnQtaW5wdXQnO1xuXG5hbmd1bGFyLm1vZHVsZShNT0RVTEVfTkFNRSwgW10pXG4gIC8vLmRpcmVjdGl2ZSgncGVyY2VudElucHV0JywgcGVyY2VudElucHV0KTtcbiAgLmNvbXBvbmVudCgncGVyY2VudElucHV0JywgUGVyY2VudElucHV0Q29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgTU9EVUxFX05BTUU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhclwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpdHRsZXN0b25lIG9uIDE2LTgtMTguXG4gKi9cbi8qXG5sZXQgcGVyY2VudElucHV0ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlVXJsOiAnL3NyYy9wZXJjZW50LWlucHV0Lmh0bWwnLFxuICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgIGNvbnRyb2xsZXIoKXtcbiAgICAgIGNvbnN0IHJtYlNpZ24gPSAn77+lJztcbiAgICAgIGNvbnN0IGRvbGxhclNpZ24gPSAnJCc7XG4gICAgICBjb25zdCBlbXB0eVN0ciA9ICcnO1xuXG5cblxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGVyY2VudElucHV0O1xuKi9cblxubGV0IFBlcmNlbnRJbnB1dENvbXBvbmVudCA9IHtcbiAgdGVtcGxhdGVVcmw6ICcvc3JjL3BlcmNlbnQtaW5wdXQuaHRtbCcsXG4gIGNvbnRyb2xsZXIoKXtcbiAgICAnbmdJbmplY3QnO1xuICAgIGxldCAkY3RybCA9IHRoaXM7XG4gICAgJGN0cmwucm1iU2lnbiA9ICfvv6UnO1xuICAgICRjdHJsLmRvbGxhclNpZ24gPSAnJCc7XG4gICAgJGN0cmwucGVyY2VudFNpZ24gPSAnJSc7XG4gICAgJGN0cmwuaW5wdXRTdHIgPSAnJztcbiAgICAkY3RybC5lbXB0eVN0ciA9ICcnO1xuXG4gICAgJGN0cmwubW9kaWZ5SW5wdXQgPSAoaXB0KSA9PiB7XG4gICAgICBpZihpcHQubGVuZ3RoID4gMCl7XG4gICAgICAgIC8v5Zyo5pyA5pyr5bC+5o+S5YWlJVxuICAgICAgICAkY3RybC5pbml0aWFsUGVyY2VudCA9ICRjdHJsLmluaXRpYWxQZXJjZW50LnN1YnN0cigwLGlwdC5sZW5ndGgpLmNvbmNhdCgkY3RybC5wZXJjZW50U2lnbik7XG4gICAgICAgIC8vJGN0cmwuZGF0YSA9ICsgJGN0cmwuaW5pdGlhbFBlcmNlbnQuc3Vic3RyaW5nKDEsJGN0cmwuaW5pdGlhbFBlcmNlbnQubGVuZ3RoKzEpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCRjdHJsLmluaXRpYWxQZXJjZW50KTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0eXBlb2YgJGN0cmwuZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuZXhwb3J0IHsgUGVyY2VudElucHV0Q29tcG9uZW50IH1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wZXJjZW50LWlucHV0LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==