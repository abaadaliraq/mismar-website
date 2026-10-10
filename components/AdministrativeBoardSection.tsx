type Locale = "ar" | "en" | "ku";

type Props = {
  locale?: Locale;
};

type BoardMember = {
  name: string;
  role: string;
  image: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
};

const content: Record<
  Locale,
  {
    dir: "rtl" | "ltr";
    eyebrow: string;
    title: string;
    members: BoardMember[];
  }
> = {
  ar: {
    dir: "rtl",
    eyebrow: "مسمار",
    title: "الهيئة الإدارية",
    members: [
      {
        name: "أزاد طارق محمد علي طاهر الجزراوي",
        role: "رئيس مؤسسة مسمار للثقافة والتنمية المستدامة",
        image: "/images/azad.jpg",
        imagePosition: "center 18%",
      },
      {
        name: "هندرين طارق محمد علي طاهر الجزراوي",
        role: "نائب رئيس المؤسسة",
        image: "/images/hindreen.jpg",
        imagePosition: "55% 22%",
      },
      {
        name: "الدكتورة بتول موفق",
        role: "عضو الهيئة الإدارية ومسؤولة التخطيط المعماري وإحياء التراث العمراني",
        image: "/images/dr-batool.jpg",
        imagePosition: "center 20%",
      },
      {
        name: "الدكتور قيس حسين رشيد محمد المكاصيص",
        role: "عضو الهيئة الإدارية ومسؤول شؤون الآثار والتراث",
        image: "/images/dr.qaies.png",
        imagePosition: "center 18%",
      },
      {
        name: "جعفر درويش علي الكناني",
        role: "عضو الهيئة الإدارية ومسؤول المتابعة والإعلام",
        image: "/images/jafaar.jpg",
        imagePosition: "center 18%",
      },
      {
        name: "شيركو طارق محمد علي طاهر الجزراوي",
        role: "عضو الهيئة الإدارية ومسؤول التوثيق والبحث الأثري",
        image: "/images/sherko.jpg",
        imagePosition: "center 18%",
      },
    ],
  },
  en: {
    dir: "ltr",
    eyebrow: "MISMAR",
    title: "Administrative Board",
    members: [
      {
        name: "Azad Tariq Mohammed Ali Taher Al-Jazrawi",
        role: "President of MISMAR Foundation for Culture and Sustainable Development",
        image: "/images/azad.jpg",
        imagePosition: "center 18%",
      },
      {
        name: "Hendren Tariq Mohammed Ali Taher Al-Jazrawi",
        role: "Vice President of the Foundation",
        image: "/images/hindreen.jpg",
        imagePosition: "55% 22%",
      },
      {
        name: "Dr. Batool Mowaffaq",
        role: "Board Member and Architectural Planning & Urban Heritage Revival Officer",
        image: "/images/dr-batool.jpg",
        imagePosition: "center 20%",
      },
      {
        name: "Dr. Qais Hussein Rasheed Mohammed Al-Makasies",
        role: "Board Member and Antiquities & Heritage Affairs Officer",
        image: "/images/dr.qaies.png",
        imagePosition: "center 18%",
      },
      {
        name: "Jaafar Darwish Ali Al-Kinani",
        role: "Board Member and Follow-up & Media Officer",
        image: "/images/jafaar.jpg",
        imagePosition: "center 18%",
      },
      {
        name: "Sherko Tariq Mohammed Ali Taher Al-Jazrawi",
        role: "Board Member and Archaeological Documentation & Research Officer",
        image: "/images/sherko.jpg",
        imagePosition: "center 18%",
      },
    ],
  },
  ku: {
    dir: "rtl",
    eyebrow: "مسمار",
    title: "دەستەی کارگێڕی",
    members: [
      {
        name: "ئازاد تارق محمد علی تاهر الجزراوی",
        role: "سەرۆکی دامەزراوەی مسمار بۆ کولتوور و گەشەپێدانی بەردەوام",
        image: "/images/azad.jpg",
        imagePosition: "center 18%",
      },
      {
        name: "هەندرین تارق محمد علی تاهر الجزراوی",
        role: "جێگری سەرۆکی دامەزراوە",
        image: "/images/hindreen.jpg",
        imagePosition: "55% 22%",
      },
      {
        name: "د. بتول موفق",
        role: "ئەندامی دەستەی کارگێڕی و بەرپرسی پلاندانانی تەلارسازی و زیندووکردنەوەی کەلەپووری شارستانی",
        image: "/images/dr-batool.jpg",
        imagePosition: "center 20%",
      },
      {
        name: "د. قیس حسین رشید محمد المکاصیص",
        role: "ئەندامی دەستەی کارگێڕی و بەرپرسی کاروباری شوێنەوار و کەلەپوور",
        image: "/images/dr.qaies.png",
        imagePosition: "center 18%",
      },
      {
        name: "جعفر درویش علی الکنانی",
        role: "ئەندامی دەستەی کارگێڕی و بەرپرسی بەدواداچوون و ڕاگەیاندن",
        image: "/images/jafaar.jpg",
        imagePosition: "center 18%",
      },
      {
        name: "شیرکۆ تارق محمد علی تاهر الجزراوی",
        role: "ئەندامی دەستەی کارگێڕی و بەرپرسی تۆمارکردن و توێژینەوەی شوێنەواری",
        image: "/images/sherko.jpg",
        imagePosition: "center 18%",
      },
    ],
  },
};

export default function AdministrativeBoardSection({ locale = "ar" }: Props) {
  const t = content[locale] ?? content.ar;

  return (
    <section
      id="administrative-board"
      dir={t.dir}
      className="bg-[#f3ede5] px-6 py-12 text-[#2a1005] md:px-16 md:py-16"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-8 max-w-[760px]">
          <div className="mb-4 flex items-center gap-4">
            <p className="text-xs font-light uppercase tracking-[0.28em] text-[#2a1005]/45">
              {t.eyebrow}
            </p>
            <div className="h-px w-14 bg-[#2f9c95]" />
          </div>

          <h2 className="text-[32px] font-light leading-[1.16] md:text-[50px]">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-3 md:gap-x-7 md:gap-y-9">
          {t.members.map((member, index) => {
            const isPresident = index === 0;

            return (
            <article
              key={member.name}
              className={`group ${isPresident ? "border-t-2 border-[#2f9c95] pt-3" : ""}`}
            >
              <div
                className={`relative h-[230px] overflow-hidden border bg-[#fbf8f3] md:h-[300px] ${
                  isPresident ? "border-[#2f9c95]/70" : "border-[#2a1005]/12"
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ objectPosition: member.imagePosition ?? "center top" }}
                  className={`h-full w-full transition duration-700 group-hover:scale-[1.035] ${
                    member.imageFit === "contain"
                      ? "object-contain p-8 opacity-70"
                      : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/5" />
              </div>

              <h3
                className={`mt-3 text-base font-light leading-snug md:text-xl ${
                  isPresident ? "text-[#2f9c95]" : ""
                }`}
              >
                {member.name}
              </h3>

              <p className="mt-1.5 text-xs font-light leading-5 text-[#2a1005]/62 md:text-[13px]">
                {member.role}
              </p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
