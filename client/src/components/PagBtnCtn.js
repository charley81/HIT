import { useAppContext } from '../context/appContext'
import { AiFillCaretLeft } from 'react-icons/ai'
import { AiFillCaretRight } from 'react-icons/ai'
import styled from 'styled-components'

export default function PagBtnCtn() {
  const { numOfPages, page, changePage } = useAppContext()

  // an array with n = numOfPages items in it.. in the callback function we access the item (_ don't need), and the index
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1 //this will return an array of the pages [1,2,3,4,5,6,7,8]
  })

  function prevPage() {
    let newPage = page - 1
    if (newPage < 1) {
      newPage = numOfPages
    }
    changePage(newPage)
  }

  function nextPage() {
    let newPage = page + 1
    if (newPage > numOfPages) {
      newPage = 1
    }
    changePage(newPage)
  }

  return (
    <Section>
      <AiFillCaretLeft onClick={prevPage} className="icon" />
      <div className="buttons-container">
        {pages.map(pageNumber => {
          return (
            <button
              type="button"
              // if the page in state is equal to the pageNumber
              className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
              key={pageNumber}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
      <AiFillCaretRight onClick={nextPage} className="icon" />
    </Section>
  )
}

const Section = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0;

  .icon {
    font-size: 2rem;
    cursor: pointer;
  }

  button {
    margin: 0 0.25rem;
    background: none;
    padding: 0.25rem;
    border-radius: var(--borderRadius);
    cursor: pointer;
  }

  .active {
    background: var(--colorGreyLight);
  }
`
