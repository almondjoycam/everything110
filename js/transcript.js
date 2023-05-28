
// Loads YT iframe api asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Required function for YT api,
// called when API is finished loading
var player;

function onYouTubeIframeAPIReady() {
    // stores information about the video player
    player = new YT.Player('transcript-video', {
        events: {
            'onStateChange': onPlayerStateChange,
            'onReady': onPlayerReady
        }
        }
    );
}

// get the transcript div from the document
var transcriptContainer;
function onPlayerReady(event) {
//     var transcriptContainer = document.getElementById('transcript');
    transcriptContainer = $('#transcript');
}

/* this part unnecessary now

// access the data through a local server request
// then parse the data as JSON
// and store as an object
var dataRequest = new XMLHttpRequest();
var jsonData;

dataRequest.onload = function() {
    if (dataRequest.status === 200) {
        jsonData = JSON.parse(dataRequest.responseText);
        if (jsonData.captions) {
            populateTranscriptContainer(jsonData.captions);
        }
    }
}

dataRequest.open('GET', 'js/KodableOOP.json', true);
dataRequest.send(null);

// write a function to populate the container with the text
// from the transcript file using DOM manipulation
// put these in the HTML for accessibility
function populateTranscriptContainer(captionsArray) {
    for (var i = 0; i < captionsArray.length; i++) {
        // captionsArray[i] represents one of the caption objects
        // in chronological order

        // create nodes for caption content
        var caption = document.createElement('p');
        var captionText = document.createTextNode(captionsArray[i].text);
        caption.appendChild(captionText);
        caption.id = captionsArray[i].time;

        // add to the container
        transcriptContainer.appendChild(caption);
    }
}

*/

// called when the video starts to play
var timeInSeconds = 0;
var currentCaptionNode = transcriptContainer.children()[0];
// var currentCaptionNode = transcriptContainer.firstChild;

function onPlayerStateChange(event) {
    // event.data will return one of the integer status codes
    // they are also namespaced
    // if playing then call this function:
    while (event.data === YT.PlayerState.PLAYING) {
        // to get the current playback time in seconds
        timeInSeconds = player.getCurrentTime();

        // and call the function to show the caption
        // every 1 second
        window.setTimeout(scrollToCurrent, 1000);
    }
}

// Scroll to the related caption in the transcript
var scrollOptions = {
    behavior: 'smooth',
    block: 'center',
    inline: 'start'
};

function scrollToCurrent() {
    // depends on DOM manipulation from earlier
    if (currentCaptionNode.attr('id') == timeInSeconds) {
        currentCaptionNode.scrollIntoView(scrollOptions);
        currentCaptionNode = currentCaptionNode.next();
    }
}
