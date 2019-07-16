import React, { Component } from 'react'
import axios from 'axios'


export default class ShopListItem extends Component {

    render() {
        const {
            shopId,
            name,
            description,
            isLiked,
            onFavoriteClick,
            onUnFavoriteClick,
            onShopDeleteClick
        } = this.props;

        return (
        <div className="shop-list-item" key={shopId}>
            <div className="title">{name || ''}</div>
            <div className="subtitle">{description || ''}</div>
            {isLiked === true
            ?
            (<i className="material-icons filled"
                onClick={()=> onUnFavoriteClick(shopId)}>
                favorite
            </i>)
            :
            (<i className="material-icons empty"
                onClick={()=> onFavoriteClick(shopId)}>
                favorite_border
            </i>)}
            <i className="material-icons delete"
                onClick={()=> onShopDeleteClick(shopId)}>
                clear
            </i>
        </div>);
    }
}