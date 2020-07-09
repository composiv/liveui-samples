module.exports = {
    hotReloadContext: 'src',
    devPort: 5004,
    microPort: 5005,
    exposes: {
        'productCard': './src/ProductCard.js'
    },
    shared: [
        "react",
        "react-dom",
        "react-router-dom",
        'react-redux',
        'bookReducer'
    ],
}