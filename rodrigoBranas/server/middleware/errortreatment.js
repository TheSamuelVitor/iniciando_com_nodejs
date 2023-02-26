export function ErrorHandler(error, req, res, next) {
  if (error.message == "Post not found") {
    return res.status(404).send(error.message);
  }

  if (error.message == "Post already exists") {
    return res.status(409).send(error.message);
  }

  return res.status(500).send(error);
}
