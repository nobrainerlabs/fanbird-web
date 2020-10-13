import Layout from '../components/layouts/landing';
import Feature from '../components/tailwindui/features/feature1';
import Feature2 from '../components/tailwindui/features/feature2';
import Header from '../components/tailwindui/headers/header1';
const Page = () => (
  <Layout>
    <Header
      headerPage="Features"
      headerDescription="Plethora of options at your disposal and all the features you will ever need available at your finger tips"
    ></Header>
    <Feature></Feature>
    <Feature2></Feature2>
  </Layout>
);

export default Page;
