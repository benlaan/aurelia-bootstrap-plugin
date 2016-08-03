import {bindable, containerless} from 'aurelia-framework';

@containerless
export class BsListGroupItem {

    @bindable
    public items: Array<any>;
}
