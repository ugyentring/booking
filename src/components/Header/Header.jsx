//icon import
import { MdOutlineDining } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { PiHamburger } from "react-icons/pi";
import { MdOutlineEmojiNature } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    table: 1,
  });

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
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "dd/MM//yyyy")} to ${format(
              date[0].endDate,
              "dd/MM//yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>

          <div className="headerSearchItem">
            <IoPersonOutline className="headerIcon" />
            <span className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.table} table`}</span>
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">1</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">0</span>
                  <button className="optionCounterButton">+</button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Table</span>
                <div className="optionCounter">
                  <button className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton">+</button>
                </div>
              </div>
            </div>
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
