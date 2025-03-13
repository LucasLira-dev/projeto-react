import '../../index.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
       <section className='w-full flex flex-col items-center justify-center p-[4em]'>

        <h1 className='text-[2.5em] mb-[.5em]'> Bem-vindo ao <span className='text-[#ffbb33] px-[0.2em] bg-[#222]'> Costs </span> </h1>

        <p className='mb-[1.5em] text-[#7b7b7b]'> Comeece a gerenciar os seus projetos agora mesmo </p>

        <LinkButton to="/newproject" text="Criar projeto"/>

        <img src={savings} alt="Costs" className='w-[350px] m-[2em]' />
       </section>
    )
}

export default Home