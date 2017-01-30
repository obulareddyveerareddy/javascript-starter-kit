import './index.css';
import angular from 'angular';
import numeral from 'numeral';

import appCtrl from './app-controller'

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);

const AppModule = angular.module('app',[]).controller('myCtrl',appCtrl);

// Bootstrap our application once all that stuff is loaded
angular.element(document).ready(() => {
  return angular.bootstrap(document.querySelector('body'), [AppModule.name], {
    strictDi: true // https://docs.angularjs.org/guide/di
  });
});

export default AppModule;