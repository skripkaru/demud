import jwt, {JwtPayload} from 'jsonwebtoken'

export const createAccessToken = (payload: JwtPayload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: '15m',
  })
}

export const createRefreshToken = (payload: JwtPayload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string, {
    expiresIn: '7d',
  })
}
