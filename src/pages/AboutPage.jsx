import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a simple feedback app created using React tools such:</p>
        <ol>
          <li>React Components</li>
          <li>useState Hook</li>
          <li>Router (react-router-dom)</li>
          <li>Context API (useContext Hook)</li>
          <li>useEffect Hook</li>
        </ol>
        <p><Link to="/">Go Home</Link></p>
      </div>
    </Card>
  )
}

export default AboutPage;
