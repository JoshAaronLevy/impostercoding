import { Routes } from '@angular/router';
import { BlogOneComponent } from './blogs/blog-one/blog-one.component';
import { BlogHomeComponent } from './blog-sidebar/blog-home/blog-home.component';
import { BlogSingleComponent } from './blog-details/blog-single/blog-single.component';

export const BLOG_PAGES_ROUTES: Routes = [
    {
        path: 'blogs/one',
        component: BlogOneComponent,
        data: { title: "Blog One" }
    },
    {
        path: 'posts',
        component: BlogHomeComponent,
        data: { title: "Imposter Coding" }
    },
    {
        path: 'blog-details/single',
        component: BlogSingleComponent,
        data: { title: "Blog Single" }
    },
    {
        path: ':slug',
        component: BlogSingleComponent
    },
];



