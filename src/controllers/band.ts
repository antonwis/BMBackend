import { Request, Response, NextFunction } from 'express';
import pool from '../db/index'


// @desc    Get a preview list of Black Metal bands by country
// *** THIS IS FOR DEMO PURPOSES ONLY ***
// @route   GET /api/bands/preview/:country
const getPreviewBands = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const country = req.params.country;
        const kys = `SELECT * FROM bands WHERE country = '${country}' AND genre LIKE '%Black%'`;
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

// @desc    Test query for testing (╯°□°）╯︵ ┻━┻)
// @route   GET /api/bands
const getBands = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await pool.connect()
        .then(client =>{
            client.query("SELECT * FROM bands WHERE country = 'Germany' AND name LIKE 'Sentenc%'")
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
        let country = req.params.country;
        const kys = `SELECT * FROM bands WHERE country LIKE '%${country}%'`;
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

// @desc    Get bands by country and genre
// @route   GET /api/bands/country/:country/genre/:genre
const getBandsByCountryAndGenre = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const country = req.params.country;
        const genre = req.params.genre;
        const kys = `SELECT * FROM bands WHERE country = '${country}' AND genre LIKE '%${genre}%'`;
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

// @desc    Get bands by country and name
// @route   GET /api/bands/country/:country/:name
const getBandsByCountryAndName = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const country = req.params.country;
        const name = req.params.name;
        const kys = `SELECT * FROM bands WHERE country = '${country}' AND name LIKE '%${name}%'`;
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

// @desc    Get bands by country and status
// @route   GET /api/bands/country/:country/status/:status
const getBandsByCountryAndStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const country = req.params.country;
        const status = req.params.status;
        const kys = `SELECT * FROM bands WHERE country = '${country}' AND status LIKE '%${status}%'`;
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
        const kys = `SELECT * FROM bands WHERE name LIKE '%${name}%'`;
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

// @desc    Get bands by name and status
// @route   GET /api/bands/:name/status/:status
const getBandsByNameAndStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const name = req.params.name;
        const status = req.params.status;
        const kys = `SELECT * FROM bands WHERE name LIKE '%${name}%' AND status LIKE '%${status}%'`;
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

// @desc    Get bands by genre and name
// @route   GET /api/bands/:genre/:name
const getBandsByGenreAndName = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const genre = req.params.genre;
        const name = req.params.name;
        const kys = `SELECT * FROM bands WHERE genre LIKE '%${genre}%' AND name LIKE '%${name}%'`;
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

// @desc    Get bands by genre and status
// @route   GET /api/bands/:genre/status/:status
const getBandsByGenreAndStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const genre = req.params.genre;
        const status = req.params.status;
        const kys = `SELECT * FROM bands WHERE genre LIKE '%${genre}%' AND status LIKE '%${status}%'`;
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

// @desc    Get bands by genre (can be partial genre e.g. 'Melodic' returns 'Melodic Black' and 'Melodic Death' etc.)
// @route   GET /api/bands/genre/:genre
const getBandsByGenre = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const genre = req.params.genre;
        const kys = `SELECT * FROM bands WHERE genre LIKE '%${genre}%'`;
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

// @desc    Get bands by band status e.g. 'Active', 'Split-up' or 'Split'
// @route   GET /api/bands/status/:status
const getBandsByStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const status = req.params.status;
        const kys = `SELECT * FROM bands WHERE status LIKE '%${status}%'`;
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
export default {
    getBands,
    getBandsByCountry,
    getBandsByCountryAndGenre,
    getBandsByCountryAndName,
    getBandsByCountryAndStatus,
    getBandsByName,
    getBandsByNameAndStatus,
    getBandsByGenreAndName,
    getBandsByGenreAndStatus,
    getBandsByGenre,
    getBandsByStatus,
    getPreviewBands,
};