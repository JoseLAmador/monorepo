export default {
  github: 'https://github.com/JoseLAmador/monorepo', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/JoseLAmador/monorepo/blob/master', // base URL for the docs repository
  titleSuffix: ' – Components',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © @asjosel.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span className="font-bold"> Components Site</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Components: docs library" />
      <meta name="og:title" content="Components: docs library" />
    </>
  ),
}