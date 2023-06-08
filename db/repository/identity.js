import Model from "../model/identity";

const getAll = async () => {
 return await Model.find({});
};

const getIdentity = async (phone) => {
 return await Model.findOne({ phone });
};

const addIdentity = async (data) => {
 return await Model.create(data);
};

export { getAll, getIdentity, addIdentity };