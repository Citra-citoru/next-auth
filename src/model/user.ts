import mongoose from "mongoose";
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
}, { timestamps: true }
);
const user = mongoose.models.users || mongoose.model("users", userSchema);
export default user;