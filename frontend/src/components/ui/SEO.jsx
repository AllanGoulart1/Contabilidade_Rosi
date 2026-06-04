import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const title = 'Rosiani Garcia Contabilidade — CRC/SC · Araranguá/SC';
  const description =
    'Assessoria contábil especializada em MEI, micro, pequenas e médias empresas. Reduza impostos com segurança. CRC/SC-025788/O-5 · 15+ anos de experiência · Araranguá/SC.';
  const url = 'https://rosianigarciacontabilidade.com.br';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Rosiani Garcia Contabilidade" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AccountingService',
          name: 'Rosiani Garcia Contabilidade',
          description,
          url,
          telephone: '+554835220611',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Avenida Sete de Setembro, 1900, Sala 8',
            addressLocality: 'Araranguá',
            addressRegion: 'SC',
            addressCountry: 'BR',
          },
          openingHours: 'Mo-Fr 09:00-18:00',
          sameAs: ['https://instagram.com/rosianigarciacontabilidade'],
        })}
      </script>
    </Helmet>
  );
}
