import Container from 'components/container'
import Meta from 'components/meta'
import Hero from 'components/hero'

export default function Blog () {
  return (
    <Container>
      <Meta pageTitle='ブログ' />
      <Hero title='Blog' subtitle='Reacts Posts' />
    </Container>
  )
}
