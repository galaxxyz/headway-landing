import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import activeInterface from '../activeInterface';
import Books from '../books';

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
  &.moveleft {
  }
  &.moveright {
  }
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
      <BooksRow ref={row1Ref} className="moveLeft">
        <Book
          src={Books.book0.img}
          className={getBookClass(Books.book0.category)}
        />
        <Book
          src={Books.book1.img}
          className={getBookClass(Books.book1.category)}
        />
        <Book
          src={Books.book4.img}
          className={getBookClass(Books.book4.category)}
        />
        <Book
          src={Books.book2.img}
          className={getBookClass(Books.book2.category)}
        />
        <Book
          src={Books.book3.img}
          className={getBookClass(Books.book3.category)}
        />
        <Book
          src={Books.book0.img}
          className={getBookClass(Books.book0.category)}
        />
        <Book
          src={Books.book1.img}
          className={getBookClass(Books.book1.category)}
        />
        <Book
          src={Books.book4.img}
          className={getBookClass(Books.book4.category)}
        />
        <Book
          src={Books.book2.img}
          className={getBookClass(Books.book2.category)}
        />
        <Book
          src={Books.book3.img}
          className={getBookClass(Books.book3.category)}
        />
        <Book
          src={Books.book0.img}
          className={getBookClass(Books.book0.category)}
        />
        <Book
          src={Books.book1.img}
          className={getBookClass(Books.book1.category)}
        />
        <Book
          src={Books.book4.img}
          className={getBookClass(Books.book4.category)}
        />
        <Book
          src={Books.book2.img}
          className={getBookClass(Books.book2.category)}
        />
        <Book
          src={Books.book3.img}
          className={getBookClass(Books.book3.category)}
        />
        <Book
          src={Books.book0.img}
          className={getBookClass(Books.book0.category)}
        />
        <Book
          src={Books.book1.img}
          className={getBookClass(Books.book1.category)}
        />
        <Book
          src={Books.book4.img}
          className={getBookClass(Books.book4.category)}
        />
        <Book
          src={Books.book2.img}
          className={getBookClass(Books.book2.category)}
        />
        <Book
          src={Books.book3.img}
          className={getBookClass(Books.book3.category)}
        />
        <Book
          src={Books.book0.img}
          className={getBookClass(Books.book0.category)}
        />
        <Book
          src={Books.book1.img}
          className={getBookClass(Books.book1.category)}
        />
        <Book
          src={Books.book4.img}
          className={getBookClass(Books.book4.category)}
        />
        <Book
          src={Books.book2.img}
          className={getBookClass(Books.book2.category)}
        />
        <Book
          src={Books.book3.img}
          className={getBookClass(Books.book3.category)}
        />
      </BooksRow>
      <BooksRow ref={row2Ref} className="moveRight">
        <Book
          src={Books.book5.img}
          className={getBookClass(Books.book5.category)}
        />
        <Book
          src={Books.book6.img}
          className={getBookClass(Books.book6.category)}
        />
        <Book
          src={Books.book7.img}
          className={getBookClass(Books.book7.category)}
        />
        <Book
          src={Books.book8.img}
          className={getBookClass(Books.book8.category)}
        />
        <Book
          src={Books.book9.img}
          className={getBookClass(Books.book9.category)}
        />
        <Book
          src={Books.book10.img}
          className={getBookClass(Books.book10.category)}
        />
        <Book
          src={Books.book5.img}
          className={getBookClass(Books.book5.category)}
        />
        <Book
          src={Books.book6.img}
          className={getBookClass(Books.book6.category)}
        />
        <Book
          src={Books.book7.img}
          className={getBookClass(Books.book7.category)}
        />
        <Book
          src={Books.book8.img}
          className={getBookClass(Books.book8.category)}
        />
        <Book
          src={Books.book9.img}
          className={getBookClass(Books.book9.category)}
        />
        <Book
          src={Books.book10.img}
          className={getBookClass(Books.book10.category)}
        />
        <Book
          src={Books.book5.img}
          className={getBookClass(Books.book5.category)}
        />
        <Book
          src={Books.book6.img}
          className={getBookClass(Books.book6.category)}
        />
        <Book
          src={Books.book7.img}
          className={getBookClass(Books.book7.category)}
        />
        <Book
          src={Books.book8.img}
          className={getBookClass(Books.book8.category)}
        />
        <Book
          src={Books.book9.img}
          className={getBookClass(Books.book9.category)}
        />
        <Book
          src={Books.book10.img}
          className={getBookClass(Books.book10.category)}
        />
        <Book
          src={Books.book5.img}
          className={getBookClass(Books.book5.category)}
        />
        <Book
          src={Books.book6.img}
          className={getBookClass(Books.book6.category)}
        />
        <Book
          src={Books.book7.img}
          className={getBookClass(Books.book7.category)}
        />
        <Book
          src={Books.book8.img}
          className={getBookClass(Books.book8.category)}
        />
        <Book
          src={Books.book9.img}
          className={getBookClass(Books.book9.category)}
        />
        <Book
          src={Books.book10.img}
          className={getBookClass(Books.book10.category)}
        />
      </BooksRow>
      <BooksRow ref={row3Ref} className="moveLeft">
        <Book
          src={Books.book11.img}
          className={getBookClass(Books.book11.category)}
        />
        <Book
          src={Books.book12.img}
          className={getBookClass(Books.book12.category)}
        />
        <Book
          src={Books.book13.img}
          className={getBookClass(Books.book13.category)}
        />
        <Book
          src={Books.book14.img}
          className={getBookClass(Books.book14.category)}
        />
        <Book
          src={Books.book15.img}
          className={getBookClass(Books.book15.category)}
        />
        <Book
          src={Books.book11.img}
          className={getBookClass(Books.book11.category)}
        />
        <Book
          src={Books.book12.img}
          className={getBookClass(Books.book12.category)}
        />
        <Book
          src={Books.book13.img}
          className={getBookClass(Books.book13.category)}
        />
        <Book
          src={Books.book14.img}
          className={getBookClass(Books.book14.category)}
        />
        <Book
          src={Books.book15.img}
          className={getBookClass(Books.book15.category)}
        />
        <Book
          src={Books.book11.img}
          className={getBookClass(Books.book11.category)}
        />
        <Book
          src={Books.book12.img}
          className={getBookClass(Books.book12.category)}
        />
        <Book
          src={Books.book13.img}
          className={getBookClass(Books.book13.category)}
        />
        <Book
          src={Books.book14.img}
          className={getBookClass(Books.book14.category)}
        />
        <Book
          src={Books.book15.img}
          className={getBookClass(Books.book15.category)}
        />
        <Book
          src={Books.book11.img}
          className={getBookClass(Books.book11.category)}
        />
        <Book
          src={Books.book12.img}
          className={getBookClass(Books.book12.category)}
        />
        <Book
          src={Books.book13.img}
          className={getBookClass(Books.book13.category)}
        />
        <Book
          src={Books.book14.img}
          className={getBookClass(Books.book14.category)}
        />
        <Book
          src={Books.book15.img}
          className={getBookClass(Books.book15.category)}
        />
        <Book
          src={Books.book11.img}
          className={getBookClass(Books.book11.category)}
        />
        <Book
          src={Books.book12.img}
          className={getBookClass(Books.book12.category)}
        />
        <Book
          src={Books.book13.img}
          className={getBookClass(Books.book13.category)}
        />
        <Book
          src={Books.book14.img}
          className={getBookClass(Books.book14.category)}
        />
        <Book
          src={Books.book15.img}
          className={getBookClass(Books.book15.category)}
        />
      </BooksRow>
    </BooksSection>
  );
}

export default AllBooks;
