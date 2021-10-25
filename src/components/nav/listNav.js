import ActiveLink from "./activeLink";

function listNav() {
  return (
    <ul className="sm:flex sm:flex-row sm:justify-start sm:m-0 sm:h-auto w-full sm:bg-white sm:static sm:space-x-12 sm:space-y-0 sm:text-sm text-base hidden space-y-6 flex bg-white flex-col items-center justify-center fixed  inset-x-0 inset-y-0 animate-fadeInFaster z-10">
      <li>
        <ActiveLink href="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/skills">Skill</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/about">About</ActiveLink>
      </li>
    </ul>
  );
}

export default listNav;
