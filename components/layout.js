import Head from 'next/head'
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Rock & Roll with Ember</title>
      </Head>

      <div className="bg-blue-900 text-gray-100 p-8 h-screen">
        <div className="mx-auto mb-4">
            <div className="h-12 flex items-center mb-4 border-b-2">
                <a href="#">
                    <h1 className="font-bold text-2xl">
                        Rock & Roll <span className="font-normal">with Next.js</span>
                    </h1>
                </a>
            </div>
        </div>
        <div className="flex flex-wrap -mx-2">
            {children}
        </div>
      </div>
    </div>
  );
}
