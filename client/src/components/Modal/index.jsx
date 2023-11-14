import { useForm } from 'react-hook-form'
import './Modal.css'
import { useDispatch } from 'react-redux'
import { addNewArticle } from '../../store/reducers/feeds/feedsThunk'
import { yupResolver } from "@hookform/resolvers/yup"
import { addNewsSchema } from '../../utils/validation'
import Button from '../Button'

const Modal = ({isOpened, setIsOpened}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(addNewsSchema)
    })
    const dispatch = useDispatch()
    
    const inputs = ['title', 'description', 'category', 'urlToImage', 'publishedAt', 'content', 'author']

    const submit = (data) => {
        setTimeout(() => {
            dispatch(addNewArticle(data))
        }, 1000)
        setIsOpened(false)
    }   

    return ( 
        <div className={`overlay animated ${isOpened?'show':''}`}>
            <div className="modal">
                <svg
                    height="200"
                    viewBox="0 0 200 200"
                    width="200"
                    onClick={() => setIsOpened(false)}
                    >
                    <title />
                    <path fill='white' d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg>
                <form className="add-form flex flex-col items-center" onSubmit={handleSubmit(submit)}>
                    {inputs.map((el, index) => (
                        <div key={index} className="relative mt-2">
                            <div className="label">{el}</div>
                            <input {...register(el)} type="text" placeholder={`${el}...`} className='px-[5px] py-[2px]'/>
                            <div className="error text-red-500">{errors[el]?.message}</div>
                        </div>
                    ))}
                     <div className="text-right mt-4">
                        <Button>Add</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Modal;