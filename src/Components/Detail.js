import { useSelector } from "react-redux";


const Detail = () => {
    const details = useSelector((state) => state.detail);
    return (  
        <>
        <div>
            <h1>
                <h1>{details.detailpro[0].title}</h1>
                <img src={details.detailpro[0].thumbnail}/>
            </h1>
        </div>
        </>
    );
}
 
export default Detail;