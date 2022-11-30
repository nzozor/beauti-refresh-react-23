import { Modal } from "@mui/material";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
const BurgerMenu: React.FC = () => {
  const MenuIcon = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    cursor: pointer;
    @media (min-width: 1024px) {
      display: none;
    }
    .menu-icon__cheeckbox {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
      z-index: 2;
      -webkit-touch-callout: none;
      position: absolute;
      opacity: 0;
    }

    div {
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 22px;
      height: 12px;
    }

    span {
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      background-color: #3e3d3c;
      border-radius: 1px;

      &:first-of-type {
        top: 0;
      }

      &:last-of-type {
        bottom: 0;
      }
    }

    &.sticky span {
      background-color: #3e3d3c;
    }

    &.active {
      span {
        &:first-of-type {
          transform: rotate(45deg);
          top: 5px;
        }

        &:last-of-type {
          transform: rotate(-45deg);
          bottom: 5px;
        }
      }
    }

    &.active:hover span:first-of-type,
    &.active:hover span:last-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
      width: 22px;
    }

    &:hover {
      @media (min-width: 1024px) {
        span:first-of-type {
          width: 26px;
        }

        span:last-of-type {
          width: 12px;
        }
      }
    }
  `;

  const navigationLink = [
    {
      title: 'Home',
      ref: '/',
    },
    {
      title: 'About Us',
      ref: '/about-us',
    },
    {
      title: 'Treatments',
      ref: '/treatments',
    },
    {
      title: 'Contact',
      ref: '/contact',
    },
  ]

  const [isModalActive, setIsModalActive] = React.useState(false)

  const openModal = () => {
    setIsModalActive(true);
  }

  const closeModal = () => {
    setIsModalActive(false);
  }

  return (
    <>
      <MenuIcon onClick={() => {isModalActive ? closeModal() : openModal()}} className={isModalActive ? 'active' : ''}>
        <div>
          <span></span>
          <span></span>
        </div>
      </MenuIcon>
      <Modal
        open={isModalActive}
        onClose={closeModal}
        aria-labelledby="navbar"
        aria-describedby="navbar"
        className='bg-[#fff] outline-none border-none w-[100vw] h-[100vh] mt-[5rem] navModal'
      >
        <ul className="w-[100vw] h-[100vh] bg-[#fff] flex place-items-center flex-col pt-[5rem]">
          {
            navigationLink.map((item, index) => {
              return (
                <li key={index} className='text-[#000] text-[20px] leading-[40px] font-nunitoSans font-[300] uppercase mb-[20px]' onClick={() => closeModal()}>
                  <Link href={item.ref}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </Modal>
    </>
  );
};

export default BurgerMenu;
