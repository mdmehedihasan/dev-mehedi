import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/mehediprobd/",
            style: "rounded-tr-md ",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/mdmehedihasan",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mehedicsebu@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "https://drive.google.com/file/d/1NdO47_mED-rE6YgezukCo7STqJrsWkb-/view?usp=sharing",
            style: "rounded-br-md",
            download: true,
        },
    ];
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-300 bg-gray-500" +
                            " " +
                            style
                        }
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-sobuj"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;