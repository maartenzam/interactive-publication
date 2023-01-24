Sound content can be embedded with the `<audio>` tag, while videos can be embedded with `<video>`. Both tags have a `src` attribute to specify where the audio and video files should be loaded from. Browsers that support the audio and video tag will automatically display a media player to let the user play, pause and scrub the audio and video. For browsers that do not support audio and video, you can provide fallback text.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML 101</title>
  </head>
  <body>
    <h1>Audio and video</h1>

    <audio src="https://upload.wikimedia.org/wikipedia/commons/1/1a/02_Skadance.ogg" controls>
      Your browser does not support the audio element. Here is a <a href="https://commons.wikimedia.org/wiki/File:02_Skadance.ogg">link to the audio file</a> instead.</audio
    ><br /><br />

    <video src="https://upload.wikimedia.org/wikipedia/commons/4/4a/02-Grey_Squirrel_2021-09-13_nX2.webm" controls width="600">
        <p>Your browser doesn't support HTML5 video. Here is a <a href="https://commons.wikimedia.org/wiki/File:02-Grey_Squirrel_2021-09-13_nX2.webm">link to the video</a> instead.
      </p>
    </video>
  </body>
</html>
```

<aside>
🔗 <a href='https://officepublicationseu.github.io/accessible-html-dataviz/audio-video.html'>See the <code>audio-video.html</code> page live in your browser</a>, or <a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/audio-video.html'>inspect its source HTML</a>.
</aside>