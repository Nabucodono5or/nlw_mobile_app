import React from "react";
import { View, ScrollView } from "react-native";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem/TeacherItem";
import style from "./style";

function Favorites() {
  return (
    <View style={style.container}>
      <PageHeader title="Meus Proffys favoritos" />
      <ScrollView
        style={style.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default Favorites;
