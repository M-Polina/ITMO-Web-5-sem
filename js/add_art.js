
function showMyArts() {
    let table = document.getElementById("my_arts_cards");
    var row = "";

    if (localStorage.length !== 0) {
        document.getElementById("my_arts_cards").className="not_none";
        console.log("start");

        for (let i = 0; i < localStorage.length; i++) {
            let id = (i + 1).toString();
            console.log(id);
            let info = JSON.parse(localStorage.getItem(id));
            row += "<div class=\"my_arts_cards__item\">";
            row += "<img class=\"picture_photo\" src=\"images/photo1.jpeg\">";
            row += "<div class=\"picture_info\">";
            row += "<div class=\"picture_info__text\">";
            row += "<h5>" + info["art_name"] + "</h5>";
            row += "<h6>" + info["author_name"] + "</h6>";
            row += "</div>";
            let price =  info["art_price"];
            row += "<div class=\"picture_info__price\" сontent=\"" + price+ "\">"+ price + " ₽</div></div></div>";
        }

        table.innerHTML += row;
    }
}

document.getElementById("add_art_button").onclick=function() {
    document.getElementById("my_arts_cards").className="not_none";
    var art_cards = document.getElementById("my_arts_cards");
    art_name_val = document.getElementById("art_name").value;
    author_name_val = document.getElementById("author_name").value;
    art_price_val = document.getElementById("art_price").value;
    const art_card = {
        art_name: art_name_val,
        author_name: author_name_val,
        art_price: art_price_val
    };
    console.log(art_card)
    art_name_val.innerHTML = art_name_val;
    author_name_val.innerHTML = author_name_val;
    art_price_val.innerHTML = art_price_val;

    localStorage.setItem(localStorage.length + 1, JSON.stringify(art_card));
    var row = "";
    row += "<div class=\"my_arts_cards__item\">";
    row += "<img class=\"picture_photo\" src=\"images/photo1.jpeg\">";
    row += "<div class=\"picture_info\">";
    row += "<div class=\"picture_info__text\">";
    row += "<h5>" + art_name_val + "</h5>";
    row += "<h6>" + author_name_val + "</h6>";
    row += "</div>";
    row += "<div class=\"picture_info__price\" сontent=\"" + art_price_val+ "\">"+ art_price_val + " ₽</div></div></div>";
    art_cards.innerHTML += row;
    return false;
}


showMyArts()