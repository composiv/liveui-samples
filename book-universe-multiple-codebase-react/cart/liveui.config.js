module.exports = {
    hotReloadContext: 'src',
    devPort: 5002,
    microPort: 5003,
    exposes: {
        'cart': './src/Cart.js'
    },
    shared: [
        "react",
        "react-dom",
        "react-router-dom",
        'react-redux',
        'bookReducer'
    ],
}