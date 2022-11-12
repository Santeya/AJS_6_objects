import orderByProps from '../sorting';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

const sortingDemand = ['name', 'level'];

const expected = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

test('should sort characters properties by demand', () => expect(orderByProps(obj, sortingDemand)).toEqual(expected));
