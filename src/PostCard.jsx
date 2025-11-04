import React, { useState } from 'react';

function PostCard(props) {
  const { title, body } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div 
      className={`
        bg-white p-4 rounded-lg shadow /* Ubah padding menjadi p-4 agar lebih ringkas */
        transition-all duration-300 ease-in-out
        flex flex-col h-full 
        
        /* Efek Hover */
        hover:scale-105 hover:border hover:border-gray-300 hover:bg-pink-100
      `}
    >
      <h2 className="text-base font-semibold text-gray-800 mb-1 capitalize line-clamp-2"> 
        {title}
      </h2>
            <p className="text-gray-600 mb-2 text-xs line-clamp-3"> 
        {body}
      </p>

      <button
        className={`
          text-white p-2 rounded-md mt-auto
          transition-colors duration-300
          hover:brightness-110 
          text-sm /* Ubah ukuran font tombol menjadi lebih kecil */
          
          /* Logika state untuk warna dan teks tombol */
          ${clicked ? "bg-special-red2" : "bg-gray-01"} 
        `}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Sudah diklik" : "Silakan Klik"} 
      </button>
    </div>
  );
}

export default PostCard;