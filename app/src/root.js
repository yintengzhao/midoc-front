libUrl = "../libs/"
require.config({
  paths: {
    jquery          : libUrl+"jquery/dist/jquery",
    "angular"       : libUrl+"angular/angular",
    "ngMaterial"    : libUrl+"angular-material/angular-material",
    "ng-animate"    : libUrl+"angular-animate/angular-animate",
    "ngAria"        : libUrl+'angular-aria/angular-aria',
    "ngMdIcons"     : libUrl+'angular-material-icons/angular-material-icons',
    "nixie-clock"   : libUrl+'nixie-clock/nixie',
  },
  // https://www.codeproject.com/articles/1123309/configure-angular-material-with-require-js
  shim: {
      ng_app: {
         exports: "ng_app",
         deps: [
             "jquery", "angular", "ngMaterial", 'ngMdIcons', "nixie-clock"
         ]
      },
      main_ctrl: {
       exports: "MainCtrl",
       deps: [
           "ng_app"
       ]
      },
      angular: {
         exports: "angular"
      },
      jquery: {
          exports: "$"
      },
      'nixie-clock': {
        deps: ['jquery']
      },
      'ng-animate': {
         deps: ['angular']
      },
      ngAria: {
          deps:[ 'angular']
      },
      ngMaterial: {
         deps: ['angular', 'ng-animate', 'ngAria']
      },
      ngMdIcons: {
          deps:[ 'angular', 'ngMaterial']
      },
   }
});


require(['main_ctrl'])
