import fs from 'fs';
import { v4 as uuid } from 'uuid';

export default function order(req, res) {
  const id = `${Date.now()}-${uuid()}.json`;

  fs.writeFileSync(`orders/${id}`, JSON.stringify(req.body, null, 2));

  res.end(JSON.stringify('Order'));
}
