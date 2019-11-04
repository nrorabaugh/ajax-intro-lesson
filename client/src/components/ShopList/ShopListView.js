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
       axios.get('/api/shop')
        .then((response) => {
            console.log(response.data)
            this.setState({shopList: response.data})
        })
    }

    //  Stretch goal is to update page after every change

    createNewShop = async () => {
        const newShop = {
            name: this.state.newShopName,
        };
        axios.post('/api/shop', newShop)
        await this.componentDidMount()
    }

    onFavoriteClick = async (shopId) => {
        const like = {isLiked: true}
        axios.put(`/api/shop/${shopId}`, like)
        await this.componentDidMount()
    }

    onUnFavoriteClick = async (shopId) => {
        const dislike = {isLiked: false}
        axios.put(`/api/shop/${shopId}`, dislike)
        await this.componentDidMount()
    }

    onShopDeleteClick = async (shopId) => {
        axios.delete(`/api/shop/${shopId}`)
        await this.componentDidMount()
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