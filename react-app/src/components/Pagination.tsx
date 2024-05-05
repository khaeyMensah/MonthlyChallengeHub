/**
 * Pagination component that displays a series of links for navigation through a paginated list.
 *
 * @returns {JSX.Element} A JSX element representing the pagination links.
 */
function Pagination(): JSX.Element {
  return (
    <div className="pagination">
      <div className="pagination-link">
        <a href="#">previous</a>
        <a href="#">1</a>
        <a href="#" className="active">
          2
        </a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">...</a>
        <a href="#">200</a>
        <a href="#">next</a>
      </div>
    </div>
  );
}

export default Pagination;
