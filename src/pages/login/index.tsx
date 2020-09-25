import React, { useRef, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import imageLogo from "../../../assets/moonphotobackyard800x800.jpg";
import { Button } from "../login/components/Button";
import { FormInput } from "../login/components/FormInput";
import styles from "./style/index";

export const LoginAuthor = (): JSX.Element => {
  const [UserName, SetUserName] = useState("");
  const [PassWord, SetPassWord] = useState("");
  const textError = useRef<Text>(null);

  const handleEmailChange = (email: string) => {
    SetUserName(email);
  };

  const handlePassWordChange = (password: string) => {
    SetPassWord(password);
  };

  const handleLoginPress = () => {
    //   textError.current.st
    // console.log("object :>> ", textError.current);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imgRow}>
          <Image source={imageLogo} style={styles.logo} />
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
            <Text ref={textError} style={styles.textError}>
              Email hoặc password không đúng!
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
