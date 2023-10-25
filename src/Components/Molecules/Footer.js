import youtube from "../../../public/assets/img/youtube.png";
import instagram from "../../../public/assets/img/instagram.png";
import x from "../../../public/assets/img/x.png";
import twitch from "../../../public/assets/img/twitch.png";
import discord from "../../../public/assets/img/discord.png";

import Logo from "../../../public/assets/img/ssrlogovectorizado1.png";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-[100%] h-[25vh] bggris grid grid-cols-2 grid-rows-2fr  ">
        <div className="logos flex justify-center items-center flex-col  p-3">
          <Image src={Logo} alt="LAF Argentina " className="w-[150px]"></Image>
          <h6 className="text-white">Superliga Sim Racing</h6>
        </div>

        <div className="red flex flex-col justify-center items-center  p-3">
          <h5 className="text-white">Seguinos en nuestras redes</h5>
          <div className="iconos flex flex-row">
            <a href="https://www.youtube.com/@lafargentina3414" target="_blank">
              <Image src={youtube} alt="Yotube " className="w-[60px]"></Image>
            </a>
            <a href="https://www.twitch.tv/laf_argentina" target="_blank">
              <Image src={twitch} alt="Twicth " className="w-[60px]"></Image>
            </a>
            <a href="https://www.instagram.com/laf_argentina/" target="_blank">
              <Image
                src={instagram}
                alt="Instagram "
                className="w-[60px]"
              ></Image>
            </a>
            <a href="https://discord.gg/sXtEbPewZR" target="_blank">
              <Image src={discord} alt="Discord " className="w-[60px]"></Image>
            </a>
          </div>
        </div>
        <div className="copy flex justify-center items-center border-t-[1px] border-white col-span-2">
          <p className="text-white">SSR 2018-2023 </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
