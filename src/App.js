import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Home1 from "./components/Home";
import UseStateCounter from "./routes/UseStateCounter";
import UseEffectExample from "./routes/UseEffectExample";
import UseEffectMimicDidMount from "./routes/UseEffectMimicDidMount";
import FetchingDataUseEffect from "./routes/FetchingDataUseEffect";
import UseContext from "./routes/UseContext";
import UseReducerExample from "./routes/UseReducerExample";
import UseReducerWithContext from "./routes/UseReducerWithContext";
import FetchDataUseReducer from "./routes/FetchDataUseReducer";
import UseCallback from "./routes/UseCallback";
import UseMemo from "./routes/UseMemo";
import UseRef from "./routes/UseRef";
import CustomHooks from "./routes/CustomHooks";
import Result from "./components/Result";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/useState-counter"
            element={<UseStateCounter />}
          ></Route>
          <Route exact path="/useEffect" element={<UseEffectExample />}></Route>
          <Route
            exact
            path="/useEffect-didMount"
            element={<UseEffectMimicDidMount />}
          ></Route>
          <Route
            exact
            path="/fetch-data"
            element={<FetchingDataUseEffect />}
          ></Route>
          <Route exact path="/useContext" element={<UseContext />}></Route>
          <Route
            exact
            path="/useReducer"
            element={<UseReducerExample />}
          ></Route>
          <Route
            exact
            path="/useReducerWithContext"
            element={<UseReducerWithContext />}
          ></Route>
          <Route
            exact
            path="/fetch-data-useReducer"
            element={<FetchDataUseReducer />}
          ></Route>
          <Route exact path="/useCallback" element={<UseCallback />}></Route>
          <Route exact path="/useMemo" element={<UseMemo />}></Route>
          <Route exact path="/useRef" element={<UseRef />}></Route>
          <Route exact path="/customHooks" element={<CustomHooks />}></Route>
          <Route exact path="/home1" element={<Home1 />}></Route>
          <Route exact path="/result1" element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
