import React from "react";
const WhoToFollowListItem=({
                               who = {
                                   avatarIcon: '../../../images/nasa2.png',
                                   userName: 'NASA',
                                   handle: 'NASA',
                               }
                           })=>{
    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img  src={who.avatarIcon} width="40px" height="40px" className="rounded-circle"/>
                    </div>
                    <div className="col-7 col-lg-5">
                        <b>{who.userName}</b>
                        <i className="bi bi-patch-check-fill">
                        </i>
                        <br/>
                            {who.handle}
                    </div>
                    <div className="col-5">
                        <button className="btn btn-primary btn-follow ">Follow</button>
                    </div>
                </div>
            </li>
        </>
        );
}



export default WhoToFollowListItem;