import ArticleDetails from "../components/ArticleDetails"
import Login from "../pages/Login"
import Main from "../pages/Main"

// думав перше не робити масив обєктів, а просто назви, а лінки з назвів робив, 
// але думаю, вдруг хтось схоче інші лінки зробити, тому залишаю так
export const FeedRouteNames = [
    {name: 'All Feeds', link: '/all-feeds'},
    {name: 'Apple', link: '/apple-feeds'},
    {name: 'Tesla', link: '/tesla-feeds'},
    {name: 'Business', link: '/business-feeds'},
]

export const RouteNames = {
    'LOGIN': '/login',
    'MAIN': '/all-feeds',
    'ARTICLE': '/article/:id',
}


export const publicRoutes = [
    {path: RouteNames.LOGIN, exact: true, element: <Login />},]

export const privateRoutes = [
    {path: RouteNames.MAIN, element: <Main />},
    {path: RouteNames.ARTICLE, element: <ArticleDetails />},
    {path: '*', element: <Main />},
]