/**
 *
 * LoginScreen
 *
 */

import React from 'react';
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import styles from '../style/styles';

function LoginScreen(props) {
  state = {username: ''};

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <Text style={styles.readyText}>You are ready to go</Text>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Sign in</Text>
            <TextInput
              onChangeText={(username) => (this.state.username = username)}
              placeholder="Username"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <View style={{marginLeft: 10, marginRight: 10, marginTop: 30}}>
              <Button
                style={styles.loginButton}
                color="#23e4b7"
                onPress={() => props.onPress(this.state.username)}
                title="Login"
              />
            </View>
          </View>
          <Text style={styles.signText}>Don't have an account? Sign Up</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
