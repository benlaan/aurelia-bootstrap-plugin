import {bindable} from 'aurelia-framework';

export class BsPanel {

    @bindable
    public style: string;

    @bindable
    public showTitle: string;

    @bindable
    public headerText: string;

    @bindable
    public footerText: string;
}