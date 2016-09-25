import {bindable} from 'aurelia-framework';

export class BsInputGroup {

    @bindable
    public type: string;

    @bindable
    public before: string;

    @bindable
    public after: string;

    @bindable
    public placeholder: string;

    @bindable
    public value: string;
}
