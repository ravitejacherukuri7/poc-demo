import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./assest/Loading";
import ButtonAppBar from "./components/Navigation/Navigation";
import SimpleMenu from "./components/PopubState/PopubState";
import RouteList from "./components/Route/Route";
import { itemsRequestAC } from "./redux/action/RouteAction";
import GooglePlacesAutocomplete from "./components/GoogleAutocomplete/GoogleAutocomplete";

const App = () => {
  const dispatch = useDispatch();
  const route = useSelector((state) => state.route);
  const [number, setNumber] = React.useState("");

  React.useEffect(() => {
    dispatch(itemsRequestAC());
  }, []);

  const data = route.items;
  console.log(data);
  return (
    <div className="App">
      <ButtonAppBar />
      <div className="container">
        {route.loading && <Loading />}
        {route.fail && "Faile connected"}
        <div className="sort">
          <div className="autocomplete">
            <GooglePlacesAutocomplete />
          </div>
          <div>
            <SimpleMenu />
          </div>
        </div>
        <div className="story">
          <div className="menu">
            <div className="menu__items">Menu</div>
          </div>
          {data &&
            data.map((route, index) => (
              <div className="route" key={index}>
                <RouteList id={route._id} description={route.description} />
              </div>
            ))}
          {data.length == 0 && (
            <div className="error">Hi , World :)</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
