import axios from 'axios';
import cheerio from "cheerio"
import { Request, Response, NextFunction } from 'express';

const getBandData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const link = req.body.link
        const web = await axios.get(link)
        const kys = cheerio.load(web.data)
        const photoUrl = kys('#photo').attr('href');
        const logoUrl = kys('#logo').attr('href');
        const location = kys('#band_stats .float_left dt').nextAll().eq(2).text()
        const formYear = kys('#band_stats .float_left dt').nextAll().eq(6).text();
        const yearsActive = kys('#band_stats .clear dt').nextAll().eq(0).text()
        
        return res.json({"photo":photoUrl,
        "logo":logoUrl,
        "location":location,
        "formYear":formYear,
        "yearsActive":yearsActive,
        })
    } catch (err) {
        console.log(err);
    }
}

export default {
    getBandData
};