function valuePresent(array, value) {
  for (let i = 0; i < array.length; i++) {
    const properties = Object.values(array[i]);
    if(properties.includes(value)) {
      return i;
    }
  }
  return false;
}

export {valuePresent};