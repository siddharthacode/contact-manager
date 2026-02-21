//@desc get all contacts
//@route GET/api/contacts
// @access public
const getContacts = (req,res) => {
  console.log("request method : ",req.method);
  res.status(200).json({ message:"get all contacts"});
};

//@desc Create new contacts
//@route POST/api/contacts  
// @access public           // status(201) = successfull
const createContact = (req, res) => {
  console.log("the requestv body : ",req.body);
  const { name, phone, email, address} = req.body;
    if(!name || !phone || !email || !address ){
      res.status(404);
      throw new Error("All fields are mandatory");
    }
  res.status(201).json({ message : "create contact"});
};

//@desc get all contacts
//@route GET/api/contacts/:id
// @access public
const getContact = (req, res) => {
  res.status(200).json({ message : `get contact for ${req.params.id}`});
};

//@desc Update contact 
//@route PUT/api/contacts/:id
// @access public
const updateContact = (req, res) => {
  res.status(200).json({ message : `update contact for ${req.params.id}`});
};

//@desc delete contacts
//@route DELETE/api/contacts/:id
// @access public
const deleteContact = (req, res) => {
  res.status(200).json({ message : ` contact for ${req.params.id}`});
};


module.exports = { 
  getContacts, 
  createContact, 
  getContact, 
  updateContact, 
  deleteContact, 
};