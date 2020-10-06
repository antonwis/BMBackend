import { Request, Response, NextFunction } from 'express';
import pool from '../db/index'

const testiKys = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: "Testi route toimii"
    })
};

// @desc    Get bands (test)
// @route   GET /api/bands
const getBands = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await pool.connect()
        .then(client =>{
            client.query("SELECT * FROM bands WHERE name = 'Sentenced'")
            .then(result =>{
                client.release();
                console.log("client released");
                res.send(result.rows);
            })
            .catch(e => {
                client.release();
                console.log(e.stack);
            })
        });
    } catch (err) {
        console.log(err);
    }
}
// @desc    Get bands by country
// @route   GET /api/bands/country/:country
const getBandsByCountry = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const country = req.params.country;
        const kys = `SELECT * FROM bands WHERE country = '${country}'`;
        await pool.connect()
        .then(client =>{
            client.query(kys)
            .then(result =>{
                client.release();
                console.log("client released");
                res.send(result.rows);
            })
            .catch(e => {
                client.release();
                console.log(e.stack);
            })
        });
    } catch (err) {
        console.log(err);
    }
}

// @desc    Get bands by name
// @route   GET /api/bands/:name
const getBandsByName = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const name = req.params.name;
        const kys = `SELECT * FROM bands WHERE name = '${name}'`;
        await pool.connect()
        .then(client =>{
            client.query(kys)
            .then(result =>{
                client.release();
                console.log("client released");
                res.send(result.rows);
            })
            .catch(e => {
                client.release();
                console.log(e.stack);
            })
        });
    } catch (err) {
        console.log(err);
    }
}

// @desc    Get bands by genre
// @route   GET /api/bands/genre/:genre
const getBandsByGenre = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const genre = req.params.genre;
        const kys = `SELECT * FROM bands WHERE genre = '${genre}'`;
        await pool.connect()
        .then(client =>{
            client.query(kys)
            .then(result =>{
                client.release();
                console.log("client released");
                res.send(result.rows);
            })
            .catch(e => {
                client.release();
                console.log(e.stack);
            })
        });
    } catch (err) {
        console.log(err);
    }
}

// @desc    Get bands by band status
// @route   GET /api/bands/status/:status
const getBandsByStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const status = req.params.status;
        const kys = `SELECT * FROM bands WHERE status = '${status}'`;
        await pool.connect()
        .then(client =>{
            client.query(kys)
            .then(result =>{
                client.release();
                console.log("client released");
                res.send(result.rows);
            })
            .catch(e => {
                client.release();
                console.log(e.stack);
            })
        });
    } catch (err) {
        console.log(err);
    }
}
export default { getBands, getBandsByCountry, getBandsByName, getBandsByGenre, getBandsByStatus, testiKys};