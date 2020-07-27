import React from "react";
import { Layout, Menu } from "antd";
import Hero from "./components/Hero/Hero";
import "./App.css";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout
      style={{
        backgroundSize: "100% 100%"
      }}
    >
      <Header
        style={{
          padding: "0",
          position: "fixed",
          zIndex: 1,
          width: "100%",
          backgroundColor: "transparent"
        }}
      >
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
      </Header>
      <Content>
        <Hero imgUrl="fighters.jpg" title="Clones Esports" />
        <div
          style={{
            height: "2000px"
          }}
        ></div>
      </Content>
      <Footer style={{ opacity: "0.2" }}>Footer</Footer>
    </Layout>
  );
}

export default App;
