import {inject, Parent, bindable, containerless} from 'aurelia-framework';
import {BsTab} from './bs-tab';

@inject(Parent.of(BsTab))
@containerless
export class BsTabItem {

    constructor(private parentTab: BsTab) {

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
        this.parentTab.addTab(this);
    }
}