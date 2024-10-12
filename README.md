# Tapestry Social Browser Extension

Reads watch activity across websites and outputs a unique creatorId to the console and an API endpoint.

Users should not be prompted to join that Tapestry/community immediately upon detecting watch activity. Say someone should be invited to that Tapestry after:

* Music: After listening to the same artist 10 times.

* Livestreams: 1hr. of viewtime total across sessions.

* Videos: Watching 3 videos from the same creator / TV show.

* Movies: Finishing 70% of a movie, do not prompt until loading the next page.

Users should be able to adjust these via an extension "preferences" menu.

Users should be able to join at any time via the default extension menu upon opening.

---

### Target HTML Elements

* YouTube Channel (Videos AND Live) 

```html
<!-- Example YouTube Video Target Elements -->
<!-- id="text" && class="ytd-channel-name" -->
<yt-formatted-string 
    id="text"
    link-inherit-color=""
    respect-lang-dir=""
    title="Dr Brian Keating"
    class="style-scope ytd-channel-name complex-string" 
    ellipsis-truncate=""
    ellipsis-truncate-styling=""
    dir="auto" 
    has-link-only_="" 
    style="text-align: left;">
    <a 
        class="yt-simple-endpoint style-scope yt-formatted-string" 
        spellcheck="false" 
        href="/@DrBrianKeating">
            Dr Brian Keating
    </a>
</yt-formatted-string>
```

* YouTube Music Artist

```html
<!-- Example YouTube Music Target Elements -->
<!-- outer <span class="subtitle"> inner <a href="channel/{...}"> -->

<span class="subtitle style-scope ytmusic-player-bar">
    <yt-formatted-string 
        class="byline style-scope ytmusic-player-bar complex-string" 
        ellipsis-truncate="" 
        ellipsis-truncate-styling="" 
        title="Charli xcx, Robyn &amp; Yung Lean • Brat and it’s completely different but also still brat • 2024">
        <a 
            class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" 
            href="channel/UCI4YNnmHjXFaaKvfdmpWvJQ" 
            dir="auto">
                Charli xcx
        </a>
        <span dir="auto" class="style-scope yt-formatted-string">, </span>
        <a 
            class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" 
            href="channel/UCtUP6i_G7Zf_e1ndgiRfi1g" 
            dir="auto">
                Robyn
        </a>
        <span dir="auto" class="style-scope yt-formatted-string"> &amp; </span>
        <a 
            class="yt-simple-endpoint style-scope yt-formatted-string" 
            spellcheck="false" 
            href="channel/UCKxZPmezUMRaV0rkbQnrtxA" 
            dir="auto">
                Yung Lean
        </a>
        <span dir="auto" class="style-scope yt-formatted-string"> • </span>
        <a 
            class="yt-simple-endpoint style-scope yt-formatted-string" 
            spellcheck="false" 
            href="browse/MPREb_On6Pbb0F30q" 
            dir="auto">
                Brat and it’s completely different but also still brat
        </a>
        <span dir="auto" class="style-scope yt-formatted-string"> • </span>
        <span dir="auto" class="style-scope yt-formatted-string">2024</span>
    </yt-formatted-string>
    <dom-repeat as="text" class="style-scope ytmusic-player-bar">
        <template is="dom-repeat"></template>
    </dom-repeat>
</span>
```

* Twitch Channel (URL is Unique to Each Creator, Easy)

```html
<title>PirateSoftware - Twitch</title>
```

#### Tentative:
* SoundCloud Music Artist 
* Spotify Music Artist
* Netflix 
* Max 
* Hulu
* Disney Plus 
* Amazon Prime Video 
* Kick 
* TV Network Specific (Peacock, ESPN+, Paramount+)
* Patreon

<hr>

