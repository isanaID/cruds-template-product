import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/api/v2/product');
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/api/v2/product/${id}`);
    getProducts();
  };

  return(
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..."/>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-left">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
            { products.map((product, index) => (
                        <tr key={ product.id }>
                        <td>{ index+ 1}</td>
                        <td>{ product.name }</td>
                        <td className="text-left">Rp.{ product.price }</td>
                        <td className="text-center">
                          <Link to={`/detail/${product._id}`} className="btn btn-sm btn-info">Detail</Link>
                          <Link to={`/edit/${product._id}`} className="btn btn-sm btn-warning">Edit</Link>
                          <button onClick={ () => deleteProduct(product._id) } className="btn btn-sm btn-danger">Delete</button>
                        </td>
                      </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home;