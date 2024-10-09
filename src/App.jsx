import { useState, useContext } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import ApiService from "./services/ApiService";
import SummaryService from "./services/SummaryService";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [items, setItems] = useState([]);
  const [summary, setSummary] = useState("");
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [summaries, setSummaries] = useState([]);

  async function itemClickHandler(documentId, index) {
    console.log(documentId, index);
    setLoading(true);
    try {
      const msg = await SummaryService(documentId);
      summaries[index] = msg.data;
      setSummaries(summaries);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function search(evt) {
    evt.preventDefault();
    setItems([]);
    setLoading(true);
    try {
      console.log(term);
      const data = await ApiService(term);
      setItems(data.doc);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App m-3">
      <Container>
        <div>
          <form onSubmit={search}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Term to search"
                aria-label="Term to search"
                aria-describedby="button-addon2"
                onChange={(e) => setTerm(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                {!loading ? "Search" : "Searching..."}
              </button>
            </div>
          </form>
          <Accordion defaultActiveKey="0">
            {items.map((item, index) => {
              return (
                <Accordion.Item
                  key={item.CIVIX_DOCUMENT_ID}
                  eventKey={item.CIVIX_DOCUMENT_ID}
                  data-id={item.CIVIX_DOCUMENT_ID}
                  onClick={() =>
                    itemClickHandler(item.CIVIX_DOCUMENT_ID, index)
                  }
                >
                  <Accordion.Header>
                    {item.CIVIX_DOCUMENT_TITLE} - {item.CIVIX_DOCUMENT_ID}
                  </Accordion.Header>
                  <Accordion.Body>
                    {!summaries[index] ? (
                      <Row>
                        <Col className="justify-content-md-center">
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                        </Col>
                      </Row>
                    ) : (
                      summaries[index]
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </Container>
    </div>
  );
}

export default App;
