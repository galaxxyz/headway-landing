import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import activeInterface from '../activeInterface';
import Books from '../booksData';

gsap.registerPlugin(ScrollTrigger);

const Book = styled.img`
  width: 72px;
  height: 108px;
  &.inactive {
    filter: grayscale(100%) opacity(80%);
  }
`;

const BooksRow = styled.div`
  display: flex;
  column-gap: 12px;
`;

const BooksSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  overflow-x: hidden;
  align-items: center;
`;

function AllBooks({ active }: { active: activeInterface }) {
  function getBookClass(category: string) {
    return active.all || active[category] ? 'active' : 'inactive';
  }

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  useEffect(() => {
    const el1 = row1Ref.current;
    const el2 = row2Ref.current;
    const el3 = row3Ref.current;

    gsap.to(el1, {
      scrollTrigger: {
        trigger: el1,
        scrub: true,
      },
      x: -400,
      ease: 'none',
    });

    gsap.to(el2, {
      scrollTrigger: {
        trigger: el2,
        scrub: true,
      },
      x: 400,
      ease: 'none',
    });

    gsap.to(el3, {
      scrollTrigger: {
        trigger: el3,
        scrub: true,
      },
      x: -400,
      ease: 'none',
    });
  }, []);

  return (
    <BooksSection>
      <BooksRow ref={row1Ref}>
        {Array(5)
          .fill(Books.row1)
          .flat()
          .map((b) => (
            <Book
              src={b.img}
              key={b.img}
              className={getBookClass(b.category)}
            />
          ))}
      </BooksRow>
      <BooksRow ref={row2Ref}>
        {Array(5)
          .fill(Books.row2)
          .flat()
          .map((b) => (
            <Book
              src={b.img}
              key={b.img}
              className={getBookClass(b.category)}
            />
          ))}
      </BooksRow>
      <BooksRow ref={row3Ref}>
        {Array(5)
          .fill(Books.row3)
          .flat()
          .map((b) => (
            <Book
              src={b.img}
              key={b.img}
              className={getBookClass(b.category)}
            />
          ))}
      </BooksRow>
    </BooksSection>
  );
}

export default AllBooks;
