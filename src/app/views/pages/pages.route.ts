import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { Error404Component } from './error-404/error-404.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';

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
        path: 'pages/contact',
        component: ContactComponent,
        data: { title: "Contact Us" }
    },
    {
        path: 'pages/faq',
        component: FaqComponent,
        data: { title: "FAQs" }
    },
    {
        path: 'pages/error-404',
        component: Error404Component,
        data: { title: "Error 404" }
    },
];



