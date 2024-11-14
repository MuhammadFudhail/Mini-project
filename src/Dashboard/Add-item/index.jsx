import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  AnvilIcon,
  BadgePercent,
  ImageUpIcon,
  MapPinned,
  PackageOpenIcon,
  PackageSearchIcon,
  SquareArrowLeft
} from 'lucide-react';

const AddItem = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [products, setProducts] = useState([]);
  const API_URL = 'https://6718b4807fc4c5ff8f4aabe4.mockapi.io/products';
  const navigate = useNavigate();

  const alert = () => {
    Swal.fire({
      title: "Data berhasil ditambahkan",
      text: "You clicked the button!",
      icon: "success"
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  const handleClick = () => {
    alert();
    tambahData();
  };

  const tambahData = async () => {
    try {
      const newProduct = {
        name,
        type,
        weight,
        price,
        description,
        address,
        image,
      };
      await axios.post(API_URL, newProduct);
      navigate("/");
      fetchData();
    } catch (error) {
      console.error('Gagal menambahkan data:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error('Gagal mengambil data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className='flex justify-between items-center mx-7 mt-8'>
        <h1 className='font-medium text-xl'>Tambah Data Produk</h1>
        <SquareArrowLeft className="w-8 h-9 text-[#828282]" onClick={() => navigate('/')} />
      </div>

      <div className='flex mt-9 gap-12 mx-20'>
        <div>
          <p className='text-[#828282] mb-4'>Gambar Produk</p>
          <div className=' flex flex-col items-center pt-14 pb-14 border-2 rounded-xl border-dashed outline-2 bg-slate-50 w-[270px] h-[270px]'>
            {image ? (
              <img src={image} alt="Preview" className="w-full h-full object-cover rounded-xl" />
            ) : (
              <>
                <ImageUpIcon className='text-[#828282]' size={50} strokeWidth={1} />
                <p className='text-[#828282] pt-5'>Unggah Gambar Produk</p>
              </>
            )}
            <input type="file" onChange={handleImageUpload} className="hidden" id="file-upload" />
            <label htmlFor="file-upload" className="cursor-pointer mt-5 text-green-600 hover:text-green-700">Pilih Gambar</label>
          </div>
          <p className='text-[#828282] mt-5 text-[15px] text-center'>Max 20 Mb, Format JPG & JPEG</p>
        </div>

        <div className='w-full'>
          <div className='flex gap-4 mb-5'>
            <div className='relative w-full'>
              <input 
                type="text"
                className="w-full border border-gray-400 rounded-lg p-2 pl-10 py-3"
                placeholder="Masukkan nama produk"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <PackageOpenIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            <div className='relative w-full'>
              <select
                className="w-full border border-gray-400 rounded-lg p-2 pl-10 py-3 text-[#828282]"
                value={type}
                onChange={(e) => setType(e.target.value)}>
                <option value="">Jenis sampah</option>
                <option value="plastik">Plastik</option>
                <option value="elektronik">Elektronik</option>
                <option value="makanan">Makanan</option>
                <option value="peralatan">Peralatan</option>
              </select>
              <PackageSearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='relative w-full'>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg p-2 pl-10 py-3"
                placeholder="Masukkan berat produk (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <AnvilIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            <div className='relative w-full'>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg p-2 pl-10 py-3"
                placeholder="Masukkan harga produk"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <BadgePercent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className='mt-5'>
            <textarea
              className="w-full border border-gray-400 rounded-lg p-3"
              placeholder="Masukkan deskripsi produk"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="10"
            />
          </div>

          <div className='relative w-full mt-5'>
            <input
              type="text"
              className="w-full border border-gray-400 rounded-lg p-2 pl-10 py-3"
              placeholder="Masukkan alamat"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <MapPinned className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          <button
            onClick={handleClick}
            className='bg-green-700 mt-5 w-full rounded-lg py-3 text-white font-medium hover:bg-green-500'
          >
            Tambah Produk
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
