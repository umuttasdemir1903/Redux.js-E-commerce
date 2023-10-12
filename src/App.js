import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import Detail from "./pages/Detail";
import Card from "./pages/Card";

function App() {
  return (
    <div>
      <PageContainer >
      <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:id" element={<Detail />}/>
        <Route path="/card" element={<Card />}/>
      </Routes>
      </Router>
      </PageContainer>
    </div>
  )
}

export default App;
