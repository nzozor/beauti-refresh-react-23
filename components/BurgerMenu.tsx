import {Modal} from "@mui/material";
import Link from "next/link";
import React from "react";

const BurgerMenu: React.FC = () => {
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
      <div onClick={() => {
        isModalActive ? closeModal() : openModal()
      }} className={isModalActive ? 'menu-icon active lg:hidden' : 'lg:hidden menu-icon'}>
        <div>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
      </div>
      <Modal
        open={isModalActive}
        onClose={closeModal}
        aria-labelledby="navbar"
        aria-describedby="navbar"
        className='bg-[#fff] outline-none border-none w-[100vw] h-[100vh] mt-[5rem] navModal main-menu'
      >
        <div className={isModalActive ? 'list active' : 'list'}>
          <ul className="w-[100vw] h-[100vh] bg-[#fff] flex place-items-center flex-col pt-[5rem]">
            {
              navigationLink.map((item, index) => {
                return (
                  <li key={index}
                      className='text-[#000] text-[20px] leading-[40px] font-nunitoSans font-[300] uppercase mb-[20px]'
                      onClick={() => closeModal()}>
                    <Link href={item.ref}>{item.title}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default BurgerMenu;
