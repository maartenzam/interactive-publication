The only way of assessing the accessibility of a visualisation is testing.

Many tools exist to calculate <span class='internal-link'>[contrast ratios](colour-contrast)</span> for text and their backgrounds. Checking contrast ratios is also built in into the Accessibility tab in the Firefox Developer Tools.

Similarly, many **colour blind simulators** exist to check how the colours in web pages, images and visualisations are perceived by people with different kinds of colour blindness.

**Keyboard navigation** is an important part of accessibility. So you should check how the web page, its interactive features and the visualisations it contains are traversable by using the tab, arrow and space bar/enter keys. The sequence in which interactive controls receive focus when the page is tabbed should make sense, and the controls should be activated by pressing the space bar or enter keys.

Visually impaired people often use the **zoom** functionality of browsers to display the text and other elements in a larger format. So you should test how your visualisations are displayed when the page is zoomed in.

Similarly, you should check how your visualisations are displayed on **different screen sizes**. An easy trick is to resize the browser window, but the Chrome browser has built in functionality for simulating different devices and screen sizes.

Tools exist to automatically generate <span class='internal-link'>[accessibility audits](accessibility-inspectors-and-audits)</span> of web pages. An example of such a tool is Lighthouse, which is built into the Chrome browser.

Testing a page and the visualisations with a <span class='internal-link'>[screen reader](using-a-screen-reader)</span> is also very highly recommended, and will surface any existing accessibility issues pretty quickly. So becoming familiar with screen readers and learning how people use them is needed for good accessibility testing.

All the above tests are quite easy to perform when developing a web page or a visualisation. But the spectrum of impairments and the assistive technology people use to overcome them is so diverse, that only testing with **real users** can be considered thorough accessibility testing. So if you care about the accessibility of your data visualisations, try to engage visually impaired people to access your visualisations, and let them identify any issues and give you feedback about how the visualisation could be made more accessible. 