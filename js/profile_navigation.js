function openProfile(event, content_id) {
    var i, profile_blocks, buttons;

    profile_blocks = document.getElementsByClassName("profile_block");
    console.log(profile_blocks);
    for (i = 0; i < profile_blocks.length; i++) {
        profile_blocks[i].style.display = "none";
    }

    buttons = document.getElementsByClassName("profile_sections_menu__button");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
    }

    document.getElementById(content_id).style.display = "block";
    event.currentTarget.className += " active";
}

// console.log(document.location);
// console.log(currentTarget.hash);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('profile_info').style.display = "block";
    buttons = document.getElementsByClassName("profile_sections_menu__button");
    var active_button = document.querySelector('a[href="'+document.location.hash+'"]', 'class="profile_sections_menu__button"');
    if (active_button != null) {
        active_button.click();
    }
})

function openProfileFromMenu(event, active_button_hash, content_id) {
    // console.log(document.location);
    // console.log(currentTarget.hash);

    var i, profile_blocks, buttons;

    profile_blocks = document.getElementsByClassName("profile_block");
    for (i = 0; i < profile_blocks.length; i++) {
        profile_blocks[i].style.display = "none";
    }

    buttons = document.getElementsByClassName("profile_sections_menu__button");
    var active_button = document.querySelector('a[href="'+document.location.hash+'"]', 'class="profile_sections_menu__button"');

    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");

        if (buttons[i].hash === active_button_hash){
            buttons[i].className += " active";
        }
    }

    document.getElementById(content_id).style.display = "block";
    console.log(location.hash);
    console.log(document.location.hash);
}

// console.log(document.location.hash);
// document.getElementById('profile_info').style.display = "block";

// function openProfile(event, content_id) {
//     var i, profile_blocks, buttons;

//     profile_blocks = document.getElementsByClassName("profile_block");
//     // console.log(profile_blocks);
//     for (i = 0; i < profile_blocks.length; i++) {
//         profile_blocks[i].style.display = "none";
//     }

//     buttons = document.getElementsByClassName("profile_sections_menu__button");
//     for (i = 0; i < buttons.length; i++) {
//         buttons[i].className = buttons[i].className.replace(" active", "");

//         if (buttons[i].href === location.href){
//             buttons[i].className += " active";
//         }
//     }

//     document.getElementById(content_id).style.display = "block";
//     console.log(location.hash);
//     console.log(document.location.hash);
//     // event.currentTarget.className += " active";
// }

// // buttons = document.getElementsByClassName("profile_sections_menu__button");
// // var activ_button = document.querySelector('a[href="'+document.location.hash+'"]', 'class="profile_sections_menu__button"');
// // activ_button.click()

// // console.log('a[href="'+document.location.hash+'"]');
// // document.getElementById('profile_info').style.display = "block";
