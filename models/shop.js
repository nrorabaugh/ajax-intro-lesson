const mongoose = require('./connection.js');
const Schema = mongoose.Schema;

mongoose.Promise =  global.Promise;

const sampleDescriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nullam ac tortor vitae purus faucibus ornare. Viverra aliquet eget sit amet tellus.',
    'Mi eget mauris pharetra et ultrices neque ornare aenean.',
    'Blandit cursus risus at ultrices. In egestas erat imperdiet sed euismod nisi porta.',
    'Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.',
    'Pulvinar proin gravida hendrerit lectus a.',
    ' Enim facilisis gravida neque convallis a.',
];

function getRandomDescription () {
    return sampleDescriptions[Math.floor(Math.random()*sampleDescriptions.length)];
}

const ShopSchema = new Schema({
    name: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: null,
    },
    isLiked: {
        type: Boolean,
        default: false  ,
    },
});

const ShopModel = mongoose.model('Shop', ShopSchema);
/**
 *  getAllShops
 */
function getAllShops() {
    return ShopModel.find();
}

/**
 *  getShopById
 * @param {string} shopId
 */
function getShopById(shopId) {
    return ShopModel
        .findById(shopId);
}

/**
 *
 * @param {string} shopId
 */
function deleteShopById(shopId) {
    return ShopModel
        .findOneAndDelete({_id: shopId});
}

function updateShopById(shopId, shopData) {
    return ShopModel
        .findOneAndUpdate({_id: shopId}, shopData);
}

function createShop(shopData) {
    if (!shopData.description){
        shopData.description = getRandomDescription();
    }
    return ShopModel.create(shopData);
}

/**
 * setLikeState
 * @param {string} shopId
 * @param {boolean} isLiked
 */
function setLikeState(shopId, isLiked) {
    return ShopModel
    .findOneAndUpdate({_id: shopId, isLiked});
}

module.exports = {
    getShopById,
    deleteShopById,
    updateShopById,
    getAllShops,
    createShop,
    setLikeState
};