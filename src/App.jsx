import EffectUse from "./components/EffectUse"
import CountUse from "./components/CountUse"
import MemoUse from "./components/MemoUse"
import {Helmet} from "react-helmet";
import AxiosComponent from "./components/AxiosComponent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast.success("Wow so easy!",{
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home-React Redux</title>
        <meta name="description" content="Helmet application" />
    </Helmet>

    <button onClick={notify}>Notify!</button>

    <ToastContainer />

    <h1>React - Redux -Axios</h1>

    <AxiosComponent/>

    {/* <MemoUse/>

    <CountUse/>

    <EffectUse/> */}


    </>
  )
}

export default App
