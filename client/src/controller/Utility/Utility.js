export default class Utility {
  static structureGroupsByProperty(array, property) {
    let structuredObj = [];
    array.map((obj, index) => {
      let value = obj[property];
      if(!(value in structuredObj)) {
        structuredObj[value] = [];
      }
      structuredObj[value].push(obj);
      return obj;
    });
    return structuredObj;
  }

  static createPropertyGroups(propObj, array, property) {
    for (let p in propObj) {
      for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let value = element[property];
        if (value === p) {
          propObj[p].push(element);
        }
      }
    }
    return propObj;
  }
}
