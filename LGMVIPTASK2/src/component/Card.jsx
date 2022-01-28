import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Wraper = styled.section`
  width: 100%;
  padding-top: 10rem;
  overflowx: hidden;
  .card {
    width: 25rem;
    background: #fff;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    height: 40rem;
    text-align: center;
    transition: 0.2s ease;
    @media (max-width: 578px) {
      width: 30rem;
      // margin:0 auto;
      height: 45rem;
    }
    .card-details {
      padding: 3rem 0;
      h1 {
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: 0.2rem;
        line-height: 2rem;
      }
      p {
        font-size: 1.3rem;
        color: grey;
      }

      .social {
        ul {
          display: flex;
          justify-content: center;
          list-style-type: none;

          li {
            padding-right: 2rem;
            font-size: 2rem;
            margin: 2rem 0;

            :hover {
              transform: scale(1.3);
            }
          }
        }
      }
    }
    :hover {
      transform: translateY(-4rem);
    }
    :hover > .card-img .overly {
      opacity: 1;
    }

    .card-img {
      width: 100%;
      height: 20rem;
      position: relative;
      transition: all 0.3s ease-in;
      .overly {
        background-image: linear-gradient(
          to left,
          rgba(0, 0, 255, 0.4),
          rgba(255, 0, 0, 0.6)
        );

        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        opacity: 0;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        opacity: 0.8;
        transition: 0.2s ease;
      }
    }
  }
`;

const Container = styled.div`
  padding: 5rem 10rem;
`;

const Card = ({ user }) => {
  return (
    <>
      <Wraper>
        <Container>
          <div className="card">
            <div className="card-img">
              <img src={user.avatar} alt="" />
              <span className="overly"></span>
            </div>

            <div className="card-details">
              <h1>
                {user.first_name} {user.last_name}
              </h1>
              <p>{user.email}</p>
              <div className="social">
                <ul>
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaLinkedinIn />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Wraper>
    </>
  );
};

export default Card;
