$(function () {

    const url = "https://api.github.com/orgs/allegro/events?per_page=100";

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



        const userAvatar = $('<img>').attr('src', userAvatarData);
        const user = $('<li>').text("użytkownik: " + userData);
        const repoName = $('<li>').text(repoNameData);
        const repoUrl = $('<li>').text(repoUrlData);
        const pushDate = $('<li>').text(pushDateData);
        const author = $('<li>').text(authorData);

        const repoDataList = $('ul');


        $('.container-app').prepend(userAvatar);
        repoDataList.append(user);
        repoDataList.append(repoName);
        repoDataList.append(repoUrl);
        repoDataList.append(pushDate);
        repoDataList.append(author);
showbtn.addClass('hide');


        console.log(userData);
        console.log(repoNameData);
        console.log(repoUrlData);
        console.log(pushDateData)
        console.log(authorData);

        console.log('sdlhfljgsjh')


    }

    



    $.ajax({
        url: url,
        method: 'GET'
    }).done((eventsData) => {
            
    }).fail(function (error) {
        console.log(error);
    })


    // po kliknięciu w button wywołuję funckcję załadowania, w której uruchamia się funkcja pobrania
    //danych do załadowanie
const showbtn = $('.show-lastPushEvent-btn');

    showbtn.on('click', function () {

            insertEventsData(eventsData);

        })



});