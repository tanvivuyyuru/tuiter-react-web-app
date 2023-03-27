import React from "react";
import {useSelector} from "react-redux";
import Profile from "./profile";

const ProfileComponent = () => {
  const profileData = useSelector((state) => state.profile);
  return(
      <>
        {
          profileData.map(profile =>
              <Profile
                  key={profile._id}
                  profile={profile}/>
          )
        }
      </>
  );
};

export default ProfileComponent;