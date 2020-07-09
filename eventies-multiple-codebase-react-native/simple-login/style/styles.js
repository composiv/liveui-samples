const React = require('react-native');

const {StyleSheet} = React;

export default {
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#5257f2',
  },
  logoText: {
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    marginTop: 30,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#5257f2',
  },
  loginButton: {
    borderRadius: 5,
  },

  readyText: {
    color: 'white',
    paddingTop: 70,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  signText: {
    color: 'white',
    paddingTop: 40,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};
