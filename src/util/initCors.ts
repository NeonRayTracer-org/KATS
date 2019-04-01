import settings from '@settings'

const {
  whitelist: { ALLOWED_DOMAINS }
} = settings

export const corsOptions = {
  origin(origin: string, callback: any) {
    if (ALLOWED_DOMAINS.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}
