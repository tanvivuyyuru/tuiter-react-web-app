import React from "react";
import {useDispatch} from "react-redux";
import "./index.css"
import {Link} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";
import {updateProfile} from "../reducers/profile-reducer";
import {useState} from "react";

const EditProfile = (
    {profile}
) => {
  const [userProfile, setProfile] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    bio: profile.bio,
    location: profile.location,
    website: profile.website,
    dateOfBirth: profile.dateOfBirth
  })
  const dispatch = useDispatch();
  const saveProfileClickHandler = () => {
    dispatch(updateProfile(userProfile))
  }
  const nameChangeHandler = (event) => {
    const nameValue = event.target.value;
    const nameArray = nameValue.split(" ");
    const newName = {
      ...userProfile,
      firstName: nameArray.slice(0, -1).join(" "),
      lastName: nameArray.slice(-1).toString()
    };
    setProfile(newName);
  }
  const bioChangeHandler = (event) => {
    const bioValue = event.target.value;
    const newBio = {
      ...userProfile,
      bio: bioValue
    };
    setProfile(newBio);
  }
  const locationChangeHandler = (event) => {
    const locationValue = event.target.value;
    const newLocation = {
      ...userProfile,
      location: locationValue
    };
    setProfile(newLocation);
  }
  const websiteChangeHandler = (event) => {
    const websiteValue = event.target.value;
    const newWebsite = {
      ...userProfile,
      location: websiteValue
    };
    setProfile(newWebsite);
  }
  const dateOfBirthChangeHandler = (event) => {
    const dateOfBirthValue = event.target.value;
    const newDateOfBirth = {
      ...userProfile,
      dateOfBirth: dateOfBirthValue
    };
    setProfile(newDateOfBirth);
  }
  return(
      <div>
        <div className="row ms-2">
          <div className="col-1">
            <Link to="../profile" className="wd-text-link">
              X
            </Link>
          </div>
          <div className="col-9">
            <h5 className="fw-bold mb-2">Edit Profile</h5>
          </div>
          <div className="col-2 mb-2">
            <Link to="../profile" onClick={saveProfileClickHandler}
                  className="btn btn-primary btn-block rounded-pill float-end">
              Save
            </Link>
          </div>
        </div>
        <div className="position-relative">
          <div>
            <img alt="" width="100%" height="200" src={`/images/${profile.bannerPicture}`}/>
          </div>
          <div>
            <img alt="" className="wd-profile-picture-pos rounded-circle ms-3" width="100px" height="100px"
                 src={`${profile.profilePicture}`}/>
          </div>
        </div>
        <div className="row wd-main-profile-pos ms-3 me-3">
          <label>Name
            <input className="form-control border-0"
                   onChange={nameChangeHandler}
                   defaultValue={profile.firstName + " " + profile.lastName}
            />
          </label>
          <label className="mt-4">Bio
            <input className="form-control border-0"
                   onChange={bioChangeHandler}
                   defaultValue={profile.bio}
            />
          </label>
          <label className="mt-4">Location
            <input className="form-control border-0"
                   onChange={locationChangeHandler}
                   defaultValue={profile.location}
            />
          </label>
          <label className="mt-4">Website
            <input className="form-control border-0"
                   onChange={websiteChangeHandler}
                   defaultValue={profile.website}
            />
          </label>
          <label className="mt-4">Birth Date
            <input className="form-control border-0"
                   onChange={dateOfBirthChangeHandler}
                   defaultValue={profile.dateOfBirth}
            />
          </label>
          <div className="row p-0 mt-4 ms-3">
            <div className="col-11 p-0">Switch to professional</div>
            <div className="col-1 p-0">
              <div className="me-3 float-end">
                <IoIosArrowForward/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EditProfile;