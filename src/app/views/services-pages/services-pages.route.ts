import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';

export const SERVICES_PAGES_ROUTES: Routes = [
    {
        path: 'categories',
        component: ServicesComponent,
        data: { title: "Categories" }
    },
];
