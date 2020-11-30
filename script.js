function jumpIn()
{
    alert("Splash! We're all in!!");
}

function displayInfo()
{
    let para = document.getElementsByClassName("learn-more");
    para[0].outerText += "Trevor can do a backflip and Chris broke his back";

    let btn = document.getElementById("learn-more-btn");
    if (btn.style.display === "none")
    {
        btn.style.display = "block";
    }
    else
    {
        btn.style.display = "none";
    }
}

function showRates()
{
    let btn = document.getElementById("rates");
    if (btn.style.display === "none")
    {
        btn.style.display = "block";
    }
    else
    {
        btn.style.display = "none";
    }
}

function bookFlight()
{
    let btn = document.getElementById("bookingForm");
    if (btn.style.display === "none")
    {
        btn.style.display = "block";
    }
    else
    {
        btn.style.display = "none";
    } 
}

function onSubmit()
{
    alert(`Thank you for booking your flight to ${document.getElementById("city").value}, ${document.getElementById("fname").value} ${document.getElementById("lname").value}!`)
}