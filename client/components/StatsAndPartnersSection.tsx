export default function StatsAndPartnersSection() {
  const partners = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/db501439efe10b1f9535ac29891c7fc3280df9cf?width=480",
      alt: "Techcombank",
      width: "w-48 sm:w-60",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/cf1883a663d98b6ba9bf6d35b39be4d9823b51ba?width=480",
      alt: "Shinhan Finance",
      width: "w-48 sm:w-60",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/09c2f9327b48936c013be8915b5bd887c581919f?width=120",
      alt: "Partner 3",
      width: "w-12 sm:w-14",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/afd8fa4f6305e0179e01572a59c6e3d28dce7bf8?width=280",
      alt: "Partner 4",
      width: "w-28 sm:w-36",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/097ee7948d2b02e9c5cf480e71d5a6b8fe4666bf?width=92",
      alt: "Square",
      width: "w-12 sm:w-14",
    },
  ];

  const partnersRow2 = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/b51ce3b1ce8722560fd77d0e582ae3393d0bcaf0?width=480",
      alt: "VinUni",
      width: "w-48 sm:w-60",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/4182ba5868e1f5da580b9f2cecd31d2a94855d3b?width=96",
      alt: "Partner 6",
      width: "w-12 sm:w-14",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/1843426f40e6c8889f00e2ef2b8eb04e2b7f1b29?width=216",
      alt: "Partner 7",
      width: "w-24 sm:w-28",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/c89e3afb3d8544872160299371c64ee9089661b7?width=280",
      alt: "Partner 8",
      width: "w-28 sm:w-36",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/ecab3152ad990c1baaea72c62e338970bc706c20?width=280",
      alt: "Partner 9",
      width: "w-28 sm:w-36",
    },
  ];

  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-teal to-brand-teal-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <svg
            className="absolute -left-48 top-32"
            width="509"
            height="408"
            viewBox="0 0 509 408"
            fill="none"
          >
            <circle
              cx="108"
              cy="401"
              r="366"
              stroke="url(#gradient-stats)"
              strokeWidth="70"
            />
            <defs>
              <linearGradient
                id="gradient-stats"
                x1="-19.7112"
                y1="24.4835"
                x2="509"
                y2="445.335"
              >
                <stop stopColor="#D9D9D9" stopOpacity="0.3" />
                <stop offset="1" stopColor="white" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-[20px] border border-white/70 bg-gradient-to-b from-white/35 to-white/0 backdrop-blur-md p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-white text-center mb-12">
                Những con số biết nói
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                <div className="text-center sm:text-left">
                  <div className="text-4xl sm:text-5xl lg:text-[48px] font-semibold text-white mb-3">
                    100+
                  </div>
                  <div className="text-lg sm:text-xl font-medium text-white mb-2">
                    Khách hàng tư vấn
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Chúng tôi tư vấn giúp hàng trăm khách hàng đưa ra quyết định
                    mua BĐS thành công
                  </p>
                </div>

                <div className="text-center sm:text-left">
                  <div className="text-4xl sm:text-5xl lg:text-[48px] font-semibold text-white mb-3">
                    9.2/10
                  </div>
                  <div className="text-lg sm:text-xl font-medium text-white mb-2">
                    Độ hài lòng
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Các khách hàng đánh giá cao những thông tin BĐS và các đề
                    xuất chúng tôi đưa ra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-semibold text-[#0D0F2C] text-center mb-12 lg:mb-16">
            Đối tác của chúng tôi
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-10">
              {partners.map((partner, index) => (
                <img
                  key={index}
                  src={partner.src}
                  alt={partner.alt}
                  className={`${partner.width} h-auto object-contain`}
                />
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {partnersRow2.map((partner, index) => (
                <img
                  key={index}
                  src={partner.src}
                  alt={partner.alt}
                  className={`${partner.width} h-auto object-contain`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
