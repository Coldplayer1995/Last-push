$(function () {
    //url could be defined in seperate file as constant 
    const url = "https://api.github.com/users/freeCodeCamp/events?per_page=100";
    const showbtn = $('.show-lastPushEvent-btn');
    const repo_info = $('.repo-info');

    function insertEventsData(eventsData) {
        const events = Object.values(eventsData);
        const pushEvents = events.filter(i => i.type === "PushEvent");
        const pushEventsSorted = pushEvents.sort((a, b) => {
            return (a.created_at < b.created_at) ? -1 : ((a.date > b.date) ? 1 : 0);
        });

        const lastPushEvent = pushEventsSorted[0];
        const userData = lastPushEvent.org.login;
        const repoNameData = lastPushEvent.repo.name;
        const repoUrlData = lastPushEvent.repo.url;
        const pushDateData = lastPushEvent.created_at;
        const authorData = lastPushEvent.actor.login;

        const repoName = $('<li>').text(repoNameData);
        const pushDate = $('<li>').text(pushDateData);
        const author = $('<li>').text(authorData);
        const user = $('<li>').text(userData);

        const repoDataList = $('.repo-data');

        repoDataList.append(repoName);
        repoDataList.append(pushDate);
        repoDataList.append(author);
        repoDataList.append(user);

        showbtn.addClass('hide');
        repo_info.removeClass('hide').addClass('visible');
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

});
