import firebase from "firebase";
import React, { Fragment, useLayoutEffect, useRef, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { LoginProps } from "../../navigator";
import { Button } from "../login/components/Button";
import { FormInput } from "../login/components/FormInput";
import styles from "./style/index";
const imageLogin = require("../../../assets/rainyAround.png");

export const LoginAuthor = (props: LoginProps): JSX.Element => {
  const [UserName, SetUserName] = useState("");
  const [PassWord, SetPassWord] = useState("");
  const [errorMessenger, SetError] = useState("");

  const textError = useRef<Text>(null);

  const handleEmailChange = (email: string) => {
    SetUserName(email);
  };

  const handlePassWordChange = (password: string) => {
    SetPassWord(password);
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      header: () => {
        return <Fragment />;
      },
    });
  }, []);

  const handleLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(UserName, PassWord)
      .then((user) => {
        props.navigation.navigate("Home");
      })
      .catch((error) => SetError(error.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imgRow}>
          <Image source={imageLogin} style={styles.logo} />
        </View>
        <View style={styles.inputRow}>
          <View style={styles.inputColumn}>
            <FormInput
              value={UserName}
              onChangeText={handleEmailChange}
              placeholder={"Email"}
            />
          </View>
          <View style={styles.inputColumn}>
            <FormInput
              secureTextEntry={true}
              value={PassWord}
              onChangeText={handlePassWordChange}
              placeholder={"Password"}
            />
          </View>
          <View style={styles.labelError}>
            <Text style={styles.textError} ref={textError}>
              {errorMessenger}
            </Text>
          </View>
          <View style={styles.forgotPassRow}>
            <Text style={styles.forgotLable}>Quên mật khẩu?</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            width: "80%",
            alignSelf: "center",
          }}
        >
          <Button label="Đăng nhập" onPress={handleLoginPress}></Button>
          <Button label="Đăng kí" onPress={handleLoginPress}></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
