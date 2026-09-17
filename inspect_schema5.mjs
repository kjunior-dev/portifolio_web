import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.NEO_CONSOLE_BD,
    ssl: { rejectUnauthorized: false },
});

try {
    const cmpsTables = await pool.query(
        `SELECT table_name FROM information_schema.tables
         WHERE table_schema = 'public' AND table_name LIKE '%_cmps'`
    );
    const names = cmpsTables.rows.map((r) => r.table_name);

    for (const table of names) {
        const res = await pool.query(
            `SELECT * FROM "${table}" WHERE field = \$1 OR field = \$2 OR field = \$3`,
            ["redesSocial", "menuPrincipal", "redesSociais"]
        );
        if (res.rows.length > 0) {
            console.log(`\n=== ${table} ===`);
            for (const r of res.rows) console.log(JSON.stringify(r));
        }
    }
} catch (e) {
    console.error("ERRO:", e.message);
} finally {
    await pool.end();
}