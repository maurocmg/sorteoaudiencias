export const uploadImage = (image) => {
  // Aquí puedes hacer la lógica necesaria para subir la imagen a Cloudinary
  // y luego enviar la URL de la imagen al store de Redux
};

export const sortearAudiencias = (operadores) => {
  // Lógica para sortear audiencias y asignarlas a operadores
  return {
    type: 'SORTEAR_AUDIENCIAS',
    payload: sortedData, // Datos de audiencias asignadas
  };
};