# Web Security Headers

## Content Security Policy (CSP)

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement to distribution of malware.

CSP works by defining a whitelist of trusted sources of content, and instructs the browser to only execute or render resources from those sources. Even if an attacker can find a way to inject malicious scripts into the page, the scripts will not be executed if they are not loaded from a whitelisted source.

### Example

```html
Content-Security-Policy: default-src 'self'; script-src 'self' https://apis.google.com
```

In this example, the CSP header specifies that the default source for content is the same origin (`'self'`), and that scripts can only be loaded from the same origin (`'self'`) or from `https://apis.google.com`.

## Strict-Transport-Security (HSTS)

HTTP Strict Transport Security (HSTS) is a web security policy mechanism that helps to protect websites


### Example

```html
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

In this example, the HSTS header specifies that the browser should only access the site over HTTPS for the next year (`max-age=31536000`) and that this policy should apply to all subdomains (`includeSubDomains`).

## X-Content-Type-Options

The `X-Content-Type-Options` header is used to protect against MIME sniffing vulnerabilities. MIME sniffing, also known as content type sniffing or media type sniffing, is the practice of inspecting the content of a file to attempt to deduce the file type, rather than relying on the content type header.

### Example

```html
X-Content-Type-Options: nosniff
```

In this example, the `X-Content-Type-Options` header specifies that the browser should not perform MIME sniffing and should trust the content type header provided by the server.

## X-Frame-Options

The `X-Frame-Options` header is used to prevent clickjacking attacks by ensuring that a web page can only be displayed in a frame on the same origin as the page itself.

### Example

```html
X-Frame-Options: DENY
```

In this example, the `X-Frame-Options` header specifies that the browser should not allow the page to be displayed in a frame on any other origin.

## Referrer-Policy

The `Referrer-Policy` header is used to control how much information the browser includes with navigations away from a document and how much information is included with requests for images on the page.

### Example

```html
Referrer-Policy: no-referrer
```

In this example, the `Referrer-Policy` header specifies that the browser should not send a referrer header with requests.

## Feature-Policy

The `Feature-Policy` header allows a site to control which features and APIs can be used in the browser.

### Example

```html
Feature-Policy: geolocation 'self'; midi 'none'; sync-x
```

In this example, the `Feature-Policy` header specifies that the site can use the geolocation API from the same origin (`'self'`), but cannot use the MIDI API (`'none'`), and can use the sync-x feature.


## Conclusion

Web security headers are an important part of securing a website against various types of attacks. By using headers like CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, and Feature-Policy, developers can help protect their users from common security vulnerabilities. It is important to configure these headers correctly and keep them up to date to ensure the security of a website.
