import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'products',
        loadComponent: () => import('./components/products/products.component').then(c => c.ProductsComponent)
    },
    {
        path: 'product/:id',
        loadComponent: () => import('./components/product-detail/product-detail.component').then(c => c.ProductDetailComponent)
    },
    {
        path: 'why-irresistible',
        loadComponent: () => import('./components/why-irresistibles/why-irresistibles.component').then(c => c.WhyIrresistiblesComponent)
    },
    {
        path: 'ingredients',
        loadComponent: () => import('./components/ingredients/ingredients.component').then(c => c.IngredientsComponent)
    },
    {
        path: 'solutions',
        loadComponent: () => import('./components/solutions/solutions.component').then(c => c.SolutionsComponent)
    },
    {
        path: 'solution/:id',
        loadComponent: () => import('./components/solution-detail/solution-detail.component').then(c => c.SolutionDetailComponent)
    },
    {
        path: 'tools',
        loadComponent: () => import('./components/tools/tools.component').then(c => c.ToolsComponent)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }