"use client";

import { ChangeEvent, useState } from "react";
import ThumbUpCircle from "../../Icons/ThumbUpCircle";
import ThumbDownCircle from "../../Icons/ThumbDownCircle";

interface IRatingProps {
  type: "like" | "dislike";
  handleSendRating: (rating: string) => void;
}
export const Rating = (props: IRatingProps) => {
  const [rating, setRating] = useState("");

  const handleRating = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setRating(event.target.value);
  };

  if (props.type === "like") {
    return (
      <div className="flex flex-col items-center gap-4">
        <ThumbUpCircle className="mt-4" />
        <div className="text-center">
          <h3 className="font-lg-subtitle-1-bold mb-1">
            Kamu menyukai balasan AI
          </h3>
          <p className="font-md-body-2-regular">
            Ceritakan pengalaman tentang balasan chat ini
          </p>
        </div>
        <textarea
          className="textarea textarea-bordered w-full bg-ghost"
          placeholder="Berikan Tanggapanmu"
          onChange={handleRating}
        />

        <button
          className="btn btn-primary rounded-lg w-full"
          onClick={() => props.handleSendRating(rating)}
          disabled={rating.length === 0}
        >
          KIRIM
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center gap-4">
        <ThumbDownCircle className="mt-4" />
        <div className="text-center">
          <h3 className="font-lg-subtitle-1-bold mb-1">
            Kamu tidak menyukai balasan AI
          </h3>
          <p className="font-md-body-2-regular">
            Ceritakan pengalaman tentang balasan chat ini
          </p>
        </div>
        <textarea
          className="textarea textarea-bordered w-full bg-ghost"
          placeholder="Berikan Tanggapanmu"
          onChange={handleRating}
        />

        <button
          className="btn btn-primary rounded-lg w-full"
          onClick={() => props.handleSendRating(rating)}
          disabled={rating.length === 0}
        >
          KIRIM
        </button>
      </div>
    );
  }
};
