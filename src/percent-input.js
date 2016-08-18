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
    $ctrl.mail = '888@126.com';
    $ctrl.mailArr = ["@qq.com","@qq2.com","@gmail.com","@126.com","@163.com","@hotmail.com","@yahoo.com","@yahoo.com.cn","@live.com","@sohu.com","@sina.com"];

    $ctrl.modifyInput = (ipt) => {
      let init = ipt;
      console.log("init:"+init);
      console.log("init-len:"+init.length);
      if(init.length == 1){
        $ctrl.initialPercent = init.concat($ctrl.percentSign);
      }else if(ipt.length > 1){
        //在最末尾插入%
        $ctrl.initialPercentCopy = init.replace('%','');
        console.log("copy:"+$ctrl.initialPercentCopy);
        $ctrl.initialPercent = $ctrl.initialPercentCopy.substring(0,ipt.length-1).concat($ctrl.percentSign);
        console.log($ctrl.initialPercent);
        // console.log(ipt.length);
        if(ipt == ''){
         $ctrl.initialPercent = ''
         }
      }
    };
    $ctrl.addPrefix = (str) => {
      let prefix = $ctrl.dollarSign;
      if(str.length >= 1){
        //在前面插入$
        $ctrl.amountCopy = str.replace(prefix,'');
        console.log("copy:"+$ctrl.amountCopy);
        $ctrl.initialAmount = prefix.concat($ctrl.amountCopy);
        console.log($ctrl.initialAmount);

      }

    };
    $ctrl.addSuffix = (str) => {
      angular.forEach($ctrl.mailArr, (value) => {
        // console.log(key+"=>"+str+value);
        $ctrl.mailArr = [];
        /*$ctrl.mailTips.push(str+value);
        console.log($ctrl.mailTips)*/
        value = str + value;
        $ctrl.mailArr.push(value);
        console.log($ctrl.mailArr);
      });
    };
    $ctrl.addMailSuffix = () => {

    }
  }
};
export { PercentInputComponent }