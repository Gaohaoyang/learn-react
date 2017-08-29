module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true
  },
  "parser": "babel-eslint",
  "rules": {
    "semi": [
      2, "never"
    ],
    "react/jsx-filename-extension": [
      1, {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/prefer-stateless-function": [
      1, {
        "ignorePureComponents": false
      }
    ]
  }
};
