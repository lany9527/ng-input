/**
 * Created by littlestone on 16-8-18.
 */

const MODULE_NAME = 'ng-input';
import angular from 'angular';
//import percentInput from './src/percent-input';
import { PercentInputComponent } from './src/percent-input';

angular.module(MODULE_NAME, [])
  //.directive('percentInput', percentInput);
  .component('percentInput', PercentInputComponent);

export default MODULE_NAME;