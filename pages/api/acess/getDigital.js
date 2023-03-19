import connectMongo from "../../../utils/connectMongo";

import Digital from "../../../models/digitalfree";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function UpdateDigitalFreeCourse(req, res) {
  try {
    await connectMongo();

    const data =await Digital.find();

    res.json(data);
  } catch (err) {
    res.json({ err });
  }
}
