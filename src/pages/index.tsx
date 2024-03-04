import { Inter } from '@next/font/google';
import Paragraph from '@/components/paragraph';
import { useState, useEffect } from 'react';
import en from "public/locale/en/translation.json";
import ur from "public/locale/ur/translation.json";
import en2 from "public/locale/en/translation2.json";
import ur2 from "public/locale/ur/transtion2.json";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [english, setEnglish] = useState(true); // Initialize to false

  useEffect(() => {
    if (navigator.language.startsWith('ur')) {
      setEnglish(false);
    }
  }, []);

  const toggleEnglish = () => {
    setEnglish(!english);
  };

  const t1 = english ? en : ur;
  const t2 = english ? en2 : ur2;

  return (
    <section>
      <button onClick={toggleEnglish} className="border border-gray-600 rounded-sm px-6 py-2 m-10">{english ? "To Urdu" : "To English"}</button>
      <Paragraph title={(1).toString()} content={t1.content1} class={1 % 2 === 0 ? "bg-gray-900" : ""} />
      <Paragraph title={(2).toString()} content={t1.content2} class={2 % 2 === 0 ? "bg-gray-900" : ""} />
      <Paragraph title={(3).toString()} content={t1.content3} class={1 % 2 === 0 ? "bg-gray-900" : ""} />
      <Paragraph title={(4).toString()} content={t2.content4} class={2 % 2 === 0 ? "bg-gray-900" : ""} />
      <Paragraph title={(5).toString()} content={t2.content5} class={1 % 2 === 0 ? "bg-gray-900" : ""} />
      <Paragraph title={(6).toString()} content={t2.content6} class={2 % 2 === 0 ? "bg-gray-900" : ""} />
      <Paragraph title={(7).toString()} content={t2.content7} class={1 % 2 === 0 ? "bg-gray-900" : ""} />
    </section>
  );
}
