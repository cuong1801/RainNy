import { Badge, Col, Content, Grid, Text, Thumbnail, View } from "native-base";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { DetailProps } from "../../navigator";
import { fieldOption } from "../../share/interfaces/fieldOption";
import styles from "./style/detail";
const cover = require("../../../assets/rainyAround.png");
export const DetailCity = (props: DetailProps): JSX.Element => {
  const { districtName, detail } = props.route.params;

  useLayoutEffect(() => {
    props.navigation.setOptions({ headerTitle: districtName });
  }, []);
  return (
    <SafeAreaView style={styles.detail}>
      <ScrollView>
        <Content style={{ top: 30 }}>
          <Grid>
            <Col
              style={{
                alignItems: "center",
                marginBottom: 20,
                height: 100,
              }}
            >
              <Thumbnail large source={cover} />
            </Col>
            <Col style={{ height: 100 }}>
              <Text
                style={{ fontSize: 40, alignSelf: "center", color: "white" }}
              >
                {detail.rainyAround}
                <Text style={{ color: "white" }}>(mm)</Text>
              </Text>
              <Badge style={{ alignSelf: "center" }}>
                <Text>{fieldOption[detail.status].vni}</Text>
              </Badge>
            </Col>
          </Grid>
          <Grid style={{ margin: 10 }}>
            <Col style={{ width: 100 }}>
              <Text style={{ color: "white" }}>Phường/Xã:</Text>
            </Col>
            <Col>
              <View style={styles.container}>
                <Text style={[styles.paragraph, { marginBottom: 0 }]}>
                  Yen phu
                </Text>
              </View>
            </Col>
          </Grid>
          <Grid style={{ margin: 10 }}>
            <Col style={{ width: 100 }}>
              <Text style={{ color: "white" }}>Khu vực:</Text>
            </Col>
            <Col>
              <View style={styles.container}>
                <Text style={[styles.paragraph, { marginBottom: 0 }]}>
                  {detail.area}
                </Text>
              </View>
            </Col>
          </Grid>
          <Grid style={{ margin: 10 }}>
            <Col style={{ width: 100 }}>
              <Text style={{ color: "white" }}>Quận/Huyện:</Text>
            </Col>
            <Col>
              <View style={styles.container}>
                <Text style={[styles.paragraph, { marginBottom: 20 }]}>
                  Hải châu
                </Text>
              </View>
            </Col>
          </Grid>
        </Content>
      </ScrollView>
    </SafeAreaView>
  );
};
