import db from '../../db.json';

export default function DbHandler(req, res) {
    // Ajuste para não tomar um erro de CORS
    if(req.method === 'OPTIONS') {
        res.status(200).end();
        return ;
    }

    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader(
        'Access-Control-Allow-Methods', 
        'GET,OPTIONS,PATCH,DELETE,POST,PUT'
    );

    res.json(db);
}