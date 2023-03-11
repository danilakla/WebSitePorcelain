import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./pages/Main";
import NaviBar from "./components/NaviBar";
import {Route, Routes} from "react-router-dom";
import Basket from "./pages/Basket";
import {observer} from "mobx-react-lite";

function App() {
  return (
    <div className="App">
          <NaviBar/>
        <Routes>
<Route path="/" element={<Main/>}/>
            <Route path="/" element={<Main/>}/>
            <Route path="/basket" element={<Basket/>}/>

        </Routes>


    </div>
  );
}

export default observer( App);
