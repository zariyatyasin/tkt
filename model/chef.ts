import { Schema, model, Types, models } from "mongoose";

 
const chefSchema = new Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    profileImage: { type: String, default: null },
    experience: { type: String, required: true },
    cuisines: { type: [String], required: true },
    location: { type: String, required: true },
    contact: {
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);
// Make sure to use `models` to avoid overwriting the model during hot reloads in development
const Chef = models.Chef || model("Chef", chefSchema);

export default Chef;
