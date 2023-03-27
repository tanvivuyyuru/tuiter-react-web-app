import React from "react";
import {useSelector} from "react-redux";
import EditProfile from "./edit-profile";

const EditProfileComponent = () => {
  const profileData = useSelector((state) => state.profile);
  return(
      <>
        {
          profileData.map(profile =>
              <EditProfile
                  key={profile._id}
                  profile={profile}/>
          )
        }
      </>
  );
};

export default EditProfileComponent;