import React from "react"
import { Link } from "gatsby"

interface PaginationProps {
  numPages: number
  currentPage: number
  pathBase?: string
}

const Pagination = ({ numPages, currentPage, pathBase }: PaginationProps) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const pageLimit = 3
  const omitFirst = currentPage - 1 > pageLimit
  const omitLast = numPages - currentPage > pageLimit
  const prevPage =
    currentPage - 1 === 1 ? pathBase : pathBase + (currentPage - 1).toString()
  const nextPage = pathBase + (currentPage + 1).toString()

  const prevText = '前へ'
  const nextText = '次へ'
  const paginationTag =
    numPages !== 1 ? (
      <nav className="pagination">
        <div>
          {!isFirst ? (
            <Link to={prevPage} rel="prev">
              {prevText}
            </Link>
          ) : (
            <span>{prevText}</span>
          )}
        </div>

        <div>
          <ul>
            {
              /*FirstPage*/
              !isFirst && (
                <div>
                  <li className="number--firstlast">
                    <Link to={pathBase}>1</Link>
                    {omitFirst && <span>…</span>}
                  </li>
                </div>
              )
            }
            {Array.from({ length: numPages }, (_, i) =>
              i + 1 === currentPage ? (
                <li
                  key={`pagination-number${i + 1}`}
                  className="number--current"
                >
                  <span>{i + 1}</span>
                </li>
              ) : (
                i > 0 &&
                i < numPages - 1 &&
                currentPage - pageLimit < i + 1 &&
                i + 1 < currentPage + pageLimit && (
                  <li
                    key={`pagination-number${i + 1}`}
                    className="number--link"
                  >
                    <Link to={pathBase + (i === 0 ? '' : i + 1)}>{i + 1}</Link>
                  </li>
                )
              )
            )}
            {
              /*LastPage*/
              !isLast && (
                <li className="number--firstlast">
                  {omitLast && <span>…</span>}
                  <Link to={pathBase + numPages}>{numPages}</Link>
                </li>
              )
            }
          </ul>
        </div>

        <div>
          {!isLast ? (
            <Link to={nextPage} rel="next">
              {nextText}
            </Link>
          ) : (
            <span>{nextText}</span>
          )}
        </div>
      </nav>
    ) : null

  return paginationTag
}

export default Pagination