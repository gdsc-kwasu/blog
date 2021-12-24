import React from 'react'
import Link from 'next/link'
import { PaginationStyle } from './styled/Pagination.styled'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Pagination = () => {
  return (
    <PaginationStyle className="pagination">
      <Link href="#" passHref>
        <FaChevronLeft />
      </Link>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <Link href="#" passHref>
        <FaChevronRight />
      </Link>
    </PaginationStyle>
  )
}

export default Pagination
