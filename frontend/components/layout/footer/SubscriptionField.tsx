import { Mail, MoveRight } from "lucide-react";

function SubscriptionField() {
  return (
    <>
      <h3 className="text-white-500 mb-6">Abone ol</h3>

      <p className="mb-6 text-sm  leading-6">
        Yeni koleksiyonlar ve ürün lansmanları hakkında ilk bilgi sahibi olmak
        için e-posta adresinizi girebilirsiniz.
      </p>

      <div className="relative">
        <input
          id="email"
          placeholder="Email"
          type="text"
          className="py-4 px-4 pl-14 border rounded-xl text-primary-20 placeholder:text-primary-20 border-primary-100 text-sm w-full bg-transparent"
        />
        <label
          htmlFor="email"
          className="py-4 px-2 pl-4 rounded-l-xl left-0 absolute text-2xl text-primary-20 mr-4"
        >
          <Mail />
        </label>

        <button className="absolute right-0 p-4 text-primary-20 rounded-r-xl">
          <MoveRight />
        </button>
      </div>
    </>
  );
}

export default SubscriptionField;
