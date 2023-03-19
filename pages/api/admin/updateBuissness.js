import connectMongo from "../../../utils/connectMongo";

import Buisness from "../../../models/buissness";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function UpdateDigitalFreeCourse(req, res) {
  const { category, domain, name, image, description } = req.body;
  try {
    await connectMongo();
    console.log(req.body.category, domain, name, image, description);
    const newDigital = new Buisness({
      category: category,
      domain: domain,
      name: name,
      image: image,
      desc: description,
    });
    await newDigital.save();

    res.json(newDigital);
  } catch (err) {
    res.json({ err });
  }
}