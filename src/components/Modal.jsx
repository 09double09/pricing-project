import style from "./Modal/style.css";
import { allItem } from "./item";
import SettingList from "./SettingList";
import { useState } from "react";
const Modal = ({
  setItem,
  itemName,
  item,
  isModalOn,
  setIsModalOn,
  itemPrice,
  setItemPrice,
}) => {
  let closeHandler = (e) => {
    setIsModalOn(!isModalOn);
    let body = document.querySelector("body");
    body.style.overflowY = "auto";
  };
  let preventHandler = (e) => {
    e.stopPropagation();
  };
  // let textures = item.texture;
  // let items = allItem;
  if (isModalOn) {
    return (
      <div className="overlay" onClick={closeHandler}>
        <dialog open onClick={preventHandler}>
          <header className="itemName">{itemName}</header>
          <SettingList
            setItem={setItem}
            item={item}
            isModalOn={isModalOn}
            setIsModalOn={setIsModalOn}
            itemPrice={itemPrice}
            setItemPrice={setItemPrice}
          ></SettingList>
        </dialog>
      </div>
    );
  } else return null;
};
export default Modal;
