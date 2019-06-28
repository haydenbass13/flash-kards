import { AsyncStorage } from "react-native";

_createCategory = async () => {
  try {
    await AsyncStorage.setItem(
      `${category.name}`,
      JSON.stringify(category.config)
    );
  } catch (error) {
    //error message?
  }
};

export default { _createCategory };
