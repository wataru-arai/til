import { get } from "http";

type Animal = {
  tag: "animal";
  species: string;
}

type Human = {
  tag: "human";
  name: string;
}

type Robot = {
  tag: "robot";
  name: string;
}

type User = Animal | Human | Robot;

const tama: User = {
  tag: "animal",
  species: "Foo"
}

const uhyo: User = {
  tag: "human",
  name: "uhyo"
}

const alien: User = {
  tag: "alien",
  name: "grey"
}

// if文を使った場合
function getUserName1(user: User):string {
  if (user.tag === "human") {
    return user.name
  } else {
    return "名無し"
  }
}

// switch文を使った場合
function getUserName2(user: User):string {
  switch (user.tag) {
    case "human":
      return user.name
    case "animal":
      return "名無し"
    case "robot":
      return `CPU ${user.name}`
  }

}

console.log(getUserName(tama));
console.log(getUserName(uhyo));