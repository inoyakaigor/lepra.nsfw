var css = "\
body {\
  font-family: PT Sans;\
  font-size: 1em;\
}\
.l-content_main {\
    background: none repeat scroll 0 0 #eee;\
  }\
  div.post img { \
    /*opacity: 0.05;*/ \
    max–width: 900px;\
    transition: opacity 0.2s; \
  }\
  div.post img:hover { \
    opacity: 1; \
  }\
  div.post img{\
    max-width: 100%;\
    //width: 100%;\
    height: auto;\
  }\
.post {\
  box-shadow: 0 0 7px 0 silver;\
  margin: 10px;\
  padding: 10px;\
  background: #fff;\
  line-height: 23px;\
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
  background: #eee;\
}\
\
.b-comment_outline {\
  box-shadow: 0 0 6px 0 silver;\
}\
\
.b-post_comments_links > a {\
  background: none repeat scroll 0 0 #00fffb;\
  border-color: #96fdff #96fdff #19cacd;\
  border-radius: 3px;\
  border-style: solid;\
  border-width: 1px 1px 3px;\
  display: inline-block;\
  height: 20px;\
  padding: 5px 10px 0;\
  color: #0A4C92!important;\
}\
.post_comments_page .post {\
  margin-right: 10px;\
}\
.b-post_tags {\
  display: none;\
}";
style = document.createElement("STYLE");
style.type = "text/css";
style.innerHTML = css;
document.body.appendChild(style);