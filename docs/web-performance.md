# Web Performance (Web Vitals)

## Web Vitals

### Largest Contentful Paint (LCP)

- Measures loading performance.
- It marks the point in the page load timeline when the page's main content has likely loaded.
- To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.
- LCP is measured as the time from navigation to the time when the largest text or image element is rendered within the viewport.
- LCP is a good indicator of when the main content of the page has loaded.



### First Input Delay (FID)

- Measures interactivity.
- It quantifies the experience users feel when trying to interact with unresponsive pages.
- To provide a good user experience, pages should have an FID of less than 100 milliseconds.
- FID is the time from when a user first interacts with a page (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to begin processing event handlers in response to that interaction.

### Cumulative Layout Shift (CLS)

- Measures visual stability.
- It quantifies how often users experience unexpected layout shifts.
- To provide a good user experience, pages should maintain a CLS of less than 0.1.
- CLS is the sum of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.
- An unexpected layout shift is any visible shift of page content that occurs after the page's initial load.
- CLS is a good indicator of how stable the content is on the page.
- CLS is calculated by multiplying the impact fraction by the distance fraction.
- The impact fraction is the amount of layout shift that occurs, and the distance fraction is the distance the element has shifted.
- CLS = impact fraction * distance fraction
- CLS = ∑ (impact fraction * distance fraction)


### Time to First Byte (TTFB)

- Measures server response time.
- It marks the time at which the browser receives the first byte of the response from the server.
- To provide a good user experience, sites should strive to have a TTFB of less than 600 milliseconds.
- TTFB is a good indicator of server responsiveness.
- TTFB is measured as the time from navigation to the time when the browser receives the first byte of the response from the server.

### First Contentful Paint (FCP)

- Measures loading performance.
- It marks the time at which the first text or image is painted.
- To provide a good user experience, sites should strive to have FCP occur within 1.8 seconds of when the page first starts loading.
- FCP is a good indicator of how quickly users are able to see your content.
- FCP is measured as the time from navigation to the time when the browser renders the first bit of content from the DOM.

### Interaction to Next Point (INP)

- Measures interactivity.
- It marks the time at which the page is fully interactive.
- To provide a good user experience, sites should strive to have INP occur within 3.8 seconds of when the page first starts loading.
- INP is the point at which the page is fully interactive, which means it has displayed useful content, event handlers are registered for most visible page elements, and the page responds to user interactions within 50 milliseconds.
- INP is measured as the time from navigation to when the page is reliably interactive.
- INP is a good indicator of when the page is ready to respond to user input.


### Speed Index

- Measures how quickly content is visually displayed during page load.
- It is the average time at which visible parts of the page are displayed.
- To provide a good user experience, pages should strive to have a Speed Index of less than 4,000 milliseconds.
- Speed Index is a good indicator of how quickly the contents of a page are visibly populated.
- Speed Index is measured as the average time at which visible parts of the page are displayed.


## Tools

- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- [Pingdom](https://tools.pingdom.com/)

## References

- [Web Vitals](https://web.dev/vitals/)
- [Web Vitals - Google Developers](https://developers.google.com/web/fundamentals/performance/vitals/)
- [Web Vitals - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Performance/Largest_Contentful_Paint)
- [Web Vitals - Wikipedia](https://en.wikipedia.org/wiki/Web_Vitals)

