import { Request, response, Response } from 'express';
import shortId from 'shortid';
import { config } from '../config/constants';
import { URLModel } from '../database/models/url.model';

class UrlController{
    public async shortner(req: Request, res: Response): Promise<void> {
        const { originURL} = req.body;

        const url = await URLModel.findOne({originURL})
        if(url){
            res.json(url);
            return
        }
        
        const hash = shortId.generate();
        const shortURL = `${config.API_URL}/${hash}}`;

        const newURL = await URLModel.create({hash, shortURL, originURL});
        res.json(newURL);

        
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params;
        const url = await URLModel.findOne({ hash });
        if(url){
            res.redirect(url.originURL);
            return
        }

        response.status(400).json({error: 'URL Not Found'})
        
    }
}

export default UrlController;