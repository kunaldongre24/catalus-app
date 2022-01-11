import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SelectItem from "./SelectItem";

export default function Step1(props) {
  const { selectedChapter, setSelectedChapter, chapters } = props;
  const chemistry = chapters.filter((a) => a.subject_id === 1);
  const physics = chapters.filter((a) => a.subject_id === 2);
  const maths = chapters.filter((a) => a.subject_id === 3);
  const bio = chapters.filter((a) => a.subject_id === 4);
  const selectAll = (array) => {
    setSelectedChapter((old) => [...new Set([...old, ...array])]);
  };

  const selectChapter = (element) => {
    if (selectedChapter.filter((e) => e.id === element.id).length > 0) {
      setSelectedChapter(
        selectedChapter.filter((item) => item.id !== element.id)
      );
    } else {
      setSelectedChapter((oldArray) => [...oldArray, element]);
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
            subHeading={`${chemistry.length} chapters`}
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
            subHeading={`${physics.length} chapters`}
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
            subHeading={`${maths.length} chapters`}
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
            subHeading={`${bio.length} chapters`}
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
