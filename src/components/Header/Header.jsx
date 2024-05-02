//icon import
import { MdOutlineDining } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { PiHamburger } from "react-icons/pi";
import { MdOutlineEmojiNature } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";


import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <MdOutlineDining />
            <span>Tables</span>
          </div>

          <div className="headerListItem">
            <IoBedOutline />
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <PiHamburger />
            <span>Food Orders</span>
          </div>

          <div className="headerListItem">
            <MdOutlineEmojiNature />
            <span>Attractions</span>
          </div>
        </div>

        {/*title*/}
        <h1 className="headerTitle">
          Reserve your spot at the finest eateries
        </h1>
        <p className="headerDesc">
          TableTime: Your go-to destination for effortless restaurant table
          bookings. Discover, reserve, and indulge in culinary delights
          hassle-free!
        </p>
        <button className="headerBtn">Sign In / Register</button>
        {/* search button */}
        <div className="headerSearch">
          <div className="headerSearchItem">
            <MdOutlineDining className="headerIcon" />
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearchItem">
            <CiCalendarDate className="headerIcon" />
            <span className="headerSearchText">date</span>
          </div>

          <div className="headerSearchItem">
            <IoPersonOutline className="headerIcon" />
            <span className="headerSearchText">2 adults, 2 children</span>
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
