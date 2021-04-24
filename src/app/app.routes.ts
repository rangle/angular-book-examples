import { Routes, RouterModule } from '@angular/router';
import ProductListComponent from './product-list.component';
import ProductDetailsComponent from './product-details.component';
import ProductDetailsOverviewComponent from './product-details-overview.component';
import ProductSpecsComponent from './product-specs.component';

export const routes: Routes = [
    { path: '', redirectTo: 'product-list', pathMatch: 'full' },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-details/:id', component: ProductDetailsComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: ProductDetailsOverviewComponent },
            { path: 'specs', component: ProductSpecsComponent }
        ]
    }
];

export const routing = RouterModule.forRoot(routes);
