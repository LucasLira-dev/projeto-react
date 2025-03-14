import '../../index.css'

function Input({ type, text, name, placeholder, handleOnChange, value }){
    return(
        <div className='flex flex-col mb-[1em]'>
            
            <label 
            htmlFor={name} 
            className='mb-[.6em] font-bold'>
                 {text}
             </label>

            <input 
            type={type} 
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            className='p-[.7em] border-none placeholder:text-[#7b7b7b] '/>
        </div>
    )
}

export default Input;