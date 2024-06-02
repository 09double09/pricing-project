import style from "./Modal/style.css";

const Modal = ({ isModalOn, setIsModalOn }) => {
  let closeHandler = (e) => {
    setIsModalOn(!isModalOn);
    let body = document.querySelector("body");
    body.style.overflowY = "auto";
  };
  let preventHandler = (e) => {
    e.stopPropagation();
  };
  if (isModalOn) {
    return (
      <div className="overlay" onClick={closeHandler}>
        <dialog open onClick={preventHandler}></dialog>
      </div>
    );
  } else return null;
};
export default Modal;
