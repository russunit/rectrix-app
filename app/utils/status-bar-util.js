"use strict";
const application = require("application");
const platform = require("platform");
const utils = require("utils/utils");
function setStatusBarColors() {
    // Make the iOS status bar transparent with white text.
    // See https://github.com/burkeholland/nativescript-statusbar/issues/2
    // for details on the technique used.
    if (application.ios) {
        var AppDelegate = UIResponder.extend({
            applicationDidFinishLaunchingWithOptions: function () {
                utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle = UIStatusBarStyle.LightContent;
                return true;
            }
        }, {
            name: "AppDelegate",
            protocols: [UIApplicationDelegate]
        });
        application.ios.delegate = AppDelegate;
    }
    // Make the Android status bar transparent.
    // See http://bradmartin.net/2016/03/10/fullscreen-and-navigation-bar-color-in-a-nativescript-android-app/
    // for details on the technique used.
    if (application.android) {
        application.android.onActivityStarted = function () {
            if (application.android && platform.device.sdkVersion >= "21") {
                var View = android.view.View;
                var window = application.android.startActivity.getWindow();
                window.setStatusBarColor(0x000000);
                var decorView = window.getDecorView();
                decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
            }
        };
    }
}
exports.setStatusBarColors = setStatusBarColors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHVzLWJhci11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLFdBQVcsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUMzQyxNQUFZLFFBQVEsV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUNyQyxNQUFZLEtBQUssV0FBTSxhQUFhLENBQUMsQ0FBQTtBQVFyQztJQUNFLHVEQUF1RDtJQUN2RCxzRUFBc0U7SUFDdEUscUNBQXFDO0lBQ3JDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDbkMsd0NBQXdDLEVBQUU7Z0JBQ3hDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO2dCQUNoSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztTQUNGLEVBQUU7WUFDQyxJQUFJLEVBQUUsYUFBYTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQyxDQUFDLENBQUM7UUFDTCxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUVELDJDQUEyQztJQUMzQywwR0FBMEc7SUFDMUcscUNBQXFDO0lBQ3JDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLFdBQVcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUc7WUFDdEMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDN0IsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFbkMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN0QyxTQUFTLENBQUMscUJBQXFCLENBQzdCLElBQUksQ0FBQyw0QkFBNEI7c0JBQy9CLElBQUksQ0FBQyxxQ0FBcUM7c0JBQzFDLElBQUksQ0FBQyxnQ0FBZ0M7c0JBQ3JDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzVDLENBQUM7UUFDSCxDQUFDLENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQXBDZSwwQkFBa0IscUJBb0NqQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuXHJcbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcclxuZGVjbGFyZSB2YXIgVUlSZXNwb25kZXI6IGFueTtcclxuZGVjbGFyZSB2YXIgVUlTdGF0dXNCYXJTdHlsZTogYW55O1xyXG5kZWNsYXJlIHZhciBVSUFwcGxpY2F0aW9uOiBhbnk7XHJcbmRlY2xhcmUgdmFyIFVJQXBwbGljYXRpb25EZWxlZ2F0ZTogYW55O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXR1c0JhckNvbG9ycygpIHtcclxuICAvLyBNYWtlIHRoZSBpT1Mgc3RhdHVzIGJhciB0cmFuc3BhcmVudCB3aXRoIHdoaXRlIHRleHQuXHJcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9idXJrZWhvbGxhbmQvbmF0aXZlc2NyaXB0LXN0YXR1c2Jhci9pc3N1ZXMvMlxyXG4gIC8vIGZvciBkZXRhaWxzIG9uIHRoZSB0ZWNobmlxdWUgdXNlZC5cclxuICBpZiAoYXBwbGljYXRpb24uaW9zKSB7XHJcbiAgICB2YXIgQXBwRGVsZWdhdGUgPSBVSVJlc3BvbmRlci5leHRlbmQoe1xyXG4gICAgICBhcHBsaWNhdGlvbkRpZEZpbmlzaExhdW5jaGluZ1dpdGhPcHRpb25zOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB1dGlscy5pb3MuZ2V0dGVyKFVJQXBwbGljYXRpb24sIFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24pLnN0YXR1c0JhclN0eWxlID0gVUlTdGF0dXNCYXJTdHlsZS5MaWdodENvbnRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIkFwcERlbGVnYXRlXCIsXHJcbiAgICAgICAgcHJvdG9jb2xzOiBbVUlBcHBsaWNhdGlvbkRlbGVnYXRlXVxyXG4gICAgICB9KTtcclxuICAgIGFwcGxpY2F0aW9uLmlvcy5kZWxlZ2F0ZSA9IEFwcERlbGVnYXRlO1xyXG4gIH1cclxuXHJcbiAgLy8gTWFrZSB0aGUgQW5kcm9pZCBzdGF0dXMgYmFyIHRyYW5zcGFyZW50LlxyXG4gIC8vIFNlZSBodHRwOi8vYnJhZG1hcnRpbi5uZXQvMjAxNi8wMy8xMC9mdWxsc2NyZWVuLWFuZC1uYXZpZ2F0aW9uLWJhci1jb2xvci1pbi1hLW5hdGl2ZXNjcmlwdC1hbmRyb2lkLWFwcC9cclxuICAvLyBmb3IgZGV0YWlscyBvbiB0aGUgdGVjaG5pcXVlIHVzZWQuXHJcbiAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQpIHtcclxuICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub25BY3Rpdml0eVN0YXJ0ZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQgJiYgcGxhdGZvcm0uZGV2aWNlLnNka1ZlcnNpb24gPj0gXCIyMVwiKSB7XHJcbiAgICAgICAgdmFyIFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcclxuICAgICAgICB2YXIgd2luZG93ID0gYXBwbGljYXRpb24uYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xyXG4gICAgICAgIHdpbmRvdy5zZXRTdGF0dXNCYXJDb2xvcigweDAwMDAwMCk7XHJcblxyXG4gICAgICAgIHZhciBkZWNvclZpZXcgPSB3aW5kb3cuZ2V0RGVjb3JWaWV3KCk7XHJcbiAgICAgICAgZGVjb3JWaWV3LnNldFN5c3RlbVVpVmlzaWJpbGl0eShcclxuICAgICAgICAgIFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxyXG4gICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9ISURFX05BVklHQVRJT05cclxuICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxyXG4gICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0lNTUVSU0lWRV9TVElDS1kpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==