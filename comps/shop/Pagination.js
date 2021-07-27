import Link from 'next/link';
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { isNullableType } from 'graphql';
import DisplayError from '../error/ErrorMessage';
import { perPage } from '../../config';
import {
  color,
  borderRadius,
  fontSize,
  fontWeight,
  boxShadow,
} from '../../theme/Variables';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allCutsMeta {
      count
    }
  }
`;

const PageContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  align-self: center;
  border: 0.5px solid ${color.greyPale};
  border-radius: ${borderRadius.default};
  & > * {
    font-size: ${fontSize.body};
    font-weight: ${fontWeight.light};
    box-shadow: ${boxShadow.default};
    padding: 1rem;
  }
  p {
    height: 100%;
    border-right: 0.5px solid ${color.greyPale};
  }
`;

const LinkText = styled.a`
  text-decoration: none;
  height: 100%;
  color: ${color.black};
  border-right: ${(props) =>
    props.prev ? `0.5px solid ${color.greyPale}` : null};
  &:hover {
    background: ${color.greyPale};
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);

  if (loading) return <p>Loading.....</p>;
  if (error) return <DisplayError error={error} />;

  const { count } = data._allCutsMeta;
  const pageCount = Math.ceil(count / perPage);

  return (
    <>
      <Head>
        <title>
          Meat | Cut {page} of {pageCount}
        </title>
      </Head>
      <PageContainer>
        {page > 1 && (
          <Link href={`/meats/${page - 1}`}>
            <LinkText prev>⬅️ Prev</LinkText>
          </Link>
        )}
        <p>
          Page {page} of {pageCount}
        </p>
        <p>{count} items total</p>
        {page <= pageCount - 1 && (
          <Link href={`/meats/${page + 1}`}>
            <LinkText>Next ➡️</LinkText>
          </Link>
        )}
      </PageContainer>
    </>
  );
}
