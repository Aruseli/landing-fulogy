/**
 * Created by fulogy on 17.02.16.
 */
//process.env.MAIL_URL = 'smtp://director@fulogy.ru:0MxM1TAnNCP5GcCg7ftlmQ@smtp.mandrillapp.com:587';
//process.env.MAIL_URL = 'smtp://test123@fulogy.ru:testtest@mx.fulogy.ru:587';
process.env.HTTP_FORWARDED_COUNT = 1; //для определения ClientIP
process.env.MAIL_URL = "smtp://" +
    encodeURIComponent("info@fulogy.ru") + ":" +
    encodeURIComponent("4abe6bae-ecfd-40d4-8281-cd7be4f3a5c8") + '@' +
    encodeURIComponent("smtp.elasticemail.com") + ":" + 2525;