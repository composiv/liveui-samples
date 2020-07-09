module.exports = {
  shared: ['react', 'react-native'],
  exposes: {
    login: './src/LoginScreen.js',
  },
  hotReloadContext: 'src',
  microPort: 5001,
};
