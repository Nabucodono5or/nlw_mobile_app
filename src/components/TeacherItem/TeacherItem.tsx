import React from "react";
import { View, Image, Text, ImagePropTypes } from "react-native";

import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import hearOutlineIcon from "../../assets/images/icons/heart-outline.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import style from "./style";
import { RectButton } from "react-native-gesture-handler";

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
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
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
          <RectButton style={[style.favoriteButton, style.favorited]}>
            {/* <Image source={hearOutlineIcon}></Image> */}
            <Image source={unfavoriteIcon}></Image>
          </RectButton>

          <RectButton style={style.contactButton}>
            <Image source={whatsappIcon}></Image>
            <Text style={style.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
