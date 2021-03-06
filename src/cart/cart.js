import CartItem from '../cart-item/cart-item.js';

class Cart {
  constructor(props) {
    this.props = props;
  }

  // ======== DOM elements========================

  createCartItem(product) {
    const { onRemoveButtonClick } = this.props;
    const cartItem = new CartItem({
      product,
      onRemoveButtonClick,
    });
    return cartItem.render();
  }

  createCart() {
    const cart = document.createElement("div");
    cart.classList.add("cart");

    this.props.selectedProducts.forEach((product) => {
      const cartItem = this.createCartItem(product);
      cart.appendChild(cartItem);
    });

    return cart;
  }

  render() {
    const cart = this.createCart();
    return cart;
  }
}

export default Cart;
