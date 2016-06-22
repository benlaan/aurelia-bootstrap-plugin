import {bindable, containerless} from 'aurelia-framework';

export enum ButtonSize {

    ExtraSmall,
    Small,
    Large
}

@containerless
export class BsButton {

    constructor() {

        this.style = "default";
    }

    @bindable
    public size: string;

    @bindable
    public class: string;

    @bindable
    public style: string;

    @bindable
    public glyph: string;

    public getSize(): string {

        switch (ButtonSize[this.size]) {

            case ButtonSize.ExtraSmall:
                return "btn-xs";

            case ButtonSize.Small:
                return "btn-sm";

            case ButtonSize.Large:
                return "btn-lg";

            default:
                return "";
        }
    }
}
