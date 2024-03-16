import { clientPromise } from '../../utility/database';

const handler = async (req: any, res: any) => {
  const client = await clientPromise;
  const db = await client.db(`${process.env.MONGO_DB}`);
  const limit = 50;

  try {
    const tracks = await db
      .collection('tracks')
      .aggregate([{ $sample: { size: limit } }])
      .toArray();

    return res.status(200).json({ tracks });
  } catch (error: any) {
    return res.status(303).json({});
  }
};

export default handler;
