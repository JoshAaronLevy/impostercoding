import { Routes } from '@angular/router';
import { LayoutComponent } from '@layouts/layout.component';

export const VIEWS_ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () => import('./pages/pages.route').then((mod) => mod.PAGES_ROUTES)
    },
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () => import('./blog-pages/blog-pages.route').then((mod) => mod.BLOG_PAGES_ROUTES)
    },

];
