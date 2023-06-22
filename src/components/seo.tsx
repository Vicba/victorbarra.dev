import { Helmet } from 'react-helmet'

import Logo from "../images/victor.png"

export default function Seo() {
  const meta = {
    title: "Victor Barra",
    description: "Developers thats figuring all stuff out",
    url: "victorbarra.dev",
    image: Logo
  }


  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <link rel="canonical" href={meta.url} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Helmet>
  )
}
