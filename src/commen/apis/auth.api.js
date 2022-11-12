import { WrongLocation } from "@mui/icons-material";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

export const signUpApi = (data) => {
    console.log("signUpApi", data);

    return new Promise((resolve, reject) => {

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ payload: "check your email" });
                            const uid = user.uid;
                        })
                        .catch((e) => {
                            reject({ payload: e });
                        })

                });
            })
            .then((afterEmail) => {
                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        if (user.emailVerified) {
                            resolve({ payload: "Signup Successfully" });
                        } else {
                            resolve({payload:"Please verify your email id."});
                            await setDoc(doc(db, "user", user.uid), {
                                email: data.email,
                                role: "user",
                                emailVerified: user.emailVerified
                            })
                                .then(() => console.log("user Added"))
                                .catch((error) => console.log(error.code))
                        }
                    } else {
                        console.log("Something went wrong.");
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "email id allready verified" });
                } else {
                    reject({ payload: error });
                }
            });
    })
}

export const signInApi = (data) => {
    console.log("signInApi", data);

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)

            .then(async (userCredential) => {
                const user = userCredential.user

                if (user.emailVerified) {
                    const userRef = doc(db, "user", user.uid);

                    await updateDoc(userRef, {
                        emailVerified: true
                    });

                    const userRefGet = doc(db, "user", user.uid);
                    const userSnap = await getDoc(userRefGet);
                    console.log({id:userSnap.id, ...userSnap.data() });

                    resolve({ 
                        payload: { id: userSnap.id, ...userSnap.data()},
                        msg: "Login successfully"
                    });

                } else {
                    reject({ payload: "please varify your email." });
                }
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/wrong-password") === 0) {
                    reject({ payload: " password was wrong." });
                } else if (errorCode.localeCompare("auth/user-not-found") === 0) {
                    reject({ payload: "email was wrong." });
                } else {
                    reject({ payload: errorCode });
                }
            });
    })
}

export const signOutApi = () => {
    console.log("signOutApi");

    return new Promise((resolve, reject) => {

        signOut(auth)
            .then(() => {
                localStorage.clear();
                resolve({ payload: "Sign-out successfull." })
            }).catch((error) => {
                reject({ payload: " something went Wrong." })
            });
    })
}

export const forgotApi = (data) => {
    console.log('forgotApi', data);
    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, data.email)
            .then(() => {
                resolve({ payload: "Please check your email." })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // reject({ payload: errorCode })
                reject({ payload: " something went wrong " });

            });
    })
}

export const googleSignInApi = () => {
    console.log("googleSignInApi");
    return new Promise((resolve, reject) => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                resolve({ payload: user })
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                reject({ payload: errorCode })
            });
    })
}