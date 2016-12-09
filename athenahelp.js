if(window.attachEvent) {
  window.attachEvent('onload', athenaHelpInit);
} else {
  if(window.onload) {
    var curronload = window.onload;
    var newonload = function(evt) {
      curronload(evt);
      athenaHelpInit(evt);
    };
    window.onload = newonload;
  } else {
    window.onload = athenaHelpInit;
  }
}

function athenaHelpInit() {
  var athenaElements = "<div>helllo</div>";
  var athenaElements = "<div id='athenahelp' onClick='openHelp(this)' style='position:fixed;cursor:pointer;background:#11799C;right:0;top:50%;font-size:13px;color:white;transform:translate3d(50%,-50%,0) rotate(270deg) translateY(-50%);transform-origin:center;padding:5px;border-radius:3px;animation-timing-function:cubic-bezier(.55,0,.1,1)'>Need Help?</div><div id='athenahelp-container' style='display: none'><div id='athenahelp-navigation'><span style='position:fixed;right:48%;top:0;z-index:67;font-size:1.5em;cursor:pointer;' onClick='closeHelp(this.id)' id='athenahelp-close'>X</span></div><div id='athenahelp-iframe' style='height: 100%;width: 50%; position:fixed; right: 0; top: 0;border: 1px solid grey; border-radius: 3px; z-index:43'><iframe src='https://afm-sayem.github.io/athdesk_admin_demo/' height='100%' width='100%' frameborder='0'></iframe></div></div>"
    var div = document.createElement('div');
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(div);
  div.innerHTML = athenaElements;

}
function closeHelp(elem) {
  var helpElem = document.getElementById('athenahelp-container');
  helpElem.setAttribute('style', 'display: none');
}

function openHelp(elem) {
  var helpElem = document.getElementById('athenahelp-container');
  helpElem.setAttribute('style', 'display: block');
}

