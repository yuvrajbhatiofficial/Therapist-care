export default function Contact() {
  return (
    <section id="contact" className="bg-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* LEFT: Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-cyan-500 mb-4">Get in Touch</h2>

          <div className="text-gray-700 space-y-2">
            <p className="text-xl font-semibold">Dr. Serena Blake, PsyD</p>
            <p className="text-md italic">Clinical Psychologist</p>
          </div>

          <div className="text-gray-600">
            <h3 className="font-semibold text-lg mb-1">Location:</h3>
            <p>1287 Maplewood Drive</p>
            <p>Los Angeles, CA 90026</p>
          </div>

          <div className="text-gray-600">
            <h3 className="font-semibold text-lg mb-1">Contact:</h3>
            <p>📞 (323) 555-0192</p>
            <p>📧 <a href="mailto:serena@blakepsychology.com" className="text-cyan-600 hover:underline">serena@blakepsychology.com</a></p>
          </div>

          <div className="text-gray-600">
            <h3 className="font-semibold text-lg mb-1">Office Hours:</h3>
            <p>In-person: Tue & Thu, 10 AM – 6 PM</p>
            <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM – 5 PM</p>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="md:w-1/2 w-full bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-cyan-600 mb-6">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
