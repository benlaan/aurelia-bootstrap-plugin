import {bindable} from 'aurelia-framework';

export class BsThumbnail {

    @bindable
    public link: string;

    @bindable
    public imageSource: string;

    @bindable
    public imageAltText: string;

    @bindable
    public xsWidth: number;

    @bindable
    public smWidth: number;

    @bindable
    public mdWidth: number;

    @bindable
    public lgWidth: number;
}
