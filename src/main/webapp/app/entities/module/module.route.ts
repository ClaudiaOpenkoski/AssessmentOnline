import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { ModuleComponent } from './module.component';
import { ModuleDetailComponent } from './module-detail.component';
import { ModulePopupComponent } from './module-dialog.component';
import { ModuleDeletePopupComponent } from './module-delete-dialog.component';

@Injectable()
export class ModuleResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const moduleRoute: Routes = [
    {
        path: 'module',
        component: ModuleComponent,
        resolve: {
            'pagingParams': ModuleResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testFrontendApp.module.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'module/:id',
        component: ModuleDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testFrontendApp.module.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const modulePopupRoute: Routes = [
    {
        path: 'module-new',
        component: ModulePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testFrontendApp.module.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'module/:id/edit',
        component: ModulePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testFrontendApp.module.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'module/:id/delete',
        component: ModuleDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testFrontendApp.module.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
