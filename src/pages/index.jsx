import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Latar from '../assets/Latar-hijau.png';
import About from '../assets/About.png';
import { BatteryWarningIcon, LeafIcon, Milk, Plus, RecycleIcon } from 'lucide-react';
import axios from 'axios';
import Footer from '../components/Footer';




const Home = () => {
  const [products, setProducts] = useState([]); // Menambahkan state untuk produk
  const navigasi = useNavigate();

  // Fungsi untuk mengambil data produk dari API
  const fetchData = async () => {
    try {
      const response = await axios.get('https://6718b4807fc4c5ff8f4aabe4.mockapi.io/products');
      setProducts(response.data);  // Menyimpan data produk ke dalam state
      console.log("home", response.data);
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
    <div className='bg-slate-50'>
      <Navbar />

      <div className="mt-0 flex h-[700px] justify-end bg-[#299e63] relative shadow-lg">

        <img className="h-[600px] py-2 mx-20" src={Latar} alt="Indonesia Tanpa Sampah" />
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2 text-white">
          <h1 className="text-5xl font-bold shadow-slate-400">Selamatkan Lingkungan!</h1>
          <p className="mt-4 text-lg">
            Mari bersama menjaga Indonesia tetap bersih dan hijau.
          </p>
        </div>
      </div>

      <div id='about' className='flex  mt-10 mx-20'>
        <img className="h-[450px]" src={About} alt="Indonesia Tanpa Sampah" />
       
        <div className='mx-20'>
          <h1 className='font-bold mb-5 text-4xl text-slate-800 mt-10'>Misi Kami </h1>
          <p className='leading-7 text-slate-600 mb-5'>Mari bersama-sama wujudkan Indonesia yang lebih bersih, 
            sehat, dan berkelanjutan melalui pengelolaan sampah yang cerdas dan inovatif. 
            Website ini hadir sebagai solusi untuk mengatasi masalah sampah yang semakin mengkhawatirkan di tanah air. 
            Dengan memberikan ruang bagi masyarakat untuk menjual sampah yang mereka miliki, kami tidak hanya membantu 
            mengurangi limbah yang menumpuk, tetapi juga memberikan peluang baru untuk mendaur ulang dan mengubah sampah
             menjadi sesuatu yang bernilai. Sampah bukan lagi sekadar barang buangan, tetapi menjadi aset yang bisa memberi manfaat, 
             baik secara ekonomi maupun lingkungan.</p>
          <p className='leading-7 text-slate-600 mb-16'>Selain itu, platform ini juga berperan sebagai sarana edukasi, mengajak setiap orang untuk lebih sadar akan pentingnya menjaga kebersihan lingkungan serta mendukung praktik daur ulang yang berkelanjutan.</p>
          
        
        </div>
      </div>

      <div className='mx-20 h-[340px] mt-10'>
        <div className='mt-10'>
          <h1 className='text-4xl font-bold text-slate-800'>Jenis Sampah</h1>
          <p className='mt-3 font-medium text-slate-600'>Lihat semua jenis sampah yang kami daur ulang.</p>
          
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


      <div className='flex justify-between mx-20 mt-10'>
        <div> 
          <h1 className='text-4xl font-bold text-slate-800'>Jual Sampah, Selamatkan Bumi</h1>
          <p className='mt-3 text-slate-600'>Dengan menjual sampah daur ulang, Anda berkontribusi untuk lingkungan yang lebih bersih dan hijau.</p>
        </div>
          <button onClick={handle} className="bg-[#299e63] flex items-center gap-2 rounded-lg p-4 text-white font-medium hover:bg-green-600">
          <Plus />Tambah Produk
        </button>
        </div>
      <div className="mx-20 mt-10  grid grid-cols-3 gap-4 ">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-300 p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-lg mb-4 transform hover:scale-105 hover:rotate transition-all" />
            <h2 className="font-normal text-xl bg-green-50 w-[190px] rounded-2xl border-zinc-50">{product.name}</h2>
            <p className="text-gray-600 mb-1">{product.type}</p>
            <p className="text-gray-600 mb-1">{product.weight} kg</p>
            <p className="text-[#299e63] mb-1 font-bold">Rp. {product.price}</p>
            <p className="text-gray-600 mb-1">{product.description}</p>
            <p className="text-gray-600 mb-1">{product.address}</p>
            <button onClick={() => navigasi(`/product/${product.id}`)} className='border-green-600 border w-full h-9 rounded-lg text-lg text-[#299e63] font-semibold hover:bg-[#299e63] hover:text-white transition duration-300 ease-in-out '
            >Lihat Detail</button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
