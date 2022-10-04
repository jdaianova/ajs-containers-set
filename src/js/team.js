export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    const isMember = [...this.members].find((member) => member.name === char.name);
    if (isMember) {
      throw new Error('this member is already part of the team');
    } else {
      this.members.add(char);
    }
  }

  addAll(...chars) {
    for (let i = 0; i < chars.length; i += 1) {
      try {
        this.add(chars[i]);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
