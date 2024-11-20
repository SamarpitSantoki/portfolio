"use client";
import { useSearchParams } from "next/navigation";

function Page() {
  const searchParams = useSearchParams();

  const openApp = () => {
    window.location.href = `exp+worldclasslearningapp://${searchParams.get(
      "path"
    )}`;
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        onClick={openApp}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open in App
      </button>
    </div>
  );
}

export default Page;
