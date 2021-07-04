import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'
import enablePublicAccess from '@cors'

const AvoDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await enablePublicAccess(req, res)

    const db = new DB()
    const avoId = req.query.id as string

    const avo = await db.getById(avoId)

    res.status(200).json(avo)
  } catch (e) {
    console.error(e)
    res.status(404).end()
  }
}

export default AvoDetail
