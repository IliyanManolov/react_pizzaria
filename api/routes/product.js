const Product = require("../models/Product")

const router = require("express").Router();


//CREATE

router.post("/", async (req, res) =>{
  const newProduct = new Product(req.body)

  try{
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)
  }
  catch(err){
    res.status(500).json(err)
  }
})


router.get("/find/:id", async (req, res) =>{
  try{
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  }
  catch(err){
    res.status(500).json(err);
  }
})

router.get("/", async (req, res) =>{
  const qCategory = req.query.category;

  try{
    let products;

    if (qCategory){
      products = await Product.find({category:{
        $in:[qCategory],
      }})
    }
    else{
      products = await Product.find();
    }

    res.status(200).json(products);

  }
  catch(err){
    res.status(500).json(err);
  }
})


module.exports = router;