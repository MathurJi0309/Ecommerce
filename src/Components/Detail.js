import { useSelector } from "react-redux";


const Detail = () => {
    const details = useSelector((state) => state.detail);
    return (  
        <>
        <div>
            <div className="productdetail">
                <h1 className="producttitle">{details.detailpro[0].title}</h1>
                <img className="productimg" src={details.detailpro[0].thumbnail} alt={details.detailpro[0].title}/>
                <h1>{details.detailpro[0].description}</h1>
                <h1>{details.detailpro[0].stock}</h1>
                <h1>{details.detailpro[0].price}</h1>
                <h1>{details.detailpro[0].discountPercentage}</h1>
                <h1>{details.detailpro[0].rating}</h1>
                <h1>{details.detailpro[0].category}</h1>
                <h1>{details.detailpro[0].brand}</h1>
            </div>
        </div>
        </>
    );
}
 
export default Detail;