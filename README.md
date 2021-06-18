# tabular-form

Step 1:
Given a Component that will render _after_ page load, have that component
  * fetch data from an API endpoint "/api/parents"
  * render results in tabular form with columns "Full name", "email", "stripeCustomerId"

API endpoint /api/parents
Example response:
{
  "data": [
    {
      "id": "rec009SOlACCwwF5o",
      "firstName": "Pieter",
      "lastName": "Oonk",
      "email": "pieteroonk@example.com",
      "referredBy": "Ana Fabrega",
      "timeZone": "Europe/Dublin",
      "studentIds": [
        "recUWMrscXkWnGJda"
      ],
      "stripeCustomerId": "cus_J7yMo2GRlpdgQB",
      "referralLinks": [
        "http://synthesis.is?grsf=zpsjcj"
      ]
    },
    {
      "id": "rec00TXpqSje96NP9",
      "firstName": "Heather Laughlin",
      "email": "hfricke@example.com",
      "referredBy": "Twitter",
      "timeZone": "America/New_York",
      "studentIds": [
        "recdLZpb7zv2wx5bU"
      ],
      "stripeCustomerId": "cus_J7yMo2GRlpdgQB",
      "referralLinks": [
        "http://synthesis.is?grsf=d6dolp"
      ]
    }
  ]
}

const ParentsList = () => {
  for(i=0; i < data.length; i++){
  	
  }
  render(
  	<div></div>
  )
}