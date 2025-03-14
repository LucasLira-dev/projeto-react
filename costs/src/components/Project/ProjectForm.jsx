import '../../index.css'
import ButtonSubmit from '../form/ButtonSubmit';
import Input from '../form/Input';
import Select from '../form/Select';

function ProjectForm({ btnText}){
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

            <Select name="category_id" text="Selecione a categoria" />

            <ButtonSubmit text={btnText}/>
           
       </form>
    )
}

export default ProjectForm;