import React from "react";
type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra-small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor: string;
  coverUrl: string;
}
const BookCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverUrl = "https://placehold.co/400x600.svg",
}: Props) => {
  return <div>BookCover</div>;
};
export default BookCover;
