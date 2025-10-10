import React from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const UploadJsonFromPublic = () => {
  const handleUpload = async () => {
    try {
      const response = await fetch('/productos.json');
      const jsonData = await response.json();

      const colRef = collection(db, 'productos'); // Podés cambiar el nombre de la colección

      const uploadPromises = jsonData.map(item => addDoc(colRef, item));
      await Promise.all(uploadPromises);

      alert('✅ Productos cargados correctamente en Firestore');
    } catch (error) {
      console.error('❌ Error al subir productos:', error);
      alert('Error al subir los productos a Firestore');
    }
  };

  return (
    <div>
      <button onClick={handleUpload}>
        Subir productos a Firestore
      </button>
    </div>
  );
};

export default UploadJsonFromPublic;
