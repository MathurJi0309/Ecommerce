import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Reducer/cartSlice";
import { showDetail } from "../Reducer/detailSlice";
import { deleteProduct, editProduct } from "../Reducer/product2Slice";
import { toast } from "react-toastify";

const Product = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editId, setEditId] = useState(-1);
  const [title, setTitle] = useState(props.product.title);
  const [thumbnail, setThumbnail] = useState(props.product.thumbnail);
  const [description, setDescription] = useState(props.product.description);
  const [price, setPrice] = useState(props.product.price);

  const { product } = props;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  const updateProduct = () => {
    let payload = {
      id: editId,
      title: title,
      thumbnail: thumbnail,
      price: price,
      description: description,
    };

    console.log("payload", payload);
    dispatch(editProduct(payload));
    toast.dark(`product is updated`, {
      position: "top-right",
    });
    setEditId(1);
  };


  const handleDelete = (product) => {
    dispatch(deleteProduct({ id: product.id }));
  };

  const handledetail = (product) => {
    dispatch(showDetail(product));
    navigate("/detail");
  };
  return (
    <div>
      {editId === product.id ? (
        <div className="updateform">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="titleUp"
          />
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className="imgupdate"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="discriptionupdate"
          />

          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="priceupdate"
          />

          <button
            onClick={() => {
              updateProduct(product);
            }}
          >update Product</button>
        </div>
      ) : (
        <div key={product.id} className="product">
          <h3>{product.title}</h3>
          <img
            src={product.thumbnail}
            alt={product.title}
            onClick={() => handledetail(product)}
          />
          <div className="details">
            <span>{product.description}</span>
            <span className="price">Rs.{product.price}</span>
          </div>
          <button onClick={() => handleAddToCart(product)}>Add to cart</button>
          <div className="edit-delete">
            <button
              onClick={() => {
                setEditId(product.id);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDelete(product);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Product;
