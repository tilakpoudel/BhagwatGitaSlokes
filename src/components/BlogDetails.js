import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Alert from "@material-ui/lab/Alert";

export const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [deleteSuccess, setdeleteSuccess] = useState(false);

  const { data: blog, error, isPending } = useFetch(
    "http://localhost:7500/bg/" + id
  );

  const textStyle = {
    textAlign: "center",
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    fetch("http://localhost:7500/bg/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      setdeleteSuccess(true);
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && (
        <div>
          <CircularProgress />
          Loading..
        </div>
      )}
      {error && <div>{error}</div>}
      {blog && (
        <div>
          {deleteSuccess && (
            <div>
              <Alert severity="success">Deleted Sucessfuly !!</Alert>
            </div>
          )}
          <article>
            <h2 style={textStyle}>
              BG {blog.chapter}.{blog.text}
            </h2>
            <br />
            <h3 style={textStyle}>{blog.sloke}</h3>
            <br />
            <h2 style={textStyle}>Translation</h2>

            <h3 style={textStyle}>{blog.translation}</h3>
            <br />
            <div>
              <h3 style={textStyle}>Purport</h3>
              <p style={{ fontSize: "18px", textAlign: "justify" }}>
                {blog.purport}
              </p>
            </div>
            <button onClick={handleDelete}>Delete</button>
          </article>

          <Dialog
            open={open}
            onClose={handleClose}
            // PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle>Delete ??</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are You Sure to Delete the sloke ??
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleConfirmDelete} color="primary">
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </div>
  );
};
