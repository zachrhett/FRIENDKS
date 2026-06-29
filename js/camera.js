/*==========================================================
  camera.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Camera Engine
  Version 1.0
==========================================================*/

const FRIENDCamera = (() => {

let stream = null;

let active = false;

function init(videoElement){

    if(!videoElement) return false;

    return navigator.mediaDevices
        .getUserMedia({ video: true })

        .then(s => {

            stream = s;

            videoElement.srcObject = stream;

            active = true;

            return true;

        })

        .catch(err => {

            console.error(err);

            active = false;

            return false;

        });

}

function stop(){

    if(stream){

        stream.getTracks().forEach(t => t.stop());

    }

    stream = null;

    active = false;

}

function isActive(){

    return active;

}

function captureFrame(videoElement){

    if(!videoElement) return null;

    const canvas =
        document.createElement("canvas");

    canvas.width = videoElement.videoWidth;

    canvas.height = videoElement.videoHeight;

    const ctx =
        canvas.getContext("2d");

    ctx.drawImage(videoElement,0,0);

    return canvas.toDataURL("image/png");

}

return {

    init,
    stop,
    isActive,
    captureFrame

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDCamera =
    FRIENDCamera;

/*==========================================================
  End camera.js
==========================================================*/
