import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultPageContainerComponent } from './pages/default-page-container/default-page-container.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule) },
    {
        path: '',
        component: DefaultPageContainerComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'escolas', loadChildren: () => import('./pages/registration/school/school.module').then((m) => m.SchoolModule) },
            { path: 'salas-de-aula', loadChildren: () => import('./pages/registration/course/course.module').then((m) => m.CourseModule) },
            { path: 'alunos', loadChildren: () => import('./pages/registration/student/student.module').then((m) => m.StudentModule) },
            { path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
