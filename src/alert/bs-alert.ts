import {bindable} from 'aurelia-framework';

export class BsAlert {

    constructor() {

        this.closeLabel = "Close";
    }

    @bindable
    public dismissible: boolean;

    @bindable
    public type: string;

    @bindable
    public message: string;

    @bindable
    public closeLabel: string;
}
