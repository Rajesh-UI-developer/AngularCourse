import { Routes } from '@angular/router';
import { ApiintegrationComponent } from './apiintegration/apiintegration.component';
import { ReactiveformComponent } from './formparent/reactiveform/reactiveform.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { AuthGuard } from './authguard';
import { CanLoadGuard } from './canloadguard';
import { EditProfileComponent } from './profile.component';
import { CanDeactivateGuard } from './candeactivate';

export const routes: Routes = [
    

    { path: '', component: ApiintegrationComponent },

    {
        path: 'reactiveform',
        canActivate: [AuthGuard],
        data: { roles: ['admin'] },
        component: ReactiveformComponent
    },

    {
        path: 'twowaybinding',
        canActivate: [AuthGuard],
        data: { roles: ['admin', 'user'] },
        component: TwowaydatabindingComponent
    },
    {
        path: 'profile',
        canDeactivate:[CanDeactivateGuard],
        component: EditProfileComponent
    },
    // Lazloading concept
    {
        path: 'propertybinding',
        canActivate: [AuthGuard],
        canMatch: [CanLoadGuard],
        data: { roles: ['user'] },
        loadComponent: () => import('./propertybinding/propertybinding.component').then(m => m.PropertybindingComponent),
    },

    // Wildcard route for a 404 page
    { path: '**', redirectTo: 'twowaybinding' }
];
