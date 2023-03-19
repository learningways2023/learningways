import connectMongo from "../../../utils/connectMongo";

import Coding from "../../../models/coding";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function UpdateDigitalFreeCourse(req, res) {
  try {
    await connectMongo();

    const data =await Coding.find();

    res.json(data);
  } catch (err) {
    res.json({ err });
  }
}
