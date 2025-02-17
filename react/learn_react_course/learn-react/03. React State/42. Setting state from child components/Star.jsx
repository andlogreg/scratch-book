import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function Star({isFilled, onClick}) {
    let starIcon = isFilled ? starFilled : starEmpty
    return (
        <button
            aria-pressed={isFilled}
            aria-label={isFilled ? "Remove from favorites" : "Add to favorites"}
            className="favorite-button"
            onClick={onClick}
        >
            <img
                src={starIcon}
                alt={isFilled ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>
    )
}