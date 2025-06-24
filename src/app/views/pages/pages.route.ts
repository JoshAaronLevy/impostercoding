import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostComponent } from './post/post.component';

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
        path: ':slug',
        component: PostComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent,
        data: { title: "Categories" }
    },
];



