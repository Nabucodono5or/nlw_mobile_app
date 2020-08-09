import React from "react";
import { View } from "react-native";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem/TeacherItem";
import { ScrollView } from "react-native-gesture-handler";
import style from "./style";

function TeacherList() {
  return (
    <View style={style.container}>
      <PageHeader title="Proffys disponíveis" />
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

export default TeacherList;
