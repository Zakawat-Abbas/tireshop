const { Product } = require("../models/product");
const router = require("express").Router();

router.get("/getproducts", async (req, res) => {
    try {
        const user = await Product.find();
        res.send(user)
    }
    catch (error) {
        res.status(500).send(error)
    }
});

module.exports = router;
