import { NextApiResponse, NextApiRequest } from 'next'
import enablePublicAccess from '@cors'

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  await enablePublicAccess(req, res)

  const answer = Math.round(Math.random()) ? 'yes' : 'no'

  res.status(200).json({
    data: answer,
    error: null,
  })
}

export default allAvos
