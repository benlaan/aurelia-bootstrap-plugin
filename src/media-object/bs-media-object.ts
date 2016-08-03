import {bindable} from 'aurelia-framework';

export class BsMediaObject {

    @bindable
    public direction: string;

    @bindable
    public imageSource: string;

    @bindable
    public imageAltText: string;

    @bindable
    public heading: string;
}
