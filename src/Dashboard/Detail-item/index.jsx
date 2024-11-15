import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const [dataProduct, setDataProduct] = useState({});
  const { id } = useParams();

  const endpoint = `https://6718b4807fc4c5ff8f4aabe4.mockapi.io/products/${id}`;
  const detailData = async () => {
    try {
      const response = await axios.get(`${endpoint}`);
      setDataProduct(response.data);
      console.log('res detail', response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const navigate = useNavigate()


  useEffect(() => {
    detailData();
  }, []);

  return (
    <div className="mx-20 py-10">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <div className="text-gray-600 text-lg mb-6">
          <p className='cursor-pointer' onClick={() => navigate('/')}>Beranda</p>
        </div>

        {/* Product Details */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Product Image */}
          <div className="flex-1">
            <img
              src={dataProduct.image}
              alt={dataProduct.name}
              className=" w-full h-[400px] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>

          {/* Product Information */}
          <div className="flex-1 flex flex-col gap-6 ">
            <p className="text-3xl font-semibold text-gray-800">Nama Produk: {dataProduct.name}</p>
            <p className="text-lg text-gray-600">Jenis Sampah: {dataProduct.type}</p>
            <p className="text-lg text-gray-600">Berat: {dataProduct.weight} kg</p>
            <p className="text-xl font-bold text-green-600">Rp. {dataProduct.price}</p>
            
            <p className="text-gray-600 italic">Alamat: {dataProduct.address}</p>
          </div>
          
        </div>
        <div className='mt-10'>
          <p className='mb-2 text-2xl font-medium'>Detail Produk:</p>
        <p className=" text-gray-700 text-base">{dataProduct.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-6 justify-between mt-10">
          <button className=" w-full  h-16 px-6 py-2 bg-green-700 text-xl text-white rounded-lg shadow-md hover:bg-green-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500">
            Ubah Data
          </button>
          <button className="w-full  h-16 px-6 py-2 bg-red-700 text-white text-xl rounded-lg shadow-md hover:bg-red-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500">
            Hapus Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
