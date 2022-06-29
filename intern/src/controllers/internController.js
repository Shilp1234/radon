const internModel = require('../models/internModel')
const collegeModel = require('../models/collegeModel');

/*****************************************[VALIDATION]***************************************************/
const isValidReqBody = function (reqBody) {
  return Object.keys(reqBody).length > 0
}
const isValid = function (value) {
  if (typeof value === 'undefined' || typeof value === null) return false;
  if (typeof value === 'string' && value.trim().length === 0) return false;
  return true
}
const isValidEmail = function (value) {
  const regex = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  if (!regex.test(value)) {
    // Please Enter a Valid Email Address
    return false
    //res.status(400).send({status: false, msg:"Invalid Email!"})
  }
  return true;
}

const isValidNumber = function (value) {
  if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)) { return true }
  else return false
}

/***********************************************[CREATE INTERN]****************************************************/

const createIntern = async function (req, res) {
  try {
    const { name, collegeId, isDeleted } = req.body; // Destructing Key and Values.
    const requestedBody = req.body;
    const email = req.body.email.trim();

    if (!isValidReqBody(req.body))
      return res.status(400).send({ status: false, msg: 'Please Enter Intern Details' });

    if (!isValid(name))
      return res.status(400).send({ status: false, msg: "Intern name is required" })
    if (typeof (name) != 'string')
      return res.status(400).send({ status: false, msg: 'Characters are allowed only!' })

    if (!isValid(email))
      return res.status(400).send({ status: false, msg: 'Please Provide Intern Email Address' })
    if (!isValidEmail(email))
      return res.status(400).send({ status: false, msg: 'Please Provide Valid Email Address' })

    if (!req.body.mobile) return res.status(400).send({ status: false, message: "mobile is required" });
    let mobile = req.body.mobile
    if (!isValidNumber(mobile)) return res.status(400).send({ msg: `this mobile is not valid ::${mobile}` })


    let checknumber = await internModel.findOne({ mobile: req.body.mobil })   /*Check Mobile From DB*/
    if (checknumber) {
      return res.status(400).send({ status: false, msg: "Mobile Number Already Used" })
    }
    let isEmailExists = await internModel.find()
    let mailLength = isEmailExists.length;
    if (mailLength != 0) {

      const DuplicateEmail = await internModel.find({ email: email });
      const emailGot = DuplicateEmail.length;

      if (emailGot != 0) {
        return res.status(400).send({ status: false, message: "This Email Address Already Exists in DB" })
      }

      const DuplicateMobile = await internModel.find({ mobile: mobile });
      const duplicateMobLen = DuplicateMobile.length

      if (duplicateMobLen != 0) {
        return res.status(400).send({ status: false, message: "This Mobile Number Already Exists in DB" })
      }

      if (isDeleted === true) {
        return res.status(400).send({ status: false, message: "You have to assigned false to isDeleted entry" })
      }

      let data ={ name, email, mobile, collegeId, isDeleted }

      const internData = await internModel.create(data);
      const finalinternData = await internModel.findOneAndUpdate({ _id: internData._id }).select(
        { isDeleted: 1, name: 1, email: 1, mobile: 1, collegeId: 1, _id: 0 })
      res.status(201).send({ status: true, message: "Intern Created Successfully", data: finalinternData })
    }
  } catch (e) {
    res.status(500).send({ status: false, message: e.message })
  }
}

/*********************************************[GET COLLEGE DETAILS]****************************************************************/

const getCollegeDetails = async function (req, res) {
  try {
    let filter = req.query
    if (!filter) return res.status(404).send({ status: false, Error: "Please set query" })
    let checkCollegeName = await collegeModel.findOne({ name: filter.name, isDeleted: false }) //check college name from DB

    if (!checkCollegeName)
      return res.status(404).send({ status: false, msg: "No such college Name found" })

    let collegeId = checkCollegeName._id            //get collgeId from checkCollegeName
    let getAllInternData = await internModel.find
      ({ collegeId: collegeId, isDeleted: false }).select({ name: 1, email: 1, mobile: 1 })

    if (!getAllInternData.length)
      return res.status(404).send({ status: false, msg: "No intern Apply for this College" });

    let name = checkCollegeName.name;                    // assign value
    let fullname = checkCollegeName.fullname;
    let logoLink = checkCollegeName.logoLink;

    let collegeData = {                        //call value
      name: name,
      fullname: fullname,
      logoLink: logoLink,
      interns: getAllInternData
    }

    res.status(200).send({ status: true, msg: "got intern Sucessfully", data: collegeData });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};


module.exports.getCollegeDetails = getCollegeDetails
module.exports.createIntern = createIntern


















