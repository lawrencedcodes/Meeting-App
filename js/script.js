const users = [
    {
        name: 'Jane',
        gender: 'F',
        hobby: 'sports',
        avi: 'pic2.jpg'
    },
    {
        name: 'John',
        gender: 'M',
        hobby: 'pets',
        avi: 'pic1.jpg'
    },
    {
        name: 'Jimmy',
        gender: 'M',
        hobby: 'sports',
        avi: 'pic3.jpg'
    },
    {
        name: 'Janice',
        gender: 'F',
        hobby: 'pets',
        avi: 'pic4.jpg'
    }
];

window.addEventListener('load', function () {
    console.log("Page loaded!");
    var results = document.getElementById('results');
    const searchBtn = document.getElementById('searchBtn');

    function search() {
        console.log("I'm searching!");

        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;

        var resultsHTML = "";
        const usersLength = users.length;
        for (var i = 0; i < usersLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {

                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    resultsHTML += '<div class="person-row">\
                            <img src="images/' + users[i].avi + '" />\
                                <div class="person-info">\
                            <div>' + users[i].name + '</div>\
                            <div>' + users[i].hobby + '</div></div>\
                            <button>Add as a friend</button></div>';
                }
            }
                           
                        }
                
                        results.innerHTML = resultsHTML;
                
                    }  
                    searchBtn.addEventListener('click', search);
});
