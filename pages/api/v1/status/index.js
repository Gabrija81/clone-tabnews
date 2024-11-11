function status(request, response) {
  response.status(200).json({ chave: "ÁáÉéÜüÕõ" });
}

export default status
