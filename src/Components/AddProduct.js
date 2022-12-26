import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {

const [title,setTitle]=useState('');
const [src,setSrc]=useState('');
const [price,setPrice]=useState('');
const [discription,setDiscription]=useState('');
const [add,setAdd] =useState(false);
const navigate=useNavigate()

const handleadd=()=>{
    // e.preventdefault()
    

    toast.info(`Product is deleted`,{
        position:"top-right",
    });
    setAdd(true)
    navigate("/")

}

    return (
        
        
        <div>
        {
            add?(
                <h1>hi i am here</h1>
            ):(
                <div className="input">
            <h1 >Add New Product here</h1>
        <form className="addproduct">
            <input
            type="text"
            value={title}
            name="title"
            placeholder="type here the title of the product"
            onChange={(e)=>{setTitle(e.target.value)}}
            className="titleinput"
            />
            <input
            type="text"
            value={src}
            name="src"
            placeholder="enter here the url of the product"
            onChange={(e)=>{setSrc(e.target.value)}}
            className="imginput"/>

            <input
            type="text"
            value={price}
            name="price"
            placeholder="enter the price of the product"
            onChange={(e)=>{setPrice(e.target.value)}}
            className="titleinput"
            />
            <input
            type="text"
            value={discription}
            name="discription"
            placeholder="enter discription of product"
            onChange={(e)=>{setDiscription(e.target.value)}}
            className="titleinput"
            />
            <button onClick={()=>handleadd}>
                Add Product
            </button>
        </form>
        </div>
            )
        }
        </div>
    );
}
 
export default AddProduct;