import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete, sort }) {

  const listingsList = sort 
  ? [...listings].sort((a, b) => a.description.localeCompare(b.description))
  :listings

  return (
    <main>
      <ul className="cards">
        {listingsList.map((listing) => {
          return <ListingCard key={listing.id} listing={listing} onDelete={onDelete} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
