import Layout from "../components/layout";
import { useRef } from "react";

function Home() {
  const h3Ref = useRef();

  return (
    <Layout homepage title="Tanaka Keisuke" h3RefHome={h3Ref}>
      <div>
        <h1 className="sm:text-5xl text-3xl font-thin transition duration-700 animate-leftToRight flex items-center">
          Hello,World{" "}
          <span className="bg-wave-icon block w-8 h-8 bg-cover ml-3 hover:animate-shake"></span>
        </h1>
        <h2 className="text-lg sm:text-2xl font-light w-full leading-snug my-10 lg:w-6/12 md:text-4xl md:leading-normal animate-fadeIn">
          こんにちは
          本サイトはNext.jsとTailwindCSSを用いて作成した簡易ポートフォリオです。
        </h2>
        <h3 className="font-base flex items-center relative" ref={h3Ref}>
          <span className="bg-call-icon block w-8 h-8 bg-cover mx-3 hover:animate-shake animate-shake"></span>{" "}
          <a
            className="sm:static absolute -bottom-7 rounded bg-green-500 hover:bg-green-800 transition duration-400 text-white pl-3 pr-3"
            href="mailto:tk.engnfree01@gmail.com"
          >
            tk.engnfree01@gmail.com
          </a>
        </h3>
      </div>
    </Layout>
  );
}

export default Home;
