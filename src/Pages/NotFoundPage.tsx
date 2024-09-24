import {Link} from "react-router-dom";

interface Props {

}

function NotFoundPage ({  }: Props ) {
    return (
        <div>
            <p>This page was not found.</p>
            <br />
            <Link className="text-amber-600 font-bold" to={"/"}>Go back home.</Link>
        </div>
    )
}

export default NotFoundPage;
