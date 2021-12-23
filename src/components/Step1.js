import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import SelectItem from "./SelectItem";
import axios from "axios";

export default function Step1(props) {
  const [chapters, setChapters] = useState([]);
  const chemistry = chapters.filter((a) => a.subject_id === 1);
  const physics = chapters.filter((a) => a.subject_id === 2);
  const maths = chapters.filter((a) => a.subject_id === 3);
  const bio = chapters.filter((a) => a.subject_id === 4);
  const { selectedChapter, setSelectedChapter } = props;
  const selectAll = (array) => {
    setSelectedChapter((old) => [...new Set([...old, ...array])]);
  };

  useEffect(() => {
    fetchChapters();
  }, []);
  const fetchChapters = async () => {
    const response = await axios.get(
      `http://192.168.40.141:8000/api/v1/admin/fetchData?target=chapter`
    );
    setChapters(response.data);
    return () => {
      setChapters([]);
    };
  };
  const selectChapter = (id) => {
    if (selectedChapter.includes(id)) {
      setSelectedChapter(selectedChapter.filter((item) => item !== id));
    } else {
      setSelectedChapter((oldArray) => [...oldArray, id]);
    }
  };
  function findCommonElement(arr1, arr2) {
    return arr1.every((item) => arr2.includes(item));
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 131 }}>
          <SelectItem
            title={"Chemistry"}
            value={1}
            source={require("../assets/chemistry.png")}
            style={styles.menuItem}
            onPress={selectChapter}
            selectedChapter={selectedChapter}
            subHeading={`${
              selectedChapter.filter((a) => a.subject_id === 1).length
            } selected`}
            listItems={chemistry}
            selectAll={selectAll}
            checkAllSelected={findCommonElement(chemistry, selectedChapter)}
          />

          <SelectItem
            title={"Physics"}
            value={2}
            source={require("../assets/physics.png")}
            style={styles.menuItem}
            onPress={selectChapter}
            selectedChapter={selectedChapter}
            subHeading={`${
              selectedChapter.filter((a) => a.subject_id === 2).length
            } selected`}
            listItems={physics}
            selectAll={selectAll}
            checkAllSelected={findCommonElement(physics, selectedChapter)}
          />
          <SelectItem
            title={"Maths"}
            value={3}
            source={require("../assets/maths.png")}
            style={styles.menuItem}
            onPress={selectChapter}
            selectedChapter={selectedChapter}
            subHeading={`${
              selectedChapter.filter((a) => a.subject_id === 3).length
            } selected`}
            listItems={maths}
            selectAll={selectAll}
            checkAllSelected={findCommonElement(maths, selectedChapter)}
          />
          <SelectItem
            title={"Biology"}
            value={4}
            source={require("../assets/biology.png")}
            style={styles.menuItem}
            onPress={selectChapter}
            selectedChapter={selectedChapter}
            subHeading={`${
              selectedChapter.filter((a) => a.subject_id === 4).length
            } selected`}
            listItems={bio}
            selectAll={selectAll}
            checkAllSelected={findCommonElement(bio, selectedChapter)}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  content: {
    width: "100%",
  },
});
