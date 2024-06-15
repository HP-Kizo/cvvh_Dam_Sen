import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import {
  CloseIcon,
  DamSenPark,
  FBIcon,
  IGIcon,
  Logo,
  MenuIcon,
  YTBIcon,
} from "../../assets/Icon";

interface NavbarProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, onOpenChange }) => {
  return (
    <div className={styles.navbar}>
      <div
        className={styles.menu}
        onClick={() => {
          onOpenChange();
        }}
      >
        {isOpen ? CloseIcon : MenuIcon}
      </div>
      <ul className={styles.navlist}>
        <li className={styles.nav_item}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Trang chủ
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink
            to="/discover"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Khám phá
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink
            to="/introduce"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Giới thiệu
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink
            to="/fare"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Giá vé
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink
            to="/event"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sự kiện
          </NavLink>
        </li>
      </ul>
      <div className={styles.contact}>
        <div className={styles.logo}>
          {DamSenPark}
          {Logo}
        </div>
        <div className={styles.undeline}></div>
        <div className={styles.social}>
          {FBIcon}
          {YTBIcon}
          {IGIcon}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
