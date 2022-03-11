import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getAllBandsData } from '../lib/bands'

export default function Home({ allBandsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="w-1/3 px-2">
        <ul className="pl-2 pr-8">
          {allBandsData.map(({ id, name }) => (
            <li className="mb-2" key={id}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}


export async function getStaticProps() {
  const allBandsData = getAllBandsData()
  return {
    props: {
      allBandsData
    }
  }
}