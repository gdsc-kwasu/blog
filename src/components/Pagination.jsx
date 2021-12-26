import React from 'react'
import Link from 'next/link'
import { PaginationStyle, PaginationCounter } from './styled/Pagination.styled'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Pagination = ({ current, total }) => {
  const prevNum = Math.max(1, current - 1)
  const nextNum = Math.min(total, current + 1)

  return (
    <>
      <PaginationStyle className="pagination">
        <Link href={prevNum === 1 ? '#' : `/posts/${prevNum}`} passHref>
          <a>
            <FaChevronLeft />
          </a>
        </Link>
        <span className="item current">{current}</span>
        <Link href={nextNum === total ? '#' : `/posts/${nextNum}`} passHref>
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
