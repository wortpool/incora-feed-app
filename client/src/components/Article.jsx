import { Link } from "react-router-dom";

const Article = ({el: {id, urlToImage, title, content, author, publishedAt}}) => {
    return ( 
        <Link to={`/article/${id}`} className="flex h-36 text-white mt-10">
            <div className="max-w-[280px] w-full">
                <img src={urlToImage} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col justify-between ml-4">
                <div>
                    <div className="text-xl">{title}</div>
                    <div className="text-sm">{content}</div>
                </div>
                <div>
                    <div>{author}</div>
                    <div>{publishedAt.replaceAll('-','.').slice(0, 10)}</div>
                </div>
            </div>
        </Link>
    );
}
 
export default Article;