const shellMsgApi = {
  postInternalMessage: (msg, targetOrigin) => {
    targetOrigin = targetOrigin || "*"
    console.log({ msg, targetOrigin })
    window.parent.postMessage(msg, targetOrigin)
  },
  postExternalMessageFromChild: (msg, targetOrigin) => {
    targetOrigin = targetOrigin || "*"
    console.log({ msg, targetOrigin })
    window.postMessage(msg, targetOrigin)
  },
  postExternalMessageToChild: (msg, targetOrigin, iframe) => {
    targetOrigin = targetOrigin || "*"
    iframe = iframe || document.querySelector("iframe")
    const embedWindow = iframe?.contentWindow
    embedWindow?.postMessage(msg, targetOrigin)
  },
  subscribeToMessages: (callback, targetOrigin) => {
    console.log({ callback })
    targetOrigin = targetOrigin || "*"
    window.addEventListener("message", event => {
      // if (event.origin !== targetOrigin && targetOrigin !== "*") {
      //   return
      // }
      console.log({ event })
      callback(event.data)
    })
  },
  unsubscribeToMessages: (callback, targetOrigin) => {
    targetOrigin = targetOrigin || "*"
    window.removeEventListener("message", event => {
      // if (event.origin !== targetOrigin && targetOrigin !== "*") {
      //   return
      // }
      callback(event.data)
    })
  },
}

window.__shellMsgApi = shellMsgApi
