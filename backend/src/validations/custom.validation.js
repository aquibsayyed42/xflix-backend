
const objectId = (value, helpers) => {
    if (!value.match(/^[0-9a-fA-F]{24}$/)) {
      return helpers.message('"{{#label}}" must be a valid mongo id');
    }
    return value;
  };

const link = (value, helpers) => {
    if(value.indexOf("youtube.com/embed/") > -1){
        return helpers.message("Invalid Link");
    }
    return value
}

module.exports = {
    objectId,
    link,
}