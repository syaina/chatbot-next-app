interface Modal {
  id: string;
  title: string;
  children: JSX.Element;
}

export const Modal = (props: Modal) => (
  <dialog id="modal-delete" className="modal">
    <div className="modal-box">
      <h3 className="font-lg-subtitle-1-bold pb-2">{props.title}</h3>
      {props.children}
    </div>
  </dialog>
);
