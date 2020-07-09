module.exports = {
  hotReloadContext: 'src',
  devPort: 5000,
  microPort: 5001,
  shared: [
    "react",
    "react-dom",
    "react-router-dom",
    'react-redux',
    'bookReducer'
  ],
  exposes: {
    'home': './src/containers/Home/Home.js',
    'cart': './src/containers/Cart/Cart.js',
    'payment': './src/containers/Payment/Payment.js'
  }
};