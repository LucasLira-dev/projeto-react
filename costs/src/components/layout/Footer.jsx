import '../../index.css';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-[#222] text-white p-[3em] text-center mt-auto'>
     <ul className='flex justify-center space-x-4 m-[0.1em]'>
        <li className='hover:text-[#ffbb33] text-[1.5em] cursor-pointer'>
            <FaFacebook/>
        </li>

        <li className='hover:text-[#ffbb33] text-[1.5em] cursor-pointer'>
            <FaInstagram/>
        </li>

        <li className='hover:text-[#ffbb33] text-[1.5em] cursor-pointer'>
            <FaLinkedin/>
        </li>

     </ul>
     <p className='mt-[2em]'> <span className='font-bold text-[#ffbb33]'> Costs </span> &copy; 2025</p>
    </footer>
  );
}

export default Footer