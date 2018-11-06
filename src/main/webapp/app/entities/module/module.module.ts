import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestFrontendSharedModule } from '../../shared';
import {
    ModuleService,
    ModulePopupService,
    ModuleComponent,
    ModuleDetailComponent,
    ModuleDialogComponent,
    ModulePopupComponent,
    ModuleDeletePopupComponent,
    ModuleDeleteDialogComponent,
    moduleRoute,
    modulePopupRoute,
    ModuleResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...moduleRoute,
    ...modulePopupRoute,
];

@NgModule({
    imports: [
        TestFrontendSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ModuleComponent,
        ModuleDetailComponent,
        ModuleDialogComponent,
        ModuleDeleteDialogComponent,
        ModulePopupComponent,
        ModuleDeletePopupComponent,
    ],
    entryComponents: [
        ModuleComponent,
        ModuleDialogComponent,
        ModulePopupComponent,
        ModuleDeleteDialogComponent,
        ModuleDeletePopupComponent,
    ],
    providers: [
        ModuleService,
        ModulePopupService,
        ModuleResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestFrontendModuleModule {}
