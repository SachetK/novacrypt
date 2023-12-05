import { Children, useState } from "react";

export const Carousel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [current, setCurrent] = useState(0);
  const length = Children.count(children);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (length < 1) return <></>;

  return (
    <section className="flex space-x-2">
      <button type="button" onClick={prevSlide}>
        Previous
      </button>
      {Children.toArray(children)[current]}
      <button type="button" onClick={nextSlide}>
        Next
      </button>
    </section>
  );
};
