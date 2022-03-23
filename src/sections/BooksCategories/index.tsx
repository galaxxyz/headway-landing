import styled from 'styled-components';
import { useState } from 'react';
import { SectionContainer, SectionHeading } from '../../components';
import { CategoryButton } from './components/CategoryButton';
import Icons from './categoriesData';
import Active from './activeInterface';
import AllBooks from './components/AllBooks';

const CategoriesRow = styled.div`
  display: flex;
  column-gap: 8px;
`;
const Categories = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  overflow-x: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export function BooksCategories() {
  const defaultActive: Active = {
    all: 1,
    selfgrowth: 0,
    happiness: 0,
    moneyInvesment: 0,
    negotiation: 0,
    health: 0,
    spirituality: 0,
    productivity: 0,
    businessCareer: 0,
    loveSex: 0,
    sportsFitness: 0,
  };
  const [active, setActive] = useState(defaultActive);

  return (
    <SectionContainer
      bgColor="rgba(122, 0, 218, 0.1)"
      borderColor="rgba(122, 0, 218, 0.1)"
    >
      <SectionHeading>
        <h2>Determine your goal and go ahead!</h2>
        <p>
          Learn something new every day from Self-Growth, Happiness, Money,
          Health, and many other categories. Benefit from unlimited access to
          world best thoughts.
        </p>
      </SectionHeading>
      <Categories>
        <CategoriesRow>
          <CategoryButton
            className={active.all ? 'active' : 'inactive'}
            onClick={() => {
              if (active.all) setActive({ ...active, all: 0 });
              else setActive(defaultActive);
            }}
          >
            <p>All categories</p>
          </CategoryButton>

          <CategoryButton
            className={active.selfgrowth ? 'active' : 'inactive'}
            onClick={() => {
              if (active.selfgrowth) setActive({ ...active, selfgrowth: 0 });
              else setActive({ ...active, all: 0, selfgrowth: 1 });
            }}
          >
            <img src={Icons.mountain} alt="" />
            <p>Self-Growth</p>
          </CategoryButton>

          <CategoryButton
            className={active.happiness ? 'active' : 'inactive'}
            onClick={() => {
              if (active.happiness) setActive({ ...active, happiness: 0 });
              else setActive({ ...active, all: 0, happiness: 1 });
            }}
          >
            <img src={Icons.smile} alt="" />
            <p>Happiness</p>
          </CategoryButton>

          <CategoryButton
            className={active.moneyInvesment ? 'active' : 'inactive'}
            onClick={() => {
              if (active.moneyInvesment) {
                setActive({ ...active, moneyInvesment: 0 });
              } else setActive({ ...active, all: 0, moneyInvesment: 1 });
            }}
          >
            <img src={Icons.creditcard} alt="" />
            <p>Money & Investment</p>
          </CategoryButton>

          <CategoryButton
            className={active.negotiation ? 'active' : 'inactive'}
            onClick={() => {
              if (active.negotiation) setActive({ ...active, negotiation: 0 });
              else setActive({ ...active, all: 0, negotiation: 1 });
            }}
          >
            <img src={Icons.speaker} alt="" />
            <p>Negotiation</p>
          </CategoryButton>

          <CategoryButton
            className={active.health ? 'active' : 'inactive'}
            onClick={() => {
              if (active.health) setActive({ ...active, health: 0 });
              else setActive({ ...active, all: 0, health: 1 });
            }}
          >
            <img src={Icons.apple} alt="" />
            <p>Health</p>
          </CategoryButton>
        </CategoriesRow>
        <CategoriesRow>
          <CategoryButton
            className={active.spirituality ? 'active' : 'inactive'}
            onClick={() => {
              if (active.spirituality) {
                setActive({ ...active, spirituality: 0 });
              } else setActive({ ...active, all: 0, spirituality: 1 });
            }}
          >
            <img src={Icons.planet} alt="" />
            <p>Spirituality</p>
          </CategoryButton>
          <CategoryButton
            className={active.productivity ? 'active' : 'inactive'}
            onClick={() => {
              if (active.productivity) {
                setActive({ ...active, productivity: 0 });
              } else setActive({ ...active, all: 0, productivity: 1 });
            }}
          >
            <img src={Icons.hourglass} alt="" />
            <p>Productivity</p>
          </CategoryButton>
          <CategoryButton
            className={active.businessCareer ? 'active' : 'inactive'}
            onClick={() => {
              if (active.businessCareer) {
                setActive({ ...active, businessCareer: 0 });
              } else setActive({ ...active, all: 0, businessCareer: 1 });
            }}
          >
            <img src={Icons.lock} alt="" />
            <p>Business & Career</p>
          </CategoryButton>
          <CategoryButton
            className={active.loveSex ? 'active' : 'inactive'}
            onClick={() => {
              if (active.loveSex) {
                setActive({ ...active, loveSex: 0 });
              } else setActive({ ...active, all: 0, loveSex: 1 });
            }}
          >
            <img src={Icons.heart} alt="" />
            <p>Love & Sex</p>
          </CategoryButton>
          <CategoryButton
            className={active.sportsFitness ? 'active' : 'inactive'}
            onClick={() => {
              if (active.sportsFitness) {
                setActive({ ...active, sportsFitness: 0 });
              } else setActive({ ...active, all: 0, sportsFitness: 1 });
            }}
          >
            <img src={Icons.ball} alt="" />
            <p>Sports & Fitness</p>
          </CategoryButton>
        </CategoriesRow>
      </Categories>
      <AllBooks active={active} />
    </SectionContainer>
  );
}
