export default function signUpUser(firstName, lastName) {
    const BPromise = new Promise((resolve) => {
        resolve(
            {firstName, lastName},
        );
    });
    return BPromise;
}