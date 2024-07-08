const validateRequest = async (req, res, next) => {
  // const randomNumber = getRandomNumber();
  // let response;
  // if (randomNumber === 34) {
  //   // Responder con éxito para el número 34 con un mensaje personalizado
  //   response = createResponse('success', 200, { message: 'Este backend fue hecho por g _ _ _ _ _ l' }, 'Specific message for number 34.');
  //   res.status(200).json(response);
  // } else if (randomNumber <= 90) {
  //   if (randomNumber >= 1 && randomNumber <= 10) {
  //     // Responder con éxito pero con un atributo de error para números entre 1 y 10
  //     response = createResponse('success', 200, { number: randomNumber, error: 'Low number but acceptable.' }, 'Generated number is between 1 and 10.');
  //     res.status(200).json(response);
  //   } else {
  //     // Responder con un error para números entre 11 y 90
  //     response = createResponse('error', 500, { number: randomNumber }, 'Error: Generated number is too low.');
  //     res.status(500).json(response);
  //   }
  // } else if (randomNumber > 90 && randomNumber <= 100) {
  //   // Obtener datos de la API externa y responder con ellos
  //   try {
  //     const { results } = await fetchDataFromExternalAPI();
  //     response = createResponse('success', 200, results[0], 'Data retrieved from external API.');
  //     res.status(200).json(response);
  //   } catch (error) {
  //     response = createResponse('error', 500, {}, 'Error fetching data from external API.');
  //     res.status(500).json(response);
  //   }
  // } 
  console.log("Se ejecuto el middleware");
  next();

}

module.exports = {
  validateRequest,
};
