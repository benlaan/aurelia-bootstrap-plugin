import {bindable} from 'aurelia-framework';

export class BsResponsiveEmbed {

    @bindable
    public source: string;

    @bindable
    public aspectRatio: string;

    @bindable
    public width: number;

    @bindable
    public height: number;
}
