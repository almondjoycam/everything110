
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
    // add event listener to the constructor
    player = new YT.Player();
}

// get the transcript div from the document
var transcriptContainer = document.getElementById('transcript');
// write a function to populate the container with the text
// from the transcript file?

// called when the video starts to play
function onStateChange(event) {
    // event.data will return one of the integer status codes
    // they are also namespaced
    // if playing then call this function:
    player.getCurrentTime();
    // to get the current playback time in seconds
    // then reference this with an object? JSON perchance?
    // to scroll to the related caption in the transcript
}
