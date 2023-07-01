import { Route, Routes } from "react-router-dom";
import Root from "./routes/root";
import ExampleOne from "./routes/examples/ExampleOne";
import Home from "./routes/home/Home";
import About from "./routes/about/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root></Root>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="example/1" element={<ExampleOne />}></Route>
        <Route path="example/2" element={<ExampleOne />}></Route>
        <Route path="example/3" element={<ExampleOne />}></Route>
        <Route path="example/4" element={<ExampleOne />}></Route>
        <Route path="example/5" element={<ExampleOne />}></Route>
      </Route>
      <Route path="/about" element={<About></About>}></Route>
    </Routes>
  );
};

export default App;
