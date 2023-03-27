import React from "react";
import {FaRegComment, FaRetweet} from "react-icons/fa";
import {BsHeart, BsFillHeartFill} from "react-icons/bs";
import {RiShareBoxFill} from "react-icons/ri";

const TuitStats = (
    {tuit}
) => {
  return (
      <div className="row mt-2">
        <div className="col col-3">
          <FaRegComment />
          <span className="ms-2">{tuit.replies}</span>
        </div>
        <div className="col col-3">
          <FaRetweet />
          <span className="ms-2">{tuit.retuits}</span>
        </div>
        <div className="col col-3">
          {tuit.liked ? <span style={{color: "red"}}><BsFillHeartFill/></span> : <BsHeart/>}
          <span className="ms-2">{tuit.likes}</span>
        </div>
        <div className="col col-3">
          <RiShareBoxFill />
        </div>
      </div>
  );
};

export default TuitStats;