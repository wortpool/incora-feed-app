import { useSelector } from "react-redux";
import Article from "./Article";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { allFeedsType } from "../utils/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { FeedRouteNames } from "../routes";

const Feed = () => {
    const {feedType, feeds} = useSelector(state => state.feeds)
    const [isOpened, setIsOpened] = useState(false) 
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
      const compareLinks = FeedRouteNames.some((el) => el.link === location.pathname)
      if(!compareLinks) navigate('/all-feeds')
    }, [])

    return (
      <div className="">
        {feedType && feedType === allFeedsType
          ? (
            <>
              {
                feeds.map((el) => (
                  <Article key={el.id} el={el}/>
                ))
              }
              <div className="text-center my-4">
                <Button onClick={() => setIsOpened(true)}>Add</Button>
              </div>
              <Modal isOpened={isOpened} setIsOpened={setIsOpened}/>
            </>  
          )
          : feeds.filter(el => el.category.toLowerCase() === feedType).map((el) => (
              <Article key={el.id} el={el}/>
            ))}
      </div>
    );
}
 
export default Feed;