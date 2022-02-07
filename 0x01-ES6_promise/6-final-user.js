import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';
export default async function handleProfileSignup(firstName, lastName, fileName) {
  const usr = await signUpUser(firstName, lastName).then((data) => ({
    status: 'fulfilled',
    value: data,
  }));
  const fle = await uploadPhoto(fileName).catch((err) => ({
    status: 'rejected',
    value: err.toString(),
  }));
  return Promise.resolve([usr, fle]);
}