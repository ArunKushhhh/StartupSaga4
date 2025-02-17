import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main>
      <div className="hidden lg:block">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "white",
          }}
          outerStyle={{
            border: "1px solid white",
          }}
        />
      </div>
      <Outlet />
    </main>
  );
};

export default App;
