import { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { setAuth, setUser } from "./store/reducers/auth";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('auth')){
      dispatch(setUser({username: localStorage.getItem('username' || '')}))
      dispatch(setAuth(true))
    }
  }, [])

  return (
    <div className="app">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
