import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route, // for later
  Switch
} from "react-router-dom";

const AllShoes = [
  {
    id: "1",
    name: "NIKE Liteforce Blue Sneakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
    status: "Available",
    misc: [
      {
        subid: "11",
        name: "NIKE 1",
        description: "NIKE 1..NIKE 1...NIKE 1...NIKE 1"
      },
      {
        subid: "12",
        name: "NIKE 2",
        description: "NIKE 2..NIKE 2...NIKE 2..NIKE 2"
      }
    ]
  },
  {
    id: "2",
    name: "U.S. POLO ASSN. Slippers",
    description:
      "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
    status: "Available",
    misc: [
      {
        subid: "21",
        name: "U.S. POLO ASSN 1",
        description:
          "U.S. POLO ASSN 1 ...U.S. POLO ASSN 1..U.S. POLO ASSN 1..U.S. POLO ASSN 1"
      },
      {
        subid: "22",
        name: "U.S. POLO ASSN 2",
        description:
          "U.S. POLO ASSN 2..U.S. POLO ASSN 2..U.S. POLO ASSN 2..U.S. POLO ASSN 2"
      }
    ]
  },
  {
    id: "3",
    name: "ADIDAS Adispree Running Shoes",
    description:
      "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
    status: "Available",
    misc: [
      {
        subid: "31",
        name: "ADIDAS 1",
        description: "ADIDAS 1..ADIDAS 1..ADIDAS 1..ADIDAS 1"
      },
      {
        subid: "32",
        name: "ADIDAS 2",
        description: "ADIDAS 2..ADIDAS 2..ADIDAS 2..ADIDAS 2"
      }
    ]
  },
  {
    id: "4",
    name: "Lee Cooper Mid Sneakers",
    description:
      "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
    status: "Out of Stock",
    misc: [
      {
        subid: "41",
        name: "Lee Cooper 1",
        description: "Lee Cooper 1..Lee Cooper 1..Lee Cooper 1..Lee Cooper 1"
      },
      {
        subid: "42",
        name: "Lee Cooper 2",
        description: "Lee Cooper 2..Lee Cooper 2..Lee Cooper 2..Lee Cooper 2"
      }
    ]
  }
];
const Home = () => <h1>Home!!</h1>;
const Misc = ({ match }) => {
  console.log("3", match);
  const eachmisc = AllShoes.find(
    ({ id }) => id === match.params.shoeId
  ).misc.find(({ subid }) => subid === match.params.miscid);
  console.log("eachmisc", eachmisc);
  return (
    <div>
      <h3>{eachmisc.name}</h3>
      <p>{eachmisc.description}</p>
    </div>
  );
};
const eachShoe = ({ match }) => {
  //debugger;
  console.log("2", match, "match.params.shoeId", match.params.shoeId);
  const eachitem = AllShoes.find(({ id }) => id === match.params.shoeId);
  //let localshoe = AllShoes.find(id => console.log(id));
  console.log(eachitem);
  return (
    <div>
      <h2>{eachitem.name}</h2>
      <p>{eachitem.description}</p>
      <h4>{eachitem.status}</h4>
      <ul>
        {eachitem.misc.map(subitem => (
          <li key={subitem.subid}>
            <Link to={`${match.url}/${subitem.subid}`}>{subitem.name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Route path={`${match.path}/:miscid`} component={Misc} />
    </div>
  );
};
const ShoesMain = ({ match }) => {
  console.log("1", match);
  return (
    <div>
      <h1>Shoesss!!</h1>
      <ul>
        {AllShoes.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Route path={`${match.path}/:shoeId`} component={eachShoe} />
    </div>
  );
};
class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ width: 1000, margin: "0 auto" }}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shoes">Shoes</Link>
            </li>
            <hr />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/shoes" component={ShoesMain} />
            </Switch>
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;
