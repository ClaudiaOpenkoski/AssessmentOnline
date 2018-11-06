import { BaseEntity } from './../../shared';

export class Topic implements BaseEntity {
    constructor(
        public id?: number,
        public duration?: string,
        public name?: string,
        public module?: BaseEntity,
    ) {
    }
}
