import '../../index.css'

function Select({ text, name, options, handleOnChange, value }){
    return(
        <div className='flex flex-col mb-[1em]'>
            
            <label
             htmlFor={name} 
             className='mb-[0.6em] font-bold'>
                 {text}
             </label>

            <select 
            name={name} 
            id={name} 
            className='p-[0.7em] border-none 
            '>
                <option> Selecione uma opção </option>
                {options.map(option => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select;