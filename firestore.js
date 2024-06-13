// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { addDoc,collection,getFirestore,onSnapshot, deleteDoc, doc, getDoc, updateDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBfgfbYOdBegSYKYBGolkFWmxY2HjW22aM",

  authDomain: "monitoreopedidos-94e24.firebaseapp.com",

  projectId: "monitoreopedidos-94e24",

  storageBucket: "monitoreopedidos-94e24.appspot.com",

  messagingSenderId: "1081237478268",

  appId: "1:1081237478268:web:aeee54b902745eef13a2f9"

}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//getFirestore es una funcion de firestorm que retorna la Base de datos para su uso
const db = getFirestore(app)
//funcion para guardar datos
export const save = async (e) => {
  try {
 
    await addDoc(collection(db, 'Pedidos'), e);
    Swal.fire({
      title: "¡Éxito!",
      text: "Pedido guardado en Firestore jeje",
      icon: "success"
    });
  } catch (error) {
    console.error('Error al guardar el pedido:', error);
    Swal.fire({
      title: "Algo salió mal",
      text: "Error al guardar el pedido",
      icon: "error"
    });
  }
};

//funcion que trae todos los documentos de la coleccion
export const getData = (data) => {
  //onSnapshot es el metodo que permite traer todos los documentos y asignarlos a variable "data"
  onSnapshot(collection(db,'Pedidos'),data)
}

//función remove que sirve para eliminar un documento
export const remove = async (id) => {
  try {
    await deleteDoc(doc(db, 'Pedidos', id));
    Swal.fire({
      title: "¡Éxito!",
      text: "Pedido borrado de Firestore jeje",
      icon: "success"
    });
  } catch (error) {
    console.error('Error al eliminar el pedido:', error);
    Swal.fire({
      title: "Algo salió mal",
      text: "Error al borrar el pedido",
      icon: "error"
    });
  }
};

//funcion que me permite seleccionar un documento
//getDoc es la funcion de firestore que permite obtener un documento por su id
export const selectOne = (id) => getDoc(doc(db,'Pedidos',id))

//crearemos la funcion que permita editar un documento
export const edit = async (id, pedido) => {
  try {
    await updateDoc(doc(db, 'Pedidos', id), pedido);
    Swal.fire({
      title: "¡Éxito!",
      text: "Pedido editado en Firestore jeje",
      icon: "success"
    });
  } catch (error) {
    console.error('Error al editar el pedido:', error);
    Swal.fire({
      title: "Algo salió mal",
      text: "Error al editar el pedido",
      icon: "error"
    });
  }
};

