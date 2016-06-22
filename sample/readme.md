# Sample Component Usage

The following TypeScript and accompanying HTML template represent a work-in-progress of the aurelia-bootstrap-plugin module

Not all components are currently represented yet, but I intend to add more over time. **and** I do take pull requests!

## View Model


```typescript
import { Router, RouterConfiguration} from 'aurelia-router'
import { bindable } from 'aurelia-framework'
import { IDropDownItem } from 'aurelia-bootstrap/badges/bs-drop-down'

export class Components {

    @bindable
    public breadcrumbs: Array<any>;

    @bindable
    public dropDownOptions: Array<IDropDownItem>;

    constructor() {

        this.breadcrumbs = [
            { name: "Top", link: "/go" },
            { name: "Middle", link: "/go-home" },
            { name: "Bottom" },
        ]

        this.dropDownOptions = [

            { label: "Top", link: "/go" },
            { label: "Middle", link: "/go-home" },
            { separator: true  },
            { label: "Bottom", link: "#!/home/time" }
        ]
    }
}
```

## View

```html
<template>

  <hr />
  <h2>Tabs</h2>

  <bs-tab>
      <bs-tab-item id="person" title="People" glyph="user" active="true">
        Peeps! <bs-badge label="5"></bs-badge>
      </bs-tab-item>

      <bs-tab-item title="Places" glyph="map-marker">
        I'm a map! <bs-badge label="10"></bs-badge>
      </bs-tab-item>

      <bs-tab-item id="google" title="Things" glyph="search">
        Buy!! <bs-badge label="now"></bs-badge>
      </bs-tab-item>
  </bs-tab>

  <hr />
  <h2>Pills</h2>

  <bs-pill>
    <bs-pill-item id="home" title="Home">Home?</bs-pill-item>
    <bs-pill-item id="work" title="Work" link="/#/GoHere.html">Work!</bs-pill-item>
    <bs-pill-item id="pub" title="Pub" active="true">Yes!</bs-pill-item>
  </bs-pill>

  <hr />
  <h2>Stacked Pills</h2>

  <bs-pill stacked="true" stack-size="2">
    <bs-pill-item id="home" title="Home">Home?</bs-pill-item>
    <bs-pill-item id="work" title="Work" link="/#/GoHere.html">Work!</bs-pill-item>
    <bs-pill-item id="pub" title="Pub" active="true">Yes!</bs-pill-item>
  </bs-pill>

  <hr />
  <h2>Input Groups</h2>

  <bs-input-group before="@" value="benlaan" placeholder="User name"></bs-input-group>
  <hr />

  <bs-input-group after="@example.com" placeholder="Recipient's username"></bs-input-group>
  <hr />

  <bs-input-group before="$" after=".00" placeholder="enter amount"></bs-input-group>

  <hr />
  <h2>Breadcrumbs</h2>

  <bs-breadcrumb>
    <bs-breadcrumb-item name="Parent"></bs-breadcrumb-item>
    <bs-breadcrumb-item name="Child" link="/#/GoHere.html"></bs-breadcrumb-item>
    <bs-breadcrumb-item name="Current" active="true"></bs-breadcrumb-item>
  </bs-breadcrumb>

  <hr />
  <h2>Bound Breadcrumbs</h2>

  <bs-breadcrumb items.bind="breadcrumbs"></bs-breadcrumb>

  <hr />
  <h2>Badges</h2>

  Inbox:  <bs-badge label="40"></bs-badge>
  <bs-button style="warning">
    Outbox: <bs-badge label="3"></bs-badge>
  </bs-button>

  <hr />
  <h2>Toolbar with Groups</h2>

  <bs-toolbar>
    <bs-button-group label="Horizontal">
      <bs-button glyph="align-left">Left</bs-button>
      <bs-button glyph="align-center">Centre</bs-button>
      <bs-button glyph="align-right">Right</bs-button>
    </bs-button-group>

    <bs-button-group label="Vertical">
      <bs-button>Top</bs-button>
      <bs-button>Centre</bs-button>
      <bs-button>Bottom</bs-button>
    </bs-button-group>
  </bs-toolbar>

  <hr />
  <h2>Drop Down</h2>

  <bs-drop-down label="Press Me!" style="warning">
    <bs-drop-down-item label="All The Things"     link="#"></bs-drop-down-item>
    <bs-drop-down-item label="Because I think so" link="#"></bs-drop-down-item>
    <bs-drop-down-item separator="true"></bs-drop-down-item>
    <bs-drop-down-item label="Clearly Not This"   link="#"></bs-drop-down-item>
    <bs-drop-down-item label="This Doesn't Work"  link="#" disabled="true"></bs-drop-down-item>
  </bs-drop-down>

  <hr />
  <h2>Split Button Drop Down</h2>

  <bs-drop-down label="Press Me!" split="true" style="info">
    <bs-drop-down-item label="All The Things"     link="#"></bs-drop-down-item>
    <bs-drop-down-item label="Because I think so" link="#"></bs-drop-down-item>
    <bs-drop-down-item separator="true"></bs-drop-down-item>
    <bs-drop-down-item label="Clearly Not This"   link="#"></bs-drop-down-item>
    <bs-drop-down-item label="This Doesn't Work"  link="#" disabled="true"></bs-drop-down-item>
  </bs-drop-down>

  <hr />
  <h2>Bound Drop Down</h2>

  <bs-drop-down label="Press Me Too!" items.bind="dropDownOptions"></bs-drop-down>

  <hr />
  <h2>Button with Nested Glyph</h2>

  <bs-button size="Large" style="primary">
      <bs-glyph icon="star" label="Rate"></bs-glyph>
  </bs-button>

  <hr />
  <h2>Glyph Button</h2>

  <bs-button size="Large" glyph="refresh">Refreshing..</bs-button>

  <hr />
  <h2>Alerts</h2>

  <bs-alert type="success">
    <bs-glyph icon="star"></bs-glyph>You are a star!
  </bs-alert>

  <bs-alert type="info">In case you are interested</bs-alert>
  <bs-alert type="warning">Stop!! This is a bad idea</bs-alert>

</template>
```