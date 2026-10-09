import React, { useEffect } from 'react'

function Products(){
    useEffect(()=>{
        function getData(){
            try{
                fetch ('https://dummyjson.com/products')
            }catch(e){
                console.log(e)
            }
            finally{
                console.log('finally block executed')
            }

        }
        getData();
    },[])
    return (
        <div>
            <h2>Products</h2>
        </div>
);
}

export default Products;
