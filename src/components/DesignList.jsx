import React from "react";
import { allItem } from "./item";
import style from "./DesignList/DesignList.css";
const DesignList = () => {
  return (
    <div className="DesignList">
      <section>
        <div className="noDesign">尚未有設計</div>
        <footer>
          <div className="addBtn">新增設計</div>
          <div className="printBtn">列印報價單</div>
        </footer>
      </section>
    </div>
  );
};

export default DesignList;
