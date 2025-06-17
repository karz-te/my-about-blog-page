import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 shadow-2xl rouded-3xl max-w-md mx-auto border border-gray-200 dark:border-gray-600 transition-transform hover:scale-[1.015] duration-300 ease-out">
      <div className="flex items-center space-x-4">
        <div className="relative w-20 h-20">
          <Image
            src="/profile-image.png" // publicフォルダに画像配置
            alt="プロフィール写真"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-white dark:border-gray-800 shadow-md"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white drop-shadow-sm">かわむら てるひと</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 italic">探求者 / 表現者</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-200 leading-relaxed drop-shadow-sm">
        経験と思索を通じて、自分自身をデザインし続ける旅を記録しています。
        曖昧さを受け入れ、変化を楽しむ日々を大切に。
      </p>
    </div>
  );
}
