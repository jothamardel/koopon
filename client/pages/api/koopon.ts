// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Koopon from '../../../server/src/model/kooponModal'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try {
        const data = new Koopon({
            store_name: "Shop 45"
        })

        console.log(data)
        res.status(200).json(data)
    } catch (error) {
        
    }
  res.status(200).json(req.body)
}
