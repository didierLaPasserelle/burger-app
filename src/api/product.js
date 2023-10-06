import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const synchBothMenus = (userId, menuUpdated) => { 
    const cachette = doc(db, "users", userId)

    const nourriture = {
        username: userId,
        menu: menuUpdated
    }
    setDoc(cachette, nourriture)
 }

 export const getMenu = async (idUser) => {
    //const docRef = doc(CHEMIN)
    const docRef = doc(db, "users", idUser)
  
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const { menu } = docSnapshot.data() // On déstructure l'objet pour ne récupérer ce qu'il nous intéresse, à savoir menu  f
      return menu
    }
  }