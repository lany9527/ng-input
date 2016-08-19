/**
 * Created by littlestone on 16-8-19.
 */
function InputFormat($parse, $timeout) {
  'ngInject';

  let rules = {
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
      if (isNaN(num)) {
        number = 0;
      }
      return num
    },
    email(viewValue, ngModel, options = {}){
      viewValue
      return viewValue;
    },
    phone(viewValue, ngModel, options = {}){
        if((/^1[3|4|5|7|8]\d{9}$/.test(viewValue))){
          viewValue = viewValue.substr(0,3)+"-"+viewValue.substr(3,4)+"-"+viewValue.substr(7,4);
        }
      return viewValue;
    },
    prefix(viewValue, ngModel, options){

    },
    '': viewValue=>viewValue,
    [void 0]: viewValue=>viewValue,
    [null]: viewValue=>viewValue
  };

  return {
    restrict: 'A',
    require: 'ngModel',//启用所有NgModelController功能。
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
    link: function ($scope, $ele, $attr, ngModelCtrl) {
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

    }
  };
}

export {InputFormat};


