import fs from "fs";
import path from "path";
const db = path.join(process.env.ROOT_DIR, "db/db.json");
export default function handler(req, res) {
  try {
    const data = JSON.parse(fs.readFileSync(db, { encoding: "utf-8" }));
    data.savedApps = req.body;
    fs.writeFileSync(db, JSON.stringify(data));
    return res.status(200).json({ ok: true });
  } catch (e) {
    res.status(501).json({ ok: false, message: e.message });
  }
}
