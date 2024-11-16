import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Detail = () => {
  // State variables
  const [dataProduct, setDataProduct] = useState({});
  const [isEditing, setEditing] = useState(false);
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productAddress, setProductAddress] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const { id } = useParams();

  const endpoint = `https://6718b4807fc4c5ff8f4aabe4.mockapi.io/products/${id}`;
  const navigate = useNavigate();

  const showAlert  = () => {
    Swal.fire({
      title: "Data berhasil ditambahkan",
      text: "You clicked the button!",
      icon: "success"
    });
  };

  // Fetch product details
  const detailData = async () => {
    try {
      const response = await axios.get(endpoint);
      setDataProduct(response.data);
      setProductName(response.data.name);
      setProductType(response.data.type);
      setProductWeight(response.data.weight);
      setProductPrice(response.data.price);
      setProductAddress(response.data.address);
      setProductDescription(response.data.description);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Update product data
  const updateData = async () => {
    const updatedData = {
      name: productName,
      type: productType,
      weight: productWeight,
      price: productPrice,
      address: productAddress,
      description: productDescription,
    };

    try {
      const response = await axios.put(endpoint, updatedData);
      setDataProduct(response.data);
      setEditing(false);
      alert('Data berhasil diperbarui!');
    } catch (err) {
      console.error(err.message);
      alert('Terjadi kesalahan saat memperbarui data!');
    }
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setEditing(!isEditing);
  };

  // Tambahkan fungsi deleteData
const deleteData = async () => {
  const confirmDelete = window.confirm(
    'Apakah Anda yakin ingin menghapus data ini?'
  );
  if (confirmDelete) {
    try {
      await axios.delete(endpoint);
      Swal.fire({
        title: 'Data berhasil dihapus!',
        text: 'Produk telah dihapus.',
        icon: 'success',
      });
      navigate('/'); 
    } catch (err) {
      console.error(err.message);
      Swal.fire({
        title: 'Terjadi kesalahan!',
        text: 'Gagal menghapus data.',
        icon: 'error',
      });
    }
  }
};


 
  useEffect(() => {
    detailData();
  }, []);

  return (
    <div className="mx-20 py-10">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <div className="text-gray-600 text-lg mb-6">
          <p className="cursor-pointer" onClick={() => navigate('/')}>
            Beranda
          </p>
        </div>

        {/* Product Details */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Product Image */}
          <div className="flex-1">
            <img
              src={dataProduct.image}
              alt={dataProduct.name}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>

          {/* Product Information */}
          <div className="flex-1 flex flex-col gap-6">
            {isEditing ? (
              <div>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full p-3 border rounded-lg mb-4"
                />
                <input
                  type="text"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="w-full p-3 border rounded-lg mb-4"
                />
                <input
                  type="number"
                  value={productWeight}
                  onChange={(e) => setProductWeight(e.target.value)}
                  className="w-full p-3 border rounded-lg mb-4"
                />
                <input
                  type="number"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="w-full p-3 border rounded-lg mb-4"
                />
                <input
                  type="text"
                  value={productAddress}
                  onChange={(e) => setProductAddress(e.target.value)}
                  className="w-full p-3 border rounded-lg mb-4"
                />
                <textarea
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  className="w-full p-3 border rounded-lg mb-4"
                />
              </div>
            ) : (
              <div>
                <p className="text-3xl font-semibold text-gray-800">
                  Nama Produk: {dataProduct.name}
                </p>
                <p className="text-lg text-gray-600">
                  Jenis Sampah: {dataProduct.type}
                </p>
                <p className="text-lg text-gray-600">
                  Berat: {dataProduct.weight} kg
                </p>
                <p className="text-xl font-bold text-green-600">
                  Rp. {dataProduct.price}
                </p>
                <p className="text-gray-600 italic">
                  Alamat: {dataProduct.address}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-10">
          <p className="mb-2 text-2xl font-medium">Detail Produk:</p>
          <p className="text-gray-700 text-base">{dataProduct.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-6 justify-between mt-10">
          {isEditing ? (
            <button
              onClick={updateData}
              className="w-full h-16 px-6 py-2 bg-green-700 text-xl text-white rounded-lg shadow-md hover:bg-green-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Simpan Perubahan
            </button>
          ) : (
            <button
              onClick={toggleEditMode}
              className="w-full h-16 px-6 py-2 bg-green-700 text-xl text-white rounded-lg shadow-md hover:bg-green-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Ubah Data
            </button>
          )}
          <button
          onClick={deleteData}
            className="w-full h-16 px-6 py-2 bg-red-700 text-white text-xl rounded-lg shadow-md hover:bg-red-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Hapus Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
