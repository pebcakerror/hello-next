import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
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
                        Rock & Roll <span className="font-normal">with Octane</span>
                    </h1>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}
