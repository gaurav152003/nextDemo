import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="text-white">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
            Smart Enquiry Management System
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Transform Every
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Customer Enquiry
            </span>
            Into An Opportunity
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Submit enquiries, generate ticket IDs automatically, track customer
            requests, and manage communication efficiently through a modern
            enquiry portal.
          </p>

          <div className="flex gap-8 mt-10">
            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-gray-400">Responsive</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-gray-400">Available</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Secure</h3>
              <p className="text-gray-400">Storage</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
