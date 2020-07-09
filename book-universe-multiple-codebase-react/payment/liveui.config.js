module.exports = {
    hotReloadContext: 'src',
    devPort: 5000,
    microPort: 5001,
    exposes: {
        'payment': './src/Payment.js'
    },
    shared: [
        "react",
        "react-dom",
        "react-router-dom",
        'react-redux',
        'bookReducer'
    ],
}