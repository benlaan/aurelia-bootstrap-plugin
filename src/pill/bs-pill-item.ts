import {inject, Parent, bindable, containerless} from 'aurelia-framework';
import {BsPill} from './bs-pill';

@inject(Parent.of(BsPill))
@containerless
export class BsPillItem {

    constructor(private parentPill: BsPill) {

    }

    @bindable
    public id: string;

    @bindable
    public active: boolean;

    @bindable
    public disabled: boolean;

    @bindable
    public link: string;

    @bindable
    public glyph: string;

    @bindable
    public title: string;

    public attached(): void {

        this.id = this.id || this.title.replace(' ', '');
        this.parentPill.addPill(this);
    }
}