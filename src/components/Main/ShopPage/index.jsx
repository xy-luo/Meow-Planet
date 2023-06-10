import Card from '../../Card';
import Button from '../../Button';

import productList from './itemList.js';
import "../../../css/ShopPage.css";

import { useState } from 'react';


function ShopPage() {
    const [sortBy, setSortBy] = useState("0");
    const [filterBy, setFilterBy] = useState("all");
    const [cart, setCart] = useState({
        itemList: [],
        totalQty: 0,
        totalAmount: 0,
    })
    const [cartShow, setCartShow] = useState(false);


    // get the cards data after filtering and sorting
    const getCardData = () => {
        const sortList = ["amountOfReviews", "price", "price", "review"];
        let showProductList;
        // filter
        if (filterBy == "all") {
            showProductList = productList;
        }
        else {
            showProductList = productList.filter(item => item.productDetails.category === filterBy);
        }

        // sort
        if (sortBy === "1") {
            showProductList.sort((a, b) => a.productDetails[sortList[sortBy]] - b.productDetails[sortList[sortBy]]);
        }
        else {
            showProductList.sort((a, b) => -(a.productDetails[sortList[sortBy]] - b.productDetails[sortList[sortBy]]));
        }

        return showProductList;
    }
    // render cards
    const renderCards = () => {
        return (getCardData().map(item => {
            return (
                <Card
                    prefixClass="item"
                    cardImg={<img
                        className="card-img"
                        src={require(`../../../img/shopItemImgs/${item.imgSrc}`)}
                        alt={item.imgAlt}
                    />}
                    cardTitle={<h3 className="card-title">{item.productDetails.name}</h3>}
                >

                    <div className="card-text">
                        <p><span className="item-list-label">Price: </span>{item.productDetails.price} </p>
                        <p><span className="item-list-label">Reviews: </span>{item.productDetails.review}/5 ({item.productDetails.amountOfReviews}) </p>

                        <Button className='card-button'
                            ariaLabel="add the item to shop cart"
                            onClick={() => {
                                addToCart(item);
                                setCartShow(true);
                            }}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </Card>
            );
        }))
    };

    // render cart list
    const renderCartList = () => {
        const cartItemList = (cart.itemList.map((cartItem, index) => {
            return (
                <li><div className='cart-item-section'>
                    <img
                        className="cart-item-img"
                        src={require(`../../../img/shopItemImgs/${cartItem.imgSrc}`)}
                        alt={cartItem.imgAlt}
                    />
                    <div className='cart-item-qty-wrapper'>
                        <Button className='cart-item-button' ariaLabel="click to decrease the quantity of the item by 1" onClick={() => { cartQtyMinus(cartItem) }} disabled={cartItem.qty === 1}>-</Button>
                        <span className='cart-item-qty'>{cartItem.qty}</span>
                        <Button className='cart-item-button' ariaLabel="click to increase the quantity of the item by 1" onClick={() => { cartQtyPlus(cartItem) }}>+</Button>
                        <Button className='cart-item-button delete-button' ariaLabel="click to remove the item from the shop cart" onClick={() => { deleteFromCart(cartItem, index) }} >x</Button>
                    </div>
                    <p className='cart-item-subtotal'><span>$</span>{(cartItem.qty * cartItem.price).toFixed(2)}</p>
                </div></li>
            )
        }))

        return (
            <div className='cart-detail-wrapper'>
                <ul className='cart-items'>
                    {cartItemList}
                </ul>
                <p className="cart-amount-section">Total: $<span>{Math.abs(cart.totalAmount).toFixed(2)}</span></p>
            </div>
        )
    }

    // update cart
    // add item to cart
    const addToCart = (item) => {
        let updateCart = false;
        cart.itemList.forEach(ele => {
            if (ele.name === item.productDetails.name) {
                ele.qty += 1;

                updateCart = true;
            }
        })
        if (!updateCart) {
            cart.itemList.push({ name: item.productDetails.name, qty: 1, price: item.productDetails.price, imgSrc: item.imgSrc, imgAlt: item.imgAlt })
        }

        let cartQty = cart.totalQty + 1
        let cartSubtotal = cart.totalAmount + item.productDetails.price
        setCart({
            ...cart,
            totalAmount: cartSubtotal,
            totalQty: cartQty,
        })
    }
    // decrease the quantity of the item in cart by 1
    const cartQtyMinus = (cartItem) => {
        cartItem.qty -= 1;

        let cartQty = cart.totalQty - 1;
        let cartSubtotal = cart.totalAmount - cartItem.price;
        setCart({
            ...cart,
            totalAmount: cartSubtotal,
            totalQty: cartQty,
        })
    }
    // increase the quantity of the item in cart by 1
    const cartQtyPlus = (cartItem) => {
        cartItem.qty += 1;

        let cartQty = cart.totalQty + 1;
        let cartSubtotal = cart.totalAmount + cartItem.price;
        setCart({
            ...cart,
            totalAmount: cartSubtotal,
            totalQty: cartQty,
        })
    }
    // remove the item from cart
    const deleteFromCart = (cartItem, index) => {
        let cartQty = cart.totalQty - cartItem.qty;
        let cartSubtotal = cart.totalAmount - cartItem.price * cartItem.qty;

        cart.itemList.splice(index, 1);
        setCart({
            ...cart,
            totalAmount: cartSubtotal,
            totalQty: cartQty,
        })
    }


    // render whole page
    return (
        <div className="shop-page">

            <div className='shop-page-header'>
                <h2 className='shop-page-title'>
                    Shop
                </h2>
                {/* toolbar of the shop page */}
                <div className='shop-toolbar'>
                    {/* left part of the toolbar for filter and sort operation */}
                    <div className='toolbar-items-wrapper'>
                        <div className='toolbar-item'>
                            <label className='toolbar-item-label'>
                                <span className='toolbar-item-text'>SORT BY </span>
                                <select
                                    className='toolbar-item-input'
                                    name='SortBy'
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="0" selected>Popularity</option>
                                    <option value="1">Price: Low to High</option>
                                    <option value="2">Price: High to Low</option>
                                    <option value="3">Rivews</option>
                                </select>
                            </label>
                        </div>
                        <div className='toolbar-item'>
                            <label className='toolbar-item-label'>
                                <span className='toolbar-item-text'>CATEGORY </span>
                                <select
                                    className='toolbar-item-input'
                                    name='filterBy'
                                    onChange={(e) => setFilterBy(e.target.value)}
                                >
                                    <option value="all">All</option>
                                    <option value="treat">Treat</option>
                                    <option value="toy">Toy</option>
                                    <option value="cat supplies">Cat Supplies</option>
                                    <option value="cat furniture">Cat Furniture</option>
                                    <option value="travel">Travel</option>
                                    <option value="cat wear">Cat Wear</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    {/* right part of the toolbar for operations about the cart*/}
                    <div className='toolbar-cart-wrapper'>
                        <Button className='cart-button'
                            onClick={() => setCartShow(!cartShow)}>
                            <i class="gg-shopping-cart"></i>
                            {cart.totalQty === 0 ? <></> : <div className='cart-qty'>{cart.totalQty}</div>}
                        </Button>
                        {!cartShow ? <></> : renderCartList()}
                    </div>
                </div>
            </div>

            {/* cards */}
            <div className='shop-cards'>
                {renderCards()}
            </div>
        </div>
    )
}

export default ShopPage;