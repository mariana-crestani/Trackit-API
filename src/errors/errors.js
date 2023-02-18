export function notFoundError() {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}

export function conflictError(message) {
  return {
    name: "ConflictError",
    message,
  };
}

export function invalidDataError(details) {
  return {
    name: "InvalidDataError",
    message: "Invalid data",
    details,
  };
}

export function unauthorizedError() {
  return {
    name: "UnauthorizedError",
    message: "You must be signed in to continue",
  };
}
