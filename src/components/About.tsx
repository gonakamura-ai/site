'use client';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="relative">
            <div className="relative mx-auto rounded-3xl overflow-hidden shadow-xl bg-indigo-600">
              <div className="h-96 w-full relative">
                {/* 実際の会社画像に置き換えることができます */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700 to-indigo-500 flex items-center justify-center text-white">
                  <div className="text-center">
                    <svg 
                      className="w-24 h-24 mx-auto mb-4 opacity-75" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <p className="text-xl font-medium">会社イメージ</p>
                    <p className="mt-2 text-sm opacity-75">ここに実際の会社の写真や<br />オフィス画像が入ります</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-indigo-100 filter blur-2xl mix-blend-multiply opacity-70"></div>
            <div className="absolute -right-8 -top-24 w-40 h-40 rounded-full bg-indigo-200 filter blur-2xl mix-blend-multiply opacity-70"></div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="lg:pl-10">
              <div className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                私たちについて
              </div>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                革新的なソリューションで、<br />ビジネスの未来を創造する
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                私たちは、常に最先端の技術と創造的なアイデアを組み合わせ、お客様のビジネス課題を解決するソリューションを提供しています。2010年の創業以来、多くの企業様とともに成長を続け、業界をリードする存在へと発展してきました。
              </p>
              
              <dl className="mt-10 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium text-gray-900">グローバルな視点</dt>
                    <dd className="mt-2 text-base text-gray-500">国内外の最新トレンドを取り入れ、グローバルな視点でソリューションを提供します。</dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium text-gray-900">強固な企業基盤</dt>
                    <dd className="mt-2 text-base text-gray-500">安定した経営基盤と豊富な実績で、長期的なパートナーシップを実現します。</dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium text-gray-900">社員の幸福を大切に</dt>
                    <dd className="mt-2 text-base text-gray-500">社員一人ひとりが能力を発揮できる環境づくりを重視し、質の高いサービスを提供します。</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 