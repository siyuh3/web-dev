const PostItem = (ele) => {
    return (
        // eslint-disable-next-line array-callback-return
        <div className="borderbox" >
            <div className="row p-lg-3">
                <div className="col-1">
                    <img className="rounded-circle d-none d-md-block" src={ele.post.avatarIcon} alt="act" width="40px" height="40px" />
                </div>
                <div className="col-10">
                    <div>
                        <b>{ele.post.userName}</b>
                        <i className="bi bi-patch-check-fill">
                            <span className="gray">{ele.post.handle}</span>
                            -
                            <span className="gray">{ele.post.time}</span>
                        </i>
                    </div>
                    <div>
                        {ele.post.own}
                    </div>
                    <div className="article">
                        <img className="photo borderbox" src={ele.post.photo} alt="act" width="100%" />
                        <div className="mt-lg-2">{ele.post.title}</div>
                        <div className="gray">{ele.post.detail}</div>
                        <div className="gray">{ele.post.link !== '' ?
                            <div>
                                <i className="bi bi-link-45deg" />{ele.post.link}
                            </div>
                            : ''}</div>
                    </div>
                    <div className="row mt-lg-2">
                        <div className="col-3 gray"><i className="bi bi-chat" />{ele.post.comment}</div>
                        <div className="col-3 gray"><i className="fa wd-color-lg">&#xf079;</i>{ele.post.transfer}</div>
                        <div className="col-3 gray"><i className="bi bi-heart" />{ele.post.like}</div>
                        <div className="col-3 gray"><i className="fa wd-color-lg">&#xf093;</i></div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PostItem;