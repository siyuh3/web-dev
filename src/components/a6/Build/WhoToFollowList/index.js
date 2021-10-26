import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";

//implement a function called the same as the file that
// renders a list of people as shown here on the right
//The WhoToFollowList function should iterate over the
// who array and use the function WhoToFollowListItem to
// generate the list shown above
const WhoToFollowList = () => {
    return (
            <ul className="list-group rightblock">
                <li className="list-group-item">
                    <b>Who to follow</b>
                </li>
                {
                    who.map(who => {
                        return(
                            <WhoToFollowListItem who={who}/>
                  );
                  })
                 }
            

            </ul>
); }
export default WhoToFollowList;