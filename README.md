# grid-example

This is a standard ember 5.1 app as it comes out of the box.  All downstream instructions still apply for building and running.

The component itself is served under the [/files route](http://localhost:4200/files) specifically, to simulate how it might be used on an actual page.

## Differences from specifications

* The select/deselect all checkbox has been moved into the table markup in the heading for the selection column, rather than outside in the "summary" section.  This was done for table accessibility and labeling of the heading.  See: https://dequeuniversity.com/rules/axe/4.5/empty-table-header
* The "Download Selected" button is outlined to give a clear touch/click target and make it obvious what is interactive.

## TODOs

There are several things that would make this component more reusuable, more feature rich, or address technical debt given more time:

* Extract the headers out of the component and yield a hash of columns with display names and values.  This would allow the use of arbitrary column setups.
* Move to a CSS preprocessor and extract each component's styles into their own file.
* Create a proper layout system to allow the data-grid component to fit various page sizes more cleanly.
* Extract CSS design tokens to variables for consistent sizing changes over time.
* Implement keyboard controls and add roles if the grid is meant to be more interactive as detailed in https://www.w3.org/WAI/ARIA/apg/patterns/grid/ and https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/data-grids/
* Refactor data-grid tracking on selectedFileIds so that the set can be properly tracked and getters that use it can update automatically instead of having to reassign the set to trigger the computed property updates.
* Address lint issues and configure CSS linting rules.
* Introduce ember-cli-mirage for serving fake data to make the calls more realistic to actual server calls.
* Abstract the call into window.alert for downloads into an download or alert service that could be reused and tested separately.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd grid-example`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
