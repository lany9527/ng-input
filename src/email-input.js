export function EmailInputDirective() {
  'ngInject';
  return {
    restrict: 'E',
    replace: true,
    template: `
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="userEmail"
          ng-model="$ctrl.mail"
          aria-describedby="basic-addon2">
      </div>`,
    link: function ($scope, $element) {
      return($($element).emailautocomplete({
        domains: ["example.com"]
      }))

    }
  }
};
