import {bindable, containerless} from 'aurelia-framework';

@containerless
export class BsListGroup {

    @bindable
    public items: Array<any>;
}
