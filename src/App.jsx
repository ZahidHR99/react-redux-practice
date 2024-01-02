import EffectUse from "./components/EffectUse"
import CountUse from "./components/CountUse"
import MemoUse from "./components/MemoUse"
import {Helmet} from "react-helmet";

function App() {

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home-React Redux</title>
        <meta name="description" content="Helmet application" />
    </Helmet>

    <h1>React - Redux</h1>

    <MemoUse/>

    <CountUse/>

    <EffectUse/>


    </>
  )
}

export default App
