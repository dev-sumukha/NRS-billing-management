import { Item } from "../models/items.models.js";

export const createItem = async (req, res) => {
    const { itemName, company, rate, caseQuantity, stock } = req.body;

    if(!itemName || !company || !rate || !caseQuantity || !stock){
        return res.status(400).json({success: false, message: "All fields are mandatory"});
    }
    
    try {
        const item = Item.create({itemName,company,rate,caseQuantity,stock});

        if(!item){
            return res.status(400).json({success: false})
        }

        res.status(201).json({success: true, message: "Item Created Successfully"});
    } catch (error) {
        console.log("Error ",error);
        res.status(500).json({success: false, message: "Item Creation failed"});
    }
}

export const deleteItem = async (req,res) => {
    try {
        const { _id } = req.params;

        const deletedTask = await Item.deleteOne({_id:_id});
        
        if(!deletedTask){
            return res.status(400).json({success: false, message: "Something went wrong"});
        }

        res.status(200).json({success: true, message: "Item deleted"});
    } catch (error) {
        console.log("Error ",error);
    }
}