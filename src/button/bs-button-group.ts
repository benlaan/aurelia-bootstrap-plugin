import {bindable, containerless} from 'aurelia-framework';

@containerless
export class BsButtonGroup {

    @bindable
    public label: string;

    @bindable
    public class: string;

    @bindable
    /**
     * @param {('left'|'center'|'right')} align - Horizontal Alignment of a button group
     */
    public align: string;
}
