import React from "react";
import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialLinkedin,
} from "react-icons/sl";
import { SiSubstack } from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";

const socialAccounts = [
  {
    title: "github",
    link: "https://github.com/ismaelmiah",
    icon: <TbBrandGithub />,
    delay: 0.8,
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/ismaelmiah/",
    icon: <SlSocialLinkedin />,
    delay: 0.9,
  },
  {
    title: "blog",
    link: "https://devismael.substack.com/",
    icon: <SiSubstack />,
    delay: 1,
  }
];
const SocialLInks = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-teal-300">
        <div className="flex lg:flex-col md:flex-col flex-row lg:gap-y-5 md:gap-y-5 gap-x-8 py-6 lg:py-0 md:py-0">
          {socialAccounts?.map((item, index) => (
            <a
              key={index}
              href={item?.link}
              target="blank"
            >
              <span className="w-10 h-10 text-xl bg-textBg border-[1px] inline-flex items-center justify-center rounded-full border-teal-300 hover:border-teal-300 text-lightText hover:text-teal-300 duration-200 hover:bg-black">
                {item?.icon}
              </span>
            </a>
          ))}
        </div>
        <div className="w-[1px] h-48 bg-teal-300 hidden lg:block md:block"></div>
      </div>
    </>
  );
};

export default SocialLInks;
