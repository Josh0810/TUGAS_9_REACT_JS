import { Container, Table, ProgressBar, Pagination } from "react-bootstrap";

function DivPrimera() {
  return (
    <Container>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Pemain</th>
            <th>Tim</th>
            <th>Transfer</th>
            <th>Proses Transfer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>No Data(Unknown)</td>
            <td>No Data(Unknown)</td>
            <td>No Data(Unknown)</td>
            <td>
              <ProgressBar animated now={1} label="1%" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>No Data(Unknown)</td>
            <td>No Data(Unknown)</td>
            <td>No Data(Unknown)</td>
            <td>
              <ProgressBar animated now={1} label="1%" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>No Data(Unknown)</td>
            <td>No Data(Unknown)</td>
            <td>No Data(Unknown)</td>
            <td>
              <ProgressBar animated now={1} label="1%" />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>No Data(Unknown)</td>
            <td>No Data(Unknown)</td>
            <td>No Data(Unknown)</td>
            <td>
              <ProgressBar animated now={1} label="1%" />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>No Data(Unknown)</td>
            <td>No Data(Unknown)</td>
            <td>No Data(Unknown)</td>
            <td>
              <ProgressBar animated now={1} label="1%" />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>No Data(Unknown)</td>
            <td>No Data(Unknown)</td>
            <td>No Data(Unknown)</td>
            <td>
              <ProgressBar animated now={1} label="1%" />
            </td>
          </tr>
        </tbody>
      </Table>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </Container>
  );
}
export default DivPrimera;
