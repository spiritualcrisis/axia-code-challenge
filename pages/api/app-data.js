import fs from "fs";
import path from "path";
const db = path.join(process.env.ROOT_DIR, "db/db.json");

export default function handler(req, res) {
  try {
    const data = JSON.parse(fs.readFileSync(db, { encoding: "utf-8" }));
    res.status(200).json({ ok: true, data: data.apps });
  } catch (e) {
    res.status(501);
  }
}
