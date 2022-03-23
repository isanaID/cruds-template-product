import { useState } from 'react';
// import Input from '../../components/Input';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './index.scss';

const Tambah = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [status, setStatus] = useState(false);
  const history = useHistory();

  const handlecheck = () => {
    setStatus(!status);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/product', {
      name: name,
      price: price,
      stock: stock,
      status: status
    });
    history.push('/');
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={ handleSubmit }>
          <div className="field">
            <label className='label'>Nama Produk</label>
          <input 
            className='form-control' name="name" type="text" placeholder="Nama Produk..." label="Nama" value={ name } onChange={ (e) =>setName(e.target.value) }/>
          </div>
          <div className="field">
            <label className='label'>Harga Produk</label>
          <input className='form-control' name="price" type="number" placeholder="Harga Produk..." label="Harga" value={ price } onChange={ (e) =>setPrice(e.target.value) }/>
          </div>
          <div className="field">
            <label className='label'>Stock Produk</label>
          <input className='form-control' name="Stock" type="number" placeholder="Stock Produk..." label="Stock" value={ stock } onChange={ (e) =>setStock(e.target.value) }/>
          </div>
          <input name="status" type="checkbox" label="Active" value={ status } onChange={handlecheck}/> Active <br />

          <button type="submit" className="btn btn-primary">Tambah</button>
        </form>
      </div>
    </div>
  )
}

export default Tambah;