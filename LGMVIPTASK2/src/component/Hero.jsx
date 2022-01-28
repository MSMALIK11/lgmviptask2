import React from "react";

import styled from "styled-components";
import Button from "./Button";
import bg from "./images/bg.jpg";

const Wraper = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  backgroung-position: center;
  background-size: cover;

  .hero {
    text-align: center;
    padding-top: 20rem;

    .main-heading {
      font-size: 7rem;
      line-height: 4rem;
      color: #fff;
      font-family: "Lora", serif;
      animation: animate 0.5s linear;

      @keyframes animate {
        from {
          transform: scale(0.8);
          opacity: 0;
        }
        to {
          transform: scale(1.1);
          opacity: 1;
        }
      }

      @media (max-width: 992px) {
        font-size: 5rem;
        line-height: 7rem;
      }
      @media (max-width: 375px) {
        font-size: 3rem;
        line-height: 5rem;
      }
    }
    .sub-heading {
      line-height: 1rem;
      margin: 5rem 0;
      font-size: 2.5rem;
      color: #f3f3f3;
      font-family: "Jost", sans-serif;
      animation: animate 0.8s linear;
    }

    .btn {
      animation: animate 0.5s linear;
    }
  }
`;

const Hero = () => {
  return (
    <>
      <Wraper>
        <div className="hero">
          <h1 className="main-heading">Meet Our Expert Team Member's</h1>
          <p className="sub-heading">We will provide best solution's</p>
          <div className="btn">
            <Button name="Lets meet" path="/users" />
          </div>
        </div>
      </Wraper>
    </>
  );
};

export default Hero;
