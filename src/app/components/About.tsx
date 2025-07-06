import Image from 'next/image'
import doctorImg from '/public/image.png'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-100 to-white flex flex-col items-center justify-center px-6 py-24"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Doctor Image */}
        <div className="flex justify-center">
          <Image
            src={doctorImg}
            alt="Dr. Serena Blake"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* Description */}
        <div>
          <h2 className="text-5xl font-bold text-cyan-600 mb-6 text-center md:text-left">
            Meet Dr. Serena Blake
          </h2>
          <p className="text-gray-800 text-xl leading-relaxed text-center md:text-left">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with over eight years of experience and more than 500 client sessions.
            She integrates evidence-based approaches such as cognitive-behavioral therapy and mindfulness with compassionate, personalized care.
            <br /><br />
            Her mission is to help you overcome anxiety, improve your relationships, and heal from trauma. Whether you meet her in-person at her Maplewood Drive office or connect virtually via Zoom, Dr. Blake creates a safe and supportive environment where you can grow and thrive.
          </p>
        </div>
      </div>
    </section>
  )
}
