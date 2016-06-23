import {bindable, computedFrom} from 'aurelia-framework';

export class BsPagination {

    private _items: Array<string>;

    constructor() {

        this._items = null;
        this.firstPageLink = "#";
        this.lastPageLink = "#";
    }

    private calculateItems() : Array<string> {

        if (this.pageCount <= this.maxDisplayCount) {

            var result = [];
            for (var index = 1; index <= this.pageCount; index++)
                result.push(index);

            return result;
        }

        // too many.. just show the first and last halves
        var result = [];
        var half = this.maxDisplayCount / 2;

        for (var index = 1; index <= half; index++)
            result.push(index);

        result.push("...");

        for (var index = this.pageCount - half + 1; index <= this.pageCount; index++)
            result.push(index);

        return result;
    }

    @bindable
    public pageCount: number;

    @bindable
    public maxDisplayCount: number;

    @bindable
    public linkFormat: string;

    @bindable
    public firstPageLink: string;

    @bindable
    public lastPageLink: string;

    public getLinkFormat(index: number) : string {

        return this.linkFormat.replace(/\{\{(.*?)\}\}/, index.toString());
    }

    @computedFrom("pageCount", "maxDisplayCount")
    public get items(): Array<string> {

        if (this._items != null && this.pageCount && this.maxDisplayCount)
            return this._items;

        this._items = this.calculateItems();
        return this._items;
    }
}