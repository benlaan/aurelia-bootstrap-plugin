import {bindable, containerless} from 'aurelia-framework';

@containerless
export class BsBreadcrumbItem {

    @bindable
    public active: boolean;

    @bindable
    public link: string;

    @bindable
    public name: string;
}
