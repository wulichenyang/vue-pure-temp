;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-rocket__easyi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M318.534068 721.780536c44.814871 44.814871 44.814871 118.4409 0 163.257803-44.814871 44.814871-176.861773 103.235745-221.676645 58.420874s13.60397-176.861773 58.420874-221.676645c44.814871-44.816903 117.640307-44.816903 163.255771-0.002032z" fill="#EFC75E" ></path>' +
    '' +
    '<path d="M184.888014 700.172677v4.801521c0 83.22907 68.023915 151.252985 151.252985 151.252985h3.200336c22.408452-43.215719 15.205155-97.633632-21.607859-134.446647-35.21183-36.012422-89.629743-43.215719-132.845462-21.607859z" fill="#DEB957" ></path>' +
    '' +
    '<path d="M553.816715 470.492143c136.848423 136.848423 164.056363 331.315095 34.411238 460.96022l-61.621211 61.62121c-129.645125 129.645125-40.013351-181.663294-176.861773-318.511716s-448.957434-46.416056-318.511716-176.861773l61.62121-61.621211c129.647157-129.643093 324.113829-102.433121 460.962252 34.41327z" fill="#F26C4F" ></path>' +
    '' +
    '<path d="M1006.775078 17.53378c41.614535 41.614535 23.209044 305.706306-232.080279 561.796221-166.458139 165.657547-271.295069 224.078421-271.295068 224.078421-111.239634 75.227212-164.856955 24.007604-235.282647-46.416056s-122.441828-124.043012-46.416056-235.282647c0 0 59.221466-105.637521 224.879013-272.09566C701.867331-5.673232 965.160543-24.879315 1006.775078 17.53378z" fill="#F4F0D3" ></path>' +
    '' +
    '<path d="M547.41401 767.396c-116.041155 77.626957-172.060252 24.808196-244.885689-48.01724-73.626028-73.626028-127.245381-128.844533-48.017239-244.885688l12.004817-19.206083c-31.210901 42.415127-44.814871 66.422731-44.814871 66.42273-76.025773 111.239634-24.007604 164.856955 46.416056 235.282647s124.043012 120.842676 235.282647 46.416056c0 0 49.616392-28.010565 135.247238-99.234816-58.420874 44.816903-91.232959 63.222394-91.232959 63.222394z" fill="#E8E4C8" ></path>' +
    '' +
    '<path d="M738.680345 285.628513c39.212758 39.212758 39.212758 102.435153 0 141.649943-39.212758 39.212758-102.435153 39.212758-141.649943 0-39.212758-39.212758-39.212758-102.435153 0-141.649943s103.237777-39.21479 141.649943 0z" fill="#8BA0AB" ></path>' +
    '' +
    '<path d="M507.400659 533.714537c20.006675 20.006675-18.405491 91.230927-116.041155 188.866592s-156.855098 124.043012-176.861773 103.235745c-20.006675-20.006675 5.602113-79.228141 103.235745-176.861774 98.434224-97.633632 168.859916-136.04783 189.667183-115.240563z" fill="#F26C4F" ></path>' +
    '' +
    '<path d="M668.256686 280.0264c20.006675 0 39.212758 8.001857 53.619353 22.408451 14.404562 14.404562 22.408452 33.612678 22.408451 53.619353s-8.001857 39.212758-22.408451 53.619353c-14.404562 14.404562-33.612678 22.408452-53.619353 22.408452s-39.212758-8.001857-53.619353-22.408452c-14.404562-14.404562-22.408452-33.612678-22.408452-53.619353s8.001857-39.212758 22.408452-53.619353c14.404562-14.406594 33.612678-22.408452 53.619353-22.408451m0-24.007604c-25.608788 0-51.217576 9.603042-70.42366 29.609717-39.212758 39.212758-39.212758 102.435153 0 141.649943 19.206083 19.206083 44.814871 29.609717 70.42366 29.609717s51.217576-9.603042 70.423659-29.609717c39.212758-39.212758 39.212758-102.435153 0-141.649943-19.206083-20.006675-44.814871-29.609717-70.423659-29.609717z" fill="#324D5B" ></path>' +
    '' +
    '<path d="M761.889389 37.542488c7.203297 53.619353 36.012422 110.439042 83.22907 157.65569 41.614535 40.813943 89.631775 68.023915 136.848422 79.228141C1034.78361 143.177977 1030.782682 42.344008 1006.775078 17.53378c-23.209044-24.007604-119.241492-28.008533-244.885689 20.008708z" fill="#F26C4F" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)