import { useEffect, useState } from 'react';
// import Input from '../../components/Input';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import './index.scss';

const Tambah = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [status, setStatus] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  const handlecheck = () => {
    setStatus(!status);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/v2/product/${id}`, {
      name: name,
      price: price,
      stock: stock,
      status: status
    });
    history.push('/');
  };

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/api/v2/product/${id}`);
    setName(response.data.name);
    setPrice(response.data.price);
    setStock(response.data.stock);
    setStatus(response.data.status);
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={ handleSubmit }>
          <div className="field">
            <label className='label'>Nama Produk</label>
          <input 
            className='form-control' name="name" type="text" placeholder={ name } label="Nama" value={ name } onChange={ (e) =>setName(e.target.value) }/>
          </div>
          <div className="field">
            <label className='label'>Harga Produk</label>
          <input className='form-control' name="price" type="number" placeholder={ price } label="Harga" value={ price } onChange={ (e) =>setPrice(e.target.value) }/>
          </div>
          <div className="field">
            <label className='label'>Stock Produk</label>
          <input className='form-control' name="Stock" type="number" placeholder={ stock } label="Stock" value={ stock } onChange={ (e) =>setStock(e.target.value) }/>
          </div>
          <input name="status" type="checkbox" label="Active" value={ status } onChange={handlecheck}/> Active <br />

          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Tambah;