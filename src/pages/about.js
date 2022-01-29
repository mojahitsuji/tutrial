import * as React from 'react';
import Layout from '../components/Layout';

const aboutPage = () => {
  return (
    <main>
        <title>About Me</title>
        <Layout pageTitle={"About Me"}>
            <p>Hi there! I'm the proud of this site, which I built with Gatsby.</p>
        </Layout>
    </main>
  );
  
};

export default aboutPage;
