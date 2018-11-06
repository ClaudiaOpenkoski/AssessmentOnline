import { BaseEntity } from './../../shared';

export class Module implements BaseEntity {
    constructor(
        public id?: number,
        public description?: string,
        public name?: string,
        public course?: BaseEntity,
    ) {
    }
}
