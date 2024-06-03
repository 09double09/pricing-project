import { Link } from "react-router-dom";
import style from "./DesignSetting/style.css";
import { designs } from "./item";
import { useState } from "react";
const DesignSetting = ({
  isSettingOn,
  setIsSettingOn,
  item,
  setItem,
  itemName,
  setItemName,
}) => {
  let list = Object.keys(designs);
  let closeModalHandler = (e) => {
    let current = e.target.innerText;
    setItemName(current);
    setItem(designs[current]);
    setIsSettingOn(!isSettingOn);
  };
  let clickHandler = (e) => {
    e.stopPropagation();
  };
  console.log(list);
  return (
    <div className="designLayout" onClick={closeModalHandler}>
      <dialog open className="designSetting" onClick={clickHandler}>
        <div className="settingTitle">選擇你要的設計</div>
        <div className="settingList">
          {list.map((e) => {
            return (
              <Link to="/designInformation">
                <div className="setting" onClick={closeModalHandler}>
                  {e}
                </div>
              </Link>
            );
          })}
        </div>
      </dialog>
    </div>
  );
};
export default DesignSetting;
