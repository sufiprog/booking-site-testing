import { Button } from "@/components/ui/button";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-[#004D4D]">
      {/* Top Bar */}
      <div className="bg-[#004D4D] text-white px-4 py-2 flex justify-between items-center">
        <span className="text-sm">contact@umrahkameti.com</span>
        <div className="flex items-center gap-4">
          <span className="text-sm">EN</span>
          <div className="flex items-center gap-2">
            <Link href="#" className="text-white hover:text-gray-200">
              <FaFacebookF  className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-200">
              <FaInstagram className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-200">
              <FaYoutube className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="Umrah Kameti"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
          <div className="flex gap-4">
            <Button variant="outline" className="bg-white">
              LOGIN
            </Button>
            <Button className="bg-[#B8860B] hover:bg-[#986F0B] text-white">
              REGISTER
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="/umrah-pic.jpg"
              alt="Umrah Pilgrims"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="order-1 lg:order-2 text-right">
            <h2 className="text-white text-xl mb-4">
              كاروان محترم میں خوش آمدید
            </h2>
            <h1 className="text-white text-5xl font-bold mb-6">
              عمرہ اب پہلے سے آسان، صرف
              <span className="text-[#B8860B]"> 5,000 </span>
              روپے ماہانہ سے
            </h1>
            <p className="text-white/80 mb-8 text-lg">
              صرف 5,000 روپے کی ماہانہ قسط کے ساتھ اپنا عمرہ پیکج حاصل کریں۔
            </p>
            <Button className="bg-[#B8860B] hover:bg-[#986F0B] text-white text-lg px-8 py-6">
              ابھی شامل ہوں
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-center">
          <div className="bg-white/10 p-6 rounded-lg">
            <p className="text-[#B8860B] text-4xl font-bold">34</p>
            <p className="text-white mt-2">مکمل عمرہ</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <p className="text-[#B8860B] text-4xl font-bold">0</p>
            <p className="text-white mt-2">کمیٹی پلان</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <p className="text-[#B8860B] text-4xl font-bold">20</p>
            <p className="text-white mt-2">اراکین</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <p className="text-[#B8860B] text-4xl font-bold">0</p>
            <p className="text-white mt-2">گروپس</p>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="bg-white rounded-lg p-6 mt-16 grid grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-[#B8860B] text-3xl font-bold">200</p>
            <p className="text-gray-600">مکمل</p>
          </div>
          <div>
            <p className="text-[#B8860B] text-3xl font-bold">200</p>
            <p className="text-gray-600">مکمل</p>
          </div>
          <div>
            <p className="text-[#B8860B] text-3xl font-bold">200</p>
            <p className="text-gray-600">مکمل</p>
          </div>
          <div>
            <p className="text-[#004D4D] text-3xl font-bold">127</p>
            <p className="text-gray-600">ابھی شامل ہوں</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
