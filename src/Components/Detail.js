import { useSelector } from "react-redux";


// ---------------------------------------------------- dispatch is used to send the action-----------------------------------------------------

const Detail = () => {
    const details = useSelector((state) => state.detail);
    return (  
        <>
        <div>
            <div className="productdetail">
                <h1 className="productdetaildiscription">{details.detailpro[0].category} {">"} {details.detailpro[0].brand}</h1>
                <div className="productdetailinfo">
                <div className="productdetailinfoimg">
                <img className="productdetailinfoimage" src={details.detailpro[0].thumbnail} alt={details.detailpro[0].title}/>

                </div>

                <div className="productdetailinfodetail">
                <h1 className="productdetailinfodetailtitle">{details.detailpro[0].title}</h1>
                <h1 className="productdetailinfodetaildescription">DESCRIPTION:-{details.detailpro[0].description}</h1>
                <div
                className="detailproductdiv">
                <h1 className="detailproductdivprice">Price:{details.detailpro[0].price}</h1>
                <h1 className="detailproductdivdiscount">discount:{details.detailpro[0].discountPercentage}%</h1>
                </div>
                <div className="mainproductdiv">
                <h1 className="detailproductdivprice">stock remaining:{details.detailpro[0].stock}</h1>
                <h1 className="detailproductdivdiscount">Rating:{details.detailpro[0].rating}/5</h1>
                </div>
                </div>
                </div>
                
            </div>
        </div>
        </>
    );
}
 
export default Detail;