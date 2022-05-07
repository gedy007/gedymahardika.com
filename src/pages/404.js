import { useEffect } from 'react';
import { useRouter } from 'next/router';
import stylesheet from '../styles/main.scss';

export default function Custom404(props) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div id="four0Four">
      <div className="four0Four">
        <div className="four0FourNumber">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <a href="/">Homepage</a>
      </div>
    </div>
    </>
  );
}
