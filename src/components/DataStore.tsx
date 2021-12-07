import React from "react";
import { atom, useRecoilState } from "recoil";

// testing Recoil now I guess

export const textState = atom({
  key: "textState",
  default: "default text",
});

export const titleState = atom({
  key: "titleState",
  default: "default title",
});

// const [titleDetails, setTitleDetails] = useRecoilState(titleState);
// const [textDetails, setTextDetails] = useRecoilState(textState);
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
