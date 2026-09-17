import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.NEO_CONSOLE_BD,
    ssl: { rejectUnauthorized: false },
});

const tables = [
    "projetos",
    "projetos_cmps",
    "projetos_categorias_de_projetos_lnk",
    "categorias_de_projetos",
    "categorias_de_projetos_projeto_lnk",
    "files",
    "page_certificados",
    "page_certificados_cmps",
    "emails",
    "components_sections_seccao_de_cards",
    "components_sections_seccao_de_cards_cmps",
];

try {
    for (const table of tables) {
        const cols = await pool.query(
            `SELECT column_name, data_type
             FROM information_schema.columns
             WHERE table_schema = 'public' AND table_name = $1
             ORDER BY ordinal_position`,
            [table]
        );
        console.log(`\n=== ${table} ===`);
        for (const c of cols.rows) {
            console.log(`  ${c.column_name} (${c.data_type})`);
        }
    }

    console.log("\n\n=== DADOS de pagina_inicials_cmps ===");
    const pc = await pool.query(`SELECT * FROM pagina_inicials_cmps ORDER BY id`);
    for (const r of pc.rows) console.log(JSON.stringify(r));

    console.log("\n=== DADOS de configuracoes_do_sites_cmps ===");
    const cc = await pool.query(`SELECT * FROM configuracoes_do_sites_cmps ORDER BY id`);
    for (const r of cc.rows) console.log(JSON.stringify(r));

    console.log("\n=== DADOS de projetos_cmps ===");
    const pt = await pool.query(`SELECT * FROM projetos_cmps ORDER BY id`);
    for (const r of pt.rows) console.log(JSON.stringify(r));

    console.log("\n=== DADOS de projetos_categorias_de_projetos_lnk ===");
    const pl = await pool.query(`SELECT * FROM projetos_categorias_de_projetos_lnk ORDER BY id`);
    for (const r of pl.rows) console.log(JSON.stringify(r));

    console.log("\n=== DADOS de categorias_de_projetos ===");
    const ct = await pool.query(`SELECT * FROM categorias_de_projetos ORDER BY id`);
    for (const r of ct.rows) console.log(JSON.stringify(r));

    console.log("\n=== DADOS de page_certificados_cmps ===");
    const pcert = await pool.query(`SELECT * FROM page_certificados_cmps ORDER BY id`);
    for (const r of pcert.rows) console.log(JSON.stringify(r));

    console.log("\n=== DADOS de componentes hero cmps ===");
    const hc = await pool.query(
        `SELECT * FROM components_sections_hero_principals_cmps ORDER BY id`
    );
    for (const r of hc.rows) console.log(JSON.stringify(r));

    console.log("\n=== DADOS de components_sections_hero_principals ===");
    const hero = await pool.query(`SELECT * FROM components_sections_hero_principals`);
    for (const r of hero.rows) console.log(JSON.stringify(r));

    console.log("\n=== DADOS de projetos ===");
    const prj = await pool.query(`SELECT * FROM projetos ORDER BY id`);
    for (const r of prj.rows) console.log(JSON.stringify(r));

    console.log("\n=== DADOS de files ===");
    const fl = await pool.query(`SELECT id, name, url, formats, ext FROM files ORDER BY id`);
    for (const r of fl.rows) console.log(JSON.stringify({ ...r, formats: r.formats ? "..." : null }));

    console.log("\n=== DADOS de page_certificados ===");
    const pcare = await pool.query(`SELECT * FROM page_certificados ORDER BY id`);
    for (const r of pcare.rows) console.log(JSON.stringify(r));

    console.log("\n=== DADOS de certeficado detalhes ===");
    const det = await pool.query(`SELECT * FROM components_sections_certificado_detalhes ORDER BY id`);
    for (const r of det.rows) console.log(JSON.stringify(r));

    console.log("\n=== DADOS de certeficado detalhes cmps ===");
    const detc = await pool.query(
        `SELECT * FROM components_sections_certificado_detalhes_cmps ORDER BY id`
    );
    for (const r of detc.rows) console.log(JSON.stringify(r));
} catch (e) {
    console.error("ERRO:", e.message);
} finally {
    await pool.end();
}