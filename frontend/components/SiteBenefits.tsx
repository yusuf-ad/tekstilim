import { FaHeadset, FaLock, FaShippingFast, FaSyncAlt } from "react-icons/fa";

const benefits = [
  {
    icon: <FaShippingFast />,
    title: "Ücretsiz Kargo",
    description: "250 TL ve üzeri alışverişlerde ücretsiz kargo fırsatı.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Para İade Garantisi",
    description: "30 gün içinde koşulsuz para iade garantisi.",
  },
  {
    icon: <FaHeadset />,
    title: "7/24 Destek",
    description: "Her zaman yanınızdayız, 7/24 müşteri desteği.",
  },
  {
    icon: <FaLock />,
    title: "Güvenli Ödeme",
    description: "Güvenli ve hızlı ödeme seçenekleri ile alışveriş yapın.",
  },
];

function SiteBenefits() {
  return (
    <section className="custom-container mb-12 px-8 py-12">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <div key={benefit.title}>
            <p className="mb-5 text-3xl md:text-4xl text-primary-500">
              {benefit.icon}
            </p>

            <h4 className="mb-1 text-lg md:text-xl font-bold text-primary-900">
              {benefit.title}
            </h4>

            <p className="font-medium md:text-base text-sm text-primary-600">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SiteBenefits;
