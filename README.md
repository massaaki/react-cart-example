# Boilerplate
This is a React Boilerplate with:
```configuration
- eslint
- .editorconfig
- prettier
- babel-prettier
```

overwrite config to Airbnb style guide
```overwrite
- prettierrc.js
- eslintr.js
```



## Steps to generate same boilerplate from zero
yarn create react-app <project-name>

### Created .editorconfig
```editor
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```
### ESLINT
```eslint
yarn add eslint --init -D

Remove package-lock.json

yarn # run in terminal to generate/recreate yarn.lock
```


### PRETTIER
```pretter
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
yarn add babel-eslint -D # configure babel to use last javascripts features
```


