const receipts = [
  {
    person: "Karolin",
    order: {
      main: "Burrito",
      protein: "Organic Tofu",
      rice: "Purple Rice",
      sauce: "Green Crack",
      toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
      drink: "Korchata",
      cost: 22,
    },
    paid: false,
  },
  {
    person: "Mark",
    order: {
      main: "Rice Bowl",
      protein: "Ginger Soy Chix",
      rice: "Sticky Rice",
      sauce: "Korilla",
      toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
      drink: "Korchata",
      cost: 19,
    },
    paid: false,
  },
  {
    person: "Matt",
    order: {
      main: "Salad Bowl",
      protein: "Organic Tofu",
      rice: "none",
      sauce: "K'lla",
      toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
      drink: "Sparkling Blood Orange Soda",
      cost: 20,
    },
    paid: true,
  },
];

class Receipt extends React.Component {
  render() {
    console.log(this);
    return (
      <div>
        <h2>{this.props.receipt.person}</h2>
        <h5>
          <span>Main: </span>
          {this.props.receipt.order.main}
        </h5>
        <h5>
          <span>Protein: </span>
          {this.props.receipt.order.protein}
        </h5>
        <h5>
          <span>Rice: </span>
          {this.props.receipt.order.rice}
        </h5>
        <h5>
          <span>Sauce: </span>
          {this.props.receipt.order.sauce}
        </h5>
        <h5>
          <span>Drink: </span>
          {this.props.receipt.order.drink}
        </h5>
        <h5>
          <span>Cost: </span>
          {this.props.receipt.order.cost}
        </h5>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    receipts,
  };
  render() {
    return (
      <div>
        <h1>Korilla</h1>
        <div className="container">
          {this.state.receipts.map(receipt =>
            receipt.paid ? "" : <Receipt receipt={receipt} />
          )}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector(".container"));
