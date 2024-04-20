"use client";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import style from "../../page.module.css";
import { getDate } from "@/app/helpers/getDate";
import { BubbleChat, IMessage } from "../BubbleChat";
import { Message } from "ai";

interface IChatContainer {
  error: undefined | { cause?: unknown };
  messages: IMessage[];
  history: IMessage[];
  isShowCheckbox: boolean;
  checkedList: string[];
  setCheckedList: Dispatch<SetStateAction<string[]>>;
}

export const ChatContainer = (props: IChatContainer) => {
  const currentDate = new Date();
  const scrollRef = useRef<HTMLDivElement>(null);

  //* Handling scrolling to newest bubble chat
  useEffect(() => {
    if (scrollRef.current) {
      window.scrollTo(0, scrollRef.current.scrollHeight + 64);
    }
  }, [props.messages]);

  const updateCheckedList = (id: string) => {
    const currentList = [...props.checkedList] as string[];

    if (props.checkedList.includes(id)) {
      const index = props.checkedList.findIndex((list) => list === id);
      currentList.splice(index, 1);
    } else {
      currentList.push(id);
    }

    props.setCheckedList(currentList);
  };

  return (
    <div
      className={`${style.container} ${style.bubbleContainer} px-5`}
      ref={scrollRef}
    >
      <div className="text-center">
        <div className="badge badge-ghost bg-ghost py-1 px-1.5 font-xs-semibold rounded mx-auto">
          {getDate(currentDate)}
        </div>
      </div>

      {/* Handling no chat */}
      {!props.error &&
        props.messages.length === 0 &&
        props.history.length === 0 && (
          <p className="items-center mt-5 text-center">
            Hi! 👋 I&apos;m your friend. <br /> Tell me what you feel today 😊
          </p>
        )}

      {/* Display chat history */}
      {props.history?.map((message: Message) => (
        <BubbleChat
          key={message.id}
          botAvatar="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          message={message}
          isShowCheckbox={props.isShowCheckbox}
          isChecked={props.checkedList.includes(message.id)}
          updateCheckedList={updateCheckedList.bind(null, message.id)}
        />
      ))}

      {/* Display streaming messages */}
      {props.messages?.map((message: Message) => (
        <BubbleChat
          key={message.id}
          botAvatar="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          message={message}
          isShowCheckbox={props.isShowCheckbox}
          isChecked={props.checkedList.includes(message.id)}
          updateCheckedList={updateCheckedList.bind(null, message.id)}
        />
      ))}
    </div>
  );
};
