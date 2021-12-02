// Private and Public fields
class Chatter {
  private nickname;

  constructor(name: string = 'User') {
    this.nickname = name;
  }

  public getNickName(): string {
    return this.nickname;
  }
}

const chatter: Chatter = new Chatter('Galya');
// console.log(chatter.nickname); // Property 'nickname' is private and only accessible within class 'Chatter'
// console.log(Chatter.nickname); // Property 'nickname' is private and only accessible within class 'Chatter'
console.log(chatter.getNickName()); // Property 'nickname' is private and only accessible within class 'Chatter'