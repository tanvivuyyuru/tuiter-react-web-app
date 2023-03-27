// import React from "react";
// import "./index.css";
// import PostList from "../post-list";
//
// const HomeComponent = () => {
//   return(
//       <PostList/>
//   );
// };
//
// export default HomeComponent;

import React from "react";
import "./index.css";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return(
      <>
        <h4>Home</h4>
        <WhatsHappening/>
        <TuitsList/>
      </>
  );
};

export default HomeComponent;