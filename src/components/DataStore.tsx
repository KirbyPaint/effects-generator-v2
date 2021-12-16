import React from "react";
import { atom } from "recoil";

// testing Recoil now I guess

export const textState = atom({
  key: "textState",
  default: "default text",
});

export const titleState = atom({
  key: "titleState",
  default: "default title",
});

export const popupState = atom({
  key: "popupState",
  default: false,
});

export const randomEffectState = atom({
  key: "randomEffectState",
  default: 0,
});

export const effectsListState = atom({
  key: "effectsListState",
  default: [] as string[][],
});

export const colorState = atom({
  key: "colorState",
  default: "white",
});

export class DataStore extends React.Component {
  constructor(props: Record<string, unknown>) {
    super(props),
      (this.state = {
        ...props,
      });
  }

  render(): React.ReactNode {
    return <div>{/* {titleDetails} / {textDetails} */}</div>;
  }
}
