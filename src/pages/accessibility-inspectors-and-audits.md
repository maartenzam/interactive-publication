Both Firefox and Chrome have built in functionality to detect issues with the accessibility of web pages.

## Firefox

In Firefox this feature is called the [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/). The easiest way to access the Accessibility Inspector is by clicking right on an element on a web page and select “Inspect Accessibility properties”.

<p class='center'>
<img src='Accessible%20HTML%20b3f9c8a6eb8049eead8f440531261bc6/inspect-accessibility.png' alt='' class='max-400' />
</p>

Source: Maarten Lambrechts, CC-BY-SA 4.0

This will open the Firefox developer console, with the Accessibility tab selected.

![Source: Maarten Lambrechts, CC BY SA 4.0](Accessible%20HTML%20b3f9c8a6eb8049eead8f440531261bc6/ff-inspector.png)

Source: Maarten Lambrechts, CC BY SA 4.0

The Accessibility Inspector will list the properties relevant for accessibility of the selected element. For text elements, for example, it will calculate the <span class='internal-link'>[contrast ratio](colour-contrast)</span> between the text and its background, and signal issues if <span class='internal-link'>[WCAG standards](accessibility-standards)</span> are not met.

In the top left of the Accessibility Inspector, you can choose to check for accessibility of the whole page. You can choose to check for all issues, or only for issues related to contrast, keyboard accessibility or text labels.

<p class='center'>
<img src='Accessible%20HTML%20b3f9c8a6eb8049eead8f440531261bc6/ff-accessibility-check.png' alt='' class='max-600' />
</p>

Source: Maarten Lambrechts, CC BY SA 4.0

Selecting any of these will generate a list of elements and identified accessibility issues.

![Source: Maarten Lambrechts, CC BY SA 4.0](Accessible%20HTML%20b3f9c8a6eb8049eead8f440531261bc6/ff-accessibility-check-results.png)

Source: Maarten Lambrechts, CC BY SA 4.0

You can also choose to simulate different kind of colour blindness, to see how users suffering from any of these perceive the web page.

![Source: Maarten Lambrechts, CC BY SA 4.0](Accessible%20HTML%20b3f9c8a6eb8049eead8f440531261bc6/ff-colourblind-simulator.png)

Source: Maarten Lambrechts, CC BY SA 4.0

And finally you can choose to highlight the order in which elements on the page will receive focus when users use the tab key on the keyboard to navigate interactive elements on the page.

![Source: Maarten Lambrechts, CC BY SA 4.0](Accessible%20HTML%20b3f9c8a6eb8049eead8f440531261bc6/ff-tabbing-order.png)

Source: Maarten Lambrechts, CC BY SA 4.0

## Chrome

The Chrome browser has a built in web page auditing tool called Lighthouse. Lighthouse evaluates the performance, use of best practices, search engine optimisation and the accessibility of a web page.

You can open Lighthouse by clicking right on an element and choose “Inspect element” (this opens the Chrome development tools) and then click “Lighthouse” in the row of tabs that appear.

![Source: Maarten Lambrechts, CC BY SA 4.0](Accessible%20HTML%20b3f9c8a6eb8049eead8f440531261bc6/chrome-lighthouse.png)

Source: Maarten Lambrechts, CC BY SA 4.0

If you are only interested in auditing the accessibility of a web page, you can deselect all other categories. After that, click the “Analyze page load” button. After running the analysis (this may take a little while), the audited web page gets a score out of 100. When the page scores less than 100 percent for accessibility, the issues with the page are listed, and the elements not in line with accessibility guidelines are identified.

![Source: Maarten Lambrechts, CC BY SA 4.0](Accessible%20HTML%20b3f9c8a6eb8049eead8f440531261bc6/chrome-lighthouse-results.png)

Source: Maarten Lambrechts, CC BY SA 4.0

## User testing

When Lighthouse has finished its accessibility audit, together with the score of the page, the following message is displayed:

> Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.
> 

Fully automatic testing of accessibility is currently not possible. So in order to really evaluate the accessibility of a web page, testing with real users is needed.

The least you should do is test the keyboard navigation of the page, run it through a screen reader, test the contrast ratio of text and other elements on the page and perform colour blind simulation tests. See <span class='internal-link'>[Intro to Chartability](intro-to-chartability)</span> for a structured way of testing the accessibility of web pages and data visualisations.

But of course, testing pages with real visual impaired people, using the technology of their own choice, is the best way of testing the accessibility. This will surface accessibility issues otherwise missed.