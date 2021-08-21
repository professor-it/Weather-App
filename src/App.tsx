import React from 'react';
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import {fetchData} from "./store/actions/weather";
import {useActions} from "./hooks/useActions";
import {useTypesSelector} from "./hooks/useTypesSelector";
import Loader from "./components/Loader/Loader";

function App() {
  const {city, id, loading, error, converter} = useTypesSelector(state => state.weather)
  const {fetchData} = useActions()

  React.useEffect(() => {
    fetchData(id)
  }, [city])

  if (loading) {
    return (
      <div
        style={{height: '100vh', display: "flex", justifyContent: "center", alignItems: "center"}}
      >
        <Loader/>
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
    <div className='app'>
      <Sidebar converterCtoF={converter}/>
      <Main converterCtoF={converter}/>
    </div>
  );
}

export default App;
