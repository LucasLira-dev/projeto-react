import '../../index.css'
import ButtonSubmit from '../form/ButtonSubmit';
import Input from '../form/Input';
import Select from '../form/Select';

import { useEffect, useState } from 'react';

function ProjectForm({ btnText}){

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/categories',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
        .then(data=> setCategories(data))
        .catch((error) => console.error('Error:', error));
    })

    return(
       <form action="" className='w-full my-[2em]'>
          
            <Input 
            type="text" 
            text="Nome do projeto" 
            name="name" 
            placeholder="Insira o nome do projeto" />

            <Input 
            type="number" 
            text="Orçamento total" 
            name="budget" 
            placeholder="Insira o orçamento total" />

            <Select
             name="category_id" 
             text="Selecione a categoria" options={categories} />

            <ButtonSubmit text={btnText}/>
           
       </form>
    )
}

export default ProjectForm;