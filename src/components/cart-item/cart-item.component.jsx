import {CartItemContainer, ItemDetails} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { imageurl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageurl} alt={`${name}`} />
      <ItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ₦{price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;