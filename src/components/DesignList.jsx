import React from "react";
import { allItem, designs } from "./item";
import style from "./DesignList/DesignList.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import DesignSetting from "./DesignSetting";
import DesignBlock from "./DesignBlock";
const DesignList = ({
  designList,
  setDesignList,
  item,
  setItem,
  itemName,
  setItemName,
  designPrice,
  setDesignPrice,
  itemPrice,
}) => {
  let [isSettingOn, setIsSettingOn] = useState(false);
  const showModalHandler = (e) => {
    setIsSettingOn(!isSettingOn);
  };
  const printHandler = () => {
    let totalPriceCost = 0;
    let totalPriceSell = 0;
    let itemTotalCost = 0;
    let itemTotalSell = 0;
    let designTotalCost = 0;
    let designTotalSell = 0;
    itemPrice.forEach((e) => {
      itemTotalCost += e.costPrice;
      itemTotalSell += e.sellPrice;
    });
    designPrice.forEach((e) => {
      designTotalSell += e.sellPrice;
      designTotalCost += e.costPrice;
    });
    totalPriceCost = designTotalCost + itemTotalCost;
    totalPriceSell = designTotalSell + itemTotalSell;
    alert(`成本是:${totalPriceCost}；報價是:${totalPriceSell}`);
  };
  if (designPrice.length === 0) {
    if (isSettingOn) {
      return (
        <div className="DesignList">
          <section>
            <div className="noDesign">尚未有設計</div>
            <footer>
              {/* <Link to="itemSearch"> */}
              <div className="addBtn" onClick={showModalHandler}>
                新增設計
              </div>
              {/* </Link> */}
              <div className="printBtn" onClick={printHandler}>
                列印報價單
              </div>
            </footer>
          </section>
          <DesignSetting
            itemName={itemName}
            setItemName={setItemName}
            isSettingOn={isSettingOn}
            setIsSettingOn={setIsSettingOn}
            item={item}
            setItem={setItem}
          ></DesignSetting>
        </div>
      );
    } else if (!isSettingOn) {
      return (
        <div className="DesignList">
          <section>
            <div className="noDesign">尚未有設計</div>
            <footer>
              {/* <Link to="itemSearch"> */}
              <div className="addBtn" onClick={showModalHandler}>
                新增設計
              </div>
              {/* </Link> */}
              <div className="printBtn" onClick={printHandler}>
                列印報價單
              </div>
            </footer>
          </section>
        </div>
      );
    }
  } else if (designPrice.length !== 0) {
    if (isSettingOn) {
      return (
        <div className="DesignList">
          <section>
            {designPrice.map((e) => {
              return <DesignBlock></DesignBlock>;
            })}

            <footer>
              {/* <Link to="itemSearch"> */}
              <div className="addBtn" onClick={showModalHandler}>
                新增設計
              </div>
              {/* </Link> */}
              <div className="printBtn" onClick={printHandler}>
                列印報價單
              </div>
            </footer>
          </section>
          <DesignSetting
            itemName={itemName}
            setItemName={setItemName}
            isSettingOn={isSettingOn}
            setIsSettingOn={setIsSettingOn}
            item={item}
            setItem={setItem}
          ></DesignSetting>
        </div>
      );
    } else if (!isSettingOn) {
      return (
        <div className="DesignList">
          <section>
            {designPrice.map((e) => {
              return <DesignBlock></DesignBlock>;
            })}
            <footer>
              {/* <Link to="itemSearch"> */}
              <div className="addBtn" onClick={showModalHandler}>
                新增設計
              </div>
              {/* </Link> */}
              <div className="printBtn" onClick={printHandler}>
                列印報價單
              </div>
            </footer>
          </section>
        </div>
      );
    }
  }
};

export default DesignList;
