<template>
  <v-container>
    <h1>Intiface Desktop Home</h1>
    <b>Welcome to Intiface Desktop version {{ Version }}!</b>
    <v-row>
      <v-col>
        <h2>NEWS FOR V19</h2>
        <p>Another quick turnaround update, with more bugfixes!</p>
        <ul>
          <li>
            There was a problem found in how engines and intiface desktop
            communicate, which is mostly what necessitated this update
          </li>
          <li>
            Logging output has been added to the rust engine! Expect far
            more details in the log panel now. In the next few versions, the log
            panel will be seeing some love to make that output actually usable.
          </li>
          <li>
            Also fixed up some issues and wording regarding websockets and
            their settings. "Insecure"/"Secure" was not accurate wording in
            relation to websockets and was worrying some users (insecure/secure
            sockets are mostly used locally, so security takes more discussion
            and nuance, which I'll be adding as a help dialog soon), so I've
            tried to clarify that somewhat.
          </li>
        </ul>
        <br/>
        <p>There's also a new Rust engine update (v10) coming that will be
        fixing some issues with rotating Lovense toys.</p>
        <p>That's it for now, here's hoping I can maybe go a week without
        another Desktop update!</p>
        <p>- qDot</p>
        <br/>
        <hr>
        <br/>
        <h2>OLD NEWS FOR V18</h2>
        <p>
          Ok, well, v17 went poorly. Not surprising after 15 months of not being
          touched, but not great either.
        </p>
        <p>
          In an effort to make things as smooth as possible, I tried to just port
          people's old configurations over. That was an extremely bad idea. So, as you
          may have noticed, everyone's configs got reset on this version.
        </p>
        <p>Other changes/fixes:</p>
        <ul>
          <li>Secure websockets now work again, and are easier to set up.</li>
          <li>
            IPC is removed, because it has never worked, even in v16 and before!
            It was mostly aspirational. It'll be back some day.
          </li>
          <li>
            There's now a configuration reset button in the Settings tab, just in
            case you ever need to start all over again later!
          </li>
        </ul>
        <br />
        <p>
          The hope is that v18 will at least be stable and useful enough for
          now, so I can start fixing up more issues in Buttplug as well as
          possibly adding some things to Desktop and the GHR. We shall see.
        </p>
        <p>- qDot</p>
      </v-col>
      <v-col>
        <b>Things to do with Intiface (all links will open in web browser)</b>
        <ul>
          <li>
            <a href="https://playground.buttplug.world">Buttplug Playground (Hardware Control, Web)</a>
          </li>
          <li>
            <a href="https://syncydink.buttplug.world">Syncydink (Movie Sync/Playback, Web)</a>
          </li>
          <li>
            <a
              href="https://github.com/FredTungsten/ScriptPlayer"
            >ScriptPlayer (Movie Sync/Playback, Windows Only)</a>
          </li>
          <li>
            <a href="https://intiface.com/ghr">Intiface Game Haptics Router</a> (Doesn't actually use Intiface Desktop yet >.> )
          </li>
        </ul>
        <br/>
        <hr>
        <br/>
        <h2>OLD NEWS FOR V17</h2>

        <p>
          After no releases since May 2019, v17 is the new, upgraded version of
          Intiface. Functionally, it's mostly the same, but it now defaults to a new
          Rust engine on Windows, macOS, and Linux.
        </p>
        <p>Some things to note:</p>
        <ul>
          <li>
            On any platform, if you're having problems, there is now a help panel
            where you can get links to places to ask for support (or contact support
            directly in this app).
          </li>
          <li>
            If you are a windows user having issues with the Rust engine (i.e.
            missing hardware, crashes, etc), You can switch back to the old C# engine
            in the Settings menu. Support for this will end at some point in the
            future, but right now the rust engine is new and needs testing outside of
            my development machine.
          </li>
          <li>
            If you're a macOS/Linux user having issues with the new Rust engine,
            please contact support. The old Node engine was buggier than Rust is
            currently and is considered dead.
          </li>
        </ul>
        <br />
        <p>
          I realize it's not really been obvious what Intiface Desktop is to be used
          for, and that's because I never really thought this through well. On top
          of that, due to some other parts of Buttplug and Intiface requiring large
          amounts of reworking, apps like Intiface Desktop and Syncydink have been
          neglected for a while. I'm hoping to start setting a direction for
          Intiface, as well as adding new features, including:
        </p>
        <ul>
          <li>A live updating home page with new apps/announcements</li>
          <li>Device testing and configuration for users</li>
          <li>A device simulator for developers</li>
          <li>App/Game/Etc lists</li>
          <li>
            Intiface Desktop App hosting/launching (think something like
            Steam/Itch.io, though not sure it'll be a store)
          </li>
        </ul>
        <br />
        <p>Thanks for using Buttplug/Intiface!</p>
        <p>- qDot</p>
        <br />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./HomePanel.ts"></script>
