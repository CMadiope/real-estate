import React from "react";
import family from "../../public/images/family.svg";
import styled from "styled-components";

const MidSection = () => {
  return <Wrapper img={family}></Wrapper>;
};

export default MidSection;

const Wrapper = styled.div`
  width: 280px;
  height: 50px;
  background-size: contain;
  background-image: ${(props) => `url(${props.img})`};
`;

// videos @10 minutes