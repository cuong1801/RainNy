import React from "react";

export const HeaderForm = ({ scene, previous, navigation }): JSX.Element => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  const goBack = () => {
    console.log("object :>> ");
  };
  return (
    // <Header>
    //   <Right>
    //     <Button transparent>
    //       <Icon name="more" />
    //     </Button>
    //   </Right>
    // </Header>
    <MyHeader
      title={title}
      leftButton={
        previous ? <MyBackButton onPress={navigation.goBack} /> : undefined
      }
      style={options.headerStyle}
    />
  );
};
