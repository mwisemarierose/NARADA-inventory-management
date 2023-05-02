import Client from "../models/clientModel";

export const createClient = async (req, res) => {
  try {
    const {
      username,
      deviceId,
      sensor,
      battery,
      installationDate,
      paymentDate,
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
      paymentDate: paymentDate,
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