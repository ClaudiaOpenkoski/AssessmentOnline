import { BaseEntity } from './../../shared';

export const enum CourseLevel {
    'Basic',
    'Intermediate',
    'Advanced'
}

export class Course implements BaseEntity {
    constructor(
        public id?: number,
        public description?: string,
        public price?: number,
        public numberOfLectures?: number,
        public level?: CourseLevel,
        public promotionalPrice?: number,
        public name?: string,
        public category?: BaseEntity,
    ) {
    }
}
