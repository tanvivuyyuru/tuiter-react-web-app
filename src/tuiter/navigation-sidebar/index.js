import React from "react";
import {FaHome, FaTwitter, FaHashtag, FaBell, FaBookmark} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import {AiFillGitlab} from "react-icons/ai";
import {IoListSharp} from "react-icons/io5";
import {CgProfile, CgMoreO} from "react-icons/cg";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  return (
      <div>
        <div className="list-group">
          <Link className="list-group-item">
            <FaTwitter />
          </Link>
          <Link to="/tuiter/home" className={`list-group-item list-group-item-action ${active === 'home' || active === '' ?'active':''}`}>
            <FaHome />
            <div className="d-none d-xl-inline ms-1">Home</div>
          </Link>
          <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === 'explore'?'active':''}`}>
            <FaHashtag />
            <div className="d-none d-xl-inline ms-1">Explore</div>
          </Link>
          <Link to="/" className="list-group-item">
            <AiFillGitlab />
            <div className="d-none d-xl-inline ms-1">Labs</div>
          </Link>
          <Link to="/tuiter/notifications" className={`list-group-item list-group-item-action ${active === 'notifications'?'active':''}`}>
            <FaBell />
            <div className="d-none d-xl-inline ms-1">Notifications</div>
          </Link>
          <Link to="/tuiter/messages" className={`list-group-item list-group-item-action ${active === 'messages'?'active':''}`}>
            <HiMail />
            <div className="d-none d-xl-inline ms-1">Messages</div>
          </Link>
          <Link to="/tuiter/bookmarks" className={`list-group-item list-group-item-action ${active === 'bookmarks'?'active':''}`}>
            <FaBookmark />
            <div className="d-none d-xl-inline ms-1">Bookmarks</div>
          </Link>
          <Link to="/tuiter/lists" className={`list-group-item list-group-item-action ${active === 'lists'?'active':''}`}>
            <IoListSharp />
            <div className="d-none d-xl-inline ms-1">Lists</div>
          </Link>
          <Link to="/tuiter/profile" className={`list-group-item list-group-item-action ${active === 'profile' || active === 'edit-profile' ?'active':''}`}>
            <CgProfile />
            <div className="d-none d-xl-inline ms-1">Profile</div>
          </Link>
          <Link to="/tuiter/more" className={`list-group-item list-group-item-action ${active === 'more'?'active':''}`}>
            <CgMoreO />
            <div className="d-none d-xl-inline ms-1">More</div>
          </Link>
        </div>
        <div className="d-grid mt-2">
          <Link className="btn btn-primary btn-block rounded-pill">
            Tweet
          </Link>
        </div>
      </div>
  );
};

export default NavigationSidebar;