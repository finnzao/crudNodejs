const ProductModel = require('../Models/ProductModel');

class ProductController{

    async store(req,res){
        try {
            const {title,descripition,price}=req.body;
            if(!title || !descripition || !price){
                return res.status(400).json({message:"Title,Descripition and Price is necessary"})
            }
            const productAlreadyExists=await ProductModel.findOne({title});
            if(productAlreadyExists){
                return res.status(400).json({message:"Product already exists "})
            }
            const creatProduct = await ProductModel.create(req.body);
            return res.status(200).json(creatProduct);
        }catch(error){
            return res.status(404).json({message:"Connection is down,please try again"})
        }
      
    }

    async index(req,res){

        try {
            const products= await ProductModel.find();

            return res.status(200).json(products)

        } catch (error) {
            return res.status(404).json({message:"Connection is down,please try again"})
        }

    }
    async update(req,res){
        try {
            const {id}=req.params;
            await ProductModel.findByIdAndUpdate(id,req.body);
        } catch (error) {
            return res.status(404).json({message:"Failed to update"})
        }
    }
    async show(req,res){
        
        try {
            const {id} = req.params;

            const product = await ProductModel.findById(id);
            if(!product){
                return res.status(400).json({message:"Product does not exists !"});

            }

            return res.status(200).json(product)
        } catch (error) {
            return res.status(404).json({message:"Verication is wrong,please try again"});       
        }


    }

    async delete(req,res){
        try {
            const {id} = req.params;

            const productDeleted = await ProductModel.findByIdAndDelete(id);
    
            if(!productDeleted){
                return res.status(404).json({message:"Product does not exists"});
            }
    
            return res.status(200).json({message:"Product deleted"})
        } catch (error) {
            return res.status(404).json({message:"Failed to delete product"});
        }
    }
};

module.exports=new ProductController();
