import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

interface HeroProps {
  imgUrl: string;
  title: string;
}

const Hero: React.FC<HeroProps> = ({ imgUrl, title }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(${imgUrl}) no-repeat center`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh"
      }}
    >
      <img src="logo_icon.png" alt="logo" width="126px" height="126px" />
      <Title
        style={{
          width: "500px",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "white"
        }}
      >
        {title}
      </Title>
      <Title
        level={3}
        style={{
          marginTop: 0,
          width: "500px",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "white"
        }}
      >
        Esports Tournaments taken to the Next Level
      </Title>
    </div>
  );
};

export default Hero;
