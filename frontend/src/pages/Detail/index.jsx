import { Link } from "react-router-dom";
import './index.scss';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/product/${id}`);
    setProduct(response.data);
  };

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>: { product._id } </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: { product.name }</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: Rp.{ product.price }</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: { product.stock }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail;