import{ useState } from 'react';

export default function Products() {

   const[count, setCount] = useState(0);


    return (

        <div id='product-page'>
            
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <button onClick={() => setCount(count * 2)}>Double</button>
            <button onClick={() => setCount(0)}>Reset</button>


        </div>


    )



}