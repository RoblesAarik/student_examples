console.log(products);

class App extends React.Component {
  constructor() {
    super(props);
    this.state = {
      products,
      name: "Aarik",
    };
  }
  render() {
    return (
      <div>
        <h1>Hi There {this.state.name}!</h1>
        <div>
          {products.map(product => {
            return (
              <ul>
                <li>
                  {product.name} {products.price}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
