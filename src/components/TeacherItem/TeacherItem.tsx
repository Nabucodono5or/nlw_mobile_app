import React, { useState } from "react";
import { View, Image, Text, ImagePropTypes, Linking } from "react-native";

import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import hearOutlineIcon from "../../assets/images/icons/heart-outline.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";

import style from "./style";
import api from "../../services/api";

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatsapp() {
    api.post("connections", {
      user_id: teacher.id,
    });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  return (
    <View style={style.container}>
      <View style={style.profile}>
        <Image source={{ uri: teacher.avatar }} style={style.avatar} />

        <View style={style.profileInfo}>
          <Text style={style.name}>{teacher.name}</Text>
          <Text style={style.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={style.bio}>{teacher.bio}</Text>

      <View style={style.footer}>
        <Text style={style.price}>
          Preço/Hora {"  "}
          <Text style={style.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={style.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[style.favoriteButton, isFavorited ? style.favorited : {}]}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon}></Image>
            ) : (
              <Image source={hearOutlineIcon}></Image>
            )}
          </RectButton>

          <RectButton
            onPress={handleLinkToWhatsapp}
            style={style.contactButton}
          >
            <Image source={whatsappIcon}></Image>
            <Text style={style.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
