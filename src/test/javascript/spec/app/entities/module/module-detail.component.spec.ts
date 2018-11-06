/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { TestFrontendTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { ModuleDetailComponent } from '../../../../../../main/webapp/app/entities/module/module-detail.component';
import { ModuleService } from '../../../../../../main/webapp/app/entities/module/module.service';
import { Module } from '../../../../../../main/webapp/app/entities/module/module.model';

describe('Component Tests', () => {

    describe('Module Management Detail Component', () => {
        let comp: ModuleDetailComponent;
        let fixture: ComponentFixture<ModuleDetailComponent>;
        let service: ModuleService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TestFrontendTestModule],
                declarations: [ModuleDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    ModuleService,
                    JhiEventManager
                ]
            }).overrideTemplate(ModuleDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ModuleDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ModuleService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Module(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.module).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
