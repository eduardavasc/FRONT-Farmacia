import "./Home.css";
import homeLogo from "../../assets/home3.png";
import { useNavigate } from "react-router-dom";
import ListaCategorias from "../../components/categorias/listaCategorias/ListaCategorias";
function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-pink-50 flex justify-center">
        <div className="container grid grid-cols-2 text-rose-900">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja bem-vinde!</h2>
            <p className="text-2xl">Encontre aqui tudo que precisa:</p>

            <div className="flex justify-around gap-4">
              <button
                className="rounded bg-rose-800 text-white py-2 px-4 hover:font-bold"
                onClick={() => navigate("/categorias")}
              >
                Ver categorias
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className="w-2/3" />
          </div>
        </div>
      </div>
      <ListaCategorias />
    </>
  );
}

export default Home;
