// import classes from './Cart.module.css';
// import Modal from '../UI/Modal';
// import Cartcntxt from '../../store/Cart-Context';
// import React,{ useContext } from 'react';
// import CartItem from './CartItem';
// const Cart=props=>{
//     const cartcntx=useContext(Cartcntxt);
//     let totalAmount =0;
// cartcntx.items.forEach(item=>{
//   totalAmount=Number(item.quantity)*item.price+totalAmount;
//   totalAmount.toFixed(2);
// });
// const hasItems=cartcntx.items.length>0;

//     const CartItems=(
//         <ul className={classes['cart-items']}>{
//             cartcntx.items.map((item) => (
//             <CartItem key={item.id}
//             name={item.name}
//             quantity={item.quantity}
//             price={item.price}
//       />
//         ))}</ul>);
    
//     return <Modal onClose={props.onClose}>
//         {CartItems}
//         <div className={classes.total}>
// <span>Total Amount</span>
// <span>{totalAmount}</span>
//         </div>
//         <div className={classes.actions}>
//             <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
//             {hasItems &&<button className={classes.button}>Order</button>}
//         </div>
//     </Modal>

// }
// export default Cart;

// import { useContext } from 'react';

// import Modal from '../UI/Modal';
// import CartItem from './CartItem';
// import classes from './Cart.module.css';
// import CartContext from '../../sources/cart-context';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/Cart-Context';
import React,{ useContext } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `Rs.${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;