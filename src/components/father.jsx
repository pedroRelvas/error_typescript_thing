import * as React from "react";
import Son from "./son";

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <>
        <div
          style={
            global.isDivExtended.isDivExtended
              ? {
                  backgroundColor: "#065535",
                  color: "#ffffff",
                  width: 200,
                  height: 100
                }
              : {
                  backgroundColor: "#065535",
                  color: "#ffffff",
                  width: 200,
                  height: 300
                }
          }
        >
          My son:
          <Son />
        </div>
      </>
    );
  }
}

export default Father;
