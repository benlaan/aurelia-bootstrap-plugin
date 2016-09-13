import { bindable } from 'aurelia-framework';

export class BsFormGroup {

    @bindable
    public label: string;

    @bindable
    public for: string;
}
