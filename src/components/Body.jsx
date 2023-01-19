import { Route, Routes } from 'react-router-dom'
import Select from "./Select";
import EmotionRlt from "./EmotionRlt";
import FlowerRlt from "./FlowerRlt";

function Body() {
    return (
        <div className="container">
        <Routes>
            <Route path="/" element={<Select/>} />
            <Route path="/emotion/:e_id" element={<EmotionRlt />} />
            <Route path="/flower/:f_name" element={<FlowerRlt />} />
        </Routes>
        </div>
    );
  }
  export default Body;