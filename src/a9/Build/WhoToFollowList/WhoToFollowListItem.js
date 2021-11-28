import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img alt="eeee" src={who.avatarIcon} width="48" className="rounded-circle float-start"/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">{who.userName}
                        <span className="fa-stack" style={{"font-size": "0.5em"}}>
                          <i className="fas fa-circle fa-stack-2x"/>
                          <i className="fas fa-check fa-stack-1x fa-inverse"/>
                        </span>
                    </div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="rounded-pill float-end btn btn-primary mt-1">Follow</button>
                </div>
            </div>
        </li>
    );
}

export default WhoToFollowListItem;
