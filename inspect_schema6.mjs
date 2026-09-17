import pg from "pg";
const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.NEO_CONSOLE_BD, ssl: { rejectUnauthorized: false } });
try {
  const r = await pool.query(`SELECT * FROM categorias_de_projetos_projeto_lnk ORDER BY id`);
  for (const row of r.rows) console.log(JSON.stringify(row));
} catch (e) { console.error("ERRO:", e.message); } finally { await pool.end(); }
