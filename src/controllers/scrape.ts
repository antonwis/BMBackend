import axios from 'axios';
import cheerio from "cheerio"
import { Request, Response, NextFunction } from 'express';

const getBandData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const link = req.body.link
        const id = link.match(/\d+$/).toString();
        const discography = await axios.get(`https://www.metal-archives.com/band/discography/id/${id}/tab/all`)
        const web = await axios.get(link)
        let kys = cheerio.load(web.data)
        const photoUrl = kys('#photo').attr('href');
        const logoUrl = kys('#logo').attr('href');
        const location = kys('#band_stats .float_left dt').nextAll().eq(2).text()
        const formYear = kys('#band_stats .float_left dt').nextAll().eq(6).text();
        const yearsActive = kys('#band_stats .clear dt').nextAll().eq(0).text()
        kys = cheerio.load(discography.data)
        const albumLink:Array<string> = []
        const albumName:Array<string> = []
        const albumYear:Array<string> = []
        const albumType:Array<string> = []
        const albums:Array<Object> = []
        kys("body > table > tbody > tr > td:nth-child(1) > a").each((index,element) => {albumName.push(kys(element.children).text())})
        kys("body > table > tbody > tr > td:nth-child(2)").each((index,element) => {albumType.push(kys(element.children).text())})
        kys("body > table > tbody > tr > td:nth-child(3)").each((index,element) => {albumYear.push(kys(element.children).text())})
        kys("body > table > tbody > tr > td:nth-child(1) > a").each((index,element) => {albumLink.push(element.attribs.href)})
        for (let i = 0; i < albumName.length; i++) {albums.push({name:albumName[i], type:albumType[i], year:albumYear[i],link:albumLink[i]})}
        const albumsFinal = Object.assign({}, albums);
        return res.json({"photo":photoUrl,
        "logo":logoUrl,
        "location":location,
        "formYear":formYear,
        "yearsActive":yearsActive,
        "albums":albumsFinal
        })
    } catch (err) {
        console.log(err);
    }
}

export default {
    getBandData
};