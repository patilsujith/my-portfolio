import { Link } from 'react-router-dom'
import Container from '../components/Container.jsx'

export default function NotFound() {
  return (
    <div className="page">
      <section className="section section--tight">
        <Container>
          <div className="notFound">
            <h1 className="pageTitle">404</h1>
            <p className="lead">This page doesn’t exist.</p>
            <Link to="/" className="link-btn link-btn--ghost">
              Go back Home
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}

