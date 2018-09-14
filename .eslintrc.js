module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "off",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "off",
            "error",
            "never"
        ], 
        "no-unused-vars":["off", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
    }
};