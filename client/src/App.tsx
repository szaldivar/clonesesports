import React from "react";
import { Layout, Menu, Typography } from "antd";
import "./App.css";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

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
      <Content
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url('fighters.jpg') no-repeat center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Title
          style={{
            width: "500px",
            height: "2000px",
            textAlign: "center",
            color: "white"
          }}
        >
          Clones Esports
        </Title>
      </Content>
      <Footer style={{ opacity: "0.2" }}>Footer</Footer>
    </Layout>
  );
}

export default App;
