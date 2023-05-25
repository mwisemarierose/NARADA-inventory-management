import Client from "../models/clientModel";
import compare from "../helpers/authentication.js";


export const createClient = async (req, res) => {
  try {
    const {
      username,
      deviceId,
      totalAmount,
      sensor,
      battery,
      installationDate,
      paymentStartDate,
      naradaTel,
      phone,
      monthlyInstallment,
      district,
      sector,
      cell,
      nearby,
      coordinates,
    } = req.body;
    const client = await Client.create({
      username: username,
      deviceId: deviceId,
      sensor: sensor,
      battery: battery,
      installationDate: installationDate,
      paymentStartDate: paymentStartDate,
      totalAmount: totalAmount,
      naradaTel: naradaTel,
      monthlyInstallment : monthlyInstallment,
      phone: phone,
      district: district,
      sector: sector,
      cell: cell,
      nearby: nearby,
      coordinates: coordinates,
    });

    return res.status(200).json({ message: "Client created successfully",client });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//signin with deviceId and phone
export const signin = async (req, res) => {
  try {
    const { deviceId, password } = req.body;

    const user = await Client.findOne({deviceId});
    
    if (!user) {
      throw new Error("User not found");
    }
    compare.comparePassword(password,user.phone)
    return res.status(200).json({
      message: "you are logged in successfully",
      status: 200,
      token: compare.generateToken(user),
    });
  } catch (error) {
console.log(error)
    return res.status(500).json(error.message);
  }
};

export const getAllClients = async (req, res) => {

  try {
    const clients = await Client.find();
    return res.status(200).json({ message: "All clients", clients });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export const getOneClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params._id);
    return res.status(200).json({ message: "Client", client });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export const updateClient = async (req, res) => {


  try {
    const updatedClient = await Client.findByIdAndUpdate(
      req.params._id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Client updated successfully", updatedClient });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


export const deleteClient = async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params._id);
    return res.status(200).json({ message: "Client deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
//delete all clients
export const deleteAllClients = async (req, res) => {
  try {
    await Client.deleteMany({});
    return res.status(200).json({ message: "All clients deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
//filter clients where total remaining is greater than 0
export const filterClients = async (req, res) => {
  try {
    const clients = await Client.find({ totalRemaining: { $gt: 0 } });
    return res.status(200).json({ message: "Filtered clients", clients });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}