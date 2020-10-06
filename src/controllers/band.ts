import { Request, Response, NextFunction } from 'express';
import client from '../db/index'

const testiKys = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: "Testi route toimii"
    })
};


// @desc    Get all products
// @route   GET /api/v1/products
const getBands = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("jeesus");
        await client.connect();

        const result = await client.query("SELECT * FROM bands WHERE name = 'Sentenced'");

        const bands = new Array()
        console.log(result.rows);

        result.rows.map(p => {
            let obj: any = new Object()

            result.rows.map((el, i) => {
                obj[el.name] = p[i]
            })

            bands.push(obj)
            console.log(bands);
            res.send(200);
        })
    } catch (err) {
        console.log(err);
    } finally {
        await client.end()
    }
}
export default { getBands, testiKys };