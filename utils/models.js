import { AsyncStorage } from "react-native";
import { NativeModulesProxy } from "@unimodules/core";

const _createCategory = async categoryObj => {
  await AsyncStorage.setItem(
    JSON.stringify(categoryObj.name),
    JSON.stringify(categoryObj.config),
    () => {
      AsyncStorage.getAllKeys((err, result) => {
        // console.log(result);
      });
    }
  );
};

const _getAllCategories = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);
    console.log(items)
    return items;
  } catch (error) {
    console.error(error);
  }
};

const _getOne = async (category) => {
  try {
    let item = await AsyncStorage.getItem(category);
    return item;
  }
  catch (error) {
    console.error(error)
  }
}

_deleteAll = async () => {
  await AsyncStorage.clear()
}

_update = async (item) => {
  console.log(item)
} 

module.exports ={
  _getAllCategories,
  _createCategory,
  _deleteAll,
  _update,
  _getOne
}

// AsyncStorage.getAllKeys.then((keys) => {
//   return AsyncStorage.multiGet(keys)
//     .then((result) => {
//       result.map(req => JSON.parse(req)).forEach(console.log);
//     });
// });