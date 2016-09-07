import {bindable, computedFrom} from 'aurelia-framework';

export class BsMediaObject {

    constructor() {

        this.imageWidth = 160;
        this.imageHeight = 90;
    }

    @bindable
    public direction: string;

    @bindable
    public imageSource: string;

    @bindable
    public imageWidth: number;

    @bindable
    public imageHeight: number;

    @bindable
    public imageAltText: string;

    @bindable
    public heading: string;

    @bindable
    public link: string;

    @computedFrom("imageWidth", "imageHeight")
    public get style(): string {

        return `
            min-height: ${this.imageHeight}px;
            max-height: ${this.imageHeight}px;
            min-width: ${this.imageWidth}px;
            max-width: ${this.imageWidth}px;
        `;
    }
}
