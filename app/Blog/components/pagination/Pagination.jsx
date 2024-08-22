import Link from "next/link";
export default function Pagination({ page, hasNextPage, totalPages }) {
  const hasNext = hasNextPage
  const currentPage = page

  return (
    <div className="flex justify-between my-4 w-full relative">
      <Link href={`/Blog?page=${currentPage - 1}`}>
        <button
          className="mx-1 px-4 py-2 border rounded disabled:cursor-not-allowed cursor-pointer"
          disabled={currentPage <= 1}
        >
          הקודם
        </button>
      </Link>

      <Link href={`/Blog?page=${currentPage + 1}`}>
        <button
          className="mx-1 px-4 py-2 border rounded disabled:cursor-not-allowed cursor-pointer"
          disabled={!hasNext}
        >
          הבא
        </button>
      </Link>
      <div className="absolute w-full flex justify-center items-center h-full">
        <span>דף {currentPage} מתוך {totalPages}</span>
      </div>
    </div>
  );
}