import React, {useEffect} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
import service from '../../services/whoService'

const selectAllWho = (state) => state.who.who;
const WhoToFollowList = () => {
    const who = useSelector(selectAllWho);
    useEffect(() =>
        service.findAllWho()
            .then(who => who), []);
    return (
        <ul className="list-group">
            <li className="list-group-item fw-bold">
                Who to follow
            </li>
            {
                who.map(who => {
                    return(
                        <WhoToFollowListItem who={who}/>
                    );
                })
            }
        </ul>
    );
}

export default WhoToFollowList;