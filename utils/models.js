import { AsyncStorage } from "react-native";

const _createCategory = async categoryObj => {
  console.log(categoryObj)
  await AsyncStorage.setItem(
    JSON.stringify(categoryObj.name),
    JSON.stringify(categoryObj.config),
    () => {
      AsyncStorage.getAllKeys((err, result) => {
        console.log(result);
      });
    }
  );
};

export default _createCategory;
