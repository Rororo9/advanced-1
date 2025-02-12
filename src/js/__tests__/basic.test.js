import orderByProps from '../app.js';

test('sorting', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };

  // ["name", "level"] - порядок сортировки свойств
  // orderByProps(obj, ["name", "level"]) - пример вызова функции
  expect(orderByProps(obj, ['name', 'level'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});
