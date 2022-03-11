import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { getAllBandIDs, getBandData } from '../../lib/bands'

export default function Band() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllBandIDs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const bandData = getBandData(params.id)
  return {
    props: {
      bandData
    }
  }
}
