import {bindable} from 'aurelia-framework';

export class BsGlyph {

    @bindable
    public title: string;

    @bindable
    public label: string;

    @bindable
    public icon: string;

    @bindable
    public class: string;

    @bindable
    public color: string;

    @bindable
    public size: number;
}
