
import './App.css';
import Header from'./component/Heder';
import Home from'./component/Home';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
function App() {
  return (
   <Router>
<Header />
     <Switch>
<Route exact path ="/">
<Home />
</Route>
<Route exact path ="/favorite">

</Route>
     </Switch>
   </Router>
  );
}

export default App;
