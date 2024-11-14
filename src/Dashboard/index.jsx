import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import Latar from '../assets/Latar.jpeg';
import { BatteryWarningIcon, LeafIcon, Milk, Plus, RecycleIcon } from 'lucide-react';
import axios from 'axios';




const Home = () => {
  const [products, setProducts] = useState([]); // Menambahkan state untuk produk
  const navigasi = useNavigate();

  // Fungsi untuk mengambil data produk dari API
  const fetchData = async () => {
    try {
      const response = await axios.get('https://6718b4807fc4c5ff8f4aabe4.mockapi.io/products');
      console.log(response.data);
      setProducts(response.data);  // Menyimpan data produk ke dalam state
    } catch (error) {
      console.error('Gagal mengambil data produk:', error);
    }
  };

  // Mengambil data saat komponen pertama kali dirender
  useEffect(() => {
    fetchData();
  }, []);

  const handle = () => {
    navigasi("/tambah-produk");
  };

  return (
    <div>
      <Navbar />

      <div className='mx-20 mt-10 '>
        <img className='w-full h-[570px] rounded-xl ' src={Latar} alt="Indonesia Tanpa Sampah" />
      </div>

      <div className='mx-20 h-[340px] '>
        <div className='mt-10'>
          <h1 className='text-4xl font-medium text-slate-800'>Jenis Sampah</h1>
          <p className='mt-3 text-slate-600'>Lihat semua jenis sampah yang kami daur ulang.</p>
          
        </div>
        <div className='flex gap-20 mt-7'>
          <div className=' flex flex-col justify-center items-center border w-72 h-48 transform hover:scale-105 hover:rotate transition-all rounded-lg hover:border-green-700'>
            <LeafIcon color="green" strokeWidth={3} className='flex justify-center' size={70} />
            <p className="text-xl mt-2 font-medium">Sampah Organik</p>
          </div>

          <div className='flex flex-col justify-center items-center border w-72 h-48 transform hover:scale-105 hover:rotate transition-all rounded-lg hover:border-green-700'>
            <Milk color="#add8e6" strokeWidth={3} className='flex justify-center' size={70} />
            <p className="text-xl mt-2 font-medium">Sampah Anorganik</p>
          </div>

          <div className='flex flex-col justify-center items-center border w-72 h-48 transform hover:scale-105 hover:rotate transition-all rounded-lg hover:border-green-700'>
            <BatteryWarningIcon color="#f4b42c" strokeWidth={3} className='flex justify-center' size={70} />
            <p className="text-xl mt-2 font-medium">Sampah B3</p>
          </div>

          <div className='flex flex-col justify-center items-center border w-72 h-48 transform hover:scale-105 hover:rotate transition-all rounded-lg hover:border-green-700'>
            <RecycleIcon color="gray" strokeWidth={3} className='flex justify-center' size={70} />
            <p className="text-xl mt-2 font-medium">Sampah Daur Ulang</p>
          </div>
        </div>
      </div>


      <div className='flex justify-between mx-20'>
        <div className=''>
          <h1 className='text-4xl font-medium text-slate-800'>Jual Sampah, Selamatkan Bumi</h1>
          <p className='mt-3 text-slate-600'>Dengan menjual sampah daur ulang, Anda berkontribusi untuk lingkungan yang lebih bersih dan hijau.</p>
        </div>
          <button onClick={handle} className="bg-green-700 flex items-center gap-2 rounded-lg p-4 text-white font-medium hover:bg-green-500">
          <Plus />Tambah Produk
        </button>
        </div>
      <div className="mx-20 mt-10  grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-lg mb-4 transform hover:scale-105 hover:rotate transition-all" />
            <h2 className="font-normal text-xl bg-green-50 w-[190px] rounded-2xl border-zinc-50">{product.name}</h2>
            <p className="text-gray-600">{product.type}</p>
            <p className="text-gray-600">{product.weight} kg</p>
            <p className="text-gray-600">Rp {product.price}</p>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-gray-600 mt-2">{product.address}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Home;
