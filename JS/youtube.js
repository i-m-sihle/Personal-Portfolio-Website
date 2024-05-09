fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCR3RTDIAS0wMI7-8fngXD-A&maxResults=21&order=date&key=AIzaSyDEuHy1HUwTvluBylGInNcT8_noN2Suqoc")
.then((result)=>{
    return result.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items 
    let videoContainer = document.querySelector(".youtube-container")
    for (video of videos){
        let title = video.snippet.title;
        let videoId = video.id.videoId;
        let thumbnailUrl = video.snippet.thumbnails.high.url;
        let videoLink = `https://www.youtube.com/watch?v=${videoId}`;
        
        videoContainer.innerHTML += `
            <div>
                <a href="${videoLink}" target="_blank">
                    <img src="${thumbnailUrl}" alt="${title}">
                </a>
                <p>
                    <a href="${videoLink}" target="_blank">${title}</a>
                </p>
            </div>
        `;
    }
})
