import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    avatarUrl: String,
    email: { type: String, required: true, unique: true},
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    name: { type: String, required: true},
    location: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video"}],
});

userSchema.pre('save', async function() {
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 5);
    }
});

const User = mongoose.model("User", userSchema);
export default User;