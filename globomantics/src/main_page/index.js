import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './main_page.css';
import Header  from './header';
import FeaturedHouse from "./featured_house";
import SearchResults from '../search_results';
import HouseFilter from './house_filter';
import HouseFromQuery from '../house/house_from_query';
import useHouses from '../hooks/use_houses';
import useFeaturedHouse from "../hooks/use_featured_house";
import HousesContext from "../context/houses_context";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);
  
  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
        <div className='container'>
          <Header subtitle="Providing houses all over the world" />
          <HouseFilter/>
          <Switch>
            <Route path="/searchresults/:country">
              <SearchResults></SearchResults>
            </Route>

            <Route path="/house/id">
              <HouseFromQuery></HouseFromQuery>
            </Route>
            <Route path="/">
              <FeaturedHouse house={featuredHouse}></FeaturedHouse>
            </Route>
          </Switch>
        </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
