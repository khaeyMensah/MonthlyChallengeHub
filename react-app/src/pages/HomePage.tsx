import { Link } from "react-router-dom";
import Sidebar from "../components/SideBar";
import Card from "../components/Card";
import Heading from "../components/Heading";

function HomePage() {
  return (
    <div className="HomePage">
      <Sidebar />

      <div>
        <Heading />
      </div>

      <div className="home-content">
        <Link
          to="/JanuaryPage"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          <Card
            month="January"
            prize="$1,000 in cash prizes + Challenge accounts"
            contestants={3357}
          />
        </Link>
        <Link
          to="/FebruaryPage"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          <Card
            month="February"
            prize="$1,000 in cash prizes + Challenge accounts"
            contestants={3357}
          />
        </Link>
        <Link
          to="/MarchPage"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          <Card
            month="March"
            prize="$1,000 in cash prizes + Challenge accounts"
            contestants={3357}
          />
        </Link>
        <Link
          to="/AprilPage"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          <Card
            month="April"
            prize="$1,000 in cash prizes + Challenge accounts"
            contestants={3357}
          />
        </Link>
        <Link
          to="/MayPage"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          <Card
            month="May"
            prize="$1,000 in cash prizes + Challenge accounts"
            contestants={3357}
          />
        </Link>
        <Link
          to="/JunePage"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          <Card
            month="June"
            prize="$1,000 in cash prizes + Challenge accounts"
            contestants={3357}
          />
        </Link>
        <Link
          to="/JulyPage"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          <Card
            month="July"
            prize="$1,000 in cash prizes + Challenge accounts"
            contestants={3357}
          />
        </Link>
        <Link
          to="/AugustPage"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          <Card
            month="August"
            prize="$1,000 in cash prizes + Challenge accounts"
            contestants={3357}
          />
        </Link>
        <Link
          to="/SeptemberPage"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          <Card
            month="September"
            prize="$1,000 in cash prizes + Challenge accounts"
            contestants={3357}
          />
        </Link>
        <Link
          to="/OctoberPage"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          <Card
            month="October"
            prize="$1,000 in cash prizes + Challenge accounts"
            contestants={3357}
          />
        </Link>
        <Link
          to="/NovemberPage"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          <Card
            month="November"
            prize="$1,000 in cash prizes + Challenge accounts"
            contestants={3357}
          />
        </Link>
        <Link
          to="/DecemberPage"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          <Card
            month="December"
            prize="$1,000 in cash prizes + Challenge accounts"
            contestants={3357}
          />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
