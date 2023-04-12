import firestore from '@react-native-firebase/firestore';

export const addUserData = async (email, user, image) => {
  await firestore().collection('Users').doc(user).set({email, image});
};
export const updateUserData = async (user, image) => {
  try {
    const email = user.email;
    await firestore().collection('Users').doc(user.uid).update({email, image});
    console.log('image uploaded');
  } catch (e) {
    console.log(e);
  }
};
export const fetchUserData = async user => {
  try {
    const arr = [];
    const docSnap = await firestore().collection('Users').doc(user.uid).get();
    const email = docSnap.data().email;
    const image = docSnap.data().image;
    arr.push(email);
    arr.push(image);
    return arr
  } catch (e) {
    console.log(e);
  }
};
