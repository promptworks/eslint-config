# eslint-config-promptworks

A shareable ESLint config for PromptWorks projects.

## Usage

If you're starting a project from scratch, just run the following commands:

    $ npm install --save-dev \
        eslint \
        prettier \
        babel-eslint \
        eslint-config-promptworks \
        eslint-config-prettier \
        eslint-plugin-prettier \
        eslint-plugin-import

Now, you'll want to create an ESLint config file:

```javascript
// .eslintrc.json
{
  "parser": "babel-eslint",
  "extends": ["promptworks"]
}
```

## React

If you're using React, you'll need a few more plugins:

    $ npm install --save-dev eslint-plugin-jsx-a11y eslint-plugin-react

And, you'll want to add `promptworks/react` to the `extends` section:

```javascript
// .eslintrc.json
{
  "parser": "babel-eslint",
  "extends": ["promptworks", "promptworks/react"]
}
```
