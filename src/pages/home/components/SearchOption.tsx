import { Form, Icon, Input, Item, View } from "native-base";
import React from "react";

export const SearchOption = (): JSX.Element => {
  return (
    <View padder>
      <Form>
        <Item style={{ backgroundColor: "white" }} rounded>
          <Icon active name="search" />
          <Input
            style={{ fontSize: 15 }}
            placeholder="Nhập vào tên tỉnh hoặc tên thành phố..."
          />
        </Item>
      </Form>
    </View>
  );
};
