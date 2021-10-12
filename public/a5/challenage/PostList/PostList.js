import posts from "./posts.js";
import PostItem from "./PostItem.js";
const PostList = () =>{
    return (`
        ${
           posts.map(w=>{return(PostItem(w))
           }).join('')
    }
    
    `);
}
export default PostList;