import React from 'react'
import Link from 'next/link'
import { PaginationStyle, PaginationCounter } from './styled/Pagination.styled'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Pagination = ({ baseURI, current, total }) => {
  const prevNum = Math.max(1, current - 1)
  const nextNum = Math.min(total, current + 1)

  return (
    <>
      <PaginationStyle className="pagination">
        <Link href={current === 1 ? '#' : `${baseURI}/${prevNum}`} passHref>
          <a>
            <FaChevronLeft />
          </a>
        </Link>
        <span className="item current">{current}</span>
        <Link href={current === total ? '#' : `${baseURI}/${nextNum}`} passHref>
          <a>
            <FaChevronRight />
          </a>
        </Link>
      </PaginationStyle>
      <PaginationCounter>
        Page {current}/{total}
      </PaginationCounter>
    </>
  )
}

export default Pagination
