import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.NEO_CONSOLE_BD,
    ssl: { rejectUnauthorized: false },
});

const tables = [
    "pagina_inicials_cmps",
    "components_sections_hero_principals",
    "components_sections_sobre_mims",
    "components_sections_competencias_tecnicas",
    "components_sections_experiencia_profissionals",
    "components_sections_projetos",
    "components_sections_contactos",
    "components_layout_footers",
    "components_shared_acoes",
    "components_shared_competencias",
    "components_shared_destaque_profissionals",
    "components_shared_card_informativos",
    "components_shared_categoria_de_competencias",
    "components_shared_tecnologias",
    "components_shared_experiencias",
    "components_shared_responsabilidades",
    "components_shared_rede_socials",
    "components_shared_informacao_de_contactos",
    "components_shared_link_de_navegacaos",
    "components_shared_funcionalidade_do_projetos",
    "components_sections_certificado_detalhes",
    "components_sections_hero_principals_cmps",
    "components_sections_competencias_tecnicas_cmps",
    "components_sections_experiencia_profissionals_cmps",
    "components_sections_contactos_cmps",
    "components_layout_footers_cmps",
    "components_shared_categoria_de_competencias_cmps",
    "components_shared_experiencias_cmps",
    "components_sections_certificado_detalhes_cmps",
    "configuracoes_do_sites",
    "configuracoes_do_sites_cmps",
    "components_shared_card_informativos",
    "components_shared_rede_socials",
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
} catch (e) {
    console.error("ERRO:", e.message);
} finally {
    await pool.end();
}