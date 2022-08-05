const indexCtrl = {}

import db from '../config/database';

indexCtrl.getMascotas = async (req, res) => {
  const sql = 'SELECT * FROM mascotas';
  const data = await db.query(sql);
  res.json(data);
}


export default indexCtrl;