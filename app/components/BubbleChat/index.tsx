'use client'

import { ChangeEvent } from 'react';
import Image from "next/image"
import style from './BubbleChat.module.css'

import CopyIcon from '../Icons/Copy';
import ThumbUpIcon from '../Icons/ThumbUp';
import ThumbDownIcon from '../Icons/ThumbDown';
import ArrowClockwiseIcon from '../Icons/ArrowClockwise';

interface IBubbleChatProps {
  botAvatar: string;
  message: {
    id: string;
    role: 'system' | 'user' | 'assistant' | 'function' | 'data' | 'tool';
    content: string;
    createdAt?: Date | undefined;
  };
  isChecked: boolean;
  isShowCheckbox: boolean;
  updateCheckedList: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const BubbleChat = ({botAvatar, message, isShowCheckbox, updateCheckedList, isChecked}: IBubbleChatProps) => {
  const date = message.createdAt ? new Date(message.createdAt) : null
  const timestamp = `${date?.getHours()}:${date?.getMinutes().toString().length === 1 ? `0${date?.getMinutes()}` :  date?.getMinutes()}`

  return (
    <div
    className={`chat ${
      message.role === "user" ? "chat-end" : "chat-start"
    }`}
  >
    <div
      className={`chat-image avatar gap-x-2.5 ${
        message.role === "user" ? "self-center" : ""
      }`}
    >
      {/* Shows checkbox to delete message */}
      {isShowCheckbox && (
        <input
          type="checkbox"
          className="checkbox w-14 h-14 rounded self-center"
          onChange={updateCheckedList}
          checked={isChecked}
        />
      )}

      {/* Assistant's avatar on bubble messages */}
      {message.role === "assistant" && (
        <div className="w-10 rounded-full">
          <Image
            src={botAvatar}
            alt="avatar"
            width={32}
            height={32}
          />
        </div>
      )}
    </div>
    <div
      className={`chat-bubble ${
        message.role === "user"
          ? style.chatBubbleSecondary
          : style.chatBubblePrimary
      }`}
    >
      {message.content}{" "}
      <span className="mr-1 font-xs-regular">
        {timestamp}
      </span>

      {/* Assistant's bubbles message actions */}
      {message.role === "assistant" && (
        <div className="action-wrapper flex gap-x-2.5 pb-1.5 justify-end mt-2 align-bottom">
          <ArrowClockwiseIcon className="cursor-pointer" />
          <CopyIcon className="cursor-pointer" />
          <ThumbUpIcon className="cursor-pointer" />
          <ThumbDownIcon className="cursor-pointer" />
        </div>
      )}
    </div>
  </div>
  )
}
