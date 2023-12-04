require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const { User, validate } = require("./models/user");
const bcrypt = require("bcrypt");
const authRoutes = require("./routes/auth");
const Product = require('./models/product');
const Order = require('./models/order')

connection();
app.use(express.json());
app.use(cors({
}));

app.use("/api/auth", authRoutes);

app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.get('/api/search', async (req, res) => {
    const searchTerm = req.query.q;

    const searchResults = await Product.find({ name: { $regex: new RegExp(searchTerm, 'i') } });


    res.json({ results: searchResults });
});



app.post("/api/users", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (user)
            return res
                .status(409)
                .send({ message: "User with given email already Exist!" });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});



app.get("/getproducts", async (req, res) => {
    try {
        const product = await Product.find();
        res.send(product)
    }
    catch (error) {
        res.status(500).send(error)
    }
});

app.post('/createorders', async (req, res) => {
    try {
        const order = new Order(req.body);

        await order.save();
        res.status(201).send(order);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/getorders", async (req, res) => {
    try {
        const order = await Order.find();
        res.send(order)
    }
    catch (error) {
        res.status(500).send(error)
    }
});

app.delete('/deleteItem/:orderId', async (req, res) => {
    const { orderId } = req.params;

    try {
        await Order.findByIdAndDelete(orderId);
        res.status(200).json({ message: 'Order deleted successfully' });

    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/addTyre', async (req, res) => {
    try {
        const { name, description, price, inStock, deliveryTime, label, imgUrl, imgUrlLarge } = req.body;

        const newTyre = new Product({
            name,
            description,
            price,
            inStock,
            deliveryTime,
            label,
            imgUrl,
            imgUrlLarge,
        });

        console.log(label);

        await newTyre.save();

        res.status(201).json({ message: 'Tyre added successfully' });
    } catch (error) {
        console.error('Error adding tyre:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
