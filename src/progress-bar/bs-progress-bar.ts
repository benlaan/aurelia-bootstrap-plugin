import {bindable} from 'aurelia-framework';

export class BsProgressBar {

    constructor() {

        this.min = 0;
        this.max = 100;
        this.progress = 0;
        this.striped = false;
        this.active = false;
    }

    @bindable
    public min: number;

    @bindable
    public max: number;

    @bindable
    public progress: number;

    @bindable
    public style: string;

    @bindable
    public striped: boolean;

    @bindable
    public active: boolean;

    public get width(): number {

        return (this.progress - this.min) * 100 / (this.max - this.min);
    }

}
