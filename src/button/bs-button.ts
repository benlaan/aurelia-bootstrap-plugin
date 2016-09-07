import { autoinject, bindable, containerless } from 'aurelia-framework';

export enum ButtonSize {

    ExtraSmall,
    Small,
    Large
}

@containerless
@autoinject
export class BsButton {

    constructor(private element: Element) {

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

    @bindable
    public link: string;

    public get sizeClass(): string {

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

    public click(): void {

        this.element.dispatchEvent(new CustomEvent("click", { bubbles: true }));
    }
}
