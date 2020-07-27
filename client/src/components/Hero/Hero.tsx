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
    </div>
  );
};

export default Hero;
