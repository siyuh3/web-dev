const PostSummaryItem=(post)=>{
    return(`
        <div class="borderbox">
            <div class="row p-lg-3">
                        <div class="col-10 mt-sm-2">
                            <div class="wd-trending-topic">${post.topic}</div>
                            <b>${post.userName}</b>
                            <i class="bi bi-patch-check-fill">
                                -
                                <span>${post.time}</span>
                            </i>
                            <br>
                            <b>${post.title}
                            </b>
                        </div>
    
                        <div class="col-2 mt-sm-2">
                            <img class="wd-rounded-logo" src=${post.image} height="100%" width="100%">
                        </div>
                    </div>
        </div>
    `);
}
export default PostSummaryItem;