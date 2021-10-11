import post from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () =>{
    return(`
    
    ${

        post.map(w=>{return(PostSummaryItem(w));
        }).join('')
    }
    
    `);
}
export default PostSummaryList;