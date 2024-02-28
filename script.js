
var userData = [
{
id: 1,
username: "Fatima",
fullName: "Fatima Khan",
email: "Fatima.khan@example.com",
age: 28,
location: "Makka",
phoneNumber: "123-789-4560",
gender:"Female",
},
{
id: 2,
username: "Habiba",
fullName: "Umme Habiba",
email: "UmmeHabiba@example.com",
age: 24,
location: "Madina",
phoneNumber: "555-666-7777",
gender:"Female",
},
{
id: 3,
username: "Aisha",
fullName: "Aisha Ahmed",
email: "aisha.ahmed@example.com",
age: 22,
location: "Mecca",
phoneNumber: "111-222-3333",
gender:"Female",
},
{
id: 4,
username: "Mohammed",
fullName: "Mohammed Khan",
email: "mohammed.khan@example.com",
age: 25,
location: "Medina",
phoneNumber: "444-555-6666",
gender:"Male",
},
{
id: 5,
username: "Ali",
fullName: "Ali Hassan",
email: "ali.hassan@example.com",
age: 6,
location: "Karachi",
phoneNumber: "444-555-6666",
gender:"Male",
},
{
id: 7,
username: "Fatima",
fullName: "Fatima Ahmed",
email: "fatima.ahmed@example.com",
age: 19,
location: "Lahore",
phoneNumber: "444-555-6666",
gender:"Female",
},
{
id: 8,
username: "Zain",
fullName: "Zain Malik",
email: "zain.malik@example.com",
age: 20,
location: "Islamabad",
phoneNumber: "777-888-9999",
gender:"Male",
},
{
id: 9,
username: "Aisha",
fullName: "Aisha Khan",
email: "aisha.khan@example.com",
age: 18,
location: "Rawalpindi",
phoneNumber: "123-456-7890",
gender:"Female",
},
{
id: 10,
username: "Mustafa",
fullName: "Mustafa Ali",
email: "mustafa.ali@example.com",
age: 20,
location: "Peshawar",
phoneNumber: "123-456-7890",
gender:"Male",
},
{
id: 11,
username: "Ali",
fullName: "Ali Hassan",
email: "ali.hassan@example.com",
age: 18,
location: "Karachi",
phoneNumber: "123-456-7890",
gender:"Male",
},
{
id: 12,
username: "Fatima",
fullName: "Fatima Ahmed",
email: "fatima.ahmed@example.com",
age: 19,
location: "Lahore",
phoneNumber: "123-456-7890",
gender:"Female",
},
{
id: 13,
username: "Zain",
fullName: "Zain Malik",
email: "zain.malik@example.com",
age: 20,
location: "Islamabad",
phoneNumber: "123-456-7890",
gender:"Male",
},
{
id: 14,
username: "Aisha",
fullName: "Aisha Khan",
email: "aisha.khan@example.com",
age: 18,
location: "Rawalpindi",
phoneNumber: "123-456-7890",
gender:"Female",
},
{
id: 15,
username: "Mustafa",
fullName: "Mustafa Ali",
email: "mustafa.ali@example.com",
age: 20,
location: "Peshawar",
phoneNumber: "123-456-7890",
gender:"Male",
},
{
id: 16,
username: "Omar",
fullName: "Omar Ahmed",
email: "omar.ahmed@example.com",
age: 18,
location: "Quetta",
phoneNumber: "111-222-3333",
gender:"Male",
},
{
id: 17,
username: "Mariam",
fullName: "Mariam Khan",
email: "mariam.khan@example.com",
age: 19,
location: "Multan",
phoneNumber: "444-555-6666",
gender:"Female",
},
{
id: 18,
username: "Sami",
fullName: "Sami Malik",
email: "sami.malik@example.com",
age: 20,
location: "Faisalabad",
phoneNumber: "777-888-9999",
gender:"Male",
},
{
id: 19,
username: "Nadia",
fullName: "Nadia Ahmed",
email: "nadia.ahmed@example.com",
age: 18,
location: "Sialkot",
phoneNumber: "123-456-7890",
gender:"Female",
},
{
id: 20,
username: "Yusuf",
fullName: "Yusuf Ali",
email: "yusuf.ali@example.com",
age: 19,
location: "Gujranwala",
phoneNumber: "987-654-3210",
gender:"Male",
},


]; 

var data = document.getElementById("show");

function act() {
var id = document.getElementById("userinput").value;
var gender = document.querySelector('input[name="gender"]:checked');
var age = document.getElementById("age").value;
var userFound = false;

for (var i = 0; i < userData.length; i++) {
if (userData[i].id == id && userData[i].age == parseInt(age) && userData[i].gender == gender.value) {
 var html = `
     <h4>User id: <span>${userData[i].username}</span></h4>
     <h4>Full Name: <span>${userData[i].fullName}</span></h4>
     <h4>Email: <span>${userData[i].email}</span></h4>
     <h4>Age: <span>${userData[i].age}</span></h4>
     <h4>Location: <span>${userData[i].location}</span></h4>
     <h4>Phone Number: <span>${userData[i].phoneNumber}</span></h4>
     <h4>Gender: <span>${userData[i].gender}</span></h4>
 `;
 data.innerHTML = html;
 userFound = true;
 break;
}
}

if (!userFound) {
data.innerHTML = "<p>User not found.</p>";
}
}

function seestudent() {
var selectedGender = document.getElementById("seestudent").value;
var userFound = false;
var htmlContent = "";

for (var i = 0; i < userData.length; i++) {
if (selectedGender === "All" || userData[i].gender === selectedGender) {
 htmlContent += `
     <h4>User id: <span>${userData[i].id}</span></h4>
     <h4>Username: <span>${userData[i].username}</span></h4>
     <h4>Full Name: <span>${userData[i].fullName}</span></h4>
     <h4>Email: <span>${userData[i].email}</span></h4>
     <h4>Age: <span>${userData[i].age}</span></h4>
     <h4>Location: <span>${userData[i].location}</span></h4>
     <h4>Phone Number: <span>${userData[i].phoneNumber}</span></h4>
     <h4>Gender: <span>${userData[i].gender}</span></h4>
     <hr>`;
 userFound = true;
}
}

if (userFound) {
data.innerHTML = htmlContent;
} 





}
//location
function filterByLocation() {
var location = document.getElementById("location").value;
var userFound = false;
var htmlContent3 = "";

for (var i = 0; i < userData.length; i++) {
if (userData[i].location === location) {
 htmlContent3 += `
     <h4>User id: <span>${userData[i].id}</span></h4>
     <h4>Username: <span>${userData[i].username}</span></h4>
     <h4>Full Name: <span>${userData[i].fullName}</span></h4>
     <h4>Email: <span>${userData[i].email}</span></h4>
     <h4>Age: <span>${userData[i].age}</span></h4>
     <h4>Location: <span>${userData[i].location}</span></h4>
     <h4>Phone Number: <span>${userData[i].phoneNumber}</span></h4>
     <h4>Gender: <span>${userData[i].gender}</span></h4>
     <hr>`;
 userFound = true;
}
}

if (userFound) {
data.innerHTML = htmlContent3;
} 





}
