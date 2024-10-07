'use client'

import { useEffect, useState, useRef } from 'react'
import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'
import ftoPerfil from '../assets/ftoPerfil.svg'
import { useAdmin } from './adminContext'
import { motion, AnimatePresence } from 'framer-motion'

export default function Galeria() {
  const [activePhoto, setActivePhoto] = useState(null)
  const [photos, setPhotos] = useState([])
  const [uploading, setUploading] = useState(false)
  const [newPhoto, setNewPhoto] = useState(null)
  const [comment, setComment] = useState("")
  const [loading, setLoading] = useState(true)
  const observerRef = useRef(null)
  
  const { isAdmin } = useAdmin()

  const db = getFirestore()
  const storage = getStorage()

  useEffect(() => {
    const itemsCollection = collection(db, 'itemGaleria')
    getDocs(itemsCollection)
      .then((snapshot) => {
        const photosData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setPhotos(photosData)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error al obtener items:', error)
        setLoading(false)
      })
  }, [db])

  const handlePhotoClick = (photo) => {
    setActivePhoto(photo)
  }

  const closeModal = () => {
    setActivePhoto(null)
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!newPhoto || !comment) return alert("Por favor selecciona una imagen y añade un comentario.")

    setUploading(true)
    const file = newPhoto
    const storageRef = ref(storage, `galeria/${uuidv4()}`)

    try {
      await uploadBytes(storageRef, file)
      const downloadURL = await getDownloadURL(storageRef)

      const newPhotoData = {
        url: downloadURL,
        alt: 'Foto subida por amigoscuidadospaliativos',
        caption: comment,
        profile: "amigoscuidadospaliativos",
        profilePic: "/path/to/profilePic.jpg"
      }

      await addDoc(collection(db, 'itemGaleria'), newPhotoData)
      setPhotos([...photos, newPhotoData])
      setUploading(false)
      setNewPhoto(null)
      setComment("")
      alert('Imagen subida exitosamente')
    } catch (error) {
      console.error("Error al subir la imagen:", error)
      setUploading(false)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
            entry.target.classList.remove("fade-out")
          } else {
            entry.target.classList.add("fade-out")
            entry.target.classList.remove("fade-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(".photo-item")
    elements.forEach((el) => observer.observe(el))

    observerRef.current = observer

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Noticias</h2>
          <p className="text-lg text-gray-600 mb-8">Cargando fotos...</p>
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      </div>
    )
  }

  if (photos.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Noticias</h2>
          <p className="text-lg text-gray-600">No hay fotos disponibles.</p>
        </div>
      </div>
    )
  }

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Noticias</h2>
          <p className="text-xl text-gray-600">
            Aquí encontrara algunas de nuestras noticias, que seran tomadas de la cuenta de instagra #amigoscuidadospaliativos.
          </p>
        </div>

        {isAdmin && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <form onSubmit={handleUpload} className="max-w-md mx-auto  p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="photo">
                  Subir Foto
                </label>
                <input
                  id="photo"
                  type="file"
                  onChange={(e) => setNewPhoto(e.target.files[0])}
                  accept="image/*"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="comment">
                  Comentario
                </label>
                <input
                  id="comment"
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={uploading}
                className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {uploading ? "Subiendo..." : "Subir Imagen"}
              </button>
            </form>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer bg-white"
              onClick={() => handlePhotoClick(photo)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={photo.url}
                alt={photo.alt || "Foto"}
                className="w-full h-64 object-cover transition-all duration-300 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg font-semibold truncate">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence className="fixed inset-0 z-50 flex items-center justify-center">
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="ftoacitvada fixed inset-0 z-50 flex items-center justify-center p-4 bg-black min-h-screen bg-opacity-75 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white shadow-2xl max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className=" flex flex-col md:flex-row  bg-gray-100 ">
                <div className="md:w-1/2 p-6 ">
                  <img
                    src={activePhoto.url}
                    alt={activePhoto.alt || "Foto ampliada"}
                    className="modal-img w-full h-full  object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between   bg-gray-100 ">
                  <div>
                    <div className="flex items-center mb-4">
                      <img src={ftoPerfil} alt="Perfil" className="w-12 h-12 rounded-full mr-4 border-2 border-blue-500" />
                      <div>
                        <p className="txtProf text-clamp-1 font-bold text-gray-900">{activePhoto.profile}</p>
                      </div>
                    </div>
                    <p className="comProf text-gray-700 text-lg">{activePhoto.caption}</p>
                  </div>
                  <button
                    className="mt-6 w-full bg-blue-500 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                    onClick={closeModal}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx>
  {`
    @media (max-width: 500px) {
      .txtProf {
        font-size: clamp(0.8rem, 3vw, 1.5rem);
      }
      .comProf {
        font-size: clamp(0.8rem, 3vw, 1.2rem);
      }
      .ftoacitvada {
        padding: 0;
      }
    }

    /* Estilos generales para darle un toque moderno */
    section {
      font-family: 'Inter', sans-serif;
  
      padding: 2rem;
    }

   


    

  

   
    .group:hover img {
      transform: scale(1.05);
      transition: transform 0.4s ease-in-out;
      filter: brightness(90%);
    }

    img {
      border-radius: 12px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      transition: filter 0.3s ease;
    }

    /* Modal de imagen */
    .modal-img {
      max-width: 100%;
      max-height: 75vh;
      border-radius: 12px;
      object-fit: cover;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }

    .ftoacitvada {
      background: rgba(0, 0, 0, 0.7); /* Fondo más suave y sutil */
    }

    /* Texto dentro del modal */
    .txtProf {
      font-size: 1.25rem;
      color: #1f2937; /* Gris oscuro */
    }

    .comProf {
      font-size: 1rem;
      color: #374151; /* Gris más claro */
      line-height: 1.6;
    }

   
    form input,
    form button {
      border-radius: 8px;
      border: 1px solid #e5e7eb;
    }

    form input:focus,
    form button:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4);
    }


    .group {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease;
    }

    .group:hover {
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }

  
  `}
</style>


    </section>
  )
}