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
      <Menu
        theme="light"
        mode="horizontal"
        style={{
          background: isAtTop ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.72)",
          color: "#ffffff",
          borderBottom: 0
        }}
      >
        <Menu.Item
          style={{
            padding: 0
          }}
        >
          <img
            src="logo_icon.png"
            alt="Logo"
            style={{
              width: "31px",
              height: "31px",
              margin: "16px 24px 16px 24px",
              float: "left"
            }}
          />
        </Menu.Item>
        <Menu.Item key="1">Tournaments</Menu.Item>
        <Menu.Item key="2">Games</Menu.Item>
        <Menu.Item
          style={{
            float: "right"
          }}
          key="4"
        >
          Sign Up
        </Menu.Item>
        <Menu.Item
          style={{
            float: "right"
          }}
          key="3"
        >
          Log In
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
