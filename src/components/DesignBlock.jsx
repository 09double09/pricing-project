import { useState } from "react";
import style from "./DesignBlock/style.css";
import { Link } from "react-router-dom";
const DesignBlock = () => {
  return (
    <div className="designBlock">
      <div className="designName">DesignBlock</div>
      <div className="alterArea">
        <Link to="/itemSearch">
          <div className="addItem">新增配置</div>
        </Link>
        <div className="alterDesign">更改</div>
      </div>
    </div>
  );
};
export default DesignBlock;
