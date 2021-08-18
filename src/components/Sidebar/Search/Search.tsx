import React from "react";
import classes from "./Search.module.scss";
import SearchIcon from '@material-ui/icons/Search';
import {useActions} from "../../../hooks/useActions";
import {useTypesSelector} from "../../../hooks/useTypesSelector";

const Search: React.FC = () => {
  const {fetchCity, setCity} = useActions()
  const {cities} = useTypesSelector(state => state.weather)
  const [focusSearch, setFocusSearch] = React.useState(false)
  const [inputCity, setInputCity] = React.useState('')

  const inputChange = (e:any) => {
    setInputCity(e.target.value)
    if (!focusSearch) {
      setFocusSearch(true)
    }
    if (e.target.value !== '') {
      fetchCity(e.target.value)
    }
  }

  const keyPress = (e:any) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      setCity(cities[0].title, cities[0].woeid)
    }
  }

  return (
    <div>
      <div className={classes.container}>
        <input
          className={classes.search}
          type="search" placeholder='Search'
          onChange={inputChange}
          value={inputCity}
          onKeyPress={keyPress}
          onFocus={() => setFocusSearch(!focusSearch)}
        />
        <div className={classes.searchBtn}><SearchIcon/></div>
        {focusSearch && inputCity !== '' ?
          cities.length !== 0 ?
            <div className={classes.popup}>
              {cities.map((item, index) => {
                return (
                  <div key={index} onClick={() => setCity(item.title, item.woeid)}>{item.title}</div>
                )
              })}
            </div>
            : <div className={classes.popup}>City not found</div>
          : null
        }
      </div>
    </div>
  )
}

export default Search