import Layout from '../components/layouts/landing';
import Content from '../components/tailwindui/contents/content2';
import Header from '../components/tailwindui/headers/header1';
const Page = () => (
  <Layout>
    <Header
      headerPage="Company"
      headerTitle="What makes us so different"
    ></Header>
    <div className="flex max-w-full justify-center mb-32">
      <Content></Content>
    </div>
  </Layout>
);

export default Page;
