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
        hobby: 'music',
        avi: 'pic3.jpg'
    },
    {
        name: 'Janice',
        gender: 'F',
        hobby: 'pets',
        avi: 'pic4.jpg'
    },
     {
        name: 'Mary',
        gender: 'F',
        hobby: 'sports',
        avi: 'https://randomuser.me/api/portraits/women/36.jpg'
    },
    {
        name: 'Mark',
        gender: 'M',
        hobby: 'music',
        avi: 'https://randomuser.me/api/portraits/men/55.jpg'
    },
    {
        name: 'Matthew',
        gender: 'M',
        hobby: 'sports',
        avi: 'https://randomuser.me/api/portraits/men/91.jpg'
    },
    {
        name: 'Muriel',
        gender: 'F',
        hobby: 'pets',
        avi: 'https://randomuser.me/api/portraits/women/51.jpg'
    },
 {
        name: 'April',
        gender: 'F',
        hobby: 'music',
        avi: 'https://randomuser.me/api/portraits/women/89.jpg'
    },
    {
        name: 'Alexander',
        gender: 'M',
        hobby: 'pets',
        avi: 'https://randomuser.me/api/portraits/men/35.jpg'
    },
    {
        name: 'Anthony',
        gender: 'M',
        hobby: 'sports',
        avi: 'https://randomuser.me/api/portraits/men/47.jpg'
    },
    {
        name: 'Aria',
        gender: 'F',
        hobby: 'music',
        avi: 'https://randomuser.me/api/portraits/women/27.jpg'
    },
 {
        name: 'Tiana',
        gender: 'F',
        hobby: 'sports',
        avi: 'https://randomuser.me/api/portraits/women/6.jpg'
    },
    {
        name: 'Tyler',
        gender: 'M',
        hobby: 'pets',
        avi: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        name: 'Tristan',
        gender: 'M',
        hobby: 'music',
        avi: 'https://randomuser.me/api/portraits/men/66.jpg'
    },
    {
        name: 'Thalia',
        gender: 'F',
        hobby: 'pets',
        avi: 'https://randomuser.me/api/portraits/women/3.jpgg'
    },
 {
        name: 'Layla',
        gender: 'F',
        hobby: 'sports',
        avi: 'https://randomuser.me/api/portraits/women/41.jpg'
    },
    {
        name: 'Luke',
        gender: 'M',
        hobby: 'music',
        avi: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Lincoln',
        gender: 'M',
        hobby: 'sports',
        avi: 'https://randomuser.me/api/portraits/men/50.jpg'
    },
    {
        name: 'Leah',
        gender: 'F',
        hobby: 'pets',
        avi: 'https://randomuser.me/api/portraits/women/54.jpg'
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
