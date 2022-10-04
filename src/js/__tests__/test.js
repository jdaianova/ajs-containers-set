import Team from '../team';

test.each([
  [
    {
      name: 'tim',
      type: 'magican',
      health: 100,
      level: 1,
      attack: undefined,
      defence: undefined
    },
    Team {
      +   "members": Set {
            Object {
              "attack": undefined,
              "defence": undefined,
              "health": 100,
              "level": 1,
              "name": "tim",
              "type": "magican",
      +     },
      +   },
        }
  ],[],
])('add one character', (char, expected) => {
  const result = new Team();
  result.add(char);
  expect(result).toEqual(expected);
});
