import {bindable} from 'aurelia-framework';

export class BsGlyph {

    @bindable
    public label: string;

    @bindable
    public icon: string;

    @bindable
    public class: string;
}
