const express = require('express');
const router = express.Router();

const shopApi = require('../models/shop');


// helper function to ensure shopId
function getShopId(req,res) {
    const shopId = req.params.shopId;
    // if shopId missing lets throw error
    if(shopId === '' || shopId === undefined || shopId === null) {
        const message = `shopId parameter missing from URL. Please check parameters and try again`;
        console.log(message);
        res.status(500).json({
            error: 'parameter missing',
            message,
        });
        return;
    }
    return shopId;
}


// Get All Shops Route
router.get('/',  async (req, res) => {
    try {
        const retrievedShops = await shopApi.getAllShops();
        console.log(retrievedShops);
        res.status(200).json(retrievedShops);
        return;
    } catch(e) {
        const message = `Failed to retrieve all shops.
            Please check mongod service and make sure it is running`;
        console.log(message)
        console.error(e);
         res.status(500).json({
             error: e,
             message,
         });
         return;
    }
})

// Get Shop By Id Route
router.get('/:shopId', async (req, res) => {
    const shopId = getShopId(req, res);

    // Lets try to get the shop using the Id passed in URL param
    try {
        // get shop by id and return the data
        const retrievedShop = await shopApi.getShopById(shopId);
        return res.status(200).json(retrievedShop);
    }  catch(e) {
        // if any error occurs lets return back error
        //     and error message for user
        const message = `failed to retrieve shop using shopId
        "${shopId}". Please make sureId exists`;
        console.log(message)
        console.error(e);
        res.status(404).json({
            error: e,
            message,
        });
        return;
    }
})

// Create new Shop Route
router.post('/',  async (req, res) => {
    const shopData = req.body;
    try {
        const shopCreated =  await shopApi.createShop(shopData);
        res.status(201).json(shopCreated);
        return;
    } catch(e) {
        const message = `failed to create shop using data from request body
            ${JSON.stringify(shopData, null, 4)}
            , please check request body and try again`;
        console.log(message);
        console.log(e);
        res.status(500).json({
            error: e,
            message,
        });
        return;
    }

})

// Delete Shop By Id Route
router.delete('/:shopId', async (req, res) => {
    // ensure shopId
    const shopId = getShopId(req, res);
     // Lets try to get the shop using the Id passed in URL param
     try {
        // get shop by id and return the data
        await shopApi.deleteShopById(shopId);
        const message = `shop with shopId ${shopId}, has deleted successfully`;
        res.status(202).json(message);
        return;
    }  catch(e) {
        // if any error occurs lets return back error
        //     and error message for user
        const message = `failed to retrieve shop using shopId
            "${shopId}". Please make sureId exists`;
        console.log(message)
        console.error(e);
        res.status(500).json({
            error: e,
            message,
        });
        return;
    }
})

// Update Shop By ID Route
router.put('/:shopId', async (req, res) => {
    // ensure shopId
    const shopId = getShopId(req, res);
    // get data to update shop
    const shopPayload = req.body;

     try {
        await shopApi.updateShopById(shopId, shopPayload);
        const message = `shop with shopId ${shopId}, has updated successfully`;
        res.status(204).json(message);
        return;
     } catch(e) {
        // if any error occurs lets return back error
        //     and error message for user
        const message = `failed to create shop using data from request body
            ${JSON.stringify(shopPayload, null, 4)}
            ,please check request body and try again`;
        console.log(message)
        console.error(e);
        res.status(500).json({
            error: e,
            message,
        });
        return;
     }
});



module.exports = {
    shopRouter: router
};