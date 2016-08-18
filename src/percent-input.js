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

let PercentInputComponent = {
  templateUrl: '/src/percent-input.html',
  controller(){
    'ngInject';
    let $ctrl = this;
    $ctrl.rmbSign = '￥';
    $ctrl.dollarSign = '$';
    $ctrl.percentSign = '%';
    $ctrl.inputStr = '';
    $ctrl.emptyStr = '';

    $ctrl.modifyInput = (ipt) => {
      if(ipt.length > 0){
        //在最末尾插入%
        $ctrl.initialPercent1 = $ctrl.initialPercent.substring(0,ipt.length+1).concat($ctrl.percentSign);
        console.log($ctrl.initialPercent1);
        //$ctrl.data = + $ctrl.initialPercent.substring(1,$ctrl.initialPercent.length+1);
        //console.log($ctrl.initialPercent);
        //console.log(typeof $ctrl.data);
      }
    }
  }
};
export { PercentInputComponent }