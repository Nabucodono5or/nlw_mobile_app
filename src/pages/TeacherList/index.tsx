import React, { useState } from "react";
import { View, Text } from "react-native";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem/TeacherItem";
import {
  ScrollView,
  TextInput,
  BorderlessButton,
  RectButton,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";
import style from "./style";

function TeacherList() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFilterVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          }
        );
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function handlerToggleFiltersVisible() {
    setIsFilterVisible(!isFiltersVisible);
  }

  async function handlerFiltersSubmit() {
    loadFavorites();

    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setIsFilterVisible(false);
    setTeachers(response.data);
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
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={style.inputGroup}>
              <View style={style.inputBlock}>
                <Text style={style.label}>Dia da Semana</Text>
                <TextInput
                  style={style.input}
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  placeholder="Qual dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={style.inputBlock}>
                <Text style={style.label}>Horário</Text>
                <TextInput
                  style={style.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Qual hora?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton
              onPress={handlerFiltersSubmit}
              style={style.buttonSubmit}
            >
              <Text style={style.buttonSubmitText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={style.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
