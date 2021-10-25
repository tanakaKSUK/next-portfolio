import Layout from "../components/layout";

function Skills() {
  return (
    <Layout title="Skills">
      <SkillCards>
        <Card
          skill="JavaScript"
          experience="4年"
          imageName="js"
          imageType="png"
        />
        <Card
          skill="TypeScript"
          experience="3年"
          imageName="ts"
          imageType="svg"
        />
        <Card
          skill="React"
          experience="1年"
          imageName="react"
          imageType="png"
        />
        <Card
          skill="Angular"
          experience="3年"
          imageName="angular"
          imageType="png"
        />
        <Card skill="PHP" experience="6ヶ月" imageName="php" imageType="svg" />
        <Card
          skill="Laravel"
          experience="6ヶ月"
          imageName="laravel"
          imageType="png"
        />
        <Card
          skill="Python"
          experience="1ヶ月"
          imageName="py"
          imageType="png"
        />
      </SkillCards>
      <Learning>
        <Card skill="Vuejs" imageName="vue" imageType="png" learning={true} />
      </Learning>
    </Layout>
  );
}

function SkillCards({ children }) {
  return (
    <div className="mb-4">
      <h1 className="text-3xl">Skills</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {children}
      </div>
    </div>
  );
}

function Learning({ children }) {
  return (
    <div className="w-40">
      <h2 className="text-md">学習中...</h2>
      {children}
    </div>
  );
}

function Card({ skill, experience, imageName, imageType, learning = false }) {
  return (
    <div className="bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center">
      <div className="mb-3">
        <img
          className="w-24"
          src={`/images/${imageName}.${imageType}`}
          alt={skill}
        />
      </div>
      <div className="flex flex-col items-center">
        <span className="block text-xl mb-2">{skill}</span>
        <span className="text-center">
          {learning ? "" : "経験年数:"}
          <span className="font-medium">{experience}</span>{" "}
        </span>
      </div>
    </div>
  );
}

export default Skills;
