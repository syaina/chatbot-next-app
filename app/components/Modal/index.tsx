interface Modal {
  id: string;
  title: string;
  children: JSX.Element;
  isShowCloseButton?: boolean;
}

export const Modal = (props: Modal) => (
  <dialog id={props.id} className="modal">
    <div className="modal-box">
      {props.isShowCloseButton && (
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
      )}
      <h3 className="font-lg-subtitle-1-bold pb-2">{props.title}</h3>
      {props.children}
    </div>
  </dialog>
);
