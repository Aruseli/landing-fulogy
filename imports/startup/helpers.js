/**
 * Created by fulogy on 04.09.17.
 */

export function assetUrl(asset) {
    return Meteor.isProduction ? "https://fulogycdn-a.akamaihd.net/" + asset : '/' + asset;
}

export function getCookie(name) {
    const matches = Meteor.isClient ? document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    )) : null;
    return matches ? decodeURIComponent(matches[1]) : undefined;
}