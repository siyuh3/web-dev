import React, {useState}from "react";
import {useDispatch} from "react-redux";
import {likeTweet} from "../../services/twitterService";

const TweetStats = ({tweet}) => {
    const dispatch = useDispatch();
    //const [localTweet, setLocalTweet] = useState(tweet);
    const likeClickHandler = () => {
        // let liked = false;
        // tweet.liked? const liked = false : const liked = true
        let _tweet = {}
        if (!tweet.liked){
            _tweet = {...tweet, stats: {...tweet.stats, likes: tweet.stats.likes +1}, liked: true}
        }else{
            _tweet = {...tweet, stats: {...tweet.stats, likes: tweet.stats.likes -1}, liked: false}
        }

        likeTweet(dispatch, _tweet);
    };
    if(!tweet.stats) return null;
    return (<div className="row mt-2">
        <div className="col">
            <i className="far fa-comment me-2"></i>
            {tweet.stats.comments}
        </div>
        <div className="col">
            <i className="fas fa-retweet me-2"></i>
            {tweet.stats.retweets}
        </div>
        <div className="col" onClick={likeClickHandler}>
            {
                tweet.liked &&
                <i className="fas fa-heart me-2"
    style={{color: tweet.liked ? 'red' : "white"}}/>
            }
            {
                !tweet.liked &&
                <i className="far fa-heart me-2"></i>
            }
            {tweet.stats.likes}
        </div>
        <div className="col">
            <i className="fas fa-external-link-alt me-2"></i>
        </div>
    </div>)
}

export default TweetStats;
