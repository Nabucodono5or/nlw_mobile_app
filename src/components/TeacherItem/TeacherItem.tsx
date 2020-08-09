import React from "react";
import { View, Image, Text, ImagePropTypes } from "react-native";

import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import hearOutlineIcon from "../../assets/images/icons/heart-outline.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import style from "./style";
import styles from "../../pages/Landing/styles";
import { RectButton } from "react-native-gesture-handler";

function TeacherItem() {
  return (
    <View style={style.container}>
      <View style={style.profile}>
        <Image
          source={{
            uri:
              "https://avatars3.githubusercontent.com/u/12628751?s=400&u=32d834a83ea49941b5721ea74df36b5fa3adb051&v=4",
          }}
          style={style.avatar}
        />

        <View style={style.profileInfo}>
          <Text style={style.name}>Jefferson Abreu</Text>
          <Text style={style.subject}>Química</Text>
        </View>
      </View>
      <Text style={style.bio}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nulla
        quos vitae necessitatibus, quibusdam accusamus itaque debitis facilis
        sequi officia aperiam, veniam cum blanditiis aliquam ut nostrum dolores.
        Porro, mollitia.
      </Text>

      <View style={style.footer}>
        <Text style={style.price}>
          Preço/Hora {'  '}<Text style={style.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={style.buttonsContainer}>
          <RectButton style={style.favoriteButton}>
            <Image source={hearOutlineIcon}></Image>
          </RectButton>

          <RectButton style={style.contactButton}>
            <Image source={whatsappIcon}></Image>
            <Text style={style.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
