import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/user";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function signUpWithEmail(req, res) {
  const { user } = req.body;
  try {
    await connectMongo();
    const newUser = new User({
      user:user
     
    });

    await newUser.save();
    console.log("done")
    res.json(user);
  } catch (err) {
    res.json({ err });
  }
}
