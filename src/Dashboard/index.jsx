import React from 'react'
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import Latar from '../assets/Latar.jpeg';
import { BatteryWarningIcon, LeafIcon, Milk, RecycleIcon, StickyNote } from 'lucide-react';

const Home = () => {

  const kategori = [
    {id: 1,
      jenis: "Plastik",
      harga: 8.000,
      namaToko: "Ecocycle"
    },
    {id: 2,
      jenis: "Elektronik",
      harga: 8.000,
      namaToko: "Ecocycle"
    },
    {id: 3,
      jenis: "Kaca",
      harga: 8.000,
      namaToko: "Ecocycle"
    },
    {id: 4,
      jenis: "Tekstil",
      harga: 8.000,
      namaToko: "Ecocycle"
    },
  ];

  const navigasi = useNavigate()
  const handle = () =>{
    navigasi("/tambah-produk")

  }

  return (

    <div>
      <Navbar />

      <div className='mx-20 mt-10 '>
      <img className='w-full h-[500px] rounded-xl ' src={Latar} alt="Indonesia Tanpa Sampah" />
      </div>
      <div className='mx-20  h-[500px]'>
        <div className='mt-10 '>
          <h1 className='text-4xl font-medium text-slate-800'>Jenis Sampah</h1>
          <p className='mt-3 text-slate-600'>Lihat semua jenis sampah yang kami daur ulang.</p>
        </div>
       <div className='flex gap-20 mt-7 '>
          <div className=' flex flex-col justify-center items-center border w-72 h-48 transform hover:scale-105 hover:rotate transition-all rounded-lg hover:border-green-700'>
            <LeafIcon color="green" strokeWidth={3} className='flex justify-center' size={70} />
            <p className="text-xl mt-2 font-medium">Sampah Organik</p>
          </div>

        <div className='flex flex-col justify-center items-center border w-72 h-48 transform hover:scale-105 hover:rotate transition-all rounded-lg hover:border-green-700'>
          <Milk color="#add8e6" strokeWidth={3} className='flex justify-center' size={70}/>
          <p className="text-xl mt-2 font-medium">Sampah Anorganik</p>
        </div>
        
        <div className='flex flex-col justify-center items-center border w-72 h-48 transform hover:scale-105 hover:rotate transition-all rounded-lg hover:border-green-700'>
          <BatteryWarningIcon color="#f4b42c" strokeWidth={3}  className='flex justify-center' size={70}/>
          <p className="text-xl mt-2 font-medium">Sampah B3</p>
        </div>

        <div className='flex flex-col justify-center items-center border w-72 h-48 transform hover:scale-105 hover:rotate transition-all rounded-lg hover:border-green-700'>
          <RecycleIcon color="gray" strokeWidth={3} className='flex justify-center' size={70}/>
          <p className="text-xl mt-2 font-medium">Sampah Daur Ulang</p>
        </div>

       
        
      
       
       
       </div>

      </div>
      <div>
        <button className='bg-red-800' onClick={handle} >Tambah</button>
      </div>
       <div className='flex gap-3'>
          {kategori.map((data) => (
            <div className='bg-slate-600' key={data.id} >
            <p className='font-bold'>{data.jenis}</p>
            <p>{data.harga}</p>
            <p>{data.namaToko}</p>
            </div>
          ))}
          
      </div>

    </div>
  )
}

export default Home;