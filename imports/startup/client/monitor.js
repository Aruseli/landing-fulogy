import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'

Meteor.startup(() => {
    //create pixel
    /*const openPixel = document.createElement('script');
    openPixel.setAttribute('type', 'text/javascript');
    openPixel.innerHTML =`!function(e,t,n,o,p,a,i,s,c){e[p]||((i=e[p]=function(){i.process?i.process.apply(i,arguments):i.queue.push(arguments)}).queue=[],i.t=1*new Date,(s=t.createElement(n)).async=1,s.src="${Meteor.isProduction ? 'https://255320.selcdn.ru/media' : 'http://10.0.0.11:3003'}/openpixel.js?t="+864e5*Math.ceil(new Date/864e5),(c=t.getElementsByTagName(n)[0]).parentNode.insertBefore(s,c))}(window,document,"script",0,"opix"),opix("init","ID-_fulogy_"),opix("event","pageload");`;
    document.head.insertBefore(openPixel, document.head.firstChild);
    */
    /*document.addEventListener('pixelInit', function (e) {
        console.log('pixelInit');
        console.log(e.detail);
    }, false);*/
    //activity tracking
    let focused = new ReactiveVar(document.hasFocus());
    let lastActivityTime = new ReactiveVar(1*new Date);

    function changeLastActivity() {
        const timestamp = 1*new Date;
        if (timestamp - lastActivityTime.get() > 60 * 1000) { //обновлять не чаще раза в минуту
            lastActivityTime.set(timestamp);
        }
    }

    window.addEventListener('blur', () => {
        focused.set(false);
        changeLastActivity();
    });
    window.addEventListener('focus', () => {
        focused.set(true);
        changeLastActivity();
    });
    window.addEventListener('click', changeLastActivity);
    window.addEventListener('keydown', changeLastActivity);
    window.addEventListener('scroll', changeLastActivity);

    /*Tracker.autorun(() => {
        const isActive = focused.get();
        console.log(isActive);
    });*/

    let init = true;
    Tracker.autorun(() => {
        const lastActivity = lastActivityTime.get();
        if (!init && window.opix){
            window.opix('event', 'activity', {timestamp: lastActivity});
            //console.log(new Date(lastActivity));
        }
    });
});