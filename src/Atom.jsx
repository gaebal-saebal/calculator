import { atom } from "recoil";

export const calcState = atom({
  key: "calcState",
  default: "",
});

export const firstNumState = atom({
  key: "firstNumState",
  default: "",
});

export const secondNumState = atom({
  key: "SecondNumState",
  default: "",
});

export const resultDisplay = atom({
  key: "resultDisplay",
  default: "",
});
