const Button = ({children, ...rest}) => {
    return ( 
        <button {...rest} className="px-6 py-2 border border-white rounded-md">{children}</button>
    );
}
 
export default Button;