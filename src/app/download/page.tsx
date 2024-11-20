import Image from "next/image";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            WorldClassLearning
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Unlock Your Potential with AI-Powered Learning
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
          <a
            href="#"
            className="flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105"
          >
            <Image
              src="/apple-logo.svg"
              alt="Apple Logo"
              width={24}
              height={24}
            />
            <div>
              <div className="text-sm">Download on the</div>
              <div className="text-xl font-bold">App Store</div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105"
          >
            <Image
              src="/google-play.svg"
              alt="Google Play"
              width={24}
              height={24}
            />
            <div>
              <div className="text-sm">Get it on</div>
              <div className="text-xl font-bold">Google Play</div>
            </div>
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
            <div className="text-cyan-400 text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">AI-Powered Learning</h3>
            <p className="text-gray-300">
              Personalized learning paths adapted to your unique style and pace
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
            <div className="text-cyan-400 text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Smart Progress Tracking</h3>
            <p className="text-gray-300">
              Real-time analytics and insights to keep you motivated
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
            <div className="text-cyan-400 text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-2">Global Community</h3>
            <p className="text-gray-300">
              Connect with learners worldwide and share your journey
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <div className="flex justify-center gap-8 mb-6">
            <span className="text-4xl">⭐️⭐️⭐️⭐️⭐️</span>
          </div>
          <p className="text-xl text-gray-300 mb-2">
            Trusted by over 1 million learners worldwide
          </p>
          <p className="text-gray-400">
            Featured in TechCrunch, Forbes, and Education Weekly
          </p>
        </div>
      </div>
    </div>
  );
}
