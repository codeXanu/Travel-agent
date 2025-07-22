import React from 'react';

export default function Dialog({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-white/30">
      <div className="bg-[#C4FBF5] text-black p-6 rounded-xl shadow-lg w-full max-w-sm text-center">
        <p className="text-lg font-semibold mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-6 rounded-full border-2 border-black transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
