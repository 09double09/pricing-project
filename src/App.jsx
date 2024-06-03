import ItemSearch from "./components/ItemSearch";
import SettingList from "./components/SettingList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import DesignList from "./components/DesignList";
import DesignInformation from "./components/DesignInformation";
const App = () => {
  let [itemPrice, setItemPrice] = useState([]);
  let [item, setItem] = useState();
  let [designList, setDesignList] = useState(null);
  let [designPrice, setDesignPrice] = useState([]);
  let [itemName, setItemName] = useState();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <DesignList
          itemName={itemName}
          setItemName={setItemName}
          designPrice={designPrice}
          setDesignPrice={setDesignPrice}
          item={item}
          setItem={setItem}
          designList={designList}
          setDesignList={setDesignList}
          itemPrice={itemPrice}
          setItemPrice={itemPrice}
        ></DesignList>
      ),
    },
    {
      path: "/itemSearch",
      element: (
        <ItemSearch
          item={item}
          setItem={setItem}
          itemPrice={itemPrice}
          setItemPrice={setItemPrice}
        ></ItemSearch>
      ),
    },
    {
      path: "/designInformation",
      element: (
        <DesignInformation
          itemName={itemName}
          setItemName={setItemName}
          item={item}
          setItem={setItem}
          designPrice={designPrice}
          setDesignPrice={setDesignPrice}
        ></DesignInformation>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};
export default App;
