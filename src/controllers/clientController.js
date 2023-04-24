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
      price,
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
      price : price,
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
