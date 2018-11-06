import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestFrontendCategoryModule } from './category/category.module';
import { TestFrontendCourseModule } from './course/course.module';
import { TestFrontendModuleModule } from './module/module.module';
import { TestFrontendTopicModule } from './topic/topic.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TestFrontendCategoryModule,
        TestFrontendCourseModule,
        TestFrontendModuleModule,
        TestFrontendTopicModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestFrontendEntityModule {}
