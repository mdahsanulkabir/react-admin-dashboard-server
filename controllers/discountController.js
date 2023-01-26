const DISCOUNT = require('../models/discount/discountModel');

//create a new authorization role
const createDiscount = async (req, res) => {
    console.log(req.body);
    const { discountName, discountRate } = req.body;
    //add doc to db
    try {
        const newDiscount = await DISCOUNT.create({
            discountName,
            discountRate
        })
        res.status(200).json(newDiscount);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getDiscounts = async ( req, res ) => {
    try {
        const discounts = await DISCOUNT.find({})
        res.status(200).json(discounts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



module.exports = {
    createDiscount,
    getDiscounts
}