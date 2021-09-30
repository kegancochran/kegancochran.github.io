import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <container class="flex flex-column vh-100 relative z-0">
    <header
      id="header"
      class="
        tc
        w-100
        bb
        b--white-10
      "
    >
      <a
        id="a"
        class="near-white no-underline tracked small-caps mb0 f5 fw5"
      >
        menu bar thing
      </a>

    </header>
    <container
      data-name="container-content"
      class="flex flex-grow-1 flex-row-l tc flex-column z-0"
    >
      <section
        id="column-red"
        class="
          flex flex-grow-1
          items-end-l items-center
          pointer
          b--white-10
          br-l
          bb-m bb-s
        "
      >
        <p class="tl fw2 f2 w-100-m w-100-s tc pl3-l pb2-l ma0">One</p>
      </section>
      <section
        id="column-green"
        class="
          flex flex-grow-1
          items-end-l items-center
          b--white-10
          br-l
          bb-m bb-s
        "
      >
        <p class="tl fw2 f2 w-100-m w-100-s tc pl3-l pb2-l ma0">Two</p>
      </section>
      <section
        id="column-blue"
        class="
          flex flex-grow-1
          items-end-l items-center
        "
      >
        <p class="tl fw2 f2 w-100-m w-100-s tc pl3-l pb2-l ma0">Three</p>
      </section>
    </container>
  </container>
    , 
    document.getElementById("main"))