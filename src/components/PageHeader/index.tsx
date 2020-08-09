import React, { ReactNode } from "react";
import { View, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";
import style from "./style";

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
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

      <View style={style.header}>
        <Text style={style.title}>{title}</Text>
        {headerRight}
      </View>
      {children}
    </View>
  );
};

export default PageHeader;
