import Link from 'next/link'

const ErrorBruh = () => {
  return (
    <div className="not-found">
      <h1>Huh.</h1>
      <h2>This page should've existed or you just used a broken link. :(</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
  );
}
 
export default ErrorBruh;