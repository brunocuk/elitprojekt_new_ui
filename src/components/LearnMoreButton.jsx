import { Link } from "react-router-dom"
import LearnMoreArrow from "../assets/icons/LearnMoreArrow"

const LearnMoreButton = ({to}) => {
  return (
    <Link to={to} className="font-bold text-[17px] text-textColorDark border-b-2 border-textColorDark flex gap-1 items-end justify-end mt-3">
      Learn More
      <LearnMoreArrow color={"#F5F5F5"} />
    </Link>
  )
}

export default LearnMoreButton
