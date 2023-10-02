import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const synchBothMenus = (userId, menuUpdated) => { 
    const cachette = doc(db, "users", userId)

    const nourriture = {
        username: userId,
        menu: menuUpdated
    }
    setDoc(cachette, nourriture)
 }