import React from "react";
import { Menu } from  "antd";

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
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
          background: "rgba(0,0,0,0.3)",
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
