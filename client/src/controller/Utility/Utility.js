export default class Utility {
  static structureGroupsByProperty(array, property) {
    let structuredArray = [];
    array.map((obj, index) => {
      let value = obj[property];
      if(!(value in structuredArray)) {
        structuredArray[value] = [];
      }
      structuredArray[value].push(obj);
      return obj;
    });
    return structuredArray;
  }
}
