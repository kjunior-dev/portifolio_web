import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.NEO_CONSOLE_BD,
    ssl: { rejectUnauthorized: false },
});

const queries = {
    "DADOS pagina_inicials": `SELECT id, document_id, published_at FROM pagina_inicials ORDER BY id`,
    "COLUNAS files_related_mph": `SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name='files_related_mph' ORDER BY ordinal_position`,
    "DADOS files_related_mph": `SELECT * FROM files_related_mph ORDER BY id`,
    "COLUNAS sobre_mims_cmps": `SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name='components_sections_sobre_mims_cmps' ORDER BY ordinal_position`,
    "DADOS sobre_mims_cmps": `SELECT * FROM components_sections_sobre_mims_cmps ORDER BY id`,
    "DADOS seccao_de_cards_cmps": `SELECT * FROM components_sections_seccao_de_cards_cmps ORDER BY id`,
    "DADOS layout_footers_cmps": `SELECT * FROM components_layout_footers_cmps ORDER BY id`,
    "DADOS competencias_tecnicas_cmps": `SELECT * FROM components_sections_competencias_tecnicas_cmps ORDER BY id`,
    "DADOS categoria_de_competencias_cmps": `SELECT * FROM components_shared_categoria_de_competencias_cmps ORDER BY id`,
    "DADOS experiencia_profissionals_cmps": `SELECT * FROM components_sections_experiencia_profissionals_cmps ORDER BY id`,
    "DADOS experiencias_cmps": `SELECT * FROM components_shared_experiencias_cmps ORDER BY id`,
    "DADOS contactos_cmps": `SELECT * FROM components_sections_contactos_cmps ORDER BY id`,
    "DADOS components_shared_tecnologias ids": `SELECT id, nome, ordem, ativo FROM components_shared_tecnologias ORDER BY id LIMIT 30`,
    "DADOS components_shared_card_informativos top": `SELECT id, titulo, ativo, ordem FROM components_shared_card_informativos ORDER BY id LIMIT 15`,
    "DADOS components_shared_link_de_navegacaos top": `SELECT id, texto, url, ordem, ativo FROM components_shared_link_de_navegacaos ORDER BY id LIMIT 40`,
    "DADOS components_shared_experiencias top": `SELECT * FROM components_shared_experiencias ORDER BY id LIMIT 10`,
    "DADOS components_sections_sobre_mims": `SELECT * FROM components_sections_sobre_mims ORDER BY id`,
    "DADOS components_sections_seccao_de_cards": `SELECT * FROM components_sections_seccao_de_cards ORDER BY id`,
    "DADOS components_layout_footers": `SELECT * FROM components_layout_footers ORDER BY id`,
    "DADOS components_sections_competencias_tecnicas": `SELECT * FROM components_sections_competencias_tecnicas ORDER BY id`,
    "DADOS components_sections_contactos": `SELECT * FROM components_sections_contactos ORDER BY id`,
    "DADOS components_sections_experiencia_profissionals": `SELECT * FROM components_sections_experiencia_profissionals ORDER BY id`,
};

try {
    for (const [title, sql] of Object.entries(queries)) {
        console.log(`\n=== ${title} ===`);
        const r = await pool.query(sql);
        for (const row of r.rows) console.log(JSON.stringify(row));
    }
} catch (e) {
    console.error("ERRO:", e.message);
} finally {
    await pool.end();
}