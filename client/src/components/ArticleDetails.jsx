import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle } from "../store/reducers/feeds/feedsThunk";
import { FeedRouteNames, RouteNames } from "../routes";
import Button from "./Button";
import { allFeedsType } from "../utils/constants";
import ArrowBack from "../assets/ArrowBack";
import { setFeedType } from "../store/reducers/feeds";

const ArticleDetails = () => {
    const [info, setInfo] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()
    const feedType = useSelector(state => state.feeds.feedType)
    const dispatch = useDispatch()

    useEffect(() => {
        const getOneArticle = async () => {
            const response = await axios.get(`http://localhost:3005/news/${id}`)
            setInfo(response.data)
        }   

        getOneArticle()

        //when a window is reloading, i will save a feedType
        dispatch(setFeedType(localStorage.getItem('feedType')))
    }, [])

    const navigateBack = () => {
        if(feedType===allFeedsType) navigate(RouteNames.MAIN)
        FeedRouteNames.filter(el => {
            el.name.toLowerCase() === feedType && navigate(el.link) 
        })
    }

    const handleButton = () => {
        dispatch(deleteArticle(id))
        navigateBack()
    }

    return ( 
        <div>
            <div className="container">
                <div className="flex flex-col items-center">
                    <div className="text-white max-w-[1200px] mt-6">
                        <div className="flex justify-between">
                            <ArrowBack onClick={navigateBack}/>
                            <div className="text-center my-4">
                                <Button onClick={handleButton} >Remove</Button>
                            </div>
                        </div>
                        <img src={info.urlToImage} alt="" />    
                        <h3 className="text-3xl mt-4">{info.title}</h3>
                        <p className="text-xl">{info.content}</p>
                    </div>
                </div>
            </div>   
        </div>
    );
}
 
export default ArticleDetails;