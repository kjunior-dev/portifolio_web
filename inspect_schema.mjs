import pg from "pg";

const { Pool } = pg;

const url = process.env.NEO_CONSOLE_BD;

if (!url) {
    console.error("NEO_CONSOLE_BD não definida");
    process.exit(1);
}

const pool = new Pool({
    connectionString: url,
    ssl: { rejectUnauthorized: false },
});

try {
    const tables = await pool.query(`
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public'
          AND table_type = 'BASE TABLE'
        ORDER BY table_name;
    `);

    console.log("=== TABELAS ===");
    for (const t of tables.rows) {
        console.log(t.table_name);
    }

    console.log("\n=== COLUNAS DA TABELA pagina_inicials (se existir) ===");
    const cols = await pool.query(`
        SELECT column_name, data_type
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = 'pagina_inicials'
        ORDER BY ordinal_position;
    `);
    for (const c of cols.rows) {
        console.log(`${c.column_name} (${c.data_type})`);
    }
} catch (e) {
    console.error("ERRO:", e.message);
} finally {
    await pool.end();
}