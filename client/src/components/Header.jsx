import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/reducers/auth";
import { FeedRouteNames } from "../routes";


const Header = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch()

    return (
        <header className="h-20 flex items-center border-b-[1px] border-white">
            <div className="container">
                <nav className="nav flex items-center justify-between">
                    { isAuth ? (
                        <>
                            <div className="">
                                <ul className="flex items-center text-2xl text-white gap-6">
                                    {FeedRouteNames.map(el => (
                                        <li key={el.link}>
                                            <Link to={el.link}>{el.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="">    
                                <ul className="flex items-center text-2xl text-white">
                                    <li>{localStorage.getItem('username')}</li>
                                    <div className="h-6 w-[1px] bg-white mx-4"></div>
                                    <li onClick={() => dispatch(logout())}>logout</li>
                                </ul>
                            </div>
                        </>
                        ) : (
                            <ul className="flex items-center justify-end text-2xl text-white">
                                <li className="">Login</li> 
                            </ul>
                        )
                    }
                </nav>
            </div>
        </header>
    );
}
 
export default Header;