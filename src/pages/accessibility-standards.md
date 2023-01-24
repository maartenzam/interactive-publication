The World Wide Web Consortium, the main international standards organisation for the internet, is maintaining a set of accessibility guidelines for the web with the **Web Content Accessibility Guidelines ([WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/))**.

Version 1.0 of WCAG was released in 1999 and consisted of 14 guidelines. Version 2.0 was released in 2008 and adopted 4 principles of accessibility, also called the **POUR principles of accessibility**:

- **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive. This principle is based on the assumption that users might have impairments with one (or even multiple) of their senses.
- **Operable**: User interface components and navigation must be operable. Users using a keyboard instead of a mouse should be able to interact correctly with a web page, users should not be given a time limit for completing interactions, and ways for easy navigation and finding content should be provided.
- **Understandable**: Information and the operation of user interface must be understandable. This means that text should be clear and easy to understand, the user interface and navigation should be consistent and predictable, and web pages should help users when they make errors filling in a form, for example.
- **Robust**: Content must be robust enough that it can be interpreted reliably by a wide variety of web browsers and other software programs like screen readers.

WCAG 2.0 (and also the current recommended version 2.1) has three levels of conformance:

- **A**: minimal conformance. Some of the requirements to comply to this level are:
    - All non-text content, like images and videos, should have a text alternative
    - Prerecorded video and audio should have captions
    - The content of a page should be navigable with a keyboard only
    - The page should have a clear title, and should have a language assigned to it
- **AA**: acceptable conformance. On top of all level A requirements, level AA has the following requirements:
    - Live videos have captions
    - The contrast ratio between text and the background should at least be 4,5:1 (see LINK)
    - Text should be resizable to 200% without losing content or functionality
    - Images of text should not be used
    - Keyboard focus is always clearly visible
    - Suggest a fix when a user has made an error
- **AAA**: optimal compliance. This level requires all features of levels A and AA, plus (amongst other requirements):
    - Sign language interpretation for videos
    - The contrast ratio between text and the background should at least be 7:1
    - Provide a way for users to know where they are in the document
    - The reading level should be so that users with 9 years of schooling will be able to read it, and any words that are hard to pronounce, should be explained.
    - Elements on a page should not be changed unless users have asked for it