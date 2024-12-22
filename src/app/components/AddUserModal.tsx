"use client";
import React from "react";
import { Button, Col, FormGroup, Form, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { User } from "../types";

interface UserModalProps {
  user?: User;
  type: "save" | "new";

  onClose: () => void;
}

const AddUserModal = (props: UserModalProps) => {
  const { user, onClose, type } = props;
  return (
    <Row
      className="mb-4"
      open={true}
      onClose={onClose}
    >
      <Col>
        <FloatingLabel
          controlId="floatingInputGrid"
          label="Email address"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
          />
        </FloatingLabel>
      </Col>
    </Row>
  );
};

export default AddUserModal;

// import React from "react";
// import { Modal, Button, Form } from "react-bootstrap";

// interface AddUserModalProps {
//   onClose: () => void;
// }

// const AddUserModal = ({ onClose }: AddUserModalProps) => {
//   return (
//     <Modal
//       show
//       onHide={onClose}
//       centered
//       backdrop="static"
//       keyboard={false}
//     >
//       <Modal.Header closeButton>
//         <Modal.Title>Add New User</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter name"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Location</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter location"
//             />
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button
//           variant="secondary"
//           onClick={onClose}
//         >
//           Cancel
//         </Button>
//         <Button
//           variant="primary"
//           onClick={onClose}
//         >
//           Save
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default AddUserModal;
// import React, { useState } from "react";
// import { Modal, Form, Button } from "react-bootstrap";
// import { User } from "../types";

// interface UserModalProps {
//   user?: User;
//   type: "save" | "new";
//   onClose: () => void;
//   saveUser: (id: string, user: User, type: "save" | "new") => void;
// }

// const initialState: User = {
//   id: "",
//   name: "",
//   email: "",
//   location: "",
//   picture: "",
// };

// const AddUserModal = (props: UserModalProps) => {
//   const { user, onClose, type, saveUser } = props;
//   const [formData, setFormData] = useState<User>(user || initialState);
//   const [errors, setErrors] = useState<Partial<User>>({});

//   // Validation function
//   const validateForm = () => {
//     const newErrors: Partial<User> = {};

//     if (!formData.name || formData.name.length < 3) {
//       newErrors.name = "Name must be at least 3 characters long";
//     }
//     if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }
//     if (!formData.location) {
//       newErrors.location = "Location cannot be empty";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle Save
//   const handleSave = () => {
//     if (validateForm()) {
//       saveUser(user?.id || crypto.randomUUID(), formData, type);
//       onClose();
//     }
//   };

//   return (
//     <Modal
//       show={true}
//       onHide={onClose}
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title>{user ? "Edit User" : "Add User"}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           {/* Picture URL Field */}
//           {!user && (
//             <Form.Group controlId="formPicture">
//               <Form.Label>
//                 <strong>Picture URL</strong>
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter picture URL"
//                 value={formData.picture || ""}
//                 onChange={(e) =>
//                   setFormData({ ...formData, picture: e.target.value })
//                 }
//               />
//             </Form.Group>
//           )}

//           {/* Name Field */}
//           <Form.Group
//             controlId="formName"
//             className="mt-3"
//           >
//             <Form.Label>
//               <strong>Name</strong>
//             </Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter name"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               isInvalid={!!errors.name}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.name}
//             </Form.Control.Feedback>
//           </Form.Group>

//           {/* Email Field */}
//           <Form.Group
//             controlId="formEmail"
//             className="mt-3"
//           >
//             <Form.Label>
//               <strong>Email</strong>
//             </Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               isInvalid={!!errors.email}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.email}
//             </Form.Control.Feedback>
//           </Form.Group>

//           {/* Location Field */}
//           <Form.Group
//             controlId="formLocation"
//             className="mt-3"
//           >
//             <Form.Label>
//               <strong>Location</strong>
//             </Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter location"
//               value={formData.location}
//               onChange={(e) =>
//                 setFormData({ ...formData, location: e.target.value })
//               }
//               isInvalid={!!errors.location}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.location}
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button
//           variant="secondary"
//           onClick={onClose}
//         >
//           Cancel
//         </Button>
//         <Button
//           variant="primary"
//           onClick={handleSave}
//         >
//           Save
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default AddUserModal;
