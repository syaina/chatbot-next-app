import { useState } from "react";
import Image from "next/image";
import ArrowLeftIcon from "../Icons/ArrowLeft";
import BulletBurger from "../Icons/BulletBurger";
import TrashIcon from "../Icons/Trash";
import style from "./navbar.module.css";

export type StatusDelete = "active" | "inactive";

interface Navbar {
  isTyping: boolean;
  botName: string;
  botAvatar: string;
  onClickDeleteChat: (status: StatusDelete) => void;
}

export const Navbar = (props: Navbar) => {
  const [isDeleteActive, setIsDeleteActive] = useState(false);

  const handleDelete = () => {
    props.onClickDeleteChat("active");
    setIsDeleteActive(true);
  };

  const handleCancelDelete = () => {
    setIsDeleteActive(false);
    props.onClickDeleteChat("inactive");
  };

  return (
    <div className={`navbar bg-base-100 shadow-md ${style.navbar}`}>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <ArrowLeftIcon />
        </button>
      </div>
      <div className="flex-1 gap-2">
        <div className="avatar">
          <div className="w-8 ml-2 rounded-full">
            <Image src={props.botAvatar} alt="avatar" width={32} height={32} />
          </div>
        </div>
        <div className="flex-none">
          <p className="font-lg-body-1-semibold">{props.botName}</p>
          {props.isTyping && (
            <p className="font-md-button-regular ">Typings...</p>
          )}
        </div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div className="rounded-full">
            {isDeleteActive ? (
              <button
                className="btn btn-ghost hover:bg-transparent font-lg-subtitle-1-regular normal-case"
                onClick={handleCancelDelete}
              >
                Batal
              </button>
            ) : (
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <BulletBurger />
              </div>
            )}
          </div>

          {!isDeleteActive && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] py-3 px-4 shadow bg-base-100 rounded-lg w-147 h-11"
            >
              <li className="bg-transparent" onClick={handleDelete}>
                <div className="flex font-lg-subtitle-1-regular text-warning hover:text-warning p-0 normal-case">
                  <TrashIcon /> Hapus Chat
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
