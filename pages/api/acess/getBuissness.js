import connectMongo from "../../../utils/connectMongo";

import Buisness from "../../../models/buissness";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function UpdateDigitalFreeCourse(req, res) {
  try {
    await connectMongo();

    const data =await Buisness.find();

    res.json(data);
  } catch (err) {
    res.json({ err });
  }
}
