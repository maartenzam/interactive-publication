The possibility of reacting to user actions is what differentiates web pages from printed and static documents. When a visualisation is part of a website, the visualisation can also be interactive and react in some way to actions performed by the user. But the the kind of actions, their intent and the reactions from the web page or visualisation are very diverse. So let’s start by taking a closer look at what interactive visualisations are and what they can do first, before looking at how the interactivity can be made accessible.

## Semantic HTML

Any HTML element can be made interactive: with JavaScript you can specify what should happen to the web page and its content when an element is clicked, for example. But some HTML elements were developed specifically to receive user actions. These include:

- links (`<a>` elements) are used to navigate to a different (part of a) web page, or to download a file for example
- various types of `<input>` elements. Inputs can be used to let the user input text, a number, a password, a date or a file to upload. Inputs can also be used for search boxes and to create radio buttons and check boxes
- `<select>` elements for selecting a value from a list of possible values. Users select the value from a dropdown menu
- `<button>` elements, to let users submit or reset inputted information, or to start any other interactive action

These interactive elements are part of the HTML standard, and as a result they are very well supported in browsers and assistive technology like screen readers. When these elements are using <span class='internal-link'>[semantic HTML](semantic-html)</span>, screen readers will announce and read these elements correctly, and screen reader users will know how to interact with them.

But there is some freedom in how to use and label these interactive HTML elements. Links for example, can enclose any text. Compare the HTML snippets below.

```html
<p>Whales are really awesome creatures. To find more out about whales, <a href="https://en.wikipedia.org/wiki/Whale.html">click here</a>.</p>
```

```html
<p>Giraffes are really awesome creatures. <a href="https://en.wikipedia.org/wiki/Giraffe">Find out more about Giraffes</a>.</p>
```

The latter snippet is more accessible, because the text of the content of the link is understandable out of context, on its own, while in the former it only contains the generic “click me” text. Many screen readers can compose a list of all links contained in a page, so users know where they can navigate to from the current page. The text content of the links are used to label and search the listed links of a page, and generic link text like “click here” is not very helpful in that context.

<aside>
🔗 You can try this on <a href='https://officepublicationseu.github.io/accessible-html-dataviz/links.html'>the <code>links.html</code> page</a>. Similar to listing all the headers on a page in ChromeVox (see <span class='internal-link'><a href='using-a-screen-reader'>Using a screen reader</a></span>), you can press the ChromeVox modifier key + L > L to get a **L**ist of the **L**inks on a page, which you can then navigate. Clicking a link is done with Chromevox modifier key + space bar or Chromevox modifier key + enter.

<a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/links.html'>Check the source HTML of the page here</a>.
</aside>

When a link points to something other than a web page url (for example to a file for downloading) the text of the link should communicate clearly what will happen when it is clicked.

Similar to links, the text on a `<button>` should communicate what will happen when it is clicked. So text like “Click here” or “Click me” should be avoided.

## Keyboard navigation

Another main concern for accessible user interfaces for web pages is that pages should be navigable and operable with the keyboard only. In most browsers, you can use the tab key to navigate the interactive elements on a page. Visually, the element that receives focus after tabbing will be highlighted. Screen readers will announce the type of element that received focus.

<aside>
🔗 Try using the tab key on <a href='https://officepublicationseu.github.io/accessible-html-dataviz/inputs.html'>the <code>inputs.html</code> page</a> and interact with the inputs using the arrow and space bar/enter keys. <a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/inputs.html'>Check the source HTML of the page here.</a>

</aside>

When an `<input>` element is focussed, screen readers will announce the type of input (text, number, radio button, checkbox, …) and also read out the accompanying `<label>` element if it is present.

```html
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name">
</div>
```

If the `<label>` element is not present, screen readers might only announce that an input is focussed and can be edited, but not what is expected to be filled in in the text input:

```html
Fill in your name: <input type="text" id="name" name="name">
```

## Focus sequence

The sequence in which the interactive elements on a page are focussed when navigated with the tab key should make sense: they should follow the content of the page and its layout flow, from left to right and from top to bottom.

The focus sequence is determined by the order in which the elements are included in the HTML: the element that has the highest position in the HTML will receive focus first. Technically it is possible to add a menu bar with navigation links at the end of an HTML document, while still positioning it at the top of the page by applying some CSS styling it. This should be avoided, because the navigation links will only be reachable by tabbing through all other links and inputs on the page, while users expect these navigation links to receive focus first.

Semantic HTML guarantees that the interactive elements on your page can receive focus. But in some cases it might make sense to use other HTML elements for some interactivity. For example, if you define some interactive behaviour when an SVG `<circle>` element is clicked, the `<circle>` element needs to be able to receive focus. Otherwise the interactivity is inaccessible to people using only the keyboard. In those cases, you can specify that the `<circle>` element should also be focusable by setting its `tabindex` property to 0.

Positive values for tabindex can be used to set the tabbing sequence explicitly, but this should be avoided. It is better to rely only on the structure of the HTML to determine the tabbing order.