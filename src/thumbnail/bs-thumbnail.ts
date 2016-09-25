import { bindable, computedFrom } from 'aurelia-framework';

export class BsThumbnail {

    constructor() {

        this.maxHeight = 90;
    }

    @bindable
    public link: string;

    @bindable
    public imageSource: string;

    @bindable
    public imageAltText: string;

    @bindable
    public maxHeight: number;

    @bindable
    public xsWidth: number;

    @bindable
    public smWidth: number;

    @bindable
    public mdWidth: number;

    @bindable
    public lgWidth: number;

    @computedFrom("imageWidth", "imageHeight")
    public get style(): string {

        return `
            min-height: ${this.maxHeight}px;
            height: ${this.maxHeight}px;
        `;
    }
}
