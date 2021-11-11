import { Request, Response, NextFunction, Router } from "express";
import { StatusCodes } from "http-status-codes";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";
import JWT from "jsonwebtoken";
import basicAuthorizationMiddleware from "../middlewares/basic.authorization.middleware";
import jwtAuthenticationMiddleware from "../middlewares/jwt.authentication.middleware";


const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthorizationMiddleware, async (req: Request, res: Response, next: NextFunction)=>{
    try{
        const user = req.user;

        if(!user){
            throw new ForbiddenError('Usuário não informado!');
        }

        const jwtPayload = {username: user.username};
        const secretkey = 'my_secret_key';
        const jwtOptions = {subject: user?.uuid};

        const jwt = JWT.sign(jwtPayload, secretkey, jwtOptions);

        res.status(StatusCodes.OK).json({token: jwt});

    }catch(error){
        next(error);
    }
});

authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction)=>{
    try {
        res.sendStatus(StatusCodes.OK);
    } catch (error) {
        next(error);
    }
});

export default authorizationRoute;