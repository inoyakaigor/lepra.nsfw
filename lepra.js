var css = "\
div.post img { \
  opacity: 0.05; \
  max-width: 600px; \
  -webkit-transition: opacity 0.2s; \
  transition: opacity 0.2s; \
} \
div.post img:hover { \
  opacity: 1; \
}\
.c_body img {\
  max-width: 100%;\
  opacity: 0.05;\
  -webkit-transition: opacity 0.3s ease 0s;\
  transition: opacity 0.3s ease 0s;\
}\
.c_body img:hover {\
  opacity: 1;\
}\
.post {\
  box-shadow: 0 0 7px 0 silver;\
  margin: 10px;\
  padding: 10px;\
  /*width: 100%;*/\
}\
.golden {\
  background: rgba(255, 215, 0, 0.2);\
}\
.comments #content .post, #inbox_comments .post {\
  padding-bottom: 1em;\
}\
.comments #content #js-commentsHolder .dd .vote {\
  top: -63px !important;\
  left: -50px;\
}";
style = document.createElement("STYLE");
style.type = "text/css";
style.innerHTML = css;
document.body.appendChild(style);