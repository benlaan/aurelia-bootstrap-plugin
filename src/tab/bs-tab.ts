import {bindable, containerless} from 'aurelia-framework';
import {BsTabItem} from './bs-tab-item';

@containerless
export class BsTab {

    private _items: Array<BsTabItem>;

    constructor() {

        this._items = [];
    }

    private foreach(items: Array<any>, action: ((i) => void)) {

        Array.prototype.forEach.call(items, action);
    }

    public activateTab(tab: BsTabItem) {

        this.foreach(this._items, t => t.active = (t.id == tab.id));
    }

    public addTab(tab: BsTabItem) {

        this._items.push(tab);
    }
}