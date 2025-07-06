export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Personalized strategies to manage anxiety, reduce stress, and regain a sense of calm and control in daily life.",
      image:
        "https://images.pexels.com/photos/5717264/pexels-photo-5717264.jpeg",
    },
    {
      title: "Relationship Counseling",
      description:
        "Support for individuals and couples to improve communication, build trust, and strengthen emotional connections.",
      image:
        "https://images.pexels.com/photos/6933051/pexels-photo-6933051.jpeg",
    },
    {
      title: "Trauma Recovery",
      description:
        "Compassionate therapy for healing from past trauma, building resilience, and moving forward with strength.",
      image:
        "https://images.pexels.com/photos/6932293/pexels-photo-6932293.jpeg",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-br from-cyan-50 to-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-cyan-800 mb-16">
          Services & Specialties
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-8 bg-gradient-to-b from-cyan-50 to-white">
                <h3 className="text-2xl font-semibold text-cyan-700 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-[1.05rem]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
