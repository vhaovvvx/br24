import { useState } from "react";
import "./App.css";
import Login from "./components/component/Login/Login";
import Headers from "./components/component/Header/Header";
import Header from "./components/component/Header/Header";

function App() {
  const [defaultData, setDefaultData] = useState([
    {
      name: "test1",
      id: 1,
    },
    {
      name: "test2",
      id: 2,
    },
    {
      name: "test3",
      id: 3,
    },
  ]);
  const [data, setData] = useState({
    isVerified: false,
  });
  const [dataResult, setDataResult] = useState([]);

  const submit = (e) => {
    // const newData2 = dataResult.filter(
    //   (res, index) => dataResult.indexOf(res.id) === index
    // );
    // console.log(newData2);

    // let newData = dataResult.map((v) => v['status']);
    // console.log(newData);

    // newData = newData.map((v, i, array) => array.indexOf(v) === i && i);
    // console.log(newData);

    // newData = newData.filter((v) => dataResult[v]);
    // console.log(newData);

    // let lastData = newData.map((v) => dataResult[v]);
    // console.log('last', lastData);

    // setDataResult([]);
    if (!data.isVerified) {
      alert("ban chua xac thuc la robot");
      return;
    }

    if (data.isVerified) {
      alert("true");
    }
  };

  const handleVerifyCallBack = () => {
    setData({ isVerified: true });
  };

  const onLoadCallBack = () => {
    alert("load success");
  };

  const handleResult = (data) => {
    dataResult.push(data);
    console.log(dataResult);
  };

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
