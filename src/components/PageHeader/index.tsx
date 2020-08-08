import React from "react";
import { View, Image, Text } from "react-native";
import style from "./style";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  function handlerGoBack() {
    navigate("Landing");
  }

  return (
    <View style={style.container}>
      <View style={style.topBar}>
        <BorderlessButton onPress={handlerGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} />
      </View>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default PageHeader;
