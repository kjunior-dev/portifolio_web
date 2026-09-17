import {Pool} from "pg";

let pool: Pool | null = null;

function getPool(): Pool {
    if (!pool) {
        pool = new Pool({
            connectionString: process.env.NEO_CONSOLE_BD,
            ssl: {rejectUnauthorized: false},
            max: 5,
            idleTimeoutMillis: 10_000,
            connectionTimeoutMillis: 10_000,
        });

        pool.on("error", () => {
            // evita que erros em ligações idle derrubem o processo
        });
    }

    return pool;
}

export interface NeonRow {
    [key: string]: unknown;
}

export async function neonQuery<T = NeonRow>(
    text: string,
    params?: unknown[]
): Promise<T[]> {
    const result = await getPool().query(text, params as never[]);
    return result.rows as T[];
}

export async function neonExecute(text: string, params?: unknown[]): Promise<void> {
    await getPool().query(text, params as never[]);
}

export function closeNeonPool(): void {
    if (pool) {
        void pool.end();
        pool = null;
    }
}