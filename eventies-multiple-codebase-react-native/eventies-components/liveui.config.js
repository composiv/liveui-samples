module.exports = {
  shared: ['react', 'react-native'],
  exposes: {
    eventbox: './src/EventBox.js',
    eventdetail: './src/EventDetail.js',
  },
  hotReloadContext: 'src',
  microPort: 5002,
};
