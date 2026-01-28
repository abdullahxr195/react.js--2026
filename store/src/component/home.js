import { useState } from "react"



export default function Home() {

const[show, setShow] = useState(false);

const handleClick = () => {
    setShow(!show);
}

    return (

        <div id='home-page'>
            <button onClick={handleClick}> {show ? 'Hide' : 'Show'} Welcome Message </button>

        {

                show && <img width={200} src="https://i.pinimg.com/736x/1d/a2/cf/1da2cf9466f40336862a5b553524b5e6.jpg" alt="Welcome Banner" />

        }


        </div>


    )



}