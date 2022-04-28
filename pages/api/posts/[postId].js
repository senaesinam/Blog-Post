import dbConnect from "../../../libs/dbConnect";
import Post from "../../../models/post.model"

export default async function handler(req, res) {
    const {method, body, query} = req;

    if (method === "GET") {
        const post = await Post.findById(query.postId);
        if (!post) {
            res.status(404).json({error: "Post not found"});
        }
        res.status(200).json({post});
    } 
    
    else if (method === "PATCH") {
        //checking if the post to be edited existed
let post = await Post.findById(query.postId);
if (!post) {
    res.status(404).json({error: "Post not found"});
}
//finding and updating the post
post = await Post.findByIdAndUpdate(query.postId, body, {new: true});
res.status(200).json({post});
    }

    else if (method === "DELETE") {
                //checking if the post to be edited existed
let post = await Post.findById(query.postId);
if (!post) {
    res.status(404).json({error: "Post not found"});
}
//finding and deleting the post
await Post.findByIdAndDelete(query.postId);
res.status(200).json({msg: "Post deleted successfully"});
    }
}