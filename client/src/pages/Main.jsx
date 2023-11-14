import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FeedRouteNames } from "../routes";
import Feed from "../components/Feed";
import { useDispatch, useSelector } from "react-redux";
import { setFeedType } from "../store/reducers/feeds";
import { fetchFeeds } from "../store/reducers/feeds/feedsThunk";

const Main = () => {
    const location = useLocation();
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.feeds.isLoading)
    
    useEffect(() => {
        FeedRouteNames.forEach(route => {
            if(route.link === location.pathname){ 
                dispatch(setFeedType(route.name.toLowerCase()))
                localStorage.setItem('feedType', route.name.toLowerCase())
            }
        })
    }, [location.pathname, dispatch])
    
    useEffect(() => {
        // timeout для того, щоб видно було loading
        setTimeout(() => {
            dispatch(fetchFeeds())
        }, 100)
    }, [])

    return ( 
        <div className="feeds">
            <div className="container"> 
                {!isLoading ? <Feed /> : <div className="text-4xl text-white flex justify-center mt-20"><p>News is loading...</p></div>}
            </div>   
        </div>
    );
}
 
export default Main;