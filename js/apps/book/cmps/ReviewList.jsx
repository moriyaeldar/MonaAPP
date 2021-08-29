import { ReviewPreview } from "./ReviewPreview.jsx";
export function ReviewList({ book, onRemoveReview }) {
    if(!book.reviews||book.reviews.length===0){
        return(<h3>No reviews yet</h3>)
    }
    return (
        
        <section className="review">
            {book.reviews.map((review) => {
                return <ReviewPreview key={review.id} onRemoveReview={onRemoveReview} review={review} />;
            })}
        </section>
    );
}
