//@ts-ignore
import { clientPromise } from '../../utility/database';

const handler = async (req: any, res: any) => {
  //@ts-ignore
  const client = await clientPromise;
  const db = await client.db(`${process.env.MONGO_DB}`);
  const { query } = req;
  const { search, page = 1 } = query;
  const limit = 10;
  const skip = (parseInt(page as string) - 1) * limit;

  try {
    let query = {};

    if (search) {
      query = {
        $or: [
          { artist: { $regex: search, $options: 'i' } },
          { title: { $regex: search, $options: 'i' } }
        ]
      };

      await db
        .collection('searches')
        .insertOne({ query: search, timestamp: new Date() });
    }

    const tracks = await db
      .collection('tracks')
      .find(query)
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    return res.status(200).json({ tracks });
  } catch (error: any) {
    console.log(error)
    return res.status(303).json({});
  }
};

export default handler;
