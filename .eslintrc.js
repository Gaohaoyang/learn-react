module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [
      1, {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/prefer-stateless-function": [
      1, {
        "ignorePureComponents": true
      }
    ],
    "import/no-unresolved": 1,
    "import/extensions": 1
  }
};
