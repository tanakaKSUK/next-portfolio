import Layout from "../components/layout";

function About() {
  return (
    <Layout title="About">
      <h1 className="text-3xl">About</h1>
      <div className="mt-3">
        <p className="mb-3">
          Next.jsとTailwindCSSを使って作った簡易ポートフォリオです
        </p>
      </div>
    </Layout>
  );
}

export default About;
