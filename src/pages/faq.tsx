import Layout from '../components/layouts/landing';
import Header from '../components/tailwindui/headers/header1';
import Faq1  from "../components/tailwindui/faqs/faq1";

const Page = () => (
<Layout>
    <Header
        headerPage="FAQ"
        headerTitle="Frequently Asked Questions"
        headerDescription=""
    >
    <Faq1></Faq1>
    </Header>
</Layout>
);

export default Page;
