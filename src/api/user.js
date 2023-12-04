import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (idUser) => {
  const docRef = doc(db, "users", idUser); // La méthode doc() prend en param' le chemin pour accéder à la donnée qui nous intéresse.
  const result = await getDoc(docRef);

  if (result.exists()) {
    const userReceived = result.data();
    return userReceived;
  }
};

export const addUser = async (userId) => {
  const docRef = doc(db, "users", userId);

  const newUser = {
    username: userId,
    menu: fakeMenu.MEDIUM,
  };

  await setDoc(docRef, newUser);
  return newUser;
};

export const authenticateUsername = async (userId) => {
  //1. récupère un user existant
  const existingUser = await getUser(userId);

  //2. sinon tu crées un user
  if (!existingUser) {
    const newUser = await addUser(userId);
    return newUser;
  }
  return existingUser;
};
