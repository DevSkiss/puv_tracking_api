const Location = require('../models/Location');

//TODO Create Location
module.exports.addLocation = async (params) => {
  let newLocation = new Location({
    longitude: params.longitude,
    latitude: params.latitude,
    userId: params.userId,
    user_type: params.user_type,
  });
  let result = await newLocation.save();
  return result;
};

//TODO Get All Active Location
module.exports.getAllActiveLocation = async () => {
  const result = await Location.find({ is_active: true });
  return result;
};

//TODO Get All Active Location by User Type
module.exports.getLocationByUserType = async (params) => {
  const result = await Location.find({
    $and: [{ is_active: true }, { user_type: params.user_type }],
  });
  return result;
};

//TODO Get All Active Location by User Type
module.exports.getLocationByUserType = async (params) => {
  const result = await Location.find({
    $and: [{ is_active: true }, { user_type: params.user_type }],
  });
  return result;
};

//TODO Single Location
module.exports.getOneLocation = async (params) => {
  const result = await Location.findById(params.locationId);
  return result;
};

//TODO Update Position
module.exports.updatePosition = async (params) => {
  let updatePosition = {
    longitude: params.longitude,
    latitude: params.latitude,
    is_active: params.isActive,
  };
  try {
    let location = await Location.findOne({ userId: params.userId });
    let result = await Location.findByIdAndUpdate(location._id, updatePosition);

    return result;
  } catch (e) {
    console.log(e);
  }
};

//TODO Delete Class
module.exports.deactivateLocation = async (params) => {
  let updatePosition = {
    is_active: false,
  };

  try {
    let location = await Location.findOne({ userId: params.userId });
    let result = await Location.findByIdAndUpdate(location._id, updatePosition);

    return result;
  } catch (e) {
    console.log(e);
  }
};
