Probably the easiest way to make the content of a web page accessible is by using semantic HTML. In semantic HTML, the <span class='internal-link'>[HTML elements](html-elements)</span> are used in a correct manner, and for the purpose they are intended for.

This means that a <span class='internal-link'>[button](html-buttons-and-inputs)</span> on a page should be a `<button>` element in the page’s HTML. With CSS, any HTML element can be made to look like a `<button>`, and with JavaScript its behaviour can also mimic the behaviour of a button. But CSS and JavaScript are not a given: loading of CSS and JavaScript might fail or might be disabled, CSS can be overridden by the operating system or the browser, or JavaScript might not work properly in assistive technology used by the user. As a result, the button mimicking HTML element might not look and behave like a button. 

```html
<div class="button">Click me!</div>

<button>Click me!</button>
```

On top of that, interactive elements like links, buttons and inputs can be focussed by using the tab key on a keyboard. This makes them accessible to users using a keyboard to navigate the page. This behaviour is missing for HTML elements which are not inherently interactive, so keyboard navigation might fail for these elements.

<aside>
🔗 <a href='https://officepublicationseu.github.io/accessible-html-dataviz/semantic-buttons.html'>The <code>semantic-buttons.html</code> page</a> contains 2 buttons: a first one using the <code>button</code> tag, and second one using a <code>div</code> tag that was styled to look like a button. Navigate to the page and hit the tab key to see how your browser’s focus will move the first button but not to the second one (both buttons are not functional, nothing will happen when you click them). Also notice how ChromeVox (or any other screen reader) will announce the first button as a button, but not the second one. <a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/semantic-buttons.html'>You can check the source HTML of the page here</a>.

</aside>

Another example of the importance of semantic HTML is the correct use of elements for text. When the content of a page makes correct use of paragraphs (`<p>` tags), header tags (`<h1>` to `<h6>`) and lists (`<ol>` and `<ul>`), screen readers will correctly read the text and offer functionality to skip parts of the document, to navigate to the next or previous heading, and to generate a table of content for the page based on the headings.

<aside>
🔗 <a href='https://officepublicationseu.github.io/accessible-html-dataviz/semantic-headers.html'>The <code>semantic-headers.html</code> page</a> contains 5 headers, but only the first 3 are used semantically correct. The last two are <code>div</code> elements styled to look like a header. ChromeVox can detect all headers on a page and allow users to navigate between them.

To do so, press the ChromeVox modifier key + L > H (this means pressing the modifier key(s) together with the L key, keep the modifier(s) keys pressed and then press the H key, this will instruct ChromeVox to construct a **L**ist of **H**eaders). You can also navigate the headers on a page with ChromeVox modifier key + N > H (next header) and modifier key + P > H (previous header). You will notice that you are not be able to navigate the last two headers on the page, because they or not using semantically correct header tags.

<a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/semantic-headers.html'>Check the source HTML of the page here</a>.

</aside>

<aside>
🔗 The last part of <a href='https://officepublicationseu.github.io/accessible-html-dataviz/semantic-headers.html'>the <code>semantic-headers.html</code> page</a> contains two ordered lists. But again, only the first one is correctly using <code>ol</code> and <code>li</code> tags, the other one uses <code>p</code> tags styled to look like list items.

When screen readers encounter a list on a web page, they will announce the list and mention the number of list items in the list. In this way, users know a list is following and have an idea of its length. They can then skip the list if they want to. Items in a non-semantical list might not be skippable, and users also will not know how long the list is.

<a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/semantic-headers.html'>Check the source HTML of the page again here</a>.

</aside>

Some HTML elements can be used to semantically structure the content of a document. These include the `<nav>` element for the navigation of a page (with a menu or a table of content), `<main>` for the main content of the page, the `<header>` and `<footer>` elements for headers and footers and the generic `<section>` element to separate stand alone parts of a web page. These elements are called landmarks, and some screen readers can navigate through pages using these landmarks.