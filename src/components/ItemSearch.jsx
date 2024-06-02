import style from "./ItemSearch/style.css";
import back from "./icon/back.svg";
import search from "./icon/search.svg";
import { useState, useId } from "react";
import { allItem } from "./item";
import Modal from "./Modal.jsx";
const ItemSearch = () => {
  let [isModalOn, setIsModalOn] = useState(false);
  let items = allItem;
  let names = Object.keys(items);
  // console.log(names);
  let handleDialog = () => {
    setIsModalOn(!isModalOn);
    let body = document.querySelector("body");
    body.style.overflowY = "hidden";
  };
  return (
    <div className="itemSearch">
      <img src={back} alt="" />
      <header>
        <div className="title">找尋你想要的設計</div>
        <div className="search">
          <input type="text" placeholder="搜尋" />
          <div className="icon">
            <img src={search} alt="" />
          </div>
        </div>
      </header>
      <main>
        {names.map((e) => {
          return (
            <div className="items" onClick={handleDialog}>
              {e}
            </div>
          );
        })}
      </main>
      <Modal isModalOn={isModalOn} setIsModalOn={setIsModalOn}></Modal>
    </div>
  );
};
export default ItemSearch;
