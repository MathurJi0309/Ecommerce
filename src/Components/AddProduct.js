import { useState } from "react";
import { toast } from "react-toastify";

const AddProduct = () => {

const [title,setTitle]=useState('');
const [src,setSrc]=useState('');
const [price,setPrice]=useState('');
const [discription,setDiscription]=useState('');

const handleadd=(e)=>{
    e.preventdefault()

    toast.info(`Product is deleted`,{
        position:"top-right",
    });

}

    return (  
        <>
        <form className="">
            <input
            type="text"
            value={title}
            name="title"
            placeholder="type here the title of the product"
            onChange={(e)=>{setTitle(e.target.value)}}
            />
            <input
            type="text"
            value={src}
            name="src"
            placeholder="enter here the url of the product"
            onChange={(e)=>{setSrc(e.target.value)}}
            />
            <input
            type="text"
            value={price}
            name="price"
            placeholder="enter the price of the product"
            onChange={(e)=>{setPrice(e.target.value)}}
            />
            <input
            type="text"
            value={discription}
            name="discription"
            placeholder="enter discription of product"
            onChange={(e)=>{setDiscription(e.target.value)}}
            />
            <button onClick={(e)=>{handleadd()}}>
                Add Product
            </button>
        </form>
        </>
    );
}
 
export default AddProduct;