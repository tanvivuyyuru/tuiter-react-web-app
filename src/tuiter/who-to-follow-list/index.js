import React from "react";
// import whoArray from './who.json';
import {useSelector} from "react-redux";
// use selector hook, to write func, so that when in main page
// hook will check provider data auto, grab into selector to match
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
  // create a data set by useselector, take state arrow to state.target
  return(
      <ul className="list-group">
        <li className="list-group-item">
          <h3>Who to follow</h3>
        </li>
        {
          whoArray.map(who =>
              <WhoToFollowListItem
                  key={who._id}
                  who={who}/>
          )
        }
      </ul>
  );
};
export default WhoToFollowList;