import { revalidatePath } from "next/cache";
import { connectToDb } from "./utils";
import { Post } from "./models";

 

 export const addPost =async(formData)=>{
    const {title,desc,slug,userId}=Object.fromEntries(formData);

    try{
        connectToDb();
        const newPost=newPost({
            title,
            desc,
            slug,
            userId,
        });

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog");

    }catch(err){
        console.log(err);
        return{error:"Something went wrong"};
    }
 };

 export const deletePost=async(formData)=>{
    const {id}=object.fromEntries(formData);

    try{
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
    }catch(err){
        console.log(err);
        return{error:"something went wrong"};
    }
 };