import style from "./ItemSearch/style.css";
import back from "./icon/back.svg";
import search from "./icon/search.svg";
import { allItem } from "./item";
const ItemSearch = () => {
  let items = allItem;
  let names = Object.keys(items);
  console.log(names);
  let handleDialog = () => {};
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
          return <div className="items">{e}</div>;
        })}
      </main>
      <dialog>你好</dialog>
    </div>
  );
};
export default ItemSearch;
