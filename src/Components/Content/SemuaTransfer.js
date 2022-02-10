import { Container, Table, ProgressBar, Pagination } from "react-bootstrap";

function SemuaTransfer() {
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
            <td>MAROUANE FELLAINI</td>
            <td>MANCHESTER UNITED</td>
            <td>SHANDONG LUNENG</td>
            <td>
              <ProgressBar animated now={85} label="85%" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>LUIS NANI</td>
            <td>SPORTING CP</td>
            <td>ORLANDO CITY</td>
            <td>
              <ProgressBar animated now={55} label="55%" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>MAREK HAMSIK</td>
            <td>NAPOLI</td>
            <td>DALIAN YIFANG</td>
            <td>
              <ProgressBar animated now={95} label="95%" />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>SARDAR AZMOUN</td>
            <td>RUBIN KAZAN</td>
            <td>ZENIT ST PETERSBURG</td>
            <td>
              <ProgressBar animated now={100} label="100%" />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>MICHY BATSHUAYI</td>
            <td>CHELSEA</td>
            <td>CRYSTAL PALACE</td>
            <td>
              <ProgressBar animated now={50} label="50%" />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>LUCAS PIAZON</td>
            <td>CHELSEA</td>
            <td>CHIEVO</td>
            <td>
              <ProgressBar animated now={100} label="100%" />
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
export default SemuaTransfer;
