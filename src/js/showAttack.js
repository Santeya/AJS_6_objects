export default function showAttacks(character) {
  const result = [];

  for (let i = 0; i < character.special.length; i += 1) {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = character.special[i];
    const attack = {
      id, name, description, icon,
    };
    result.push(attack);
  }

  return result;
}
