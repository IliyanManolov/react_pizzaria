const Cart = require("../models/Cart");

const router = require("express").Router();

router.post("/", async (req, res) =>{
  const newCart = new Product(req.body)

  try{
    const savedCart = await newCart.save()
    res.status(200).json(savedCart)
  }
  catch(err){
    res.status(500).json(err)
  }
})

router.put("/:id", async (req, res) =>{
  try{
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,{
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart)
  }
  catch (err){
    res.status(500).json(err)
  }
})

router.delete("/:id", async (req, res) => {
  const {id} = req.params;
  try{
    await Cart.findByIdAndDelete(id);
    res.status(200).json("Cart has been deleted");
  }
  catch(err){
    res.status(500).json(err)
  }
})


router.get("/find/:id", async (req, res) =>{
  const {id} = req.params;
  try{
    const cart = await Cart.findById(id);
    res.status(200).json(cart);
  }
  catch(err){
    res.status(500).json(err);
  }
})


module.exports = router;