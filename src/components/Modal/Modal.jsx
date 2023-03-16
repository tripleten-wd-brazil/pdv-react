function Modal({ opened, children }) {
  if (!opened) return null;

  return <div className="modal">{children}</div>;
}

export default Modal;
