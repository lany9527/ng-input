/**
 * Created by littlestone on 16-8-18.
 */

const MODULE_NAME = 'ng-input';
import angular from 'angular';
import { PercentInputComponent } from './src/percent-input';
import { InputFormat } from './src/input-format';

angular.module(MODULE_NAME, [])
  .component('percentInput', PercentInputComponent)
  .directive('input-format', InputFormat)
  .controller('IndexController', function($scope){
    'ngInject';
    let $ctrl = this;
    $scope.inputPercent = '80';
    $scope.inputPhone = '15677383502';

    $scope.handlePhone = function(viewValue){
      if((/^1[3|4|5|7|8]\d{9}$/.test(viewValue))){
        viewValue = viewValue.substr(0,3)+"-"+viewValue.substr(3,4)+"-"+viewValue.substr(7,4);
      }
      console.log(viewValue);
      return viewValue;
    };
    //console.log(inputPercent);
  });


export default MODULE_NAME;