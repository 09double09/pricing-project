import style from "./ItemSearch/style.css";
import back from "./icon/back.svg";
import search from "./icon/search.svg";
import { useState, useId } from "react";
import { Link } from "react-router-dom";
import { allItem } from "./item";
import Modal from "./Modal.jsx";
const ItemSearch = ({ itemPrice, setItemPrice, item, setItem }) => {
  let [isModalOn, setIsModalOn] = useState(false);
  let [itemName, setItemName] = useState();
  let items = allItem;
  let names = Object.keys(items);
  let handleDialog = (e) => {
    let data = e.target.innerText;
    setItemName(data);
    setIsModalOn(!isModalOn);
    let body = document.querySelector("body");
    body.style.overflowY = "hidden";
    let item = items[data];
    setItem(item);
  };
  return (
    <div className="itemSearch">
      <Link to="/">
        <img src={back} alt="" />
      </Link>
      <header className="searchHeader">
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
      <Modal
        setItem={setItem}
        item={item}
        itemName={itemName}
        isModalOn={isModalOn}
        setIsModalOn={setIsModalOn}
        itemPrice={itemPrice}
        setItemPrice={setItemPrice}
      ></Modal>
    </div>
  );
};
export default ItemSearch;
