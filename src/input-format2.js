/**
 * Created by littlestone on 16-8-19.
 */
function InputFormat2($parse, $timeout) {
  'ngInject';


  return {
    template: '<h1>InputFormat2</h1>',
    restrict: 'EA',
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

export {InputFormat2};


