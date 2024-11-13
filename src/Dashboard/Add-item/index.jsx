import { AnvilIcon, BadgePercent, ImageUpIcon, MapPinned, PackageOpenIcon, PackageSearchIcon, SquareArrowLeft } from 'lucide-react';
import React, { useState } from 'react';

const AddItem = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState (null);

  // Fungsi untuk menangani upload gambar
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  return (
    <div>
      <div className='flex justify-between items-center mx-7 mt-8'>
        <h1 className='font-medium text-xl'>Tambah Data Produk</h1>
        <SquareArrowLeft className="w-8 h-9 text-[#828282]" />
      </div>
      
      <div className='flex mt-9 gap-12 mx-20'>
        <div>
          <p className='text-[#828282] mb-4'>Gambar Produk</p>
          <div className='flex flex-col items-center pt-14 pb-14 border-2 rounded-xl border-dashed outline-2 bg-slate-50 w-[270px] h-[270px]'>
            {/* Jika ada gambar yang di-upload, tampilkan di dalam kotak */}
            {image ? (
              <img src={image} alt="Preview" className="w-full h-full object-cover rounded-xl" />
            ) : (
              <>
                <ImageUpIcon className='text-[#828282]' size={50} strokeWidth={1} />
                <p className='text-[#828282] pt-5'>Unggah Gambar Produk</p>
              </>
            )}
            <input type="file" onChange={handleImageUpload} className='text-[#828282] pt-5' />
          </div>
          <p className='text-[#828282] mt-5 text-[15px]'>Max 20 Mb, Format JPG & JPEG</p>
        </div>
        
        <div className='w-full '>
          <div className='flex gap-4 mb-5'>
            {/* Input Nama Produk */}
            <div className='relative w-full'>
              <input type="text" className="w-full border border-gray-400 rounded-lg p-2 pl-10 py-3" placeholder="Masukkan nama produk" />
              <PackageOpenIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            {/* Select Jenis Sampah */}
            <div className='relative w-full'>
              <select className="w-full border border-gray-400 rounded-lg p-2 pl-10 py-3 text-[#828282]">
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
            {/* Input Berat Produk */}
            <div className='relative w-full'>
              <input type="text" className="w-full border border-gray-400 rounded-lg p-2 pl-10 py-3" placeholder="Masukkan berat produk (kg)" />
              <AnvilIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            {/* Input Harga Produk */}
            <div className='relative w-full'>
              <input type="text" className="w-full border border-gray-400 rounded-lg p-2 pl-10 py-3" placeholder="Masukkan harga produk" />
              <BadgePercent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div className='mt-5'>
            <textarea
              className="w-full border border-gray-400 rounded-lg p-3  "
              placeholder="Masukkan deskripsi produk"
              value={description}
              onChange={(e) => setDescription(e.target.value)} rows="10"></textarea>
          </div>
          <div className='relative w-full mt-5'>
              <input type="text" className="w-full border border-gray-400 rounded-lg p-2 pl-10 py-3" placeholder="Masukkan alamat" />
              <MapPinned  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            <button className='bg-red-300 mt-5 w-full'>hahaha</button>
        </div>
      </div>

     


    </div>
  );
}

export default AddItem;
