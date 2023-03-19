import connectMongo from "../../../utils/connectMongo";

import Data from "../../../models/datascience";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function UpdateDigitalFreeCourse(req, res) {
  try {
    await connectMongo();

    const data =await Data.find();

    res.json(data);
  } catch (err) {
    res.json({ err });
  }
}
