//@ts-ignore
import { clientPromise } from "../../utility/database";

const handler = async (req: any, res: any) => {
  //@ts-ignore
  const client = await clientPromise;
  const db = await client.db(`${process.env.MONGO_DB}`);
  const {query} = req
  const {search} = query
  
  try {
    let query = {};

    if (search) {
      query = {
        $or: [
          { artist: { $regex: search, $options: 'i' } }, // Case-insensitive search for artist
          { title: { $regex: search, $options: 'i' } }, // Case-insensitive search for title
        ],
      };

      await db.collection('searches').insertOne({ query: search, timestamp: new Date() });
    }

    const tracks = await db
        .collection("tracks")
        .find(query)
        .sort({ timestamp: -1 })
        .limit(10)
        .toArray();

    return res.status(200).json({ tracks });
  } catch (error: any) {
    return res.status(303).json({});
  }
};

export default handler;