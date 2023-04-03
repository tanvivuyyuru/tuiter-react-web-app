import React from "react";
import {FaRegComment, FaRetweet} from "react-icons/fa";
import {RiShareBoxFill} from "react-icons/ri";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {tuit}
) => {
    const dispatch = useDispatch();
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

            <div className="text-secondary float-start col col-3">
                <a href="#" className="text-decoration-none">
                    {tuit.liked && <i className="bi bi-heart-fill text-secondary text-danger" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        liked: !tuit.liked,
                        likes: tuit.likes - 1
                    }))}></i>}
                    {!tuit.liked && <i className="bi bi-heart text-secondary" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        liked: !tuit.liked,
                        likes: tuit.likes + 1
                    }))}></i>}
                </a>&nbsp;&nbsp;{tuit.likes}
            </div>
            <div className="text-secondary float-start col col-3">
                <a href="#" className="text-decoration-none">
                    {tuit.disliked && <i className="bi bi-hand-thumbs-down-fill text-secondary text-danger" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        disliked: !tuit.disliked,
                        dislikes: tuit.dislikes - 1
                    }))}></i>}
                    {!tuit.disliked && <i className="bi bi-hand-thumbs-down text-secondary" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        disliked: !tuit.disliked,
                        dislikes: tuit.dislikes + 1
                    }))}></i>}
                </a>&nbsp;&nbsp;{tuit.dislikes}
            </div>
            <div className="col col-3">
                <RiShareBoxFill />
            </div>
        </div>
    );
};

export default TuitStats;