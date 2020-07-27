import React from "react";
import { Layout } from "antd";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
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
        <Navbar />
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
