"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const forms_1 = require('@angular/forms');
const app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
])
    .catch((err) => console.error(err));
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=main.js.map