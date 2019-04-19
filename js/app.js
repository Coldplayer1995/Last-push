//dodaj meta tagi z allegro.tech
// co zrobic zeby po kliknieciu 2x sie nie pojawialo 2x dane
// DODAJ PAGINACJĘ
// co jak pusta tablica albo 1????
/*
if(pushEvents.lenght == 0){
    name= "brak modyfikacji w ciagu osttanich 90 dni???"
}else if(pushEvents.lenght ==1){
    name= pushEvents[0].repo.name
}else{
    name= latestPushEventName;
}

*/
// SASS?
// zamien ajaxa i jq na fetch i es6 i ew react???
// format daty nieczytelny w czesci przegladarek, chcesz to zmenic?
//older versions of WebKit and Internet Explorer do not support ISO 8601 natively. So this may fail in older browsers
//https://stackoverflow.com/questions/5802461/javascript-which-browsers-support-parsing-of-iso-8601-date-string-with-date-par
//https://stackoverflow.com/questions/12192491/sort-array-by-iso-8601-date

$(function () {



    const url = "https://api.github.com/orgs/allegro/events?per_page=100";
    //const url = "https://api.github.com/users/" + userNameVal + "/events?per_page=100";
    //console.log(url)

    const showbtn = $('.show-lastPushEvent-btn');
    const repo_info = $('.repo-info');

    const userName = $('input');
    userName.on('change', function (params) {
        
    }){

    }

const userNameVal = $('input').val();

    console.log(userNameVal)

    function insertEventsData(eventsData) {



        const events = Object.values(eventsData);

        const pushEvents = events.filter(i => i.type === "PushEvent");

        //console.log(pushEvents)

        const pushEventsSorted = pushEvents.sort((a, b) => {
            return (a.created_at < b.created_at) ? -1 : ((a.date > b.date) ? 1 : 0);
        });
        const lastPushEvent = pushEventsSorted[0];
        //console.log(pushEventsSorted)

        const userAvatarData = lastPushEvent.org.avatar_url
        const userData = lastPushEvent.org.login;
        const repoNameData = lastPushEvent.repo.name;
        const repoUrlData = lastPushEvent.repo.url;
        const pushDateData = lastPushEvent.created_at;
        const authorData = lastPushEvent.actor.login;


        const repoName = $('<li>').text(repoNameData);
        const pushDate = $('<li>').text(pushDateData);
        const author = $('<li>').text(authorData);
        const user = $('<li>').text(userData);
        const repoUrl = $('<li>').text(repoUrlData);

        //const userAvatar = $('<img>').attr('src', userAvatarData);



        const repoDataList = $('.repo-data');


        //$('.container-app').prepend(userAvatar);


        repoDataList.append(repoName);
        repoDataList.append(pushDate);
        repoDataList.append(author);
        repoDataList.append(user);
        repoDataList.append(repoUrl);

        showbtn.addClass('hide');
        repo_info.removeClass('hide').addClass('visible');


        console.log(userData);
        console.log(repoNameData);
        console.log(repoUrlData);
        console.log(pushDateData)
        console.log(authorData);




    }


    showbtn.on('click', function () {

        $.ajax({
            url: url,
            method: 'GET'
        }).done((eventsData) => {
            insertEventsData(eventsData);

        }).fail(function (error) {
            console.log(error);
        })

    });




    // po kliknięciu w button wywołuję funckcję załadowania, w której uruchamia się funkcja pobrania
    //danych do załadowanie




});