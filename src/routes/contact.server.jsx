import React from 'react';
import {Seo} from '@shopify/hydrogen';
import Layout from '../components/Layout.server';
import Contact from '../components/Contact.client';

export default function ContactPage() {
  return (
    <Layout>
      <Seo
        type="page"
        data={{title: 'お問い合わせ', description: 'お問い合わせはこちらへ。'}}
      />
      <Contact />
    </Layout>
  );
}
