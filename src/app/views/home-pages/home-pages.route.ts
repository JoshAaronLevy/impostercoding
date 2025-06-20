import { Routes } from '@angular/router';
import { Home1Component } from './multi/home1/home1.component';
import { Home2Component } from './multi/home2/home2.component';
import { Home3Component } from './multi/home3/home3.component';
import { Home4Component } from './multi/home4/home4.component';
import { Home5Component } from './multi/home5/home5.component';
import { SingleHome1Component } from './single/single-home1/single-home1.component';
import { SingleHome2Component } from './single/single-home2/single-home2.component';
import { SingleHome3Component } from './single/single-home3/single-home3.component';
import { SingleHome4Component } from './single/single-home4/single-home4.component';
import { SingleHome5Component } from './single/single-home5/single-home5.component';

export const HOME_PAGES_ROUTES: Routes = [
    {
        path: '',
        component: Home1Component,
        data: { title: "Home-1" }
    },
    {
        path: 'home-2',
        component: Home2Component,
        data: { title: "Home-2" }
    },
    {
        path: 'home-3',
        component: Home3Component,
        data: { title: "Home-3" }
    },
    {
        path: 'home-4',
        component: Home4Component,
        data: { title: "Home-4" }
    },
    {
        path: 'home-5',
        component: Home5Component,
        data: { title: "Home-5" }
    },
    {
        path: 'single-home-1',
        component: SingleHome1Component,
        data: { title: "Single Home 1" }
    },
    {
        path: 'single-home-2',
        component: SingleHome2Component,
        data: { title: "Single Home 2" }
    },
    {
        path: 'single-home-3',
        component: SingleHome3Component,
        data: { title: "Single Home 3" }
    },
    {
        path: 'single-home-4',
        component: SingleHome4Component,
        data: { title: "Single Home 4" }
    },
    {
        path: 'single-home-5',
        component: SingleHome5Component,
        data: { title: "Single Home 5" }
    },
];



