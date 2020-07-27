import React, { useState, useEffect } from "react";
import { Menu } from "antd";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    window.onscroll = function() {
      if (window.pageYOffset <= 250) {
        setIsAtTop(true);
      } else {
        if (isAtTop) {
          setIsAtTop(false);
        }
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, [isAtTop]);

  return (
    <>
      <img
        src="logo192.png"
        alt="Logo"
        style={{
          width: "31px",
          height: "31px",
          margin: "16px 24px 16px 24px",
          float: "left"
        }}
      />
      <Menu
        theme="light"
        mode="horizontal"
        style={{
          background: isAtTop ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.72)",
          color: "#ffffff",
          borderBottom: 0
        }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
