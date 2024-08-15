import { Schema, model, Types,models } from "mongoose";
 
interface IMenuItem {
  name: string;
  description: string;
  price: number;
}

interface IChefMenu {
  chef: Types.ObjectId; // Reference to the Chef
  menuItems: IMenuItem[];
}

const menuItemSchema = new Schema<IMenuItem>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },

    
  },
  { _id: false }
);

const chefMenuSchema = new Schema<IChefMenu>(
  {
    chef: { type: Schema.Types.ObjectId, ref: "Chef", required: true },
    menuItems: { type: [menuItemSchema], required: true },
  },
  { timestamps: true, versionKey: false }
);


const ChefMenu = models.ChefMenu || model("ChefMenu", chefMenuSchema);

export default ChefMenu;

 

