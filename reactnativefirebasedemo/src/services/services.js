import { db,firebaseApp } from '../services/config';

//To add user data  //method -> outside class - arrow operator needed.
export const registerUser=(userInfo)=>{
   // db.ref('/userList').push(userInfo,err=>{
    return   firebaseApp.createUserWithEmailAndPassword(userInfo.email,userInfo.password);       

}
export const loginUser = (userInfo)=>{
    return firebaseApp.signInWithEmailAndPassword(userInfo.email,userInfo.password);
}

