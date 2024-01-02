import EffectUse from "./components/EffectUse"
import CountUse from "./components/CountUse"
import MemoUse from "./components/MemoUse"
import {Helmet} from "react-helmet";
import AxiosComponent from "./components/AxiosComponent";

function App() {

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home-React Redux</title>
        <meta name="description" content="Helmet application" />
    </Helmet>

    <h1>React - Redux -Axios</h1>

    <AxiosComponent/>

    {/* <MemoUse/>

    <CountUse/>

    <EffectUse/> */}


    </>
  )
}

export default App
