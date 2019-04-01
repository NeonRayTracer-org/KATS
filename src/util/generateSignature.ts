import bodyParser from 'body-parser'
import cloudinary from 'cloudinary'
import cors from 'cors'
import { Request, Response } from 'express'

import settings from '@settings'
import { server } from '../index'
import { corsOptions } from './initCors'

const {
  cloudinary: { CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET }
} = settings

interface RequestBodyData {
  resource_type: object

  params: {
    resource_type: object
    timestamp: number
  }
}

cloudinary.config({
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  cloud_name: CLOUD_NAME
})

server.express.use(bodyParser.urlencoded({ extended: true }))
server.express.use(bodyParser.json())

server.express.post(
  `/generate-signature`,
  cors(corsOptions),
  async (req: Request, res: Response) => {
    await res.set({
      'Content-Type': 'application/json; charset=utf-8'
    })
    try {
      const data: RequestBodyData = req.body

      if (data && data.params.resource_type) {
        delete data.resource_type
      }

      if (data && !data.params.timestamp) {
        data.params.timestamp = Math.floor(Date.now())
      }

      const signature = cloudinary.utils.api_sign_request(
        data.params,
        CLOUDINARY_API_SECRET
      )

      res.json({
        api_key: CLOUDINARY_API_KEY,
        // tslint:disable-next-line: object-shorthand-properties-first
        signature,
        timestamp: data.params.timestamp
      })
    } catch (err) {
      throw err
    }
  }
)
