export default function Faqs() {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission.",
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required.",
    },
  ]

  return (
    <section id="faq" className="bg-gradient-to-b from-white to-blue-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-500 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600 text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
