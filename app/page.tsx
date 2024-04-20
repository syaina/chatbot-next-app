"use client";

import { useChat } from "ai/react";
import style from "./page.module.css";
import ArrowUpIcon from "./components/Icons/ArrowUp";
import { Navbar, StatusDelete } from "./components/Navbar";
import { useEffect, useRef, useState } from "react";
import Trash from "./components/Icons/Trash";
import { Modal } from "./components/Modal";
import { BubbleChat } from "./components/BubbleChat";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat();
  
  const [isShowCheckbox, setisShowCheckbox] = useState<boolean>(false);
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null)

  //* Handling scrolling to newest bubble chat
  useEffect(() => {
    if (scrollRef.current) {
      window.scrollTo(0, scrollRef.current.scrollHeight + 64)
    }
  }, [messages]);

  const onClickDeleteChat = (status: StatusDelete) => {
    if (status === "active") {
      setisShowCheckbox(true);
      return;
    } else if (status === "inactive") {
      setisShowCheckbox(false);
      return;
    } else {
      return;
    }
  };

  const updateCheckedList = (id: string) => {
    const currentList = [...checkedList] as string[];

    if (checkedList.includes(id)) {
      const index = checkedList.findIndex((list) => list === id);
      currentList.splice(index, 1);
    } else {
      currentList.push(id);
    }

    setCheckedList(currentList);
  };

  const handleSelectAll = () => {
    const idList = messages.map((message) => message.id);

    setCheckedList(idList);
  };

  const isLastMessageUser = messages[messages.length - 1]?.role === 'user'

  return (
    <div className={`artboard phone-3 base-10 ${style.chatContainer}`}>
      {/* Navbar  */}
      <Navbar botAvatar="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" botName="Syaina" isTyping={isLoading && isLastMessageUser} onClickDeleteChat={onClickDeleteChat} />

      <Modal id="modal-delete" title={"Hapus Chat"}>
        <>
          <p className="py-4">
            Kamu akan menghapus chat ini, chat yang telah dihapus tidak dapat
            dipulihkan
          </p>
          <button className="btn cursor-pointer btn-block btn-error normal-case font-md-button-bold text-white">
            Hapus Sekarang
          </button>
          <button
            className="btn cursor-pointer btn-block btn-ghost normal-case font-md-button-bold text-blue"
            onClick={() =>
              document?.getElementById("modal-delete")?.close() as HTMLElement
            }
          >
            Kembali
          </button>
        </>
      </Modal>

      {/* Content */}
      <div className={`${style.container} ${style.bubbleContainer} px-5`} ref={scrollRef}>
        <div className="text-center">
          <div className="badge badge-ghost bg-ghost py-1 px-1.5 font-xs-semibold rounded mx-auto">
            Today
          </div>
        </div>

        {/* Handling no chat */}
        {
          !error && messages.length === 0 && (
            <p className="items-center mt-5 text-center">Hi! 👋 I&apos;m your friend. <br/> Tell me what you feel today 😊</p>
          )
        }

        {messages.map((message) => (
          <BubbleChat
            key={message.id}
            botAvatar="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            message={message}
            isShowCheckbox={isShowCheckbox}
            isChecked={checkedList.includes(message.id)}
            updateCheckedList={updateCheckedList.bind(null, message.id)}
          />
        ))}
      </div>

      <div className={`${style.placeholder}`}></div>

      {/* Footer */}
      {isShowCheckbox ? (
        <div className={`${style.deleteFooter}`}>
          <div className="divider m-0" />
          <div className="flex justify-between items-center p-6">
            <div className="font-md-subtitle-2-semibold ">
              {checkedList.length} Terpilih |{" "}
              <button
                className="hover:bg-transparent normal-case"
                onClick={handleSelectAll}
              >
                Pilih Semua
              </button>
            </div>
            <div className="">
              <button
                className="flex items-center gap-x-2.5 text-warning"
                onClick={() =>
                  document
                    ?.getElementById("modal-delete")
                    ?.showModal() as HTMLElement
                }
              >
                <Trash />
                Hapus
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={`${style.inputWrapper} px-5`}>
          <input
            className={`input w-full ${style.inputField}`}
            value={input}
            placeholder="Send Message..."
            onChange={handleInputChange}
          />

          <button className={`${style.arrowUpButton}`} disabled={isLoading || input.length === 0}>
            <ArrowUpIcon />
          </button>
        </form>
      )}
    </div>
  );
}
