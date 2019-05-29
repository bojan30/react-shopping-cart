import React,{createContext} from 'react';

export const ProductsContext = createContext();

export class ProductsProvider extends React.Component{
  //initial products state
  constructor(props){
    super(props);
    this.state = {
      products: [
        { id: 6, category: 'phones', name: 'iphone X-TA', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quo doloremque aut quisquam facilis! Tempora mollitia officiis voluptatem vero sint!', src: 'iphonex-TA.jpg', price: 800 },
        { id: 1, category: 'notebooks', name: 'HP Elitebook 1030', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quo doloremque aut quisquam facilis! Tempora mollitia officiis voluptatem vero sint!', src: 'hp-elitebook-1030.jpg', price: 1000 },
        { id: 2, category: 'notebooks', name: 'HP Notebook 15', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quo doloremque aut quisquam facilis! Tempora mollitia officiis voluptatem vero sint!', src: 'hp-notebook-15.jpg', price: 800 },
        { id: 3, category: 'notebooks', name: 'HP Pro Book 450', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quo doloremque aut quisquam facilis! Tempora mollitia officiis voluptatem vero sint!', src: 'HP-ProBook-450-G3.jpg', price: 800 },
        { id: 4, category: 'notebooks', name: 'HP - ProBook - DA0016L - G3', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quo doloremque aut quisquam facilis! Tempora mollitia officiis voluptatem vero sint!', src: 'HP-ProBook-DA0016L-G3.jpg', price: 800 },
        { id: 5, category: 'phones', name: 'iPhone 6s Plus', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quo doloremque aut quisquam facilis! Tempora mollitia officiis voluptatem vero sint!', src: 'iphone-6splus.jpg', price: 800 },
      ],
      boughtProducts: []
    }
  }
  addToCart = (product) => {
    let boughtProductsCopy = this.state.boughtProducts;
    //check to see if there is a product with the same id already in boughtProducts
    if(boughtProductsCopy.find(p => p.id === product.id)){
      console.log('Product is already bought!');
    }
    else{
      boughtProductsCopy.push(product);
      this.setState({
        boughtProducts: boughtProductsCopy
      })
    }
  }
  deleteFromCart = (id) => {
    this.setState({
      boughtProducts: this.state.boughtProducts.filter(product => {
        return product.id !== id
      })
    })
  }
  render(){
    return (
      <ProductsContext.Provider value = {{
        products: this.state.products,
        boughtProducts: this.state.boughtProducts,
        addToCart: this.addToCart,
        deleteFromCart: this.deleteFromCart
      }}>
        {this.props.children}
      </ProductsContext.Provider>
    );
  };
}
