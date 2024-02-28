import { Link } from "react-router-dom"

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-rose-800 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmácia GEN</div>

            <div className='flex gap-3 cursor-pointer'>
                        <Link to='/home' className='hover:bg-rose-900 py-1 px-4 rounded-3xl duration-300'>Home</Link>
                        <Link to='/categorias' className='hover:bg-rose-900 py-1 px-4 rounded-3xl duration-300'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:bg-rose-900 py-1 px-4 rounded-3xl duration-300'>Cadastrar Categoria</Link>
                    </div>
          </div>
        </div>
    </>
  )
}

export default Navbar