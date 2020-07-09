module.exports = {
  shares: {
    react: require('react'),
    "react-dom": require('react-dom'),
    "react-redux": require('react-redux'),
    "react-router-dom": require('react-router-dom'),
    'bookReducer': require('./redux/bookReducer'),
  },
  remotes: {
    payment: 'http://localhost:5001/payment',
    cart: 'http://localhost:5003/cart',
    productCard: 'http://localhost:5005/productCard'
  },
};