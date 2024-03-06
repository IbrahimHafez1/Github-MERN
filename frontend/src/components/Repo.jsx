import { FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

const Repo = () => {
  // Repository information
  const repoName = "MERN-Blog";
  const repoUrl = "https://github.com/IbrahimHafez1/MERN-Blog";
  const starsCount = 167;
  const forksCount = 25;
  const releaseDate = "Jan 1, 2021";

  return (
    <li className="mb-10 ms-7 relative">
      <div className="flex gap-2 items-center flex-wrap">
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          {repoName}
        </a>
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <FaRegStar /> {starsCount}
        </span>
        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <FaCodeFork /> {forksCount}
        </span>
        <span className="cursor-pointer bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <FaCopy /> Clone
        </span>
      </div>
      <time className="block my-1 text-xs font-normal leading-none text-gray-400">
        Released on {releaseDate}
      </time>
      <img
        src={"/javascript.svg"}
        alt="Programming language icon"
        className="h-8"
      />
    </li>
  );
};

export default Repo;
