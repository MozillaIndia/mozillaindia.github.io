MozillaIndia
============

This is the source code for the static landing page of MozillaIndia.org. The website is built using the sandstone theme extracted from Mozilla's Bedrock project.

Contributing
============

HowTo
-----

Fork -> Hack ->  Send pull request

CSS
---

- CSS is written in Less and is kept in the `less` directory.
- `less/styles.less` organizes CSS files together. Any new Less file is imported into `less/styles.less` and compiled to `css/styles.css`.
- Any third party CSS go to the `css` directory.
- MozillaIndia-specific CSS goes in `less/mozin/mozin.less`.

HTML
----

- Edit `index.html` for adding/editing any content.
