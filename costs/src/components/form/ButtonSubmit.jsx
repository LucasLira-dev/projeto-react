import '../../index.css'

function ButtonSubmit({ text }){
    return(
        <div>
              <button 
             className='bg-[#222] text-[#fff] px-[1em] py-[0.5em] transition duration-[0.5s] cursor-pointer border-none  hover:text-[#ffbb33]'>
                 {text}
             </button>
        </div>
      
    )
}

export default ButtonSubmit;