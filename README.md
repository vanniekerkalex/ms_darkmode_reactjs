# Requirements
- Add dark-mode switching functionality to the *existing* dark-mode button found in the ThemeSwitcher component
  - Utilise the *existing* dark-mode scss file by adding a `dark-mode` class to a parent `html` element of the App component
- When in Dark mode:
  - The button icon should be `faSun`
  - The button icon colour should be `(#FFA500)`. You can use the `color` prop on the `Icon` component.
# Think about
- How to prevent unnecessary re-renders.
- How to implement dark mode in a bigger application. Would your solution work for this?

![screenshot-light](https://morningscore.io/wp-content/uploads/2020/07/laptop1.png)
![screenshot-dark](https://morningscore.io/wp-content/uploads/2020/07/laptop-1.png)

# Getting started

```
npm i
npm start
```

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.
