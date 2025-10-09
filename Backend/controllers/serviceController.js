const Service = require("../models/Service");

// Create a new service
async function createService(req, res) {
  try {
    const { name, description, price, duration } = req.body;

    if (!name || !description || !price || !duration) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newService = new Service({ name, description, price, duration });
    await newService.save();

    res.status(201).json({ message: "Service created", service: newService });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all services
async function getServices(req, res) {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get one service by Name
async function getServiceByName(req, res) {
  try {
    const service = await Service.findOne({name: req.params.name});
    if (!service) return res.status(404).json({ error: "Service not found" });

    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Update a service
async function updateService(req, res) {
  try {
    const { name, description, price, duration } = req.body;

    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { name, description, price, duration },
      { new: true }
    );

    if (!updatedService)
      return res.status(404).json({ error: "Service not found" });

    res.status(200).json({ message: "Service updated", service: updatedService });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Delete a service
async function deleteService(req, res) {
  try {
    const deleted = await Service.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Service not found" });

    res.status(200).json({ message: "Service deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getServicesFromCookie(req, res)
{
    try 
    {

        if(!req.cookies.services)
            return res.status(400).json({error: "no services found"});
          
        const services = JSON.parse(req.cookies.services);
        return res.status(200).json({services});
    } 
    catch (error) 
    {
        return res.status(500).json({error: error.message});
    }
}

async function getServiceData(req, res)
{
    try
    {
        const serviceID = req.body.serviceID;

        const service = await Service.findById(serviceID);

        if(!service)
            return res.status(404).json({error: "service not found"});

        const name = service.name;
        const price = service.price;
        const duration = service.duration;

        return res.status(200).json({Name: name, Price: price, Duration: duration});

    }
    catch
    {
        return res.status(500).json({error: error.message});

    }
}

module.exports = {
  createService,
  getServices,
  getServiceByName,
  updateService,
  deleteService,
  getServicesFromCookie,
  getServiceData
};
