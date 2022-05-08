import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import stylesheet from '../styles/main.scss';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function IndexPage() {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeoutModal, setTimeoutModal] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState('is-loading');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('');
    }, 100);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  });

  const handleOpenArticle = (article) => {
    setIsArticleVisible(!isArticleVisible);
    setArticle(article);

    setTimeout(() => {
      setTimeoutModal(!timeoutModal);
    }, 325);

    setTimeout(() => {
      setArticleTimeout(!articleTimeout);
    }, 350);
  };

  const handleCloseArticle = () => {
    setArticleTimeout(!articleTimeout);

    setTimeout(() => {
      setTimeoutModal(!timeoutModal);
    }, 325);

    setTimeout(() => {
      setIsArticleVisible(!isArticleVisible);
      setArticle('');
    }, 350);
  };

  return (
    <div
      className={`body ${loading} ${
        isArticleVisible ? 'is-article-visible' : ''
      }`}
    >
      <div>
        <Head>
          <title>Gedy Mahardika | Bali Digital Marketing and Developer</title>
          <meta
            name='description'
            content="Welcome to Gedy Mahardika personal website, I'm Bali based digital marketer and tech enthusiast. I built this site with Next JS and SEO optimized for digital marketing purposes."
          />
          <meta name='url' property='og:url' content='https://gedymahardika.com/' />
          <meta name='title' property='og:title' content='Gedy Mahardika | Bali based Dev and Digital Marketer' />
          <meta name='type' property='og:type' content='website' />
          <meta name='description' property='og:description' content="I'm Bali based tech enthusiast & digital marketer." />
          <meta name='image' property='og:image' content='https://gedymahardika.com/static/images/pic03.jpg' />
        </Head>

        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

        <div id="wrapper">
          <Header
            onOpenArticle={handleOpenArticle}
            timeoutModal={timeoutModal}
          />
          <Main
            isArticleVisible={isArticleVisible}
            timeoutModal={timeoutModal}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
          />
          <Footer timeoutModal={timeoutModal} />
        </div>
        <div id="bg" />
      </div>
    </div>
  );
}
