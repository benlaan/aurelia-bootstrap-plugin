import { bindable } from 'aurelia-framework';

export class BsColumn {

    @bindable
    public xs: number;

    @bindable
    public sm: number;

    @bindable
    public md: number;

    @bindable
    public lg: number;

    public get xsWidth() : number {

        return this.xs || 12;
    }

    public get smWidth() : number {

        return this.sm || this.xsWidth;
    }

    public get mdWidth() : number {

        return this.md || this.smWidth;
    }

    public get lgWidth() : number {

        return this.lg || this.mdWidth;
    }
}
