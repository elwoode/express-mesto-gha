module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    "no-underscore-dangle": ["error", { "allow": ["_id"] }],
    "no-console": "off"
  }
}
