import 'reflect-metadata';
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import template from './app.html';

@Component({
    selector: 'ar-project',
    template
})
class ARProject { }

bootstrap(ARProject);