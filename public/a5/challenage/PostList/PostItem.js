const PostItem=(post)=>{
    return(`
        <div class="borderbox">
            <div class="row p-lg-3">
                <div class="col-1">
                    <img class="rounded-circle d-none d-md-block" src="${post.avatarIcon}" alt="act" width="40px" height="40px">
                </div>
                
                <div class="col-10">
                        <div>
                            <b >${post.userName}</b>
                            <i class="bi bi-patch-check-fill">
                            <span class="gray">${post.handle}</span>
                            -
                      
                            <span class="gray">${post.time}</span>
                            
                            </i>
                 
                        </div>
                        
                        <div>
                            ${post.own}
                        </div>
                        <div class="article">
                            <img class="photo borderbox" src="${post.photo}" alt="act" width="100%">
                            <div class="mt-lg-2">${post.title}</div>
                            <div class="gray">${post.detail}</div>
                            <div class="gray"><i class="bi bi-link-45deg "></i>${post.link}</div>
                        </div>
                        <div class="row mt-lg-2">
                            <div class="col-3 gray"><i class="bi bi-chat"></i>&nbsp${post.comment}</div>
                            <div class="col-3 gray"><i  class="fa wd-color-lg">&#xf079;</i>&nbsp${post.transfer}</div>
                            <div class="col-3 gray"><i class="bi bi-heart"></i>&nbsp${post.like}</div>
                            <div class="col-3 gray"><i class="fa wd-color-lg">&#xf093;</i></div>
                        </div>
                </div>
            </div>
        </div>
    `);
}

export default PostItem;