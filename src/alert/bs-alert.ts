import {bindable} from 'aurelia-framework';

export class BsAlert {

    @bindable
    public dismissible: boolean;

    @bindable
    public type: string;

    @bindable
    public message: string;

    @bindable
    public closeLabel: string;

    constructor() {

        this.closeLabel = "Close";
    }
}
