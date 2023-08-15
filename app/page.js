import Feed from '@/components/Feed';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <h1 className="theme-head text-center">
        <span className="theme-red-gradient"> Muse Mark</span>
      </h1>
      <p className="theme-desc text-center text-2xl">Where Creativity Finds Its Digital Canvas</p>
      <Feed />
    </section>
  );
}
