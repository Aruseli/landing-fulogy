import {check, Match} from "meteor/check";
import {Email} from "meteor/email";
import {Meteor} from "meteor/meteor";

const Leads = new Mongo.Collection('leads');

const NonEmptyString = Match.Where((x) => {
    check(x, String);
    return x.length > 0;
});

function getNewLeadNumber(){
    const lastLead = Leads.findOne({number: new RegExp('S-L/')}, {sort: {number: -1}});

    let newLeadNumber = 'S-L/000001';
    if (lastLead){
        newLeadNumber = newLeadNumber.replace(/\d+/, ('000000' + (parseInt(lastLead.number.substr(4, 6))+1)).slice(-6));
        //console.log(newNumber);
    }
    return newLeadNumber;
}

Meteor.methods({
    'leads.insert'(options) {
        check([/*options.response,*/ options.phone], [NonEmptyString]);
        this.unblock();

        if (Meteor.isProduction) { //применим API Стандартизации для Production
            const res = Meteor.call('dadata.clean', 'phone', [options.phone]);
            if (res.length) {
                options.phone = res[0].phone;
            }
        }

        if (Meteor.isProduction) {
            try {
                Email.send({
                    to: 'info@fulogy.com',
                    from: 'Интернет магазин fulogy.com <info@fulogy.com>',
                    subject: 'Заявка с промо-страницы led.fulogy.com',
                    text: 'Это письмо сформировано автоматически от лица ' + options.name + '. \r\n' +
                        'Телефон: ' + options.phone + '. \r\n',
                });
            } catch (err) {
                throw new Meteor.Error('SMTP', err.toString(), err.data);
            }
        }

        const leadInDB = Leads.findOne({phone: options.phone, 'state.index': 0});
        if (!leadInDB) { //в базе нет лида с таким статусом в статусе "Новый", значит создадим
            const now = new Date();
            const newLead = {
                number: getNewLeadNumber(),
                state: {index: 0, name: 'Новый'},
                type: 'Обратный звонок',
                phone: options.phone,
                name: options.name,
                comment: "",
                createdAt: now,
                changedAt: now,
                page: options.page,
                pixelId: options.pixelId,
            };

            newLead.history = [{
                name: 'Статус',
                value: 'Новый',
                timestamp: now,
                employeeId: "",
                field: 'state',
            }];

            try {
                Leads.insert(newLead);
            } catch (err) {
                throw new Meteor.Error('leads.insert.error', err.toString(), err.data);
            }
        }

    }
});