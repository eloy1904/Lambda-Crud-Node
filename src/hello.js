"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Mensaje de EJGH",
        input: event,
      },
      null,
      2
    ),
  };
};
