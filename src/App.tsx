import React, {useEffect} from 'react';
import {useTypedDispatch, useTypedSelector} from "./redux/store/store";
import {set} from "./redux/reducers/themeReducer";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import "./styles/main.scss"
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {

    const theme = useTypedSelector(state => state.theme);
    const dispatch = useTypedDispatch()

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleChangeTheme = () =>{
        const next = theme === "dark" ? "light" : "dark"
        dispatch(set(next))

    }
    // if user hasn`t seen the weclome sreen --> return <Welcome Screen/>
    // if user is not auth --> login or register screen
    return (
        <div className="App">
            {/*<WelcomePage />*/}
            <ShopPage />
        </div>
    );
}

export default App;
