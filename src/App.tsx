import * as React from "react";
import "./styles.css";
import Father from "../src/components/father";
import global from "./global";
import extendDiv from "./extendDiv";

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    global.isDivExtended = extendDiv();
    return (
      <>
        <Father></Father>
      </>
    );
  }
}

export default App;
