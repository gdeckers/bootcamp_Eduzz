import { Request, Response, NextFunction } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";

async function basicAuthorizationMiddleware(req: Request, res: Response, next: NextFunction){
    try {
        const authorizationHeader = req.headers['authorization'];

        if(!authorizationHeader){
            throw new ForbiddenError('Credenciais não permitidas...');
        }

        const [typeAuthorization, token] = authorizationHeader.split(" ");
        if(typeAuthorization !== "Basic" || !token){
            throw new ForbiddenError('Tipo inválido autenticação...');
        }

        const tokenContent = Buffer.from(token, 'base64').toString('utf-8');

        const [username, password] = tokenContent.split(':');

        if(!username || !password){
            throw new ForbiddenError('Credenciais não preenchidas...');
        }

        const user = await userRepository.findByUserAndPassword(username, password);
        
        if(!user){
            throw new ForbiddenError('Usuário ou senha inválido');
        }

        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}


export default basicAuthorizationMiddleware;