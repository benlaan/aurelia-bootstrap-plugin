import {bindable, containerless} from 'aurelia-framework';

@containerless
export class BsBreadcrumb {

    @bindable
    public items: Array<any>;
}
