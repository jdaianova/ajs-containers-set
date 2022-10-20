export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
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
        return;
      }
    }
  }

  toArray() {
    return [...this.members];
  }
}
