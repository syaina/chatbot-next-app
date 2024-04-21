"use client";

interface IDeleteChatProps {
  deleteChat: () => void;
}
export const DeleteChat = (props: IDeleteChatProps) => {
  const closeModal = () => {
    document?.getElementById("modal-delete")?.close() as HTMLElement;
  };

  return (
    <>
      <p className="py-4">
        Kamu akan menghapus chat ini, chat yang telah dihapus tidak dapat
        dipulihkan
      </p>
      <button
        className="btn cursor-pointer btn-block btn-error normal-case font-md-button-bold text-white"
        onClick={props.deleteChat}
      >
        Hapus Sekarang
      </button>
      <button
        className="btn cursor-pointer btn-block btn-ghost normal-case font-md-button-bold text-blue"
        onClick={closeModal}
      >
        Kembali
      </button>
    </>
  );
};
