/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('test', ['ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'ds.clock', 'uiGmapgoogle-maps'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .factory('TimeResource', ($resource) => {
    return $resource('http://api.timezonedb.com/', {key: undefined, format: undefined, lat: '@lat', lng: '@lng'},{
      getTimeZone: {method: 'GET', params: {key: 'NRFGJ2B1CAZN', format: 'json'}}
    })
  })
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
