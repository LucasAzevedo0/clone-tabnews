function status(request, response) {
  response.status(200).json({ chave: "Tudo em ordem!" });
}

export default status;
