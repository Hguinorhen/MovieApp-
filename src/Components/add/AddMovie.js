import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./AddMovie.css";

function AddMovie({ addToList }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");
  const [trailerURL, setTrailerURL] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    handleClose();
    addToList({ title, year, description, posterURL, rating, trailerURL });
  };

  return (
    <>
      <Button
        style={{ borderRadius: "25px" }}
        className="movieCard"
        variant="outline-warning"
        onClick={() => handleShow()}
      >
        <span className="addSpan">Add Movie</span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Movie Title</Form.Label>
              <Form.Control onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Movie release Year</Form.Label>
              <Form.Control onChange={(e) => setYear(e.target.value)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>URL movie poster</Form.Label>
              <Form.Control onChange={(e) => setPosterURL(e.target.value)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>movie description</Form.Label>
              <Form.Control onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>trailer url</Form.Label>
              <Form.Control onChange={(e) => setTrailerURL(e.target.value)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>rating</Form.Label>
              <Form.Control onChange={(e) => setRating(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleClick()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
