"use client";
import { useSearchParams } from "next/navigation";
import { Metadata } from "next";

function Page() {
  const searchParams = useSearchParams();

  const openApp = () => {
    window.location.href = `exp+worldclasslearningapp://${searchParams.get(
      "path"
    )}`;

    setTimeout(() => {
      if (document.hasFocus()) {
        window.location.href = "https://samarpit.dev/download";
      }
    }, 1000);
  };

  // check if the app is installed
  const isAppInstalled = () => {
    return window.location.href.includes("exp+worldclasslearningapp://");
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
