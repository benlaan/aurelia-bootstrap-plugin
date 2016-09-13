import { bindable, autoinject, computedFrom } from 'aurelia-framework';

@autoinject()
export class BsTextArea {

    constructor() {

        this.placeholder = "";
        window.addEventListener('resize', this.windowResized, true);
    }

    @bindable
    public element: HTMLElement;

    @bindable
    public rows: number;

    @bindable
    public minRows: number;

    @bindable
    public maxRows: number;

    @bindable
    public value: string;

    @bindable
    public placeholder: string;

    /// Refer http://stackoverflow.com/questions/1760629/how-to-get-number-of-rows-in-textarea
    private calculateContentHeight(lineHeight: number) {

        var origHeight = this.element.style.height;
        var height = this.element.offsetHeight;
        var scrollHeight = this.element.scrollHeight;
        var overflow = this.element.style.overflow;

        /// only bother if the element is bigger than content
        if (height >= scrollHeight) {

            /// check that our browser supports changing dimension
            /// calculations mid-way through a function call...
            this.element.style.height = (height + lineHeight) + 'px';
            /// because the scrollbar can cause calculation problems
            this.element.style.overflow = 'hidden';

            /// by checking that scrollHeight has updated
            if (scrollHeight < this.element.scrollHeight) {

                /// now try and scan the element's height downwards
                /// until scrollHeight becomes larger than height
                while (this.element.offsetHeight >= this.element.scrollHeight)
                    this.element.style.height = (height -= lineHeight) + 'px';

                /// be more specific to get the exact height
                while (this.element.offsetHeight < this.element.scrollHeight)
                    this.element.style.height = (height++) + 'px';

                /// reset the element back to it's original height
                this.element.style.height = origHeight;
                /// put the overflow back
                this.element.style.overflow = overflow;

                return height;
            }
        }

        return scrollHeight;
    }

    private windowResized = (event: Event) => {

        if (this.value) {

            this.value += " ";

            setTimeout(() => {

                this.value = this.value.trim();
            });
        }
    }

    @computedFrom("value", "element")
        public get requiredRows(): number {

        if (this.rows)
            return this.rows;

        var lineHeight = parseInt(window.getComputedStyle(this.element).lineHeight, 10);
        var scrollHeight = this.calculateContentHeight(lineHeight);
        var rows = Math.ceil(scrollHeight / lineHeight);

        var min = this.minRows || 1;
        var max = this.maxRows || 10000;

        // clamp: minRows >> rows >> maxRows
        return Math.min(max, Math.max(min, rows));
    }
}
