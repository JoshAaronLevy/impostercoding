import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: '',
        loadChildren: () => import('./views/views.route').then((mod) => mod.VIEWS_ROUTES)
    },
];