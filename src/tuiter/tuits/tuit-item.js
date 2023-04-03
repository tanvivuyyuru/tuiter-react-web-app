import React from "react";
import {BsCheckCircleFill} from "react-icons/bs";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {tuit}
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return(

      <li className="list-group-item pb-3 pt-3 border border-secondary bg-white border-n">

        <div className="row">
          <div className="ms-2 col-2 col-xxl-1 col-xl-2 col-lg-2 col-md-2 col-sm-2 me-3">
            <img alt="" className="rounded-circle" height={50} src={`/images/${tuit.image}`}></img>
          </div>
          <div className="col-9 col-xxl-10 col-xl-9 col-lg-9 col-md-9 col-sm-9">
            <span className="fw-bolder me-1" style={{color:'black'}}>{tuit.userName}</span>
            <span style={{color:"#61dafb"}}><BsCheckCircleFill /></span>
            <span className="ms-1">@{tuit.handle}</span>
            <span> · {tuit.time}</span>
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tuit._id)}></i>
            <div>{tuit.tuit}</div>
            <TuitStats
                key={tuit._id}
                tuit={tuit}/>
          </div>
        </div>
      </li>
  );
};

export default TuitItem;