import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {type:String, required:true, trim:true, maxLength:30, },
    description: {type:String, required:true, trim:true, minLength: 10, maxLength: 200, },
    createdAt: {type:Date, required:true, default: Date.now },
    hashtags: [{ type:String, trim:true,}],
    meta: {
        views: { type:Number, required:true, default:0 },
        rating: { type:Number, required:true, default:0 },
    },
});

videoSchema.static("formatHashtags", function(hashtags) {
    return hashtags.split(",")
    .map(word => word.startsWith('#') ? word : `#${word}`)
});

const movieModel = mongoose.model("video", videoSchema);

export default movieModel;