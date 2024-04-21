"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import style from "./BubbleChat.module.css";

import CopyIcon from "../Icons/Copy";
import ThumbUpIcon from "../Icons/ThumbUp";
import ThumbDownIcon from "../Icons/ThumbDown";
import ArrowClockwiseIcon from "../Icons/ArrowClockwise";

export interface IMessage {
  id: string;
  role: "system" | "user" | "assistant" | "function" | "data" | "tool";
  content: string;
  createdAt?: Date | undefined;
}
export interface IBubbleChatProps {
  botAvatar: string;
  message: IMessage;
  isChecked: boolean;
  isShowCheckbox: boolean;
  bubbleAction: (
    id: string,
    event: "copy" | "reload" | "thumbup" | "thumbdown"
  ) => void;
  updateCheckedList: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const BubbleChat = ({
  botAvatar,
  message,
  isChecked,
  isShowCheckbox,
  bubbleAction,
  updateCheckedList,
}: IBubbleChatProps) => {
  const [copyTooltipText, setCopyTooltipText] =
    useState<string>("Copy to clipboard");

  //* Get date bubble
  const date = message.createdAt ? new Date(message.createdAt) : null;
  const timestamp = `${date?.getHours()}:${
    date?.getMinutes().toString().length === 1
      ? `0${date?.getMinutes()}`
      : date?.getMinutes()
  }`;

  return (
    <div
      className={`chat ${message.role === "user" ? "chat-end" : "chat-start"}`}
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
            <Image src={botAvatar} alt="avatar" width={32} height={32} />
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
        <span className="mr-1 font-xs-regular">{timestamp}</span>
        {/* Assistant's bubbles message actions */}
        {message.role === "assistant" && (
          <div className="action-wrapper flex gap-x-2.5 pb-1.5 justify-end mt-2 align-bottom">
            <ArrowClockwiseIcon
              className="cursor-pointer"
              onClick={() => bubbleAction(message.id, "reload")}
            />
            <div
              className="tooltip tooltip-bottom tooltip-ghost"
              data-tip={copyTooltipText}
            >
              <CopyIcon
                className="cursor-pointer"
                onClick={() => {
                  bubbleAction(message.id, "copy");
                  setCopyTooltipText("Copied to clipboard!");
                }}
              />
            </div>
            <ThumbUpIcon
              className="cursor-pointer"
              onClick={() => bubbleAction(message.id, "thumbup")}
            />
            <ThumbDownIcon
              className="cursor-pointer"
              onClick={() => bubbleAction(message.id, "thumbdown")}
            />
          </div>
        )}
      </div>
    </div>
  );
};
