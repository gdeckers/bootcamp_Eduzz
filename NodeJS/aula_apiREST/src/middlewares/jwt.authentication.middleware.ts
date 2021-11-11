import { NextFunction, Response, Request } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from 'jsonwebtoken';
import userRepository from "../repositories/user.repository";


async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction){
    try {
        const authorizationHeader = req.headers['authorization'];

        if(!authorizationHeader){
            throw new ForbiddenError('Credenciais não permitidas...');
        }

        const [typeAuthorization, token] = authorizationHeader.split(" ");

        if(typeAuthorization !== "Bearer" || !token){
            throw new ForbiddenError('Tipo inválido autenticação...');
        }

        try {
            const tokenPayload = JWT.verify(token, 'my_secret_key');

            if(typeof tokenPayload !== 'object' || !tokenPayload.sub){
                throw new ForbiddenError('Token inválido!')
            }
            
            const user = {uuid: tokenPayload.sub, username: tokenPayload.username};

            req.user=user;        
            next();
        } catch (error) {
            throw new ForbiddenError('Token inválido!')
        }

    } catch (error) {
        next(error);
    }
}

export default jwtAuthenticationMiddleware;