import { ConnectDB } from '../../DB/Connection';

const COLLECTION_NAME = 'gate_2022_topic';

export default async (req, res) => {
    if (req.method === 'GET') {
        res.json({
            data: 'ok'
        });
    } else {
        const { db } = await ConnectDB();
        const topicReq = JSON.parse(req.body);
        console.log(topicReq);
        await db.collection(COLLECTION_NAME).insertOne(topicReq);
    }
}