import { useState } from "react";
import style from "./SettingList/style.css";
import { stuff } from "./item";
import { Link } from "react-router-dom";
const DesignInformation = ({
  setItem,
  item,
  designPrice,
  setDesignPrice,
  itemName,
}) => {
  let [option, setOption] = useState([]);
  let [itemOption, setItemOption] = useState();
  let [itemTexture, setItemTexture] = useState();
  let [inputValue, setInputValue] = useState();
  // document.querySelector('body').addEventListener('input',(e)=>{
  //   e.target
  // })
  let itemTitle = Object.keys(item.texture);
  let textureHandler = (e) => {
    let className = "selected1";
    let currentButton = document.querySelector(`.${className}`);
    if (currentButton) {
      currentButton.classList.remove(className);
      let childrenBtn = document.querySelector(".selected2");
      if (childrenBtn) {
        childrenBtn.classList.remove("selected2");
      }
    }
    let options = item.texture[e.target.innerText];
    if (item.countable === false || item.countable === null) {
      let arr = [];
      options.forEach((e) => {
        let temp = Object.keys(e);
        arr = [...arr, ...temp];
      });
      setOption(arr);
    }
    e.target.classList.add(className);
    setItemTexture(e.target.innerText);
  };
  let optionHandler = (e) => {
    let className = "selected2";
    let currentButton = document.querySelector(`.${className}`);
    if (currentButton) {
      currentButton.classList.remove(className);
    }
    e.target.classList.add(className);
    setItemOption(e.target.innerText);
  };
  let changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  let priceHandler = (e) => {
    let itemAttr;
    let costPrice;
    let sellPrice;
    if (item.countable === false) {
      itemAttr = item.texture[itemTexture];
      itemAttr.forEach((e) => {
        let current = Object.keys(e)[0];
        if (itemOption === current) {
          costPrice = e[itemOption]["costPrice"];
          sellPrice = e[itemOption]["sellPrice"];
        }
      });
      setDesignPrice([
        ...designPrice,
        new stuff(itemTitle[0], costPrice, sellPrice),
      ]);
    } else if (item.countable === true) {
      itemAttr = item.texture[itemTexture];
      costPrice = itemAttr.costPrice * inputValue;
      sellPrice = itemAttr.sellPrice * inputValue;
      setDesignPrice([
        ...designPrice,
        new stuff(itemTitle[0], costPrice, sellPrice),
      ]);
    } else if (item.countable === null) {
      itemAttr = item.texture[itemTexture];
      itemAttr.forEach((e) => {
        let current = Object.keys(e)[0];
        if (itemOption === current) {
          costPrice = (e[itemOption]["costPrice"] * inputValue) / 300;
          sellPrice = (e[itemOption]["sellPrice"] * inputValue) / 300;
        }
      });
      setDesignPrice([
        ...designPrice,
        new stuff(itemTitle[0], costPrice, sellPrice),
      ]);
    }
    console.log("成功");
    // setIsModalOn(!isModalOn);
  };
  if (item.countable === false) {
    return (
      <div className="designInformation">
        <div className="textures">
          {itemTitle.map((e) => {
            return (
              <div className={`texture `} onClick={textureHandler} tabIndex={0}>
                {e}
              </div>
            );
          })}
        </div>
        <div className="options">
          {option.map((e) => {
            return (
              <div className="option" tabIndex={0} onClick={optionHandler}>
                {e}
              </div>
            );
          })}
        </div>
        <Link to="/">
          <div className="submitBtn" onClick={priceHandler}>
            確定
          </div>
        </Link>
      </div>
    );
  } else if (item.countable === null) {
    return (
      <div className="designInformation">
        <div className="title">{itemName}</div>
        <div className="textures">
          {itemTitle.map((e) => {
            return (
              <div className={`texture `} onClick={textureHandler} tabIndex={0}>
                {e}
              </div>
            );
          })}
        </div>
        <div className="options">
          {option.map((e) => {
            return (
              <div className="option" tabIndex={0} onClick={optionHandler}>
                {e}
              </div>
            );
          })}
        </div>
        <div className="inputArea">
          <div className="inputBlock">
            <input
              placeholder="長度(mm)"
              type="number"
              className="length"
              onChange={changeHandler}
            />
          </div>
        </div>
        <Link to="/">
          <div className="submitBtn" onClick={priceHandler}>
            確定
          </div>
        </Link>
      </div>
    );
  } else if (item.countable === true) {
    return (
      <div className="designInformation">
        <div className="textures">
          {itemTitle.map((e) => {
            return (
              <div className={`texture `} onClick={textureHandler} tabIndex={0}>
                {e}
              </div>
            );
          })}
        </div>
        {/* <div className="options">
          {option.map((e) => {
            return (
              <div className="option" tabIndex={0} onClick={optionHandler}>
              {e}
              </div>
            );
          })}
        </div> */}
        <div className="inputArea">
          <div className="inputBlock">
            <input
              placeholder="長度(cm)"
              type="number"
              className="length"
              min={1}
              onChange={changeHandler}
            />
          </div>
        </div>
        <Link to="/">
          <div className="submitBtn" onClick={priceHandler}>
            確定
          </div>
        </Link>
      </div>
    );
  }
};
export default DesignInformation;
