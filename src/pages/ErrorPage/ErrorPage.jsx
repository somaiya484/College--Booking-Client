import { Link, useRouteError } from 'react-router-dom';
import errorPageImage from "../../assets/error.avif"

const ErrorPage = () => {
    const { error, errorStatus: errorMessage }  = useRouteError();
    return (
            <div className='flex  flex-col md:flex-col  align-middle justify-center p-7 text-red-700 bg-white'>
                <div>
                    <img src={errorPageImage} className='w-2/4 mx-auto h-[450px]'/>
                </div>
                <div className=' mt-5 flex  items-center justify-center '>
                    <div className=' text-center'>
                        <p className=' text-xl font-bold  mb-3'>
                            {error?.message}
                        </p>
                        <Link
                            to='/'
                            className=' py-4 font-bold text-blue-700 text-base'
                        >
                            Back To The Home page
                        </Link>
                    </div>
                </div>
            </div>
    );
};



export default ErrorPage;