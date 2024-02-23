import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center text-center h-screen flex-col">
      <h1 className="text-3xl">Get Weather Details</h1>
      <Link href="/weather">
        <button className="text-xl bg-blue-500 text-black font-semibold px-4 py-2 rounded-md mt-3 hover:opacity-80 active:opacity-70">
          Click here
        </button>
      </Link>
    </div>
  );
}
