/**
 * @param tagName
 * @param attributes
 * @param children
 * @returns {HTMLAnchorElement | HTMLElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLObjectElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSlotElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement}
 */

const createElement = (tagName, attributes, children) => {
  const element = document.createElement(tagName);
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  if (children) {
    if (typeof children === 'string') {
      element.textContent = children;
    } else {
      children.forEach((child) => element.appendChild(child));
    }
  }
  return element;
};

const div = createElement('div', { id: 'container' }, [
  createElement('h1', { class: 'heading' }, 'Hello World'),
  createElement(
    'p',
    { class: 'content' },
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  ),
  createElement('a', { href: 'https://www.google.com' }, 'Google'),
]);

document.body.appendChild(div);

console.log(div.outerHTML); // <div id="container"><h1 class="heading">Hello World</h1><p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><a href="https://www.google.com">Google</a></div>
