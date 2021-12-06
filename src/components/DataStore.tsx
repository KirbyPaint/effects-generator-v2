import React from "react";

export class DataStore extends React.Component {
  constructor(props: Record<string, unknown>) {
    super(props),
      (this.state = {
        ...props,
      });
  }

  render(): React.ReactNode {
    return <div>testing {this.state}</div>;
  }
}
