const WhoToFollowListItem=(who)=>{
    return(`
            <li class="list-group-item">
                    <div class="row">
                        <div class="col-2">
                            <img class="rounded-circle" src=${who.avatarIcon} width="40px" height="40px">
                        </div>
                        <div class="col-7 col-lg-5">
                            <b>${who.userName}</b>
                            <i class="bi bi-patch-check-fill">
                            </i>
                            <br>
                            ${who.handle}
                        </div>
                        <div class="col-5">
                            <button class="btn btn-primary btn-follow ">Follow</button>
                        </div>
                    </div>
            </li>
    `);

}

export default WhoToFollowListItem;