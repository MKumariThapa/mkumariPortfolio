import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Introduction from "./components/Introduction";
import Works from "./components/Works";
import Education from "./components/Education";

const anchors = ["", "", ""];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    // sectionsColor={["#7fff00","#00ffff","#29ab87" ]}
    sectionsColor={["#fff","#fff","#fff" ]}

    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          
          <Introduction/>
          <Works/>
          <Education/>
          {/* <Introduction/> */}

        </div>
      );
    }}
  />
);
export default App;