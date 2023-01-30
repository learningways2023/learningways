import connectMongo from "../../../utils/connectMongo";
import { auth, firestore } from "../../../firebase";
import User from "../../../models/user";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function signUpWithEmail(req, res) {
  const { email, password } = req.body;
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      await connectMongo();
      const newUser = new User({
        firebaseUid: user.uid,
        email: user.email,
        password: user.password,
      });
      await newUser.save();
    }
    res.json(user);
  } catch (err) {
    res.json({ err });
  }
}
