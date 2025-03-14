import '../../index.css'; 
import ProjectForm from '../Project/ProjectForm';

function NewProject() {
  return (
    <div className='w=[450px] m-auto  p-[3em]'>
      <h1 className='mb-[0.5em] text-2xl font-semibold'> Criar Projeto </h1>
      <p className='text-[#7b7b7b]'> Crie seu projeto para depois adicionar os seus serviços </p>
      <ProjectForm btnText="Criar projeto"/>    </div>
  );
}

export default NewProject;