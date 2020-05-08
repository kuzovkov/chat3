<template>
    <div class="container">
        <h1>Conference: {{roomid}}</h1>
        <div id="header">
            <input id="room-id-txt" type="text" placeholder="Room ID" value="room1">
            <input id="user-name" type="text" placeholder="You name">
            <button id="btn-open-or-join">Open or Join</button>
            <button id="btn-leave" style="display: none">Leave</button>

        </div>
        <div id="infobar">
            <div id="onUserStatusChanged"></div>
        </div>

        <div id="videos"></div>
        <div id="chat">
            <div id="key-press" style="text-align: right; display: none; font-size: 11px;">
                <span style="vertical-align: middle;"></span>
                <img src="/img/key-press.gif" style="height: 12px; vertical-align: middle;">
            </div>
            <ul id="messages-list" style="width: 90%; height: 80%; overflow-y: scroll; border: 1px solid grey;"></ul>
            <input id="input-message">
            <button id="btn-send-message">Send</button>
            <!--<button id="btn-select-file" style="display: none">Attach file</button>
            <button id="btn-share-screen" style="display: none">Share screen</button>-->
            <img id="btn-select-file" src="/img/attach-file.png" title="Attach a File">
            <img id="btn-share-screen" src="/img/share-screen.png" title="Share Your Screen">
        </div>
        <div id="dialog-message" title="Message"><p>&nbsp;</p></div>
    </div>
</template>

<script>
    //import * as $ from 'jquery';
    //import {getMediaElement, getAudioElement} from '../vendor/muaz-khan/getMediaElement';
    /*
    import io from 'socket.io';
    import {DetectRTC} from '../vendor/muaz-khan/DetectRTC';

    import * as jquery from '../vendor/jquery-ui/jquery-ui.min';
    import * as emojionearea from '../vendor/emojionearea/emojionearea.min';
    import {FileBufferReader} from '../vendor/muaz-khan/FileBufferReader';
    import {RTCMultiConnection} from '../vendor/muaz-khan/RTCMultiConnection';
    import {RecordRTC} from '../vendor/muaz-khan/RecordRTC';
    import {webrtcHandler} from '../vendor/canvas-designer/dev/webrtc-handler';
    import {CanvasDesigner} from '../vendor/canvas-designer/canvas-designer-widget';
    import {loadParams, init} from '../modules/conference';
    */
    export default {
        props: ['roomid'],
        created(){
            window.getExternalIceServers = true;
            //window.diagMess = $("#dialog-message").dialog({modal: true, autoOpen: false});
            //loadParams();
            //init();
        }
    }
</script>

<style scoped>

</style>

