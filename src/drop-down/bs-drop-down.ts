import {bindable, containerless} from 'aurelia-framework';

@containerless
export class BsDropDown {

    constructor() {

        this.style = "default";
    }

    @bindable
    public label: string;

    @bindable
    public style: string;

    @bindable
    public opened: boolean;

    @bindable
    public split: boolean;

    @bindable
    public items: Array<IDropDownItem>;

    public toggle() : void {

        this.opened = !this.opened;
    }
}

export interface IDropDownItem {

    link?: string;
    label?: string;
    separator?: boolean;
}