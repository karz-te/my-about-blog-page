import Image from "next/image";

export default function ProfileCard() {
  return (
    <section className="w-full">
      <div className="relative max-w-md mx-auto rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-200 shadow-2xl p-6 transition-transform duration-300 ease-out hover:scale-[1.015]">
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 shrink-0">
            <Image
              src="/profile-image.png"
              alt="プロフィール写真"
              fill
              sizes="80px"
              className="rounded-full border-4 border-white shadow-md object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">斑幽 軟歩</h2>
            <p className="text-sm text-gray-600 italic">探求者 / 表現者</p>
            <p className="text-sm text-gray-600 italic">《かわむら てるひと》</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-700 leading-relaxed">
          経験と思索を通じて、自分自身をデザインし続ける旅を記録しています。
          曖昧さを受け入れ、変化を楽しむ日々を大切に。
        </p>
      </div>
    </section>
  );
}

