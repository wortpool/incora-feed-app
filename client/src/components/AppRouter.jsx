import { Navigate, Route, Routes } from "react-router-dom";
import { RouteNames, privateRoutes, publicRoutes } from "../routes";
import { useSelector } from "react-redux";

const AppRouter = () => {
    const isAuth = useSelector(state => state.auth.isAuth)

    return (
        <>
            <Routes>
                {isAuth 
                    ? privateRoutes.map(route => <Route key={route.path} path={route.path} element={route.element}/>)
                    : publicRoutes.map(route => <Route key={route.path} path={route.path} element={route.element}/>)
                }
            </Routes>
            <Navigate to={!isAuth && RouteNames.LOGIN} />
        </> 
    );
}
 
export default AppRouter;