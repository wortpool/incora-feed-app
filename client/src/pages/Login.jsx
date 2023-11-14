import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authThunk } from "../store/reducers/auth/authThunk";
import Button from "../components/Button";
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "../utils/validation";

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(loginSchema)
    })
    const error = useSelector(state => state.auth.error)
    const dispatch = useDispatch()
    
    const handleButton = ({username, password}) => {
        dispatch(authThunk({username, password}))
    }   
    
    return ( 
        <div className="login flex items-center justify-center">
            <form className="login-form flex flex-col" onSubmit={handleSubmit(handleButton)}>
                <div className="relative">
                    <div className="label">Username</div>
                    <input {...register('username')} type="text" placeholder="username..."/>
                    <div className="error">{errors.username?.message}</div>
                </div>
                <div className="relative mt-8">
                    <div className="label">Password</div>
                    <input {...register('password')} type="password" placeholder="password..."/>
                    <div className="error">{errors.password?.message}</div>
                </div>
                <div className="text-right mt-4">
                    <Button>Send</Button>
                    {<div className="text-red-600">{error}</div>}
                </div>
            </form>
        </div>
    );
}
 
export default Login;