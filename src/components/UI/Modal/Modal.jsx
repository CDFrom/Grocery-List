import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div
      id='backdrop'
      className={classes.backdrop}
      onClick={() => {
        document.getElementById("backdrop").classList.add(classes["fade-out"]);
        props.onClose();
      }}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={`${classes.modal} ${props.className}`}>
      {props.children}
    </div>
  );
};

const location = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, location)}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.className}>
          {props.children}
        </ModalOverlay>,
        location
      )}
    </>
  );
};

export default Modal;
