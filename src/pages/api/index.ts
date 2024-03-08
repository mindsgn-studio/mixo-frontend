//@ts-ignore
import { clientPromise } from "../../utility/database";

const handler = async (req: any, res: any) => {
  //@ts-ignore
  const client = await clientPromise;
  const db = await client.db(`${process.env.MONGO_DB}`);

  
  try {
    const { query } = req
    const { search } = query;
    const tracks = await db
        .collection("tracks")
        .find({})
        .sort({ timestamp: -1 })
        .toArray();

    return res.status(200).json({ tracks });
  } catch (error: any) {
    return res.status(303).json({});
  }
};

export default handler;