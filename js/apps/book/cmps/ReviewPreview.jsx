export function ReviewPreview({ review, onRemoveReview }) {
    return (
        <div className="card-review">
            <img onClick={() => {
                onRemoveReview(review.id);
            }}
                className="close-btn"
                src="../assets/img/close.png"
            />
            <div className="review-info">
                <span className="review-name"> {review.name}</span>
                <small className="review-date"> {review.date}</small>
            </div>
            <h3>{'⭐'.repeat(review.rate)}</h3>
        </div>
    )
}