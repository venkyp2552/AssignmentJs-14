let hospitals = [
    {
    "id": 1,
    "name":"Hospital A",
    "location":"Delhi",
    "noOfBeds":450,
    "availability":"Yes"
    },
    {
    "id": 2,
    "name":"Hospital B",
    
    "location":"Pune",
    "noOfBeds":150,
    "availability":"No"
    },
    {
    "id": 3,
    "name":"HospitalC",
    "location":"Pune",
    "noOfBeds":350,
    "availability":"Yes"
    }
]

//a) Number of Beds > 200

let beds200=hospitals.filter((item)=>item.noOfBeds>=200)
console.log(beds200)

//b) Availability of Beds = Yes

let bedsAvail=hospitals.filter((item)=>item.availability==="Yes")
console.log(bedsAvail)

//c) Location = Pune

let puneLoc=hospitals.filter((item)=>item.location==="Pune")
console.log(puneLoc)