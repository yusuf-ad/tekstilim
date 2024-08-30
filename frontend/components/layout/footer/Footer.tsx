import Contact from "./Contact";
import FooterMenu from "./FooterMenu";
import SubscriptionField from "./SubscriptionField";

const informationList = [
  { title: "Hesabım", link: "#" },
  { title: "Giriş", link: "#" },
  { title: "Sepetim", link: "#" },
  { title: "İstek Listem", link: "#" },
  { title: "Ödeme", link: "#" },
];

const serviceList = [
  { title: "Hakkımızda", link: "#" },
  { title: "Kariyer", link: "#" },
  { title: "Teslimat Bilgileri", link: "#" },
  { title: "Gizlilik Politikası", link: "#" },
  { title: "Şartlar ve Koşullar", link: "#" },
];

function Footer() {
  return (
    <footer className="bg-primary-800 text-lg font-semibold text-primary-100">
      <div className="custom-container flex flex-col justify-between gap-12 px-8 py-12 md:flex-row">
        <div className="md:basis-72">
          <h1 className="mb-8 text-4xl font-semibold text-white-500">
            tekstilim
          </h1>

          <Contact />
        </div>

        <div className="flex basis-1/4 justify-between gap-8">
          <FooterMenu title="Bilgi" list={informationList} />

          <FooterMenu title="Servisler" list={serviceList} />
        </div>

        <div className="md:basis-96">
          <SubscriptionField />
        </div>
      </div>

      <div className="custom-container">
        <div className="border-t border-primary-80 px-8 py-6">
          <p className="text-sm text-primary-100">
            © 2024 Tekstilim. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
