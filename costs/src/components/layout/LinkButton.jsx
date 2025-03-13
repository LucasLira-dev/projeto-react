import { Link } from 'react-router-dom';
import '../../index.css';

function LinkButton({ to, text }) {
    return(
        <Link to={to} className='bg-[#222] text-[#fff] px-[1em] py-[0.5em] transition duration-[0.5s]  hover:text-[#ffbb33]'>
            {text}
        </Link>
    )
}

export default LinkButton;