import './shop.css'
import React, { Component } from 'react'
import axios from 'axios'

import ShopViewItem from './ShopListItem';


export default class ShopListView extends Component {
    // initial state of component is empty array
    //   fill shopList with data from backend node server

    state = {
        shopList: [],
        newShopName: '',
    }

    componentDidMount() {
        // get all shops and update state 'shopList' with results
        //    route for get all shops is '/api/shop'
    }

    //  Stretch goal is to update page after every change

    createNewShop = () => {
        const newShop = {
            name: this.state.newShopName,
        };
        // create new shop using 'newShopName' in state
        //    route for creation is '/api/shop'
        //    refresh page to see results
    }

    onFavoriteClick = (shopId) => {
        // update shop isLiked status using existing shop data and shopId
        //    route for update is /api/shop/
        //    refresh page to see results
    }

    onUnFavoriteClick = (shopId) => {
        // update shop isLiked status using existing shop data and shopId
        //    route for update is /api/shop/
        //    refresh page to see results
    }

    onShopDeleteClick = (shopId) => {
        // delete shop using existing shopId
        //    route for delete is /api/shop/
        //    refresh page to see results
    }

    onNewShopeNameChange = (event) => {
        const newShopName = event.target.value;
        this.setState({newShopName: newShopName})
    }





    render () {
        const shopListElements = this.state.shopList.map((shop) => {
            return (
            <ShopViewItem
                shopId={shop._id}
                onFavoriteClick={this.onFavoriteClick}
                onUnFavoriteClick={this.onUnFavoriteClick}
                onShopDeleteClick={this.onShopDeleteClick}
                name={shop.name}
                description={shop.description}
                isLiked={shop.isLiked}/>)
        })
        return (
        <div className="shop-list-container">
            <img className="hero-image" src="/hero.jpg"/>
            <div className="header">Shop list</div>

            <input
                type="string"
                name="newShopName"
                placeholder="Shop Name"
                required="required"
                onChange={this.onNewShopeNameChange}
                value={this.state.newShopName}/>
            <button
                onClick={() => this.createNewShop()}>Create Shop</button>

            {shopListElements}

        </div>)
    }
}