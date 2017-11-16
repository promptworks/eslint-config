# eslint-config-promptworks

A shareable ESLint config for PromptWorks projects.

## Usage

If you're starting a project from scratch, just run the following commands:

    $ npm install --save-dev \
        babel-eslint \
        eslint \
        prettier \
        eslint-config-promptworks \
        eslint-config-prettier \
        eslint-plugin-prettier \
        eslint-plugin-import

If you're using React, you'll also want to install:

    $ npm install eslint-plugin-jsx-a11y eslint-plugin-react

Next, you'll need to configure it:


```javascript
{
  "parser": "babel-eslint",

  "extends": [
    "promptworks",
    "promptworks/react"
  ]
}
```
