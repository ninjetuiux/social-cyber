import Link from "next/link";
export default function Pagination({ page, hasNextPage, totalPages }) {
  const hasNext = hasNextPage
  const currentPage = page

  return (
    <div className="flex flex-1 justify-between my-4 w-full relative z-50">
      <Link href={`/Blog?page=${currentPage - 1}`} className="flex-[0.2]">
        <button
          className="mx-1 px-4 py-2 border rounded disabled:cursor-not-allowed cursor-pointer"
          disabled={currentPage <= 1}
        >
          הקודם
        </button>
      </Link>

      <div className="flex-[0.6] mx-auto flex justify-center items-center h-full">
        <span>דף {currentPage} מתוך {totalPages}</span>
      </div>
      <Link href={`/Blog?page=${currentPage + 1}`} className="flex-[0.2] flex justify-end">

        <button
          className="mx-1 px-4 py-2 border rounded disabled:cursor-not-allowed cursor-pointer"
          disabled={!hasNext}
        >
          הבא
        </button>
      </Link>
    </div>
  );
}