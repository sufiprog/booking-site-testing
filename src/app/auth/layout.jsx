import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function AuthLayout({ children }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#d5bcff] to-[#ffffff]">
      <div className="flex  justify-between items-center relative">
        <div className="w-[50%] hidden md:block">
          <div className="bg-[#faddff68] w-full h-screen">
            <div className="p-5">
              <Link href={"/"}>
                <Image src={"/logo.png"} alt="logo" width={150} height={80} />
              </Link>
            </div>
            <div className="mt-5 relative">
              <h2 className="text-center font-bold my-3 text-4xl">
                Welcome to Umrah Kameti{" "}
              </h2>
              <p className="text-gray-700 text-center px-14">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis reprehenderit hic alias saepe, quidem at? Ipsam in
                consequatur doloremque repellendus.
              </p>
            </div>
            <div className="my-6 flex items-center justify-center">
              <Image
                src={"/hero.jpeg"}
                alt="hero"
                width={320}
                height={320}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <ToastContainer />
        {children}
      </div>
    </main>
  );
}
