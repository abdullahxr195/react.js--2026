import{ useState } from 'react';
import { Link } from 'react-router-dom';
export default function Products() {

   const[count, setCount] = useState(0);



        const supproduct=[

            {id:1, name:'Product A', price:100 ,image:''},
            {id:2, name:'Product B', price:150 ,image:''},
            {id:3, name:'Product C', price:200 ,image:''}



        ]




    return (

        <div id='product-page'>
            
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <button onClick={() => setCount(count * 2)}>Double</button>
            <button onClick={() => setCount(0)}>Reset</button>




          <div>
            <ul>

                {
                    
                    supproduct.map((item)=><li key={item.id}>

                        <div>
                            <h3>{item.name}</h3>
                            <img width={100} src={item.image} alt={item.name}/>
                            <Link to='/subproduct' state={item}>View</Link>



                        </div>







                    </li>)





                }





            </ul>



          </div>




        </div>


    )



}