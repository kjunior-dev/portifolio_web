import { LuChevronLeft as ChevronLeft, LuChevronRight as ChevronRight } from "react-icons/lu";

type PaginationProps = {
    currentPage: number;
    pageCount: number;
    searchParamName?: string;
};

export function Pagination({
    currentPage,
    pageCount,
    searchParamName = "page",
}: PaginationProps) {
    if (pageCount <= 1) {
        return null;
    }

    const pages = Array.from({length: pageCount}, (_, index) => index + 1);
    const previousPage = Math.max(currentPage - 1, 1);
    const nextPage = Math.min(currentPage + 1, pageCount);

    const getHref = (page: number) => {
        const params = new URLSearchParams();
        params.set(searchParamName, String(page));

        return `?${params.toString()}#projects`;
    };

    return (
        <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Paginação">
            <a
                href={getHref(previousPage)}
                aria-disabled={currentPage === 1}
                className={`inline-flex size-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 ${
                    currentPage === 1
                        ? "pointer-events-none border-slate-200 text-slate-300"
                        : "border-slate-200 text-slate-700 hover:border-cyan-300 hover:bg-cyan-50"
                }`}
            >
                <ChevronLeft className="size-4" />
                <span className="sr-only">Página anterior</span>
            </a>

            {pages.map((page) => {
                const isActive = page === currentPage;

                return (
                    <a
                        key={page}
                        href={getHref(page)}
                        aria-current={isActive ? "page" : undefined}
                        className={`inline-flex size-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 ${
                            isActive
                                ? "border-slate-950 bg-slate-950 text-white"
                                : "border-slate-200 bg-white text-slate-700 hover:border-cyan-300 hover:bg-cyan-50"
                        }`}
                    >
                        {page}
                    </a>
                );
            })}

            <a
                href={getHref(nextPage)}
                aria-disabled={currentPage === pageCount}
                className={`inline-flex size-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 ${
                    currentPage === pageCount
                        ? "pointer-events-none border-slate-200 text-slate-300"
                        : "border-slate-200 text-slate-700 hover:border-cyan-300 hover:bg-cyan-50"
                }`}
            >
                <ChevronRight className="size-4" />
                <span className="sr-only">Próxima página</span>
            </a>
        </nav>
    );
}
