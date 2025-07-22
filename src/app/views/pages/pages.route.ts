import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostComponent } from './post/post.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const PAGES_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: "Home" }
    },
    {
        path: 'posts',
        component: PostsComponent,
        data: { title: "Posts" }
    },
    {
        path: 'categories',
        component: CategoriesComponent,
        data: { title: "Categories" }
    },
    {
        path: 'privacy',
        component: PrivacyComponent,
        data: { title: "Privacy Policy" }
    },
    {
        path: 'posts/:categorySlug',
        component: PostsComponent,
        data: { title: "Posts by Category" }
    },
    {
        path: ':slug',
        component: PostComponent
    },
];
