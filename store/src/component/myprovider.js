import { useEffect ,useState } from "react";
import themeContext from "./mycontext";

export default function themeProvider({children}) {

    const [mode, setMode] = useState('light');
 
    useEffect(() => {
        const themMode = localStorage.getItem('mode');
        if (themMode) {
            setMode(themMode);
        }
    }, []);





    const toggeltheme = () => {
        setMode(prev => {
            const newMode = prev === 'light' ? 'dark' : 'light';
            localStorage.setItem('mode', newMode);
            return newMode;
        });
    }


    return (
        <themeContext.Provider value={{ mode, toggeltheme }}>
            {children}
        </themeContext.Provider>
    );




}