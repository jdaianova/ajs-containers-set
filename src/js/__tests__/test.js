import Team from '../team';

const player1 = {
  name: 'ivan',
  type: 'magican',
  health: 100,
  level: 5,
  attack: undefined,
  defence: undefined,
};
const player2 = {
  name: 'petr',
  type: 'magican',
  health: 100,
  level: 10,
  attack: undefined,
  defence: undefined,
};
const player3 = {
  name: 'tank',
  type: 'magican',
  health: 100,
  level: 100,
  attack: undefined,
  defence: undefined,
};

test.each([
  [player1, new Set([player1])],
  [player2, new Set([player2])],
])('add one character', (char, expected) => {
  const result = new Team();
  result.add(char);
  expect(result.members).toEqual(expected);
});

test.each([
  [player1, player2, player3, new Set([player1, player2, player3])],
  [player1, player2, player2, new Set([player1, player2])],
])('add some characters', (char1, char2, char3, expected) => {
  const result = new Team();
  result.addAll(char1, char2, char3);
  expect(result.members).toEqual(expected);
});

test.each([
  [player1, player2, player3, [player1, player2, player3]],
  [player1, player2, player2, [player1, player2]],
])('convert to array', (char1, char2, char3, expected) => {
  const result = new Team();
  result.addAll(char1, char2, char3);
  expect(result.toArray()).toEqual(expected);
});
