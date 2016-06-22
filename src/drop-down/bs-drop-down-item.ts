import {bindable, containerless} from 'aurelia-framework';

@containerless
export class BsDropDownItem {

    @bindable
    public label: string;

    @bindable
    public separator: boolean;

    @bindable
    public disabled: boolean;

    @bindable
    public link: string;
}
