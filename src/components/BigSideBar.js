import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const BigSideBar = () => {
  const { isSideBarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div
        className={
          isSideBarOpen
            ? "sidebar-container "
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
