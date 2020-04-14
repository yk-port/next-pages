import Link from 'next/link'

import Layuot from '../components/MyLayout'

const indexPageContent = <p>Hello Next.js</p>;

export default function Index() {
  return (
    <Layuot content={indexPageContent} />
  );
}
