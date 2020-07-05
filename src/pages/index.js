import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Home() {
  const context = useDocusaurusContext();
  console.log('context', context);
  const { siteConfig = {} } = context;
  const themeConfig = context.themeConfig
  return (
    <div className="home-page">
      <Layout
        title={siteConfig.title}
        description={siteConfig.description}>
        <div id="main-nav">
          <a href="/" class="logo">
            <img src="/img/logo.svg" alt="GraphQL Inspector Logo"></img>
          </a><div class="links">
            <a title="Enterprise" href="/enterprise">Enterprise</a>
            <div class="sep"></div>
            <a title="Documentation" href="/docs">Documentation</a>
            <div class="sep"></div>
            <a title="Blog" href="/blog">Blog</a>
            <div class="sep"></div>
            <a href="#contact-us" title="GraphQL Inspector - Contact us" class="scroll-to">Contact Us</a>
            <div class="social-links">
              <a href="https://twitter.com/kamilkisiela" title="Twitter Profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a
              ><a href="https://www.linkedin.com/company/the-guild-software" title="LinkedIn Profile"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            </div>
          </div>
        </div>
        <header className="hero">
          <div className="container">
            <h1 className="hero__title">
              <span>Think</span> smart.
              <br />
              <span>Work</span> less.
              <br />
              <span>Play</span> more!
            </h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className>
              <Link
                className="button button--primary button--lg"
                to={useBaseUrl('docs/')}>
                Get Started
            </Link>
            </div>
          </div>
        </header>
      </Layout>
    </div>
  );
}

export default Home;
