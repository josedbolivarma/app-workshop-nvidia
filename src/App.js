import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Product from "./pages/Product";
 
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#ddd"
  }
}))

export default App;
