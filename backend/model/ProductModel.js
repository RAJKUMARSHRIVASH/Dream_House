const express = require("express")
const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title : {type : String, required : true},
    image : {type : [String], required : true},
    price : {type : String, required : true},
    category : String,
    description : String
    
})

const ProductModel = mongoose.model("product",productSchema);

module.exports = {
    ProductModel
}

/*

{
  "title" : "wells-leather-tuxedo-chair",
  "category" : "single sofa",
  "price" : "$1,000",
  "description": "This sleek and modern sofa is the perfect addition for your home. It features comfortable cushions and a sturdy frame.",
  "image": ["https://drive.google.com/file/d/1erkuG6UPkz2BtBqrTxGNe1F_hSYDHLZ7/view?usp=sharing"]
}

{
  "title" : "Ventura Outdoor Lounge coll MC18",
  "category" : "outdoor",
  "price" : "$10,000",
  "description": "This sleek and modern sofa is the perfect addition to any outdoor place. It features comfortable cushions and a sturdy frame.",
  "image": ["https://drive.google.com/file/d/1uVsDPPbklDsSA70cU1zJWwmBxZdamleA/view?usp=sharing"]
}

{
  "title" : "tate-9-drawer-dresser",
  "category" : "drawer",
  "price" : "$2,000",
  "description": "This sleek and modern drawer is the perfect addition to your home. It features comfortable cushions and a sturdy frame.",
  "image": ["https://drive.google.com/file/d/1zDBDRFG4eYaDc_t7cm181zuv61lpPpAt/view?usp=sharing"]
}

{
  "title" : "Tate Bedroom Collection",
  "category" : "bedroom beds",
  "price" : "$8,000",
  "description": "This sleek and modern bed is the perfect addition to your living room. It features comfortable cushions and a sturdy frame.",
  "image": ["https://drive.google.com/file/d/1vr1X27klDPUfBIt_1m_GVHkYH6R4GB0N/view?usp=sharing"]
}

{
  "title" : "black-plaid-pillow",
  "category" : "pillow",
  "price" : "$200",
  "description": "This sleek and modern pillow is the perfect addition to your beds and sofa. It features comfortable cushions and a sturdy frame.",
  "image": ["https://drive.google.com/file/d/1LuHaa2E5WNLrJ-8TrF5iT-OciuVXX_dh/view?usp=sharing"]
}

{
  "title" : "stilt-whitewashed-oak-wood-floor-mirror",
  "category" : "mirror",
  "price" : "$500",
  "description": "This modern mirror is the perfect addition to your home. It features decorative and a sturdy frame.",
  "image": ["https://drive.google.com/file/d/1vPSmUeAgu09SCU8Gb3oFJl8jlmZ-b2ll/view?usp=sharing"]
}

{
  "title" : "knife stand",
  "category" : "kitchen set knife stand",
  "price" : "$500",
  "description": "This knife stand is the perfect addition to your kitchen. It features decorative and a sturdy frame.",
  "image": ["https://drive.google.com/file/d/1CySbms2rA-Ny9HwsVc5ULjIKm_k2GR2p/view?usp=sharing"]
}

{
  "title" : "Sphere Planters",
  "category" : "Plnaters",
  "price" : "$500",
  "description": "This planters and decorative stand is the perfect addition to your home yard and hall. It features decorative and a sturdy frame.",
  "image": ["https://drive.google.com/file/d/1NYlk5HoWZttsid-Na83jPrDISEMpBcWZ/view?usp=sharing"]
}

*/