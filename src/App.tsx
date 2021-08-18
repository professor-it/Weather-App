import React from 'react';
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import {fetchCity, fetchData} from "./store/actions/weather";
import {useActions} from "./hooks/useActions";
import {useTypesSelector} from "./hooks/useTypesSelector";
import classes from "./components/Main/Main.module.scss";

function App() {
  const {city, id, loading, error} = useTypesSelector(state => state.weather)
  const [converter, setConverter] = React.useState(false);
  const {fetchData} = useActions()

  React.useEffect(() => {
    fetchData(id)
  }, [city])

  const changeConverter = () => {
    setConverter(!converter)
  }

  if (loading) {
    return (
      <div
        style={{height: '100vh', display: "flex", justifyContent: "center", alignItems: "center"}}
      >
        Идет загрузка...
      </div>
    )
  }

  if (error) {
    return (
      <div
        style={{height: '100vh', display: "flex", justifyContent: "center", alignItems: "center"}}
      >
        {error}
      </div>
    )
  }

  return (
    <div style={{display: "flex"}}>
      <Sidebar converterCtoF={converter}/>
      <Main converterCtoF={converter}/>
    </div>
  );
}

export default App;
