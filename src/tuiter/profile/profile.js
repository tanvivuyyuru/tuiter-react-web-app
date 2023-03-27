import React from "react";
import {BiArrowBack, BiMap} from "react-icons/bi";
import "./index.css"
import {MdDateRange} from "react-icons/md";
import {FaBirthdayCake} from "react-icons/fa";
import {Link} from "react-router-dom";

const Profile = (
    {profile}
) => {
  return(
      <div>
        <div className="row ms-2">
          <div className="col-1"><BiArrowBack/></div>
          <div className="col-11">
            <h5 className="fw-bold mb-0">{profile.firstName} {profile.lastName}</h5>
            {profile.tweets} Tweets
          </div>
        </div>
        <div className="position-relative">
          <img alt="" width="100%" height="200" src={`${profile.bannerPicture}`}/>
          <div className="mt-2">
            <Link to="../edit-profile" className="btn btn-primary btn-block rounded-pill float-end">
              Edit Profile
            </Link>
          </div>
          <img alt="" className="wd-profile-picture-pos rounded-circle ms-3" width="100px" height="100px"
               src={`${profile.profilePicture}`}/>
        </div>
        <div className="wd-main-profile-pos ms-3">
          <h5 className="fw-bold mb-0">{profile.firstName} {profile.lastName}</h5>
          @{profile.handle}
          <h6 className="mt-2">{profile.bio}</h6>
          <div>
            <span className="me-3"><BiMap/> {profile.location}</span>
            <span className="me-3"><FaBirthdayCake/> Born {profile.dateOfBirth}</span>
            <span className="me-3"><MdDateRange/> Joined {profile.dateJoined}</span>
          </div>
          <div className="mt-2">
            <span className="fw-bold">{profile.followingCount}</span>
            <span className="me-3"> Following</span>
            <span className="fw-bold">{profile.followersCount}</span>
            <span className="me-3"> Followers</span>
          </div>
        </div>
      </div>
  );
};

export default Profile;