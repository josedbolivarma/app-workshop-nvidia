import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
 
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
