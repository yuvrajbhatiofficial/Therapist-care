export default function Hero() {
    return (
      <section
        id="hero"
        className="min-h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center text-center px-4 "
        style={{ backgroundImage: "url('https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-b.79c9c9cd.jpg&w=1080&q=75')",
     }}
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl  font-extrabold text-white drop-shadow-2xl mb-6 leading-tight">
            Your Wellness Journey Begins Here
          </h1>
          <h2 className="text-xl md:text-2xl text-white mb-8">
            Professional, compassionate therapy tailored to your unique needs.
          </h2>
          <a
            href="#contact"
            className="inline-block bg-linear-to-r bg-blue-400 animate-bounce text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 hover:animate-pulse transition"
          >
            Book a Free Consult
          </a>
        </div>
      </section>
    )
  }
  