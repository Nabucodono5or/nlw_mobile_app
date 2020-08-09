import React, { useState } from "react";
import { View, Text } from "react-native";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem/TeacherItem";
import {
  ScrollView,
  TextInput,
  BorderlessButton,
  RectButton,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import style from "./style";

function TeacherList() {
  const [isFiltersVisible, setIsFilterVisible] = useState(false);

  function handlerToggleFiltersVisible() {
    setIsFilterVisible(!isFiltersVisible);
  }

  return (
    <View style={style.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handlerToggleFiltersVisible}>
            <Feather name="filter" size={30} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={style.searchForm}>
            <Text style={style.label}>Matéria</Text>
            <TextInput
              style={style.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={style.inputGroup}>
              <View style={style.inputBlock}>
                <Text style={style.label}>Dia da Semana</Text>
                <TextInput
                  style={style.input}
                  placeholder="Qual dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={style.inputBlock}>
                <Text style={style.label}>Horário</Text>
                <TextInput
                  style={style.input}
                  placeholder="Qual hora?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton style={style.buttonSubmit}>
              <Text style={style.buttonSubmitText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
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
