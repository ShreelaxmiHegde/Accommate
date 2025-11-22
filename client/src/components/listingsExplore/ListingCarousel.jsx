import ListingCard from "./ListingCard"

export default function ListingCarousel() {

    const carousel = {
        display: "flex",
        gap: 1,
    }

    return (
        <div className={carousel}>
            <ListingCard />
        </div>
    )
}