import { createSlice } from "@reduxjs/toolkit";

const initialProfile = [
  {
    _id: "123",
    firstName: "Jose",
    lastName: "Annunziato",
    tweets: 1000,
    handle: "jannunzi",
    profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    bannerPicture: "https://e7.pngegg.com/pngimages/268/570/png-clipart-web-development-responsive-web-design-web-application-software-development-product-web-design-search-engine-optimization.png",
    bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast Retuits and likes are not endorsements.\n",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    dateOfBirth: "7/7/1968",
    dateJoined: "4/2009",
    followingCount: 340,
    followersCount: 223
  }
];

const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfile,
  reducers: {
    updateProfile(state, action) {
      const userprofile = state.find(
          () =>
              action.payload != null
      )
      console.log(action.payload.firstName)
      console.log(action.payload.lastName)
      if (action.payload.firstName != null) {
        userprofile.firstName = action.payload.firstName
        userprofile.lastName = action.payload.lastName
        userprofile.handle = action.payload.firstName.replaceAll(" ", "").toLowerCase()
            + action.payload.lastName.toLowerCase()
      }
      if (action.payload.bio != null) {
        userprofile.bio = action.payload.bio
      }
      if (action.payload.location != null) {
        userprofile.location = action.payload.location
      }
      if (action.payload.website != null) {
        userprofile.website = action.payload.website
      }
      if (action.payload.dateOfBirth != null) {
        userprofile.dateOfBirth = action.payload.dateOfBirth
      }
    }
  }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;