import React from "react";
import styled from "styled-components";
import BannerImg from "../Assets/Images/BannerImg.png";

function Home() {
  return (
    <Wrapper>
      <Banner>
        <img src={BannerImg} />
        <Dark></Dark>
        <Heading>
          Welcome to the World of <br />
          <span>Legends</span>
        </Heading>
        <BannerButton>Get Start Reading</BannerButton>
      </Banner>
      <StoryContainer></StoryContainer>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div``;
const Banner = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;
const StoryContainer = styled.div``;
const Dark = styled.div`
  width: 100%;
  height: 131vh;
  position: absolute;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.6);
`;
const Heading = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 5vw;
  text-align: center;

  span {
    color: #fbe551;
  }
`;

const BannerButton = styled.button`
  position: absolute;
  width: 240px;
  height: 35px;
  top: 89%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background: linear-gradient(180deg, #804296 0%, #2f005e 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  letter-spacing: 1px;
  transition: 1s;
  outline: none;
  :hover{
    cursor: pointer;
    color: gold;
  }
`;
