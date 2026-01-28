import{ useState } from 'react';

export default function Products() {

   const[count, setCount] = useState(0);


    return (

        <div id='product-page'>
            
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>




        </div>


    )



}