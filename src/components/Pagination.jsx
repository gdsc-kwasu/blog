import React from 'react'
import { PaginationStyle } from './styled/Pagination.styled'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Pagination = () => {
  return (
    <PaginationStyle>
      <FaChevronLeft />
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <FaChevronRight />
    </PaginationStyle>
  )
}

export default Pagination
