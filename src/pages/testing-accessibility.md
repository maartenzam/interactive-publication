Accessibility guidelines focus on the technical aspects of accessibility. These are an important baseline to start from, but real accessibility evaluation can only be done by testing the usability and effectivenes of a design with a varied audience of people with and without impairments.

Testing different design variations can help the discussion on the overall design and can be handy to identify painpoints.

Easy technical testing of the accessibility of an (online) data visualisation includes

- zooming in the browser, up to 200% (View → Zoom in from the menu bar). This is a common technique used by people with visual impairments to make text readable for them. Things to watch for when zoomed in are overlapping text, hidden overflowing text and unexpected horizontal scrolling
- check if the text on a visualisation is selectable. When it is not, the text on the visualisation is probably not accessible to screen readers
- checking for <span class='internal-link'>[colour contrast](colour-contrast)</span> issues and daltonism related problems. The <span class='internal-link'>[colour in accessibility](colour-in-accessibility)</span> page includes tests and simulators to evaluate colours and contrast.
- Browsers like Firefox and Chrome have built in tools to identify accessibility issues.

![Lighthouse is a tool built into the Chrome browser to evaluate various aspects of a web page, including its accessility. Access it through View > Developer > Developer Tools and selecting the Lighthouse tab. Source: [developers.google.com/web/tools/lighthouse](https://developers.google.com/web/tools/lighthouse)](Accessibility%207a31e0024d4d4023ba9ec30ba05cf2f3/chrome-lighthouse.png)

Lighthouse is a tool built into the Chrome browser to evaluate various aspects of a web page, including its accessility. Access it through View > Developer > Developer Tools and selecting the Lighthouse tab. Source: [developers.google.com/web/tools/lighthouse](https://developers.google.com/web/tools/lighthouse)

![The Firefox Accessibility Inspector can find issues related to contrast, and can simulate daltonism and loss of contrast. Access it through Tools > Browser Tools > Web Developer and selecting the Accessibility tab, or by right clicking on a page and selecting “Inspect Accessibility Properties”. Source: [developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector)](Accessibility%207a31e0024d4d4023ba9ec30ba05cf2f3/firefox-accessibility-inspector.png)

The Firefox Accessibility Inspector can find issues related to contrast, and can simulate daltonism and loss of contrast. Access it through Tools > Browser Tools > Web Developer and selecting the Accessibility tab, or by right clicking on a page and selecting “Inspect Accessibility Properties”. Source: [developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector)

Testing how a visualisation performs when accessed through a screen reader will be covered in depth in another training fully dedicated to the topic of accessible visualisations, to be released later.