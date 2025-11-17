import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center items-center mb-16 gap-1">
            <div className="relative w-48 h-16">
              <Image
                src="/logo2.png"
                alt="Sweable Logo"
                fill
                className="object-contain"
                sizes="192px"
              />
            </div>
            <span className="text-4xl font-bold text-[#4d8bab] animate-blink">_</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Never Miss a Tech{" "}
            <span className="text-[rgb(69,194,250)]">Internship</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Real-time alerts for the latest software engineering internship postings.
            Track your favorite companies and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-[rgb(69,194,250)] text-black font-semibold rounded-xl hover:bg-[rgb(89,214,255)] transition-all transform hover:scale-105"
            >
              Download for iOS
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-[rgb(31,33,46)] border border-[rgb(69,194,250)] border-opacity-30 text-white font-semibold rounded-xl hover:bg-[rgb(31,33,46)] hover:bg-opacity-80 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* App Screenshots Section - Placeholder */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            See It in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Screenshot 1 - Explore */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[300px] aspect-[9/19.5] rounded-3xl overflow-hidden border-2 border-[rgb(69,194,250)] border-opacity-30 shadow-2xl">
                <Image
                  src="/screenshot-explore.png"
                  alt="Sweable Explore Tab - Browse internships"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <p className="mt-4 text-gray-300 font-semibold">Browse Internships</p>
              <p className="text-sm text-gray-400">Search and filter opportunities</p>
            </div>

            {/* Screenshot 2 - Watchlist */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[300px] aspect-[9/19.5] rounded-3xl overflow-hidden border-2 border-[rgb(69,194,250)] border-opacity-30 shadow-2xl">
                <Image
                  src="/screenshot-watchlist.png"
                  alt="Sweable Watchlist Tab - Track companies"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <p className="mt-4 text-gray-300 font-semibold">Company Watchlist</p>
              <p className="text-sm text-gray-400">Track your favorite companies</p>
            </div>

            {/* Screenshot 3 - Notifications */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[300px] aspect-[9/19.5] rounded-3xl overflow-hidden border-2 border-[rgb(69,194,250)] border-opacity-30 shadow-2xl">
                <Image
                  src="/screenshot-notifications.png"
                  alt="Sweable Notifications Tab - Get alerts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <p className="mt-4 text-gray-300 font-semibold">Real-Time Alerts</p>
              <p className="text-sm text-gray-400">Never miss an opportunity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Everything You Need to Land Your Dream Internship
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-[rgb(31,33,46)] rounded-2xl p-8 border border-[rgb(69,194,250)] border-opacity-20 hover:border-opacity-40 transition-all">
              <div className="w-16 h-16 mb-4 rounded-xl bg-[rgb(69,194,250)] flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Real-Time Alerts</h3>
              <p className="text-gray-300 leading-relaxed">
                Get instant push notifications when new internships are posted. Never miss an opportunity from your target companies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[rgb(31,33,46)] rounded-2xl p-8 border border-[rgb(69,194,250)] border-opacity-20 hover:border-opacity-40 transition-all">
              <div className="w-16 h-16 mb-4 rounded-xl bg-[rgb(69,194,250)] flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Smart Search</h3>
              <p className="text-gray-300 leading-relaxed">
                Search by company, location, or role. Filter through thousands of internships to find exactly what you&apos;re looking for.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[rgb(31,33,46)] rounded-2xl p-8 border border-[rgb(69,194,250)] border-opacity-20 hover:border-opacity-40 transition-all">
              <div className="w-16 h-16 mb-4 rounded-xl bg-[rgb(69,194,250)] flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Company Watchlist</h3>
              <p className="text-gray-300 leading-relaxed">
                Track your dream companies. Build a custom watchlist and get notified the moment they post new positions.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[rgb(31,33,46)] rounded-2xl p-8 border border-[rgb(69,194,250)] border-opacity-20 hover:border-opacity-40 transition-all">
              <div className="w-16 h-16 mb-4 rounded-xl bg-[rgb(69,194,250)] flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Always Up to Date</h3>
              <p className="text-gray-300 leading-relaxed">
                Our system continuously monitors multiple sources to ensure you see the freshest postings as soon as they go live.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[rgb(31,33,46)] rounded-2xl p-8 border border-[rgb(69,194,250)] border-opacity-20 hover:border-opacity-40 transition-all">
              <div className="w-16 h-16 mb-4 rounded-xl bg-[rgb(69,194,250)] flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Detailed Information</h3>
              <p className="text-gray-300 leading-relaxed">
                View compensation, location, role type, and more. All the details you need to decide if an opportunity is right for you.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-[rgb(31,33,46)] rounded-2xl p-8 border border-[rgb(69,194,250)] border-opacity-20 hover:border-opacity-40 transition-all">
              <div className="w-16 h-16 mb-4 rounded-xl bg-[rgb(69,194,250)] flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                  <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Native iOS Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Beautiful, fast, and intuitive. Built specifically for iOS with a clean monospace design and smooth animations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-[rgb(31,33,46)] rounded-3xl p-12 md:p-16 border border-[rgb(69,194,250)] border-opacity-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students tracking their dream internships
          </p>
          <a
            href="#"
            className="inline-block px-10 py-5 bg-[rgb(69,194,250)] text-black text-lg font-semibold rounded-xl hover:bg-[rgb(89,214,255)] transition-all transform hover:scale-105"
          >
            Download Sweable
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="relative w-48 h-12">
              <Image
                src="/logo2.png"
                alt="Sweable Logo"
                fill
                className="object-contain"
                sizes="192px"
              />
            </div>
            <p className="text-gray-400 text-center md:text-left">Track tech internships, land your dream job</p>
          </div>
          <div className="flex gap-8 text-gray-400">
            <a href="#" className="hover:text-[rgb(69,194,250)] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[rgb(69,194,250)] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[rgb(69,194,250)] transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; 2025 Sweable. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
