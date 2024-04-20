"use client";

import { useChat } from "ai/react";
import style from "./page.module.css";
import ArrowUpIcon from "./components/Icons/ArrowUp";
import { Navbar, StatusDelete } from "./components/Navbar";
import { useEffect, useRef, useState } from "react";
import Trash from "./components/Icons/Trash";
import { Modal } from "./components/Modal";
import { ChatContainer } from "./components/ChatContainer";
import { IMessage } from "./components/BubbleChat";
import { DeleteChat } from "./components/Modal/DeleteChat";
import { Message } from "ai";

export default function Chat() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    setMessages,
  } = useChat();

  const [deleteStatus, setDeleteStatus] = useState<StatusDelete>("inactive");
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [ratingData, setRatingData] = useState([]);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(
        "avatara-chat-history",
        JSON.stringify({
          messages: messages,
          ratings: ratingData,
        })
      );
    }
  }, [messages, ratingData]);

  useEffect(() => {
    if (localStorage.getItem("avatara-chat-history")) {
      const historyLocal = JSON.parse(
        localStorage.getItem("avatara-chat-history") as string
      );

      setMessages(historyLocal.messages);
    }
  }, []);

  const onClickDeleteChat = (status: StatusDelete) => {
    setDeleteStatus(status);

    if (status === "inactive") {
      setCheckedList([]);
    }
  };

  const handleSelectAll = () => {
    const idList = messages.map((message) => message.id);

    setCheckedList(idList);
  };

  const handleDeleteChat = () => {
    const afterDeleteMessages = messages.filter(
      (message: Message) => !checkedList.includes(message.id)
    );

    setMessages(afterDeleteMessages);

    localStorage.setItem(
      "avatara-chat-history",
      JSON.stringify({
        messages: afterDeleteMessages,
        ratings: ratingData,
      })
    );

    setDeleteStatus("inactive");
    setCheckedList([]);
    document?.getElementById("modal-delete")?.close();
  };

  const isLastMessageUser = messages[messages.length - 1]?.role === "user";

  return (
    <div className={`artboard phone-3 base-10 ${style.chatContainer}`}>
      {/* Navbar  */}
      <Navbar
        botAvatar="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        botName="Syaina"
        isTyping={isLoading && isLastMessageUser}
        deleteStatus={deleteStatus}
        onClickDeleteChat={onClickDeleteChat}
      />

      <Modal id="modal-delete" title={"Hapus Chat"}>
        <DeleteChat deleteChat={handleDeleteChat} />
      </Modal>

      {/* Content */}
      <ChatContainer
        messages={messages}
        error={error}
        isShowCheckbox={deleteStatus === "active"}
        checkedList={checkedList}
        setCheckedList={setCheckedList}
      />

      <div className={`${style.placeholder}`}></div>

      {/* Footer */}
      {deleteStatus === "active" ? (
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

          <button
            className={`${style.arrowUpButton}`}
            disabled={isLoading || input.length === 0}
          >
            <ArrowUpIcon />
          </button>
        </form>
      )}
    </div>
  );
}
