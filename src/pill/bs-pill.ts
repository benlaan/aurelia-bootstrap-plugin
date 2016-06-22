import {bindable, containerless} from 'aurelia-framework';
import {BsPillItem} from './bs-pill-item';

@containerless
export class BsPill {

    private _items: Array<BsPillItem>;

    @bindable
    public stacked: boolean;

    @bindable
    public stackSize: number;

    constructor() {

        this._items = [];
        this.stackSize = 3;
    }

    private foreach(items: Array<any>, action: ((i) => void)) {

        Array.prototype.forEach.call(items, action);
    }

    public activatePill(pill: BsPillItem) {

        this.foreach(this._items, t => t.active = (t.id == pill.id));
    }

    public addPill(pill: BsPillItem) {

        this._items.push(pill);
    }
}