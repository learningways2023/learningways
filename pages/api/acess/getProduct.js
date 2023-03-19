import connectMongo from "../../../utils/connectMongo";

import Product from "../../../models/productManagement";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function UpdateDigitalFreeCourse(req, res) {
  try {
    await connectMongo();

    const data =await Product.find();

    res.json(data);
  } catch (err) {
    res.json({ err });
  }
}
