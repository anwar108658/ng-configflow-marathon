import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('./features/index')
            .then(m => m.Login),
    },
    {
        path:'app',
        loadComponent:() => 
            import('./layout/main-layout/main-layout')
            .then(m => m.MainLayout),
        children:[
            {
                path:'module',
                loadComponent: () =>
                    import('./features/index')
                    .then(m => m.Module),
            },
            {
                path:'report',
                loadComponent: () =>
                    import('./features/index')
                    .then(m => m.ReportTable),
            },
            {
                path:'bot',
                loadComponent: () =>
                    import('./features/index')
                    .then(m => m.Chatai),
            },
        ]
        
    }
];
