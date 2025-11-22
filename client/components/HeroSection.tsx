export default function HeroSection() {
  return (
    <section className="relative min-h-[680px] bg-gradient-to-b from-[#E2F6FC] via-[#E2F6FC] to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[101px] left-[743px] w-[286px] h-[391px] opacity-30">
          <svg
            width="286"
            height="391"
            viewBox="0 0 286 391"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67.1812 0H286L224.577 391H0L67.1812 0Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="143"
                y1="0"
                x2="143"
                y2="391"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="#00ACB8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute top-[101px] left-[1037px] w-[286px] h-[391px] opacity-30">
          <svg
            width="286"
            height="391"
            viewBox="0 0 286 391"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67.1812 0H286L224.577 391H0L67.1812 0Z"
              fill="url(#paint0_linear2)"
            />
            <defs>
              <linearGradient
                id="paint0_linear2"
                x1="143"
                y1="0"
                x2="143"
                y2="391"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="#00ACB8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-6 py-2 mb-6 rounded-full border-[1.5px] border-[#004449]">
              <span className="text-[#004449] text-lg sm:text-xl lg:text-[22px] font-normal">
                ✦ Bàn chuyện Đất 01
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-semibold italic mb-4 bg-gradient-to-r from-[#004449] to-[#009AA5] bg-clip-text text-transparent leading-tight">
              Vay mua Bất động sản
            </h1>

            <h2 className="text-6xl sm:text-7xl lg:text-[110px] font-black italic leading-none mb-6 bg-gradient-to-b from-brand-teal to-brand-teal-dark bg-clip-text text-transparent">
              AN TOÀN
            </h2>

            <p className="text-xl sm:text-2xl lg:text-[32px] italic text-[#004449] max-w-2xl mx-auto mb-8">
              <span className="font-normal">trước khi</span>{" "}
              <span className="font-semibold">Lãi suất vay tăng cao</span>
              <br />
              <span className="font-normal">&</span>{" "}
              <span className="font-semibold">Giá đất lập đỉnh mới</span>
            </p>

            <div className="text-base sm:text-lg font-semibold text-black mb-8">
              🕓 9H30 - 11H30 <span className="text-[#BCBCBC]">|</span> THỨ 7 -
              6.12.2025 <span className="text-[#BCBCBC]">|</span> VIN UNIVERSITY
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="absolute -right-4 -top-4 w-32 h-32 sm:w-40 sm:h-40 bg-white/60 rounded-lg border border-[#CFCFD1]"></div>
              <div className="absolute -right-2 -top-2 w-32 h-32 sm:w-36 sm:h-36 bg-white/80 rounded-lg border border-[#CFCFD1]"></div>
              <div className="relative bg-white rounded-lg border border-[#CFCFD1] p-4 sm:p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f1a25cd44a519cb3c163c0cd06d26069c41feea4?width=358"
                    alt="Testimonial"
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base sm:text-lg text-[#333] mb-1">
                      Gia đình Việt Trần & Mai Anh
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#525252] mb-3">
                      Tự tin mua nhà sau khi nghe tư vấn về tài chính cá nhân
                    </p>
                    <div className="relative">
                      <svg
                        className="w-5 h-5 mb-2"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M7.01278 10.5168C6.56072 10.5183 6.11666 10.6362 5.72333 10.859C6.27709 9.42567 7.19554 8.16176 8.38778 7.19236C8.45599 7.13618 8.51247 7.06712 8.554 6.98912C8.59552 6.91111 8.62127 6.82569 8.62979 6.73773C8.6383 6.64978 8.6294 6.561 8.60361 6.47648C8.57781 6.39196 8.53562 6.31335 8.47944 6.24514C8.42327 6.17692 8.35421 6.12044 8.2762 6.07892C8.1982 6.03739 8.11278 6.01164 8.02482 6.00313C7.93686 5.99462 7.84809 6.00351 7.76357 6.02931C7.67905 6.0551 7.60044 6.0973 7.53222 6.15347C5.08778 8.13958 4 10.8896 4 12.5946C4.00421 13.1974 4.18387 13.786 4.51702 14.2885C4.85018 14.7909 5.32243 15.1855 5.87611 15.424C6.23444 15.5976 6.62685 15.6895 7.025 15.6929C7.37545 15.71 7.7257 15.6556 8.05453 15.5333C8.38336 15.4109 8.68391 15.223 8.93796 14.981C9.19201 14.739 9.39426 14.4479 9.53246 14.1254C9.67065 13.8029 9.74191 13.4557 9.74191 13.1049C9.74191 12.754 9.67065 12.4068 9.53246 12.0843C9.39426 11.7618 9.19201 11.4707 8.93796 11.2287C8.68391 10.9867 8.38336 10.7988 8.05453 10.6765C7.7257 10.5541 7.37545 10.4998 7.025 10.5168H7.01278Z"
                          fill="#00ACB8"
                        />
                        <path
                          d="M14.0128 10.542C13.5606 10.543 13.1164 10.6609 12.7233 10.8842C13.2769 9.45235 14.1929 8.18886 15.3817 7.21754C15.4561 7.16391 15.5187 7.09562 15.5657 7.01687C15.6128 6.93812 15.6432 6.85058 15.6551 6.75964C15.667 6.6687 15.6602 6.57628 15.6351 6.48807C15.61 6.39986 15.5671 6.31772 15.509 6.24671C15.4509 6.17571 15.379 6.11733 15.2975 6.07518C15.216 6.03303 15.1268 6.008 15.0353 6.00163C14.9438 5.99525 14.852 6.00767 14.7655 6.03811C14.6789 6.06856 14.5996 6.11639 14.5322 6.17865C12.0878 8.16477 11 10.9148 11 12.6198C11.0029 13.2158 11.1773 13.7984 11.5024 14.298C11.8275 14.7975 12.2895 15.1929 12.8333 15.437C13.2007 15.6157 13.6042 15.7076 14.0128 15.7059C14.3632 15.7229 14.7135 15.6686 15.0423 15.5462C15.3711 15.4238 15.6717 15.236 15.9257 14.994C16.1798 14.752 16.382 14.4609 16.5202 14.1384C16.6584 13.8159 16.7297 13.4687 16.7297 13.1178C16.7297 12.767 16.6584 12.4198 16.5202 12.0973C16.382 11.7748 16.1798 11.4837 15.9257 11.2417C15.6717 10.9997 15.3711 10.8118 15.0423 10.6894C14.7135 10.567 14.3632 10.5127 14.0128 10.5298V10.542Z"
                          fill="#00ACB8"
                        />
                      </svg>
                      <p className="text-xs sm:text-[15px] text-[#525252] leading-relaxed">
                        Gia đình có một số khúc mắc, phân vân về tài chính, chưa
                        biết nên mua nhà luôn chưa. Sau buổi nói chuyện tư vấn
                        riêng với Finful thì đã hiểu hơn về bức tranh tài chính
                        và tự tin mua nhà rồi. Sổ đỏ trao tay rồi nhé, rất hài
                        lòng về ngôi nhà đầu tiên của gia đình.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 lg:gap-6">
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3496bc3844b95e2673a272e63a14f4427a21f164?width=532"
                  alt="Lê Bảo Long"
                  className="h-64 sm:h-80 lg:h-[343px] w-auto object-cover rounded-lg"
                />
              </div>
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b516d0e6076e1a277fd0f7b4e04d586c4bd53da1?width=502"
                  alt="Nguyễn Lưu Anh Tuấn"
                  className="h-64 sm:h-80 lg:h-[339px] w-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
            <div>
              <h3 className="font-bold text-base sm:text-[19px] text-[#004449] mb-1">
                LÊ BẢO LONG
              </h3>
              <p className="text-xs sm:text-[15px] text-black/80 mb-1">
                Giám đốc Chiến lược & Marketing
              </p>
              <p className="font-semibold text-base sm:text-lg text-black uppercase">
                Batdongsan.com.vn
              </p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-gray-300"></div>
            <div>
              <h3 className="font-bold text-base sm:text-[19px] text-[#004449] mb-1">
                NGUYỄN LƯU ANH TUẤN
              </h3>
              <p className="text-xs sm:text-[15px] text-black/80 mb-1">
                Nhà sáng lập
              </p>
              <p className="font-semibold text-base sm:text-lg text-black">
                FINFUL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
