export default function orderByProps(object, array) {
  const object_1 = [];
  const object_2 = [];

  for (const key in object) {
    if (array.includes(key)) {
      object_1.push({ key, value: object[key] });
    } else {
      object_2.push({ key, value: object[key] });
    }
  }

  object_1.sort((a, b) => {
    if (array.indexOf(a.key) > array.indexOf(b.key)) {
      return 1;
    } else {
      return -1;
    }
  });

  object_2.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    } else {
      return -1;
    }
  });

  return [...object_1, ...object_2];
}
