import {inject, bindable, containerless} from 'aurelia-framework';
import {DOM} from 'aurelia-pal'

@inject(DOM)
@containerless
export class BsDropDown {

    constructor(private dom: Document) {

        this.style = "default";
        document.addEventListener("click", () => { this.opened = false; });
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

        this.opened  = !this.opened;
    }
}

export interface IDropDownItem {

    link?: string;
    label?: string;
    separator?: boolean;
}